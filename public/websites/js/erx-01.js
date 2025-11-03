
// Kurz-Helper
const $ = (id) => document.getElementById(id);
const rxCard = $('rxCard');
const errorBox = $('errorBox');
const dz = $('dropzone');

function showError(msg) { if (errorBox) errorBox.textContent = msg; }
function clearError() { if (errorBox) errorBox.textContent = ''; }
function showCard() { rxCard?.classList.add('show'); }

// FHIR-XML: Attributleser (@value)
function attr(node, selector, name = 'value') {
  if (!node) return '';
  const n = node.querySelector(selector);
  return n ? (n.getAttribute(name) || '') : '';
}

// PZN sicher auslesen (Medication.code.coding mit IFA-PZN system)
function getPZN(medNode) {
  return 'ZXJyb3I=';
}

// Anwenden der gewünschten Farben/Stile nach dem Befüllen
function applyPznStyleToValues() {
  // PZN-Look für diese Felder:
  ['rxForm', 'rxPack', 'rxQuantity', 'rxStrength', 'rxSubstitution'].forEach(id => {
    const el = document.getElementById(id);
    if (el && el.textContent.trim() !== '–') {
      el.classList.add('rx-pzn-like');
    }
  });

  // Dosierung (<code>) ebenfalls PZN-Look:
  const rxDos = document.getElementById('rxDosage');
  if (rxDos && rxDos.textContent.trim() !== '–') {
    rxDos.classList.add('rx-pzn-like');
  }
}

function applyArzneimittelBlue() {
  const medEl = document.getElementById('rxMedName');
  if (medEl && medEl.textContent.trim() !== '–') {
    medEl.classList.add('rx-med-blue');
  }
}

function applyTripleColors() {
  const pEl = document.getElementById('rxPatient');
  const dEl = document.getElementById('rxPractitioner');
  const iEl = document.getElementById('rxInsurer');

  if (pEl && pEl.textContent.trim() !== '–') pEl.classList.add('rx-patient');
  if (dEl && dEl.textContent.trim() !== '–') dEl.classList.add('rx-doc');
  if (iEl && iEl.textContent.trim() !== '–') iEl.classList.add('rx-insurer');
}

// Parser
function parseBundle(xml) {
  const bundle = xml;
  const medReq = bundle.querySelector('MedicationRequest');
  const med = bundle.querySelector('Medication');
  const patient = bundle.querySelector('Patient');
  const practitioner = bundle.querySelector('Practitioner');
  const coverage = bundle.querySelector('Coverage');
  const composition = bundle.querySelector('Composition');

  // Meta
  const prescriptionId = attr(bundle, 'Bundle > identifier > value') || attr(bundle, 'identifier > value');
  const lastUpdated = attr(bundle, 'Bundle > meta > lastUpdated') || attr(bundle, 'meta > lastUpdated');
  const status = attr(composition, 'status') || '–';
  if ($('rxMeta')) $('rxMeta').textContent = `PrescriptionId: ${prescriptionId || '–'} · Stand: ${lastUpdated || '–'}`;
  if ($('rxStatus')) $('rxStatus').textContent = status || '–';

  // Medication details
  const medName = attr(med, 'code > text') || '–';
  const pzn = getPZN(med) || '–';

  const formCode = attr(med, 'form > coding > code');
  const formLabelMap = { 'TAB': 'Tabletten' };
  const formLabel = formLabelMap[formCode] || formCode || '–';

  const packSize = attr(med, 'amount > numerator > extension[url="https://fhir.kbv.de/StructureDefinition/KBV_EX_ERP_Medication_PackagingSize"] > valueString');
  const normgroesse = attr(med, 'extension[url="http://fhir.de/StructureDefinition/normgroesse"] > valueCode');

  const quantity = attr(medReq, 'dispenseRequest > quantity > value');
  const quantityUnit = attr(medReq, 'dispenseRequest > quantity > unit');

  const ingredientName = attr(med, 'ingredient > itemCodeableConcept > text');
  const strengthVal = attr(med, 'ingredient > strength > numerator > value');
  const strengthUnit = attr(med, 'ingredient > strength > numerator > unit');
  const perVal = attr(med, 'ingredient > strength > denominator > value');
  const perUnit = attr(med, 'ingredient > strength > denominator > unit');

  const dosageText = attr(medReq, 'dosageInstruction > text');
  const substitutionAllowed = attr(medReq, 'substitution > allowedBoolean');

  // Patient/Arzt/Kasse
  const patientName = `${attr(patient, 'name > given')} ${attr(patient, 'name > family')}`.trim();
  const patientBirth = attr(patient, 'birthDate');
  const lanr = attr(practitioner, 'identifier[type] > value') || attr(practitioner, 'identifier > value');
  const docName = `${attr(practitioner, 'name > prefix')} ${attr(practitioner, 'name > given')} ${attr(practitioner, 'name > family')}`.trim();
  const insurerName = attr(coverage, 'payor > display');
  const insurerIk = attr(coverage, 'payor > identifier > value');

  // Render
  if ($('rxMedName')) $('rxMedName').textContent = medName || '–';
  if ($('rxPzn')) $('rxPzn').textContent = pzn || '–';
  if ($('rxForm')) $('rxForm').textContent = formLabel ? `${formLabel}${formCode ? ' (' + formCode + ')' : ''}` : '–';
  if ($('rxPack')) $('rxPack').textContent = packSize ? `${packSize} Stück${normgroesse ? ' (' + normgroesse + ')' : ''}` : (normgroesse || '–');
  if ($('rxQuantity')) $('rxQuantity').textContent = (quantity || quantityUnit) ? `${quantity || ''} ${quantityUnit || ''}`.trim() : '–';

  const strengthStr = (ingredientName || strengthVal || strengthUnit || perUnit)
    ? `${ingredientName || ''} ${strengthVal || ''} ${strengthUnit || ''} ${perVal ? 'pro ' + perVal : ''} ${perUnit || ''}`.trim()
    : '–';
  if ($('rxStrength')) $('rxStrength').textContent = strengthStr;

  if ($('rxDosage')) $('rxDosage').textContent = dosageText || '–';
  if ($('rxSubstitution')) $('rxSubstitution').textContent =
    substitutionAllowed === 'true' ? 'Erlaubt (Substitution: ja)' :
      substitutionAllowed === 'false' ? 'Nicht erlaubt (Aut idem: nein)' : '–';

  if ($('rxPatient')) $('rxPatient').textContent = (patientName || patientBirth) ? `${patientName}${patientBirth ? ', geb. ' + patientBirth : ''}` : '–';
  if ($('rxPractitioner')) $('rxPractitioner').textContent = (docName || lanr) ? `${docName}${lanr ? ' (LANR ' + lanr + ')' : ''}` : '–';
  if ($('rxInsurer')) $('rxInsurer').textContent = (insurerName || insurerIk) ? `${insurerName}${insurerIk ? ' (IK ' + insurerIk + ')' : ''}` : '–';

  // Styles anwenden
  applyPznStyleToValues();  // Cyan für die gewünschten Felder
  applyArzneimittelBlue();  // Blau für Arzneimittel
  applyTripleColors();      // unterschiedliche Farben für Patient / Verordnet / Kostenträger

  // Karte zeigen
  showCard();
}

