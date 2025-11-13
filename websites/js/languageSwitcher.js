/**
 * Language Switcher Module
 * Provides bilingual support (German/English) for CTF websites
 */

class LanguageSwitcher {
  constructor() {
    this.currentLanguage = localStorage.getItem('preferred-language') || 'de';
    this.translations = {};
  }

  /**
   * Initialize the language switcher
   * @param {Object} translations - Translation object with 'de' and 'en' keys
   */
  init(translations) {
    this.translations = translations;
    this.createSwitcherUI();
    this.applyLanguage(this.currentLanguage);
  }

  /**
   * Create the language switcher UI button
   */
  createSwitcherUI() {
    // Check if switcher already exists
    if (document.querySelector('.language-switcher')) {
      console.log('Language switcher already exists');
      return;
    }

    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'language-switcher';
    switcherContainer.innerHTML = `
      <button id="langSwitchBtn" class="lang-switch-btn" aria-label="Switch language">
        <span class="lang-option ${this.currentLanguage === 'de' ? 'active' : ''}" data-lang="de">DE</span>
        <span class="lang-divider">|</span>
        <span class="lang-option ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">EN</span>
      </button>
    `;

    // Insert at the beginning of body for better iframe compatibility
    if (document.body) {
      document.body.insertBefore(switcherContainer, document.body.firstChild);
      console.log('Language switcher created and inserted');
    } else {
      console.error('Cannot create language switcher: document.body not found');
    }

    // Add event listeners
    switcherContainer.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', (e) => {
        const lang = e.target.dataset.lang;
        this.switchLanguage(lang);
      });
    });
  }

  /**
   * Switch to a different language
   * @param {string} lang - Language code ('de' or 'en')
   */
  switchLanguage(lang) {
    if (lang === this.currentLanguage) return;

    this.currentLanguage = lang;
    localStorage.setItem('preferred-language', lang);

    // Update UI
    document.querySelectorAll('.lang-option').forEach(option => {
      option.classList.toggle('active', option.dataset.lang === lang);
    });

    this.applyLanguage(lang);
  }

  /**
   * Apply translations to the page
   * @param {string} lang - Language code
   */
  applyLanguage(lang) {
    const t = this.translations[lang];
    if (!t) {
      console.warn(`Translations not found for language: ${lang}`);
      return;
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Apply translations to elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      const translation = this.getNestedTranslation(t, key);

      if (translation) {
        if (element.tagName === 'INPUT' && element.placeholder !== undefined) {
          element.placeholder = translation;
        } else {
          element.innerHTML = translation;
        }
      }
    });

    // Apply translations to data-tip attributes
    document.querySelectorAll('[data-tip-i18n]').forEach(element => {
      const key = element.dataset.tipI18n;
      const translation = this.getNestedTranslation(t, key);

      if (translation) {
        element.setAttribute('data-tip', translation);
      }
    });

    // Dispatch event for custom handling
    window.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: lang, translations: t }
    }));
  }

  /**
   * Get nested translation value by dot notation key
   * @param {Object} obj - Translation object
   * @param {string} key - Dot notation key (e.g., 'nav.title')
   * @returns {string|undefined}
   */
  getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => (o || {})[k], obj);
  }

  /**
   * Get current language
   * @returns {string}
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  /**
   * Get translation for a specific key
   * @param {string} key - Translation key
   * @returns {string}
   */
  t(key) {
    return this.getNestedTranslation(this.translations[this.currentLanguage], key) || key;
  }
}

// Create global instance
window.languageSwitcher = new LanguageSwitcher();