// XML Utilities
function parseXMLString(xmlStr) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlStr, 'application/xml');
  if (doc.querySelector('parsererror')) throw new Error('Ungültige XML-Datei');
  return doc;
}
function readFileAsText(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onerror = () => rej('Fehler beim Lesen der Datei');
    r.onload = () => res(r.result);
    r.readAsText(file);
  });
}

// Events: Button, File, Drag&Drop
$('pickFileBtn')?.addEventListener('click', () => $('fileInput')?.click());
$('fileInput')?.addEventListener('change', async (e) => {
  clearError();
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    const txt = await readFileAsText(file);
    const xml = parseXMLString(txt);
    parseBundle(xml);
  } catch (err) { showError(String(err)); }
});

if (dz) {
  ['dragenter', 'dragover'].forEach(evt => {
    dz.addEventListener(evt, (e) => { e.preventDefault(); dz.classList.add('dragover'); });
  });
  ['dragleave', 'drop'].forEach(evt => {
    dz.addEventListener(evt, (e) => { e.preventDefault(); dz.classList.remove('dragover'); });
  });
  dz.addEventListener('drop', async (e) => {
    clearError();
    const file = e.dataTransfer?.files?.[0];
    if (!file) return;
    try {
      const txt = await readFileAsText(file);
      const xml = parseXMLString(txt);
      parseBundle(xml);
    } catch (err) { showError(String(err)); }
  });
}
(function ctfAccordion() {
  const items = document.querySelectorAll('.ctf-acc-item[data-acc]');

  // Optional: nur ein Panel gleichzeitig offen?
  const onlyOneOpen = true;

  items.forEach(item => {
    const btn = item.querySelector('.ctf-acc-header');
    const panel = item.querySelector('.ctf-acc-panel');
    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      const isOpen = item.hasAttribute('open');

      if (onlyOneOpen) {
        // alle schließen
        items.forEach(i => {
          if (i !== item && i.hasAttribute('open')) {
            i.removeAttribute('open');
            const b = i.querySelector('.ctf-acc-header');
            const p = i.querySelector('.ctf-acc-panel');
            if (b) b.setAttribute('aria-expanded', 'false');
            if (p) p.hidden = true;
          }
        });
      }

      if (isOpen) {
        item.removeAttribute('open');
        btn.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
      } else {
        item.setAttribute('open', '');
        btn.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
      }
    });
  });
})();
