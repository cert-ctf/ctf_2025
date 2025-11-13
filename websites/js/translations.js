/**
 * Centralized Translation Data
 * Contains all translations for the CTF website
 */

const commonTranslations = {
  de: {
    nav: {
      subtitle: 'Die Abenteuer von KIM & TIM',
      title: 'Kapt. III – Guardians of the TI'
    },
    help: {
      close: 'Schließen',
      title: 'Verweise',
      furtherInfo: 'Weitere Infos',
      furtherInfoText: 'Hier findest du weitere Hinweise und Tools:'
    },
    common: {
      submit: 'Submit',
      solution: 'Lösung',
      yourMission: 'Deine Mission',
      missionInfo: 'Informationen zur Mission',
      time: 'Zeit',
      action: 'Aktion',
      location: 'Ort',
      room: 'Raum',
      team: 'Team'
    }
  },
  en: {
    nav: {
      subtitle: 'The Adventures of KIM & TIM',
      title: 'Chapter III – Guardians of the TI'
    },
    help: {
      close: 'Close',
      title: 'References',
      furtherInfo: 'Further Information',
      furtherInfoText: 'Here you can find additional hints and tools:'
    },
    common: {
      submit: 'Submit',
      solution: 'Solution',
      yourMission: 'Your Mission',
      missionInfo: 'Mission Information',
      time: 'Time',
      action: 'Action',
      location: 'Location',
      room: 'Room',
      team: 'Team'
    }
  }
};

// Page-specific translations
const pageTranslations = {
  welcome: {
    de: {
      header: {
        title: 'Guardians of the TI'
      },
      content: {
        intro: '<b>KIM & TI-M</b> haben es geschafft – die Drahtzieher sind identifiziert und die Angriffswelle aus <b>Kapitel II: To TI-Mfinity and Beyond</b> wurde gestoppt. Doch die Jagd ist noch nicht vorbei: Die <b>TI‑Ranger</b> bündeln ihre Kräfte an einer zentralen Anlaufstelle und steigen direkt in die <b>Telematikinfrastruktur (TI)</b> ein.',
        description: 'In unterschiedlichen Sub‑Welten erlebt ihr, wie die <b>TI‑Produkte</b> funktionieren und sicher zusammenspielen. Sichert gemeinsam mit den <b>TI‑Rangern</b> die Datenströme am <b>TI‑Gateway</b>, um die Angriffsfläche zu begrenzen und weitere Attacken der Drahtzieher zu vereiteln.'
      },
      info: {
        text: 'Die Sub‑Welten sind frei begehbar und können während des Events jederzeit besucht werden. Sammelt in jeder Welt die Codes, um am Ende die Datenströme zu bündeln.'
      }
    },
    en: {
      header: {
        title: 'Guardians of the TI'
      },
      content: {
        intro: '<b>KIM & TI-M</b> have succeeded – the masterminds have been identified and the wave of attacks from <b>Chapter II: To TI-Mfinity and Beyond</b> has been stopped. But the hunt isn\'t over yet: The <b>TI Rangers</b> are joining forces at a central hub and diving directly into the <b>Telematics Infrastructure (TI)</b>.',
        description: 'In different sub-worlds, you will experience how the <b>TI products</b> work and interact securely. Work together with the <b>TI Rangers</b> to secure the data streams at the <b>TI Gateway</b> to limit the attack surface and thwart further attacks by the masterminds.'
      },
      info: {
        text: 'The sub-worlds can be freely explored and visited at any time during the event. Collect the codes in each world to bundle the data streams at the end.'
      }
    }
  },

  agenda: {
    de: {
      header: {
        title: 'Agenda'
      },
      table: {
        headers: ['Zeit', 'Aktion', 'Ort'],
        rows: [
          ['<span class="dot green"></span>11:30&nbsp;Uhr', 'Doors Open', 'Virtuelle Welt'],
          ['<span class="dot blue"></span>12:00&nbsp;Uhr', 'Begrüßung', 'Bühnenbereich'],
          ['<span class="dot green"></span>12:15&nbsp;Uhr', 'Start der Generalprobe', 'Team‑Portal &amp; CTFd'],
          ['<span class="dot blue"></span>15:15&nbsp;Uhr', 'Ende des Contests', 'Bühnenbereich'],
          ['<span class="dot green"></span>15:15–15:30&nbsp;Uhr', 'Siegerehrung &amp; Feedback', 'Bühnenbereich']
        ]
      }
    },
    en: {
      header: {
        title: 'Agenda'
      },
      table: {
        headers: ['Time', 'Action', 'Location'],
        rows: [
          ['<span class="dot green"></span>11:30&nbsp;AM', 'Doors Open', 'Virtual World'],
          ['<span class="dot blue"></span>12:00&nbsp;PM', 'Welcome', 'Stage Area'],
          ['<span class="dot green"></span>12:15&nbsp;PM', 'Start of Dress Rehearsal', 'Team Portal &amp; CTFd'],
          ['<span class="dot blue"></span>3:15&nbsp;PM', 'End of Contest', 'Stage Area'],
          ['<span class="dot green"></span>3:15–3:30&nbsp;PM', 'Award Ceremony &amp; Feedback', 'Stage Area']
        ]
      }
    }
  },

  teams: {
    de: {
      header: {
        title: 'Teams'
      }
    },
    en: {
      header: {
        title: 'Teams'
      }
    }
  },

  welcome_epa: {
    de: {
      header: {
        title: 'ePA für alle (Elektronische Patientenakte)'
      },
      content: {
        welcome: '👥 Willkommen beim Fachteam ePA für alle',
        intro: 'Die elektronische Patientenakte (ePA) ist deine persönliche, sichere Gesundheitsakte. Sie bündelt Befunde, Medikationspläne sowie Dokumente – und du steuerst, wer was sehen darf.',
        description: 'In der Sub‑Welt erklären wir dir zuerst die ePA ganz konkret: wie Authentifizierung, Rechtevergabe, Dokumentenformate und Protokollierung zusammenspielen. Danach löst du produkt­spezifische Aufgaben rund um JWT‑Freigaben, Dokumentenmanagement, Auditlogs und feingranulare Zugriffssteuerung. Teleporter bereit? Los geht\'s.',
        bullet1: 'Über den Teleporter gelangst du in die Aufgabenwelt rund um ePA-Zugriffe, Dokumente und Protokolle.',
        bullet2: 'Dort erwartet dich als TI‑Ranger eine interaktive Story mit praxisnahen Aufgaben.',
        storyTitle: '🧩 Story Line',
        story1: 'Alf steht kurz vor einem Kliniktermin und möchte, dass die Behandelnden vorbereitet sind – aber nur so viel wie nötig. Du begleitest ihn dabei, seine elektronische Patientenakte (ePA) sicher freizugeben, damit die Klinik vorab einen Überblick bekommt. Vor Ort geht es um schnelle Orientierung: Was wurde wann verordnet, welche Medikamente sind aktuell relevant, und wie lässt sich das sauber in der ePA nachvollziehen, ohne unnötig viel preiszugeben?',
        story2: 'Im Verlauf tauchen neue Befunde auf, die für spätere Behandlungen wichtig sein können. Du hilfst, diese korrekt in der ePA zu verankern, prüfst nach dem Klinikbesuch, wer wirklich Zugriff hatte, und unterstützt Alf dabei, seine Privatsphäre fein zu justieren. Ziel ist, dass er souverän entscheidet, wer seine sensiblen Informationen sieht – und wer nicht. Alles Weitere entdeckst du Schritt für Schritt in der Aufgabenwelt.'
      },
      info: {
        text: 'Lerne, wie du Alf\'s ePA verantwortungsvoll freigibst, Medikationsinformationen zielgerichtet nutzt, Befunde korrekt einfügst, Zugriffe im Audit‑Log prüfst und Zugriffsrechte feingranular anpasst – damit die richtigen Personen das Richtige zur richtigen Zeit sehen.'
      },
      help: {
        text: 'Verwende folgende Verweise, um weitere Informationen über ePA zu erhalten:'
      }
    },
    en: {
      header: {
        title: 'ePA for All (Electronic Patient Record)'
      },
      content: {
        welcome: '👥 Welcome to the ePA for All Specialist Team',
        intro: 'The electronic patient record (ePA) is your personal, secure health record. It consolidates findings, medication plans, and documents – and you control who can see what.',
        description: 'In the sub-world, we first explain the ePA in concrete terms: how authentication, permission management, document formats, and logging work together. Then you solve product-specific tasks around JWT releases, document management, audit logs, and fine-grained access control. Teleporter ready? Let\'s go.',
        bullet1: 'Via the teleporter, you enter the task world around ePA access, documents, and logs.',
        bullet2: 'There, as a TI Ranger, you will encounter an interactive story with practical tasks.',
        storyTitle: '🧩 Story Line',
        story1: 'Alf is about to have a clinic appointment and wants the healthcare providers to be prepared – but only as much as necessary. You accompany him in securely releasing his electronic patient record (ePA) so the clinic can get an overview in advance. On-site, it\'s about quick orientation: What was prescribed when, which medications are currently relevant, and how can this be cleanly tracked in the ePA without revealing too much unnecessarily?',
        story2: 'As time goes on, new findings emerge that may be important for later treatments. You help anchor these correctly in the ePA, check after the clinic visit who really had access, and support Alf in fine-tuning his privacy. The goal is for him to confidently decide who sees his sensitive information – and who doesn\'t. You\'ll discover everything else step by step in the task world.'
      },
      info: {
        text: 'Learn how to responsibly release Alf\'s ePA, use medication information in a targeted manner, correctly insert findings, check access in the audit log, and fine-tune access rights – so the right people see the right things at the right time.'
      },
      help: {
        text: 'Use the following references to get more information about ePA:'
      }
    }
  },

  welcome_kim: {
    de: {
      header: {
        title: 'Kommunikation im Medizinwesen (KIM)'
      },
      content: {
        welcome: '👥 Willkommen beim Fachteam KIM (Kommunikation im Medizinwesen)',
        intro: 'KIM ist der sichere E‑Mail‑Fachdienst der TI. Er ermöglicht den standardisierten, Ende‑zu‑Ende geschützten Austausch zwischen Praxen, Kliniken und weiteren Leistungserbringern – direkt aus dem PVS und mit geprüften Identitäten.',
        description: 'In der Sub‑Welt erklären wir dir zuerst die KIM‑Bausteine, danach löst du produktspezifische Aufgaben zu Validierung, Entschlüsselung, Dienstkennungen und interoperablem Datenaustausch. Teleporter bereit? Los geht\'s.',
        bullet1: 'Über den Teleporter gelangst du in die Aufgabenwelt rund um KIM‑Nachrichten, Identitäten und TI‑Services.',
        bullet2: 'Dort erwartet dich als TI‑Ranger eine interaktive Story mit praxisnahen Aufgaben.',
        storyTitle: '🧩 Story Line',
        story1: 'Die Praxis Dr. Müller (Orthopädie) kommuniziert bislang klassisch per E‑Mail – doch Unsicherheiten bleiben: Wie sicher ist das wirklich, und sind sensible Gesundheitsdaten ausreichend geschützt? Gemeinsam mit den TI‑Rangern stellt die Praxis auf den KIM‑Fachdienst um. Der Effekt: nachweislich sichere Kommunikation mit geprüften Identitäten, ein nahtloser Austausch von eArztbrief, eAU, eRezept‑Zuweisungen und mehr – direkt aus dem PVS, nachvollziehbar und standardkonform.',
        story2: 'Du begleitest die Umstellung im Alltag: Adressen prüfen, Nachrichten korrekt adressieren, Identitäten verifizieren und den Versand inklusive Anhängen sauber abwickeln. Schritt für Schritt lernst du, worauf es in typischen Praxissituationen ankommt – ohne Spoiler, aber mit klaren Leitplanken.'
      },
      info: {
        text: 'Lerne, wie du mit KIM sicher und praxisnah arbeitest: von Beispiel‑KIM‑Adressen aus der Spezifikation über das Entschlüsseln unvollständig konfigurierter Nachrichten bis zum korrekten Ausfüllen von Dienstkennungen für eRezept‑Zuweisungen. Außerdem: Laborbefunde finden, versteckte Anhänge erkennen und per QR‑Code eine eEB für die Praxis bereitstellen – schnell, standardkonform und alltagstauglich.'
      },
      help: {
        text: 'Verwende folgende Verweise, um weitere Informationen über KIM zu erhalten:'
      }
    },
    en: {
      header: {
        title: 'Communication in Healthcare (KIM)'
      },
      content: {
        welcome: '👥 Welcome to the KIM Specialist Team (Communication in Healthcare)',
        intro: 'KIM is the secure email service of the TI. It enables standardized, end-to-end encrypted exchange between medical practices, hospitals, and other healthcare providers – directly from the practice management system and with verified identities.',
        description: 'In the sub-world, we first explain the KIM building blocks, then you solve product-specific tasks on validation, decryption, service identifiers, and interoperable data exchange. Teleporter ready? Let\'s go.',
        bullet1: 'Via the teleporter, you enter the task world around KIM messages, identities, and TI services.',
        bullet2: 'There, as a TI Ranger, you will encounter an interactive story with practical tasks.',
        storyTitle: '🧩 Story Line',
        story1: 'Dr. Müller\'s orthopedic practice has traditionally communicated via email – but uncertainties remain: How secure is this really, and are sensitive health data adequately protected? Together with the TI Rangers, the practice switches to the KIM service. The result: demonstrably secure communication with verified identities, seamless exchange of medical letters, sick notes, e-prescription referrals, and more – directly from the practice management system, traceable and standards-compliant.',
        story2: 'You accompany the transition in everyday practice: checking addresses, correctly addressing messages, verifying identities, and cleanly handling dispatch including attachments. Step by step, you learn what matters in typical practice situations – without spoilers, but with clear guidelines.'
      },
      info: {
        text: 'Learn how to work securely and practically with KIM: from example KIM addresses from the specification to decrypting incompletely configured messages and correctly filling out service identifiers for e-prescription referrals. Also: find lab results, recognize hidden attachments, and provide an electronic referral letter via QR code for the practice – quickly, standards-compliant, and practical.'
      },
      help: {
        text: 'Use the following references to get more information about KIM:'
      }
    }
  },

  welcome_tim: {
    de: {
      header: {
        title: 'TI-Messenger (TI-M)'
      },
      content: {
        welcome: '👥 Willkommen beim Fachteam TI‑Messenger (TI‑M)',
        intro: 'Der TI‑Messenger ist der sichere Kurznachrichtendienst im Gesundheitswesen. Er verbindet Praxis, Klinik und weitere Behandler in föderierten Räumen – datenschutzkonform, nachvollziehbar und alltagstauglich.',
        description: 'In der Sub‑Welt erklären wir dir zuerst die TI‑M‑Bausteine: Rollen und Sichtbarkeiten, föderierte Räume, Identitätsprüfung, Nachrichtenlebenszyklus (Senden, Löschen, Wiederherstellen), sowie Ausfall- und Reihenfolge‑Handling. Danach löst du produktspezifische Aufgaben zu Datenabfluss‑Erkennung, Altnachrichten‑Suche und sicheren Kontaktwegen. Teleporter bereit? Los geht\'s.',
        bullet1: 'Über den Teleporter gelangst du in die Aufgabenwelt rund um TI‑M Kommunikation, Identitäten und Sicherheit.',
        bullet2: 'Dort erwartet dich als TI‑Ranger eine interaktive Story mit praxisnahen Aufgaben.',
        storyTitle: '🧩 Story Line',
        story1: 'Die Sprechstundenhilfe im MVZ nutzt bereits den zentralen Messenger-Dienst der Einrichtung – doch im Alltag tauchen Fragen auf: Was darf ich darüber versenden? Wer sieht meine Nachrichten? Wie stelle ich sicher, dass Patientendaten geschützt bleiben?',
        story2: 'Erlebe, wie TI-M in kniffligen Alltagsszenarien funktioniert: von versehentlich gesendeten Nachrichten und Löschfunktionen über Nachrichtenreihenfolge bei Ausfällen bis zur sicheren Identitätsprüfung in föderierten Räumen. Außerdem: alte Inhalte auffinden, Datenabflüsse erkennen und den Chatbot austricksen, um den diensthabenden Arzt zuverlässig zu erreichen.'
      },
      info: {
        text: 'Erlebe, wie TIM in kniffligen Alltagsszenarien funktioniert: von versehentlich gesendeten Nachrichten und Löschfunktionen über Nachrichtenreihenfolge bei Ausfällen bis zur sicheren Identitätsprüfung in föderierten Räumen. Außerdem: alte Inhalte auffinden, Datenabflüsse erkennen und den Chatbot austricksen, um den diensthabenden Arzt zuverlässig zu erreichen.'
      },
      help: {
        text: 'Verwende folgende Verweise, um weitere Informationen über TI-M zu erhalten:'
      }
    },
    en: {
      header: {
        title: 'TI-Messenger (TI-M)'
      },
      content: {
        welcome: '👥 Welcome to the TI Messenger Specialist Team (TI-M)',
        intro: 'The TI Messenger is the secure instant messaging service in healthcare. It connects practices, hospitals, and other healthcare providers in federated spaces – privacy-compliant, traceable, and practical.',
        description: 'In the sub-world, we first explain the TI-M building blocks: roles and visibility, federated rooms, identity verification, message lifecycle (sending, deleting, recovering), as well as failure and sequence handling. Then you solve product-specific tasks on data leakage detection, old message search, and secure contact paths. Teleporter ready? Let\'s go.',
        bullet1: 'Via the teleporter, you enter the task world around TI-M communication, identities, and security.',
        bullet2: 'There, as a TI Ranger, you will encounter an interactive story with practical tasks.',
        storyTitle: '🧩 Story Line',
        story1: 'The receptionist at the medical care center already uses the facility\'s central messenger service – but everyday questions arise: What am I allowed to send via this? Who sees my messages? How do I ensure that patient data remains protected?',
        story2: 'Experience how TI-M works in tricky everyday scenarios: from accidentally sent messages and delete functions to message ordering during failures and secure identity verification in federated rooms. Also: finding old content, detecting data leakage, and outsmarting the chatbot to reliably reach the on-call physician.'
      },
      info: {
        text: 'Experience how TIM works in tricky everyday scenarios: from accidentally sent messages and delete functions to message ordering during failures and secure identity verification in federated rooms. Also: finding old content, detecting data leakage, and outsmarting the chatbot to reliably reach the on-call physician.'
      },
      help: {
        text: 'Use the following references to get more information about TI-M:'
      }
    }
  },

  welcome_erx: {
    de: {
      header: {
        title: 'E-Rezept (eRX)'
      },
      content: {
        welcome: '👥 Willkommen beim Fachteam eRX',
        intro: 'Das eRezept (eRX) ist die moderne, digitale Verordnung für Medikamente. Es verbindet Praxis, Patient:in und Apotheke sicher über die TI – Ende-zu-Ende geschützt, nachvollziehbar und papierlos.',
        description: 'In der Sub‑Welt erklären wir dir zuerst die eRX‑Bausteine: Authentifizierung, Berechtigungsprüfung, Token/Task‑Modelle, DatenMatrix/QR‑Code, und die Einlösungsschnittstellen. Danach löst du produktspezifische Challenges - Teleporter bereit? Los geht\'s.',
        bullet1: 'Über den Teleporter gelangst du in die Aufgabenwelt rund um eRezept‑Verordnungen, QR‑Codes und Einlösungsprozesse.',
        bullet2: 'Dort erwartet dich als TI‑Ranger eine interaktive Story mit praxisnahen Aufgaben.',
        storyTitle: '🧩 Story Line',
        story1: 'Du bist im Urlaub, brauchst dringend dein Medikament und kontaktierst deine Praxis über den TI‑Messenger. Kurz Bedarf schildern, Identität geprüft – die Verordnung kommt als eRezept sicher in deiner eRezept‑App an. In der Ferienapotheke zeigst du das eRezept per App‑Code oder direkt digital vor. Die Apotheke ruft die Verordnung ab, prüft sie und gibt dir das Medikament aus: ohne Papier, ohne Umweg, mit klarer Dokumentation.',
        story2: 'Entlang des Urlaubs‑Szenarios lernst du, wie aus Task.Id und AccessCode ein gültiger eRezept‑Token entsteht, wie daraus eine normgerechte DatenMatrix generiert wird und wie die Apotheke die Einlösung bestätigt. Keine Sorge: Wir spoilern nicht – du entdeckst die Schritte genau dann, wenn du sie brauchst.',
        story3: 'Mit TI-Messenger und eRezept wird aus einer Urlaubspanik ein Routineprozess: sichere Kommunikation, schnelle Ausstellung, nahtlose Einlösung – genau dann, wenn du es brauchst.'
      },
      info: {
        text: 'Erfahre, wie du im eRezept (eRX) relevante Patientendaten findest, Verordnungen korrekt validierst und Berechtigungen prüfst – inklusive Erkennen möglicher Manipulationen. Zusätzlich lernst du, wie QR‑Code/DatenMatrix funktionieren und sicher genutzt werden, wie der passende FlowType gewählt wird und wie die Einlösung technisch bestätigt wird.'
      },
      help: {
        text: 'Verwende folgende Verweise, um weitere Informationen über e-Rezept zu erhalten:'
      }
    },
    en: {
      header: {
        title: 'E-Prescription (eRX)'
      },
      content: {
        welcome: '👥 Welcome to the eRX Specialist Team',
        intro: 'The e-prescription (eRX) is the modern, digital prescription for medications. It securely connects practice, patient, and pharmacy via the TI – end-to-end protected, traceable, and paperless.',
        description: 'In the sub-world, we first explain the eRX building blocks: authentication, authorization checks, token/task models, data matrix/QR code, and redemption interfaces. Then you solve product-specific challenges - Teleporter ready? Let\'s go.',
        bullet1: 'Via the teleporter, you enter the task world around e-prescription orders, QR codes, and redemption processes.',
        bullet2: 'There, as a TI Ranger, you will encounter an interactive story with practical tasks.',
        storyTitle: '🧩 Story Line',
        story1: 'You\'re on vacation, urgently need your medication, and contact your practice via TI Messenger. Briefly describe your need, identity verified – the prescription arrives securely in your e-prescription app as an eRX. At the vacation pharmacy, you show the e-prescription via app code or directly digitally. The pharmacy retrieves the prescription, checks it, and dispenses your medication: no paper, no detours, with clear documentation.',
        story2: 'Along the vacation scenario, you learn how a valid e-prescription token is created from Task.Id and AccessCode, how a standards-compliant data matrix is generated from it, and how the pharmacy confirms redemption. Don\'t worry: We won\'t spoil anything – you\'ll discover the steps exactly when you need them.',
        story3: 'With TI Messenger and e-prescription, a vacation panic becomes a routine process: secure communication, quick issuance, seamless redemption – exactly when you need it.'
      },
      info: {
        text: 'Learn how to find relevant patient data in the e-prescription (eRX), correctly validate prescriptions, and check authorizations – including detecting possible manipulations. Additionally, you learn how QR code/data matrix work and are used securely, how the appropriate FlowType is selected, and how redemption is technically confirmed.'
      },
      help: {
        text: 'Use the following references to get more information about e-prescription:'
      }
    }
  },

  welcome_cdc: {
    de: {
      header: {
        title: 'Cyber Defence Center (CDC)'
      },
      content: {
        descriptionTitle: 'Kurzbeschreibung',
        description: 'Das Cyber Defense Center (CDC) der gematik sind wir eine zentrale Drehscheibe für Cybersecurity in der digitalen Gesundheitsversorgung. Unser Auftrag: die Telematikinfrastruktur (TI) und die Systeme unserer Partner zuverlässig schützen, Angriffe früh erkennen und wirksam abwehren – rund um die Uhr.',
        missionTitle: 'Unsere Mission',
        mission1: 'Schutz der TI und angrenzender Systeme vor Cyberbedrohungen',
        mission2: 'Schnelle, koordinierte Reaktion auf Sicherheitsvorfälle',
        mission3: 'Transparente Zusammenarbeit mit Betreibern der TI, der Security Community sowie Behörden',
        interviewTitle: 'Interview',
        interview1: 'Das CDC versteht sich als operative Schaltstelle für die Sicherheit der Telematikinfrastruktur (TI). Das Team vereint Blue Teaming-, Red Teaming- und SecOps Aspekte unter einem Dach, arbeitet datengetrieben mit hohem Automatisierungsgrad und setzt auf klar definierte, standardisierte Prozesse. Ziel ist es, Bedrohungen früh zu erkennen, Incidents koordiniert zu bewältigen und die Resilienz der TI messbar zu erhöhen.',
        interview2: 'Durch kontinuierliches Security Monitoring, Threat Detection, Vulnerability Management sowie gezielte Penetrationstests werden Anomalien, Bedrohungen und Schwachstellen frühzeitig erkannt. Diese Prozesse werden in Zusammenarbeit mit den Anbietern der TI  kontinuierlich weiter ausgebaut.',
        interview3: 'Die Zusammenarbeit und der Austausch mit den Sicherheitsorganisationen unserer Anbieter aber auch externen Partnern wie CERT-Verbünden, BSI und BfDI und der Security Community ist essenziell, um in einer Welt mit stetig zunehmenden Bedrohungen, den Überblick zu behalten und sich kontinuierlich gemeinsam weiterzuentwickeln.',
        interview4: 'Sicherheit ist Teamsport und unser Anspruch ist es, die richtigen Informationen zur richtigen Zeit an die richtigen Stellen zu bringen.',
        approachTitle: 'Unser Arbeitsansatz',
        approach: 'Wir bringen Menschen, Prozesse und Technologien zu einem schlagkräftigen Sicherheitsbetrieb zusammen. In interdisziplinären Teams, die auch Mitarbeitende aus anderen Bereichen der gematik mit einbeziehen, arbeiten wir eng zusammen, nutzen Detection- sowie Response-Tools, folgen etablierten Best Practices und regulatorischen Vorgaben und stimmen uns eng mit Partnern, Herstellern und Institutionen ab. So schaffen wir Klarheit, schnelle Reaktionsfähigkeit und eine verlässlich geschützte Telematikinfrastruktur.',
        cooperationTitle: 'Vertrauen und Kooperation',
        cooperation: 'Als Mitglied des Deutschen CERT-Verbunds sowie des Europäischen CERT Verbundes Trusted Introducer arbeiten wir eng mit nationalen und internationalen Computer Emergency Response Teams zusammen, um Bedrohungsinformationen auszutauschen, Vorfälle koordiniert zu behandeln und Best Practices in der Incident Response zu etablieren.',
        emptyCaption: ''
      },
      team: {
        sebastianLabinski: 'Sebastian Labinski<br>Abteilungsleiter CDC'
      }
    },
    en: {
      header: {
        title: 'Cyber Defence Center (CDC)'
      },
      content: {
        descriptionTitle: 'Brief Description',
        description: 'The Cyber Defense Center (CDC) of gematik is a central hub for cybersecurity in digital healthcare. Our mission: reliably protect the telematics infrastructure (TI) and our partners\' systems, detect attacks early, and defend against them effectively – around the clock.',
        missionTitle: 'Our Mission',
        mission1: 'Protect the TI and adjacent systems from cyber threats',
        mission2: 'Fast, coordinated response to security incidents',
        mission3: 'Transparent collaboration with TI operators, the security community, and authorities',
        interviewTitle: 'Interview',
        interview1: 'The CDC sees itself as the operational control center for the security of the telematics infrastructure (TI). The team combines Blue Teaming, Red Teaming, and SecOps aspects under one roof, works data-driven with a high degree of automation, and relies on clearly defined, standardized processes. The goal is to detect threats early, manage incidents in a coordinated manner, and measurably increase the resilience of the TI.',
        interview2: 'Through continuous security monitoring, threat detection, vulnerability management, and targeted penetration tests, anomalies, threats, and vulnerabilities are detected early. These processes are continuously expanded in collaboration with TI providers.',
        interview3: 'Collaboration and exchange with the security organizations of our providers, as well as external partners such as CERT networks, BSI, BfDI, and the security community, are essential to maintaining an overview in a world with ever-increasing threats and continuously developing together.',
        interview4: 'Security is a team sport, and our aspiration is to get the right information to the right people at the right time.',
        approachTitle: 'Our Working Approach',
        approach: 'We bring together people, processes, and technologies into a powerful security operation. In interdisciplinary teams that also include employees from other areas of gematik, we work closely together, use detection and response tools, follow established best practices and regulatory requirements, and coordinate closely with partners, manufacturers, and institutions. This way, we create clarity, rapid response capability, and a reliably protected telematics infrastructure.',
        cooperationTitle: 'Trust and Cooperation',
        cooperation: 'As a member of the German CERT network and the European CERT network Trusted Introducer, we work closely with national and international Computer Emergency Response Teams to exchange threat information, handle incidents in a coordinated manner, and establish best practices in incident response.',
        emptyCaption: ''
      },
      team: {
        sebastianLabinski: 'Sebastian Labinski<br>Head of CDC Department'
      }
    }
  },

  welcome_tigateway: {
    de: {
      header: {
        title: 'TI-Gateway (das große Finale)'
      },
      content: {
        whatIsTitle: 'Was ist das TI‑Gateway?',
        whatIsDescription1: 'Das TI-Gateway ist eine neue, moderne und softwarebasierte Lösung, die den Zugang zur deutschen Telematikinfrastruktur (TI) vereinfacht, indem der herkömmliche Hardware-Konnektor vor Ort entfällt. Stattdessen wird der Anschluss über einen Highspeed-Konnektor in einem gesicherten, zertifizierten Rechenzentrum des TI-Gateway-Anbieters realisiert.',
        whatIsDescription2: 'Dies entlastet Leistungserbringer von Wartungsarbeiten und erhöht gleichzeitig die Sicherheit und Verfügbarkeit der TI-Anwendungen wie dem E-Rezept, ePA, KIM oder TI-M.',
        videoPrompt: 'Schau dir das Video an:',
        videoLink: 'Neuer Zugang zur TI: So funktioniert das TI-Gateway!',
        featuresTitle: 'Merkmale',
        feature1: '<strong>Vertrauensanker:</strong> Sichere Authentifizierung und Zertifikatsprüfung',
        feature2: '<strong>Transport:</strong> Geschützte, standardisierte Kommunikation in die TI',
        feature3: '<strong>Routing:</strong> Weiterleitung zu Fachanwendungen und Fachdiensten',
        feature4: '<strong>Protokollierung & Compliance:</strong> Nachvollziehbare, regelkonforme Kommunikation',
        missionTitle: 'Deine Mission',
        missionGoal: '<b>Ziel:</b> Verbinde alle Anwendungen mit dem TI‑Gateway und sichere den Zugang.',
        missionStep1: 'Meistere die Subwelten von <strong>ePA</strong>, <strong>eRX</strong>, <strong>TI‑M</strong> und <strong>KIM</strong>. Löse dort alle Aufgaben, um die jeweiligen <strong>finalen Codes</strong> zu erhalten.',
        missionStep2: 'Aktiviere anschließend die vier Zords – <strong>eRX</strong>, <strong>ePA</strong>, <strong>KIM</strong> und <strong>TIM</strong> – mit genau diesen finalen Codes.',
        missionStep3: 'Jeder korrekte Code lädt den entsprechenden Zord mit Energie.',
        missionStep4: 'Sind alle vier Zords aktiv, verriegelt das zentrale Schloss und das TI‑Gateway ist verbunden.',
        missionStep5: 'Am Ende erhältet ihr dir die Flag zur Freischaltung der StoryLine Aufgabe in <b>CTFd</b>.',
        hintsTitle: 'Hinweise',
        hint1: 'Die finalen Codes erhältst du nur, wenn du die jeweiligen Subwelten vollständig abschließt.',
        hint2: 'Du kannst jeden Zord einzeln aktivieren; falsche Eingaben werden sofort angezeigt.',
        hint3: 'Erst wenn alle vier Zords „Korrekt" melden, ist die Verbindung vollständig.',
        hint4: 'Mit <strong>MEGAZORD PRÜFEN</strong> startest du die finale Sequenz.',
        hint5: 'Teamwork der Anwendungen + präzise Eingaben = IT\'S MORPHIN TIME!',
        consoleTitle: 'Morphin Console (IT\'S MORPHIN TIME!)'
      }
    },
    en: {
      header: {
        title: 'TI Gateway (The Grand Finale)'
      },
      content: {
        whatIsTitle: 'What is the TI Gateway?',
        whatIsDescription1: 'The TI Gateway is a new, modern, and software-based solution that simplifies access to the German Telematics Infrastructure (TI) by eliminating the traditional on-site hardware connector. Instead, the connection is realized via a high-speed connector in a secure, certified data center of the TI Gateway provider.',
        whatIsDescription2: 'This relieves healthcare providers of maintenance work and simultaneously increases the security and availability of TI applications such as e-prescription, ePA, KIM, or TI-M.',
        videoPrompt: 'Watch the video:',
        videoLink: 'New Access to the TI: How the TI Gateway Works!',
        featuresTitle: 'Features',
        feature1: '<strong>Trust Anchor:</strong> Secure authentication and certificate verification',
        feature2: '<strong>Transport:</strong> Protected, standardized communication to the TI',
        feature3: '<strong>Routing:</strong> Forwarding to specialized applications and services',
        feature4: '<strong>Logging & Compliance:</strong> Traceable, compliant communication',
        missionTitle: 'Your Mission',
        missionGoal: '<b>Goal:</b> Connect all applications to the TI Gateway and secure the access.',
        missionStep1: 'Master the sub-worlds of <strong>ePA</strong>, <strong>eRX</strong>, <strong>TI-M</strong>, and <strong>KIM</strong>. Solve all tasks there to obtain the respective <strong>final codes</strong>.',
        missionStep2: 'Then activate the four Zords – <strong>eRX</strong>, <strong>ePA</strong>, <strong>KIM</strong>, and <strong>TIM</strong> – with exactly these final codes.',
        missionStep3: 'Each correct code charges the corresponding Zord with energy.',
        missionStep4: 'Once all four Zords are active, the central lock closes and the TI Gateway is connected.',
        missionStep5: 'At the end, you will receive the flag to unlock the StoryLine task in <b>CTFd</b>.',
        hintsTitle: 'Hints',
        hint1: 'You only receive the final codes when you completely finish the respective sub-worlds.',
        hint2: 'You can activate each Zord individually; incorrect entries will be displayed immediately.',
        hint3: 'Only when all four Zords report "Correct" is the connection complete.',
        hint4: 'With <strong>CHECK MEGAZORD</strong> you start the final sequence.',
        hint5: 'Application teamwork + precise inputs = IT\'S MORPHIN TIME!',
        consoleTitle: 'Morphin Console (IT\'S MORPHIN TIME!)'
      }
    }
  },

  welcome_soc: {
    de: {
      header: {
        title: 'Security Operations Center (SOC)'
      },
      content: {
        descriptionTitle: 'Kurzbeschreibung',
        description: 'Das Security Operation Center (SOC) der gematik ist die zentrale Einheit für Erkennung, Bewertung und Reaktion auf Sicherheitsvorfälle. Wir überwachen Systeme rund um die Uhr, identifizieren Bedrohungen frühzeitig und koordinieren Gegenmaßnahmen – mit einem klaren Ziel: die Vertraulichkeit, Integrität und Verfügbarkeit unserer IT sicherzustellen und die Reaktionsfähigkeit der Organisation zu stärken.',
        interviewTitle: 'Interview',
        interview1: 'Im SOC arbeiten wir täglich an der ruhigen, strukturierten Abwehrlinie unserer Organisation: rund um die Uhr überwachen wir Systeme, triagieren Alarme und reagieren auf Sicherheitsvorfälle. Wir sichten Meldungen im SIEM, prüfen ihre Relevanz und priorisieren sorgfältig, bevor wir – wenn es erforderlich ist – koordinierte Maßnahmen auslösen. Dazu gehören forensische Analysen, gezielte Containment‑Schritte und ein klares Reporting an die Verantwortlichen.',
        interview2: 'Ein gutes SOC lebt von breiten Skills, klaren Prozessen und gelassenen Händen. Jede und jeder bringt eigene Schwerpunkte mit – von Detection Engineering über Forensik bis zu Threat Intelligence – und doch halten wir einen gemeinsamen Wissensstandard, damit Übergaben reibungslos funktionieren und Entscheidungen belastbar bleiben. Regelmäßige Übungen mit praxisnahen Szenarien gehören für uns dazu: Sie schärfen unsere Mustererkennung, helfen unter Zeitdruck ruhig zu bleiben und beschleunigen den Wissenstransfer im Team. Das macht uns im echten Incident spürbar schneller und präziser.',
        interview3: 'Qualität und Transparenz sichern wir mit strukturierter Triage, dokumentierten Playbooks und klaren Kommunikationswegen. Jeder Vorfall hat bei uns einen nachvollziehbaren Lebenszyklus – von der Erkennung über die Analyse und die eingeleiteten Maßnahmen bis zur Nachbetrachtung mit Lessons Learned. So verbessern wir kontinuierlich unsere Use‑Cases und stärken die Resilienz der gesamten Organisation.',
        processTitle: 'Prozessbeschreibung',
        process1: 'Ein SOC ist die operative Schaltstelle der Informationssicherheit. Hier laufen sicherheitsrelevante Daten und Ereignisse zusammen – von Echtzeit‑Telemetrie bis Forensik. Das SOC überwacht Systeme kontinuierlich, erkennt Anomalien, bewertet Risiken und leitet abgestimmte Gegenmaßnahmen ein.',
        processItem1: 'Security Monitoring und Alarm‑Triage',
        processItem2: 'Bedrohungserkennung mit SIEM und Detection‑Use‑Cases',
        processItem3: 'Incident Response, Containment und Recovery',
        processItem4: 'Forensik, Threat Intelligence und Schwachstellen‑Koordination',
        processItem5: 'Reporting, Lessons Learned und laufende Verbesserung der Use‑Cases',
        process2: 'Das SOC hält den Betrieb sicher, reagiert schnell und sorgt dafür, dass Sicherheitsereignisse strukturiert und wirksam behandelt werden – menschlich, transparent und mit Fokus auf das Wesentliche.'
      },
      team: {
        ismailSubay: 'Ismail Subay<br>Incident Responder (SOC)'
      }
    },
    en: {
      header: {
        title: 'Security Operations Center (SOC)'
      },
      content: {
        descriptionTitle: 'Brief Description',
        description: 'The Security Operations Center (SOC) of gematik is the central unit for detecting, assessing, and responding to security incidents. We monitor systems around the clock, identify threats early, and coordinate countermeasures – with a clear goal: to ensure the confidentiality, integrity, and availability of our IT and strengthen the organization\'s response capability.',
        interviewTitle: 'Interview',
        interview1: 'In the SOC, we work daily on the calm, structured defense line of our organization: around the clock, we monitor systems, triage alerts, and respond to security incidents. We review messages in the SIEM, check their relevance, and prioritize carefully before – when necessary – triggering coordinated measures. These include forensic analyses, targeted containment steps, and clear reporting to those responsible.',
        interview2: 'A good SOC thrives on broad skills, clear processes, and steady hands. Everyone brings their own focus areas – from Detection Engineering to Forensics to Threat Intelligence – yet we maintain a common knowledge standard so that handoffs work smoothly and decisions remain robust. Regular exercises with practical scenarios are part of our routine: they sharpen our pattern recognition, help us stay calm under pressure, and accelerate knowledge transfer within the team. This makes us noticeably faster and more precise in real incidents.',
        interview3: 'We ensure quality and transparency with structured triage, documented playbooks, and clear communication channels. Every incident has a traceable lifecycle with us – from detection through analysis and initiated measures to post-incident review with lessons learned. This way, we continuously improve our use cases and strengthen the resilience of the entire organization.',
        processTitle: 'Process Description',
        process1: 'A SOC is the operational control center for information security. Security-relevant data and events converge here – from real-time telemetry to forensics. The SOC continuously monitors systems, detects anomalies, assesses risks, and initiates coordinated countermeasures.',
        processItem1: 'Security Monitoring and Alert Triage',
        processItem2: 'Threat Detection with SIEM and Detection Use Cases',
        processItem3: 'Incident Response, Containment, and Recovery',
        processItem4: 'Forensics, Threat Intelligence, and Vulnerability Coordination',
        processItem5: 'Reporting, Lessons Learned, and Continuous Improvement of Use Cases',
        process2: 'The SOC keeps operations secure, responds quickly, and ensures that security events are handled in a structured and effective manner – human, transparent, and focused on what matters.'
      },
      team: {
        ismailSubay: 'Ismail Subay<br>Incident Responder (SOC)'
      }
    }
  },

  welcome_firstday: {
    de: {
      header: {
        title: 'Wilkommen bei der gematik'
      },
      content: {
        descriptionTitle: 'Kurzbeschreibung',
        description: 'Willkommen zu eurem ersten Tag als TI-Ranger im Cyber Defense Center der gematik. Wir freuen uns sehr, euch begrüßen zu dürfen.',
        whoWeAreTitle: 'Wer wir sind',
        whoWeAre: 'In der gematik arbeiten die Fachteams mit ihrem umfangreichen Knowhow über E-Health und Informationssicherheit tagtäglich daran, die Infrastruktur für das digitale Gesundheitswesen weiterzuentwickeln. Dafür stehen sie mit mit allen Akteuren, Stakeholdern und Partnern im Gesundheitswesen  im engen Austausch. Die gematik treibt dabei in zentraler Position zum Wohle aller die Digitalisierung weiter voran und gestaltet diese mit.',
        interview1: 'Sicherheit in der digitalen Medizin beruht auf weit mehr als der reinen Verschlüsselung von Informationen. Sie entsteht durch das harmonische Zusammenspiel zahlreicher Faktoren, die gemeinsam das Fundament für vertrauenswürdige und zukunftsfähige Lösungen bilden.',
        interview2: 'Transparenz, Zusammenarbeit und Interoperabilität sind dabei ebenso entscheidend wie ein gemeinsames Verständnis und das koordinierte Zusammenwirken interdisziplinärer Teams.',
        interview3: 'Nur durch dieses Zusammenspiel entsteht ein ganzheitlicher Sicherheitsansatz, der den Schutz sensibler Daten gewährleistet und zugleich Innovation im Gesundheitswesen fördert.',
        nextStepsTitle: 'Wie geht es weiter?',
        nextSteps: 'Ihr erhaltet hiermit eure Ausweise, mit denen ihr euch größtenteils frei im Gebäude bewegen könnt.',
        floorPlanTitle: 'Raumplan',
        floorPlan1: 'Unsere TI_CTF-Kolleginnen und -Kollegen, welche die Mission Control auf der rechten Seite aufgestellt haben freuen sich über euren Besuch. Im Atrium finden aktuell spannende Vorträge rund um die gematik und die Telematikinfrastruktur statt.',
        floorPlan2: 'Verschafft euch am besten zunächst einen Überblick auf unserem Gebäudeplan:',
        zonesTitle: 'Zonen & Laufwege',
        zonesIntro: 'Orientiert euch an den farbcodierten Laufwegen. So gelangt ihr schnell und ohne Umwege durch das Gebäude zu den richtigen Stationen:',
        zone1: 'Info Bereiche',
        zone2Main: 'Leitlinie zu den Aufgaben',
        zone2Sub1: 'Kommunikation im Medizinwesen (KIM) (2.OG)',
        zone2Sub2: 'TI‑Messenger (TI-M) (2.OG)',
        zone2Sub3: 'ePA für alle (3.OG)',
        zone2Sub4: 'e‑Rezept (eRX) (3.OG)',
        zone3: 'Leitlinie zum TI‑Gateway (4.OG) (Finale)',
        elevatorsTitle: 'Fahrstühle & Teleporter',
        elevators: 'In den Fachbereichen sowie in den Sub‑Welten stehen euch Teleporter zur Verfügung, mit denen ihr spontan zwischen den Stationen wechseln könnt. Für den Wechsel zwischen den Stockwerken empfehlen wir die Nutzung der Fahrstühle.',
        clickToExpand: '<br><i>Klicke auf das Bild zur erweiterten Ansicht</i>',
        emptyCaption: ''
      },
      team: {
        katrinLuedke: 'Katrin Lüdke<br>Bereichsassistenz Sicherheit'
      }
    },
    en: {
      header: {
        title: 'Welcome to gematik'
      },
      content: {
        descriptionTitle: 'Brief Description',
        description: 'Welcome to your first day as a TI Ranger in gematik\'s Cyber Defense Center. We are very pleased to welcome you.',
        whoWeAreTitle: 'Who We Are',
        whoWeAre: 'At gematik, the specialist teams with their extensive expertise in e-health and information security work daily to further develop the infrastructure for digital healthcare. To this end, they maintain close exchange with all actors, stakeholders, and partners in the healthcare sector. gematik drives digitalization forward in a central position for the benefit of all and actively shapes it.',
        interview1: 'Security in digital medicine is based on far more than just encrypting information. It emerges through the harmonious interplay of numerous factors that together form the foundation for trustworthy and future-proof solutions.',
        interview2: 'Transparency, collaboration, and interoperability are just as crucial as a shared understanding and the coordinated interaction of interdisciplinary teams.',
        interview3: 'Only through this interplay does a holistic security approach emerge that ensures the protection of sensitive data while simultaneously promoting innovation in healthcare.',
        nextStepsTitle: 'What\'s Next?',
        nextSteps: 'You hereby receive your badges, with which you can move largely freely throughout the building.',
        floorPlanTitle: 'Floor Plan',
        floorPlan1: 'Our TI_CTF colleagues, who have set up the Mission Control on the right side, look forward to your visit. Exciting presentations about gematik and the telematics infrastructure are currently taking place in the atrium.',
        floorPlan2: 'It\'s best to first get an overview of our building plan:',
        zonesTitle: 'Zones & Pathways',
        zonesIntro: 'Orient yourself using the color-coded pathways. This way you can quickly and directly reach the right stations throughout the building:',
        zone1: 'Information Areas',
        zone2Main: 'Guideline to the Tasks',
        zone2Sub1: 'Communication in Healthcare (KIM) (2nd Floor)',
        zone2Sub2: 'TI Messenger (TI-M) (2nd Floor)',
        zone2Sub3: 'ePA for All (3rd Floor)',
        zone2Sub4: 'E-Prescription (eRX) (3rd Floor)',
        zone3: 'Guideline to TI Gateway (4th Floor) (Finale)',
        elevatorsTitle: 'Elevators & Teleporters',
        elevators: 'Teleporters are available in the specialist departments as well as in the sub-worlds, allowing you to switch spontaneously between stations. We recommend using the elevators to move between floors.',
        clickToExpand: '<br><i>Click on the image for an enlarged view</i>',
        emptyCaption: ''
      },
      team: {
        katrinLuedke: 'Katrin Lüdke<br>Security Department Assistant'
      }
    }
  },

  welcome_servicehealtherx: {
    de: {
      header: {
        title: 'service health erx GmbH'
      },
      content: {
        descriptionTitle: 'Kurzbeschreibung',
        description1: 'Die service health erx GmbH ist ein spezialisierter Beratungs- und Technologiepartner im Bereich Health-Tech mit Sitz in Berlin. Unser interdisziplinäres Team aus Software Entwickler:innen, IT-Architekt:innen und Zulassungsexpert:innen entwickelt maßgeschneiderte Lösungen für Akteure des deutschen Gesundheitswesens, wie Primärsystemanbieter, Krankenkassen und Kliniken.',
        description2: 'Dabei verfolgen wir den Ansatz alle eigenen Produkte Open Source zu entwickeln. Diese Prinzipien von Zusammenarbeit, Transparenz und Innovation durch Wissenstransfer leiten auch unsere Arbeit als Team. Mit tiefgehender Telematikinfrastruktur-Expertise und praxisnaher Produktentwicklung gestalten wir gemeinsam die Zukunft des digitalen Gesundheitswesens.',
        interviewTitle: 'Interview',
        interview1: 'Die service health GmbH beteiligt sich in diesem Jahr zum zweiten Mal am TI Capture The Flag (CTF) der gematik GmbH. Wie im letzten Jahr haben wir gemeinsam mit der gematik technische Aufgaben und Challenges entwickelt, die die Teilnehmenden vor spannende sicherheitsrelevante Rätsel rund um die Telematikinfrastruktur (TI) stellen.',
        interview2: 'Im Sinne unseres Open-Source-Ansatzes, liegt uns als TI-Expert:innen der Austausch mit der Community besonders am Herzen. Wir freuen uns also gemeinsam zu lernen, Wissen zu teilen und die TI noch sicherer zu machen.',
        moreInfoTitle: 'Weitere Informationen',
        card1Title: 'Telematikinfrastruktur',
        card2Title: 'FHIR API',
        card3Title: 'Telemedizin',
        moreLink: 'MEHR'
      },
      team: {
        manuelDavid: 'Manuel Blechschmidt<br>David Matthaei'
      }
    },
    en: {
      header: {
        title: 'service health erx GmbH'
      },
      content: {
        descriptionTitle: 'Brief Description',
        description1: 'service health erx GmbH is a specialized consulting and technology partner in the health-tech sector based in Berlin. Our interdisciplinary team of software developers, IT architects, and approval experts develops tailored solutions for actors in the German healthcare system, such as primary system providers, health insurance companies, and hospitals.',
        description2: 'In doing so, we pursue the approach of developing all our own products as open source. These principles of collaboration, transparency, and innovation through knowledge transfer also guide our work as a team. With deep telematics infrastructure expertise and practical product development, we are jointly shaping the future of digital healthcare.',
        interviewTitle: 'Interview',
        interview1: 'service health GmbH is participating for the second time this year in the TI Capture The Flag (CTF) of gematik GmbH. As in the previous year, we have jointly developed technical tasks and challenges with gematik that present participants with exciting security-relevant puzzles around the telematics infrastructure (TI).',
        interview2: 'In the spirit of our open-source approach, exchange with the community is particularly important to us as TI experts. We look forward to learning together, sharing knowledge, and making the TI even more secure.',
        moreInfoTitle: 'Further Information',
        card1Title: 'Telematics Infrastructure',
        card2Title: 'FHIR API',
        card3Title: 'Telemedicine',
        moreLink: 'MORE'
      },
      team: {
        manuelDavid: 'Manuel Blechschmidt<br>David Matthaei'
      }
    }
  },

  wa_kim_00: {
    de: {
      header: {
        title: 'KIM – Kommunikation im Medizinwesen'
      },
      content: {
        whatIs: 'Was ist das?',
        description: '<strong>KIM</strong> ist das sichere E-Mail-System für Praxen, Apotheken &amp; Co. in Deutschland. Endlich Schluss mit Faxen und unsicheren Mails: KIM sorgt dafür, dass Arztbriefe, Befunde oder Abrechnungen digital, verschlüsselt und garantiert nur zwischen echten, geprüften Teilnehmern der Telematikinfrastruktur (TI) verschickt werden.',
        technicalBasis: 'Technische Basis',
        technicalPoint1: '<b>KIM</b> basiert auf den etablierten E-Mail Standards POP3 und SMTP',
        technicalPoint2: 'Kontakte werden im zentralen Verzeichnisdienst vorgehalten',
        technicalPoint3: 'Lässt sich mit E-Mail-Programme wie Thunderbird oder Outlook verwenden',
        addressStructure: 'Aufbau von KIM-Adressen',
        addressUserPart: '<strong>Benutzerteil:</strong> Identifiziert eindeutig den Nutzer oder die Organisation (z. B. Praxisname, Institutionskennzeichen).',
        addressDomainPart: '<strong>Domänenteil:</strong> Gibt an, dass es sich um eine KIM-Adresse handelt, üblicherweise <code>kim.telematik</code> oder eine Subdomain davon (z. B. <code>anbieter.kim.telematik</code>).',
        sourceGematikKIM: '<i>Quelle: <a href="https://fachportal.gematik.de/anwendungen/kommunikation-im-medizinwesen" target="_blank" rel="noopener">Gematik Fachportal – Kommunikation im Medizinwesen</a></i>',
        moreInfo: 'Weitere Informationen'
      },
      help: {
        close: 'Schließen',
        title: 'Weitere Infos',
        text: 'Auf der folgenden Seite findest du einen Hinweis dazu:'
      }
    },
    en: {
      header: {
        title: 'KIM – Communication in Healthcare'
      },
      content: {
        whatIs: 'What is it?',
        description: '<strong>KIM</strong> is the secure email system for medical practices, pharmacies, and more in Germany. Finally, an end to faxes and insecure emails: KIM ensures that medical letters, findings, or billing information are sent digitally, encrypted, and guaranteed only between genuine, verified participants in the Telematics Infrastructure (TI).',
        technicalBasis: 'Technical Basis',
        technicalPoint1: '<b>KIM</b> is based on the established email standards POP3 and SMTP',
        technicalPoint2: 'Contacts are stored in the central directory service',
        technicalPoint3: 'Can be used with email programs like Thunderbird or Outlook',
        addressStructure: 'Structure of KIM Addresses',
        addressUserPart: '<strong>User part:</strong> Uniquely identifies the user or organization (e.g., practice name, institution identifier).',
        addressDomainPart: '<strong>Domain part:</strong> Indicates that this is a KIM address, typically <code>kim.telematik</code> or a subdomain thereof (e.g., <code>provider.kim.telematik</code>).',
        sourceGematikKIM: '<i>Source: <a href="https://fachportal.gematik.de/anwendungen/kommunikation-im-medizinwesen" target="_blank" rel="noopener">Gematik Specialist Portal – Communication in Healthcare</a></i>',
        moreInfo: 'Further Information'
      },
      help: {
        close: 'Close',
        title: 'Further Information',
        text: 'On the following page you will find a hint about this:'
      }
    }
  },

  wa_kim_01: {
    de: {
      header: {
        title: 'Kommunikation im Medizinwesen (Aufgabe 1)'
      },
      content: {
        taskTitle: 'Fachportal-Scout – Wo steht das eigentlich?',
        taskDescription: 'Frau Dr. Müller möchte ihre Praxis an KIM anbinden, dafür muss sie eine Adresse festlegen.<br />Sie möchte jetzt gerne wissen, wie eine solche Adresse überhaupt aussieht.'
      },
      mission: {
        title: '🛰️ Deine Mission',
        description: 'Kannst du ihr das Beispiel aus den Spezifikationen zeigen?'
      },
      info: {
        title: '🗒️ Informationen zur Mission',
        specTitle: 'Spezifikation durch die gematik',
        specPoint1: 'Die gematik spezifiziert die Funktionsweise jedes Produktes.',
        specPoint2: 'Die Spezifikationen können im <b><a href="https://gemspec.gematik.de/docs/gemSpec/" target="_blank">gemspec Portal</a></b> der gematik eingesehen werden.',
        specPoint3: 'Die Spezifikation für KIM findest du unter der Bezeichnung:<ul><li><strong>FD_KOMLE</strong> (Fachdienst Kommunikation der Leistungserbringer)</li></ul>',
        text: 'Gesucht wird die Beispieladresse aus der Spezifikation des Produktes.'
      },
      form: {
        solutionLabel: '🎯 Lösung',
        placeholder: 'z. B. name@domain.kim.telematik'
      },
      help: {
        close: 'Schließen',
        title: 'Weitere Infos',
        text: 'Hier findest du weitere Hinweise und Tools:',
        link1: 'Funktionsweise von KIM',
        link2: 'Spezifikation Fachdienst KOM-LE'
      }
    },
    en: {
      header: {
        title: 'Communication in Healthcare (Task 1)'
      },
      content: {
        taskTitle: 'Specialist Portal Scout – Where is that actually documented?',
        taskDescription: 'Dr. Müller wants to connect her practice to KIM and needs to determine an address.<br />She would now like to know what such an address looks like.'
      },
      mission: {
        title: '🛰️ Your Mission',
        description: 'Can you show her the example from the specifications?'
      },
      info: {
        title: '🗒️ Mission Information',
        specTitle: 'Specification by gematik',
        specPoint1: 'gematik specifies the functionality of each product.',
        specPoint2: 'The specifications can be viewed in the <b><a href="https://gemspec.gematik.de/docs/gemSpec/" target="_blank">gemspec portal</a></b> from gematik.',
        specPoint3: 'The specification for KIM can be found under the designation:<ul><li><strong>FD_KOMLE</strong> (Professional Service for Healthcare Provider Communication)</li></ul>',
        text: 'The example address from the product specification is sought.'
      },
      form: {
        solutionLabel: '🎯 Solution',
        placeholder: 'e.g., name@domain.kim.telematik'
      },
      help: {
        close: 'Close',
        title: 'Further Information',
        text: 'Here you can find additional hints and tools:',
        link1: 'How KIM Works',
        link2: 'Specification Professional Service KOM-LE'
      }
    }
  },

  wa_kim_02: {
    de: {
      header: {
        title: 'Kommunikation im Medizinwesen (Aufgabe 2)'
      },
      content: {
        taskTitle: 'KIM-Inspector – Was wurde mir da geschickt?',
        taskDescription1: 'Nachdem ihre Praxis erfolgreich an KIM angebunden wurde, hat Frau Dr. Müller die erste Nachricht von einem Kollegen erhalten.\n\nOffenbar lief bei der Einrichtung etwas schief: Die Nachricht wirkt fehlerhaft und besteht aus unverständlichem Text.',
        taskDescription2: 'Leider wartet sie schon auf die dringende Nachricht, von ihrem Kollegen...'
      },
      mission: {
        title: '🛰️ Deine Mission',
        description: 'Kannst du Frau Dr. Müller dabei helfen herauszufinden, was der Arzt ihr geschickt hat? Bitte entnimm aus der Nachricht das neue Medikament, auf das sie sich vermutlich bezieht.'
      },
      info: {
        title: '🗒️ Informationen zur Mission',
        formatTitle: 'KIM Nachrichten Format',
        formatDescription: 'KIM-Nachrichten sind im MIME-Format aufgebaut. MIME (Multipurpose Internet Mail Extensions) ist ein Standard, der es ermöglicht, verschiedene Arten von Inhalten in E-Mails zu übertragen, wie z.B. Text, Bilder, Audio und andere Dateitypen.',
        mimeTitle: 'Mehrteiliger MIME‑Anhang',
        mimeBoundary: 'Der <b>Anhang</b> ist durch die Grenze <code class="mi-code">--------------MIME_boundary</code> in verschiedene Abschnitte getrennt.',
        sectionContains: 'Jeder Abschnitt enthält:',
        sectionItem1: 'Kopfzeilen, z. B. <code class="mi-k">Content-Type</code>, <code class="mi-k">Content-Transfer-Encoding</code>, <code class="mi-k">Content-Disposition</code>',
        sectionItem2: 'eine Leerzeile (trennt Header von Inhalt)',
        sectionItem3: 'der eigentliche Inhalt',
        encodingNote: 'Die <i>Codierung</i> (z. B. <code class="mi-code">base64</code>) definiert die Darstellung des Inhalts.',
        text: 'Gesucht wird das verschriebene Medikament aus dem E-Mail Anhang: <a href="./files/excitingMedication.txt" target="_blank" rel="noopener noreferrer">excitingMedication.txt</a>'
      },
      form: {
        solutionLabel: '🎯 Lösung',
        placeholder: 'Ibuprofen'
      },
      help: {
        close: 'Schließen',
        title: 'Weitere Infos',
        text: 'Hier findest du weitere Hinweise und Tools:',
        link1: 'Funktionsweise von KIM',
        link2: 'Wikipedia MIME',
        link3: 'Cyberchef'
      }
    },
    en: {
      header: {
        title: 'Communication in Healthcare (Task 2)'
      },
      content: {
        taskTitle: 'KIM-Inspector – What was sent to me?',
        taskDescription1: 'After her practice was successfully connected to KIM, Dr. Müller received the first message from a colleague.\n\nApparently, something went wrong during setup: The message appears faulty and consists of incomprehensible text.',
        taskDescription2: 'Unfortunately, she is already waiting for the urgent message from her colleague...'
      },
      mission: {
        title: '🛰️ Your Mission',
        description: 'Can you help Dr. Müller figure out what the doctor sent her? Please extract the new medication from the message that is presumably referenced.'
      },
      info: {
        title: '🗒️ Mission Information',
        formatTitle: 'KIM Message Format',
        formatDescription: 'KIM messages are structured in MIME format. MIME (Multipurpose Internet Mail Extensions) is a standard that enables the transmission of various types of content in emails, such as text, images, audio, and other file types.',
        mimeTitle: 'Multi-part MIME Attachment',
        mimeBoundary: 'The <b>attachment</b> is separated into different sections by the boundary <code class="mi-code">--------------MIME_boundary</code>.',
        sectionContains: 'Each section contains:',
        sectionItem1: 'Headers, e.g., <code class="mi-k">Content-Type</code>, <code class="mi-k">Content-Transfer-Encoding</code>, <code class="mi-k">Content-Disposition</code>',
        sectionItem2: 'a blank line (separates header from content)',
        sectionItem3: 'the actual content',
        encodingNote: 'The <i>encoding</i> (e.g., <code class="mi-code">base64</code>) defines the representation of the content.',
        text: 'The prescribed medication from the email attachment is sought: <a href="./files/excitingMedication.txt" target="_blank" rel="noopener noreferrer">excitingMedication.txt</a>'
      },
      form: {
        solutionLabel: '🎯 Solution',
        placeholder: 'Ibuprofen'
      },
      help: {
        close: 'Close',
        title: 'Further Information',
        text: 'Here you can find additional hints and tools:',
        link1: 'How KIM Works',
        link2: 'Wikipedia MIME',
        link3: 'Cyberchef'
      }
    }
  },

  wa_kim_03: {
    de: {
      header: {
        title: 'Kommunikation im Medizinwesen (Aufgabe 3)'
      },
      content: {
        taskTitle: 'Dienstkennungs Bingo',
        taskDescription: 'Frau Dr. Müller möchte ein E-Rezept zu einer Apotheke verschicken, doch die Nachricht geht einfach nicht durch! <br />Sie erhält eine Meldung, dass die Dienstkennung nicht korrekt sei. Tatsächlich sieht die Nachricht etwas seltsam aus, schau im Fachportal nach und prüfe, woran es liegt.'
      },
      mission: {
        title: '🛰️ Deine Mission',
        description: 'Finde heraus, welche Dienstkennung sie hätte eintragen müssen?'
      },
      info: {
        title: '🗒️ Informationen zur Mission',
        serviceIdTitle: 'Dienstkennungen',
        serviceIdDescription: 'Dienstkennungen helfen dem empfangenden System dabei, KIM Nachrichten richtig zuzuordnen und automatisch weiterzuverarbeiten.',
        serviceIdHeader: 'Die Definition geschieht im Header: <code class="mi-code">X-KIM-Dienstkennung</code>',
        serviceIdHint: 'Hast du dazu nicht schon einmal im Fachportal der gematik etwas gelesen?',
        text: 'Gesucht wird die richtige Dienstkennung für ein <b>E-Rezept</b>. <br />Anhang: <a href="./files/KIM.wa.3/zuweisung.txt" target="_blank" rel="noopener noreferrer">zuweisung.txt</a>'
      },
      form: {
        solutionLabel: '🎯 Lösung',
        placeholder: 'Dienstkennung'
      },
      help: {
        close: 'Schließen',
        title: 'Weitere Infos',
        text: 'Hier findest du weitere Hinweise und Tools:'
      }
    },
    en: {
      header: {
        title: 'Communication in Healthcare (Task 3)'
      },
      content: {
        taskTitle: 'Service Identifier Bingo',
        taskDescription: 'Dr. Müller wants to send an e-prescription to a pharmacy, but the message simply won\'t go through! <br />She receives a notification that the service identifier is incorrect. Indeed, the message looks somewhat strange, check the specialist portal and find out what\'s wrong.'
      },
      mission: {
        title: '🛰️ Your Mission',
        description: 'Find out which service identifier she should have entered?'
      },
      info: {
        title: '🗒️ Mission Information',
        serviceIdTitle: 'Service Identifiers',
        serviceIdDescription: 'Service identifiers help the receiving system correctly assign KIM messages and process them automatically.',
        serviceIdHeader: 'The definition is done in the header: <code class="mi-code">X-KIM-Dienstkennung</code>',
        serviceIdHint: 'Haven\'t you already read something about this in the gematik specialist portal?',
        text: 'The correct service identifier for an <b>e-prescription</b> is sought. <br />Attachment: <a href="./files/KIM.wa.3/zuweisung.txt" target="_blank" rel="noopener noreferrer">zuweisung.txt</a>'
      },
      form: {
        solutionLabel: '🎯 Solution',
        placeholder: 'Service identifier'
      },
      help: {
        close: 'Close',
        title: 'Further Information',
        text: 'Here you can find additional hints and tools:'
      }
    }
  },

  wa_kim_04: {
    de: {
      header: {
        title: 'Kommunikation im Medizinwesen (Aufgabe 4)'
      },
      content: {
        taskTitle: 'KAS Chaos?',
        taskDescription1: 'Frau Dr. Müller hat über KIM die Laborergebnisse eines Patienten direkt vom Labor erhalten.',
        taskDescription2: 'Sie findet die Laborergebnisse aber nicht im Anhang...'
      },
      mission: {
        title: '🛰️ Deine Mission',
        description: 'Kannst du ihr helfen die Datei, sowie den dringend benötigten <code class="mi-code">Hepatitis B Antigen</code> <b>Feldwert</b> für den Patienten zu finden?'
      },
      info: {
        title: '🗒️ Informationen zur Mission',
        fieldIdTitle: 'Feldkennungen',
        fieldIdDescription: 'Laborergebnisse folgen stets diesem Aufbau:',
        fieldStructure: '<code class="mi-k" style="color:purple">Feldlänge</code><code class="mi-k" style="color:rgb(245, 35, 7)">Feldkennung (FK)</code><code class="mi-k">Feldwert</code>',
        fieldIdHint: 'Falls du die passende FK für einen Wert nicht mehr weißt, findest du hier eine kurze Übersicht:',
        fieldDocLink: 'Dokumentation der Felder eines Laborauftrags',
        text: 'Gesucht wird der Hepatitis B Antigen Wert. <br>Anhang: <a href="./files/KIM.wa.4/ldt.eml" target="_blank" rel="noopener noreferrer">ldt.eml</a>'
      },
      form: {
        solutionLabel: '🎯 Lösung',
        placeholder: '134,5'
      },
      help: {
        close: 'Schließen',
        title: 'Weitere Infos',
        text: 'Hier findest du weitere Hinweise und Tools:',
        link1: 'Funktionsweise von KIM',
        link2: 'Dienstkennung KIM'
      }
    },
    en: {
      header: {
        title: 'Communication in Healthcare (Task 4)'
      },
      content: {
        taskTitle: 'KAS Chaos?',
        taskDescription1: 'Dr. Müller received a patient\'s laboratory results directly from the lab via KIM.',
        taskDescription2: 'However, she cannot find the laboratory results in the attachment...'
      },
      mission: {
        title: '🛰️ Your Mission',
        description: 'Can you help her find the file and the urgently needed <code class="mi-code">Hepatitis B Antigen</code> <b>field value</b> for the patient?'
      },
      info: {
        title: '🗒️ Mission Information',
        fieldIdTitle: 'Field Identifiers',
        fieldIdDescription: 'Laboratory results always follow this structure:',
        fieldStructure: '<code class="mi-k" style="color:purple">Field Length</code><code class="mi-k" style="color:rgb(245, 35, 7)">Field Identifier (FI)</code><code class="mi-k">Field Value</code>',
        fieldIdHint: 'If you no longer remember the appropriate FI for a value, you can find a brief overview here:',
        fieldDocLink: 'Documentation of Laboratory Order Fields',
        text: 'The Hepatitis B Antigen value is sought. <br>Attachment: <a href="./files/KIM.wa.4/ldt.eml" target="_blank" rel="noopener noreferrer">ldt.eml</a>'
      },
      form: {
        solutionLabel: '🎯 Solution',
        placeholder: '134.5'
      },
      help: {
        close: 'Close',
        title: 'Further Information',
        text: 'Here you can find additional hints and tools:',
        link1: 'How KIM Works',
        link2: 'KIM Service Identifier'
      }
    }
  },

  wa_kim_05: {
    de: {
      header: {
        title: 'Kommunikation im Medizinwesen (Aufgabe 5)'
      },
      content: {
        taskTitle: 'eEB, dat hätt\' man jern!',
        taskDescription1: '"Immer wieder is et dat selbe", sagt Frau Dr. Müller, "Schon widda ham se ihre Karte verjessen!".',
        taskDescription2: 'Kurz bevor Frau Dr. Müller sich dazu entscheidet, Imkerin zu werden und die Praxis zu verlassen, erzählt ihr jemand von der elektronischen Ersatzbescheinigung (eEB) und dass der Patient sicherlich eine bei seiner Krankenkasse anfordern kann.',
        taskDescription3: 'Wie kann diese jetzt aber an die Praxis geschickt werden?'
      },
      mission: {
        title: '🛰️ Deine Mission',
        description: 'Erstelle den Praxis QR-Code, damit der Patient seine eEB über KIM schicken kann, und rette ihren Tag!'
      },
      info: {
        title: '🗒️ Informationen zur Mission',
        emailInfo: 'Frau Dr. Müller hat sich inzwischen eine neue KIM Mail besorgt:',
        eebTitle: 'elektronische Ersatzbescheinigung (eEB)',
        eebDescription1: 'Gesetzlich Versicherte können der Praxis auf diesem Weg eine elektronische Ersatzbescheinigung (eEB) zukommen lassen. Diese dient dem Versicherungsnachweis, wenn beim Praxisbesuch ausnahmsweise keine elektronische Gesundheitskarte vorgelegt werden kann.',
        eebDescription2: 'Dafür muss ein QR-Code erstellt werden der die KIM-Adresse der Praxis enthält. Dann kann über die App der jeweiligen Krankenkasse die eEB an die Praxis geschickt werden.',
        text: 'Erstelle eine Data-Matrix und lade es hoch.'
      },
      form: {
        solutionLabel: '🎯 Lösung (Upload Solution File)'
      },
      help: {
        close: 'Schließen',
        title: 'Weitere Infos',
        text: 'Hier findest du weitere Hinweise und Tools:'
      }
    },
    en: {
      header: {
        title: 'Communication in Healthcare (Task 5)'
      },
      content: {
        taskTitle: 'eEB, we really need that!',
        taskDescription1: '"It\'s always the same", says Dr. Müller, "Once again they forgot their card!".',
        taskDescription2: 'Just before Dr. Müller decides to become a beekeeper and leave the practice, someone tells her about the electronic substitute certificate (eEB) and that the patient can certainly request one from their health insurance.',
        taskDescription3: 'But how can this now be sent to the practice?'
      },
      mission: {
        title: '🛰️ Your Mission',
        description: 'Create the practice QR code so the patient can send their eEB via KIM and save the day!'
      },
      info: {
        title: '🗒️ Mission Information',
        emailInfo: 'Dr. Müller has now obtained a new KIM email:',
        eebTitle: 'Electronic Substitute Certificate (eEB)',
        eebDescription1: 'Statutory insured persons can provide the practice with an electronic substitute certificate (eEB) through this method. This serves as proof of insurance when an electronic health card cannot be presented during a practice visit.',
        eebDescription2: 'A QR code must be created that contains the practice\'s KIM address. Then the eEB can be sent to the practice via the respective health insurance app.',
        text: 'Create a data matrix and upload it.'
      },
      form: {
        solutionLabel: '🎯 Solution (Upload Solution File)'
      },
      help: {
        close: 'Close',
        title: 'Further Information',
        text: 'Here you can find additional hints and tools:'
      }
    }
  },

  wa_tigateway_00: {
    de: {
      header: {
        title: 'TI-Gateway (das große Finale)'
      },
      content: {
        whatIsTitle: 'Was ist das TI‑Gateway?',
        whatIsDescription1: 'Das TI-Gateway ist eine neue, moderne und softwarebasierte Lösung, die den Zugang zur deutschen Telematikinfrastruktur (TI) vereinfacht, indem der herkömmliche Hardware-Konnektor vor Ort entfällt. Stattdessen wird der Anschluss über einen Highspeed-Konnektor in einem gesicherten, zertifizierten Rechenzentrum des TI-Gateway-Anbieters realisiert.',
        whatIsDescription2: 'Dies entlastet Leistungserbringer von Wartungsarbeiten und erhöht gleichzeitig die Sicherheit und Verfügbarkeit der TI-Anwendungen wie dem E-Rezept, ePA, KIM oder TI-M.',
        videoPrompt: 'Schau dir das Video an:',
        videoLink: 'Neuer Zugang zur TI: So funktioniert das TI-Gateway!',
        featuresTitle: 'Merkmale',
        feature1: '<strong>Vertrauensanker:</strong> Sichere Authentifizierung und Zertifikatsprüfung',
        feature2: '<strong>Transport:</strong> Geschützte, standardisierte Kommunikation in die TI',
        feature3: '<strong>Routing:</strong> Weiterleitung zu Fachanwendungen und Fachdiensten',
        feature4: '<strong>Protokollierung & Compliance:</strong> Nachvollziehbare, regelkonforme Kommunikation',
        missionTitle: 'Deine Mission',
        missionGoal: '<b>Ziel:</b> Verbinde alle Anwendungen mit dem TI‑Gateway und sichere den Zugang.',
        missionStep1: 'Meistere die Subwelten von <strong>ePA</strong>, <strong>eRX</strong>, <strong>TI‑M</strong> und <strong>KIM</strong>. Löse dort alle Aufgaben, um die jeweiligen <strong>finalen Codes</strong> zu erhalten.',
        missionStep2: 'Aktiviere anschließend die vier Zords – <strong>eRX</strong>, <strong>ePA</strong>, <strong>KIM</strong> und <strong>TIM</strong> – mit genau diesen finalen Codes.',
        missionStep3: 'Jeder korrekte Code lädt den entsprechenden Zord mit Energie.',
        missionStep4: 'Sind alle vier Zords aktiv, verriegelt das zentrale Schloss und das TI‑Gateway ist verbunden.',
        missionStep5: 'Am Ende erhältet ihr dir die Flag zur Freischaltung der StoryLine Aufgabe in <b>CTFd</b>.',
        hintsTitle: 'Hinweise',
        hint1: 'Die finalen Codes erhältst du nur, wenn du die jeweiligen Subwelten vollständig abschließt.',
        hint2: 'Du kannst jeden Zord einzeln aktivieren; falsche Eingaben werden sofort angezeigt.',
        hint3: 'Erst wenn alle vier Zords „Korrekt" melden, ist die Verbindung vollständig.',
        hint4: 'Mit <strong>MEGAZORD PRÜFEN</strong> startest du die finale Sequenz.',
        hint5: 'Teamwork der Anwendungen + präzise Eingaben = IT\'S MORPHIN TIME!',
        tasksOverview: 'Aufgaben Übersicht',
        consoleTitle: 'Morphin Console (IT\'S MORPHIN TIME!)',
        tokenCopy: 'Token kopieren'
      }
    },
    en: {
      header: {
        title: 'TI Gateway (The Grand Finale)'
      },
      content: {
        whatIsTitle: 'What is the TI Gateway?',
        whatIsDescription1: 'The TI Gateway is a new, modern, and software-based solution that simplifies access to the German Telematics Infrastructure (TI) by eliminating the traditional on-site hardware connector. Instead, the connection is realized via a high-speed connector in a secure, certified data center of the TI Gateway provider.',
        whatIsDescription2: 'This relieves healthcare providers of maintenance work and simultaneously increases the security and availability of TI applications such as e-prescription, ePA, KIM, or TI-M.',
        videoPrompt: 'Watch the video:',
        videoLink: 'New Access to the TI: How the TI Gateway Works!',
        featuresTitle: 'Features',
        feature1: '<strong>Trust Anchor:</strong> Secure authentication and certificate verification',
        feature2: '<strong>Transport:</strong> Protected, standardized communication to the TI',
        feature3: '<strong>Routing:</strong> Forwarding to specialized applications and services',
        feature4: '<strong>Logging & Compliance:</strong> Traceable, compliant communication',
        missionTitle: 'Your Mission',
        missionGoal: '<b>Goal:</b> Connect all applications to the TI Gateway and secure the access.',
        missionStep1: 'Master the sub-worlds of <strong>ePA</strong>, <strong>eRX</strong>, <strong>TI-M</strong>, and <strong>KIM</strong>. Solve all tasks there to obtain the respective <strong>final codes</strong>.',
        missionStep2: 'Then activate the four Zords – <strong>eRX</strong>, <strong>ePA</strong>, <strong>KIM</strong>, and <strong>TIM</strong> – with exactly these final codes.',
        missionStep3: 'Each correct code charges the corresponding Zord with energy.',
        missionStep4: 'Once all four Zords are active, the central lock closes and the TI Gateway is connected.',
        missionStep5: 'At the end, you will receive the flag to unlock the StoryLine task in <b>CTFd</b>.',
        hintsTitle: 'Hints',
        hint1: 'You only receive the final codes when you completely finish the respective sub-worlds.',
        hint2: 'You can activate each Zord individually; incorrect entries will be displayed immediately.',
        hint3: 'Only when all four Zords report "Correct" is the connection complete.',
        hint4: 'With <strong>CHECK MEGAZORD</strong> you start the final sequence.',
        hint5: 'Application teamwork + precise inputs = IT\'S MORPHIN TIME!',
        tasksOverview: 'Tasks Overview',
        consoleTitle: 'Morphin Console (IT\'S MORPHIN TIME!)',
        tokenCopy: 'Copy Token'
      }
    }
  },

  atrium: {
    de: {
      header: {
        title: 'Atrium'
      },
      content: {
        infoText: 'Hier erwarten dich spannende Vorträge von unserem',
        youtubeChannel: 'YouTube‑Kanal'
      }
    },
    en: {
      header: {
        title: 'Atrium'
      },
      content: {
        infoText: 'Here you can expect exciting presentations from our',
        youtubeChannel: 'YouTube channel'
      }
    }
  },

  raumplan: {
    de: {
      header: {
        title: 'Eingangsbereich'
      },
      content: {
        mapOverviewTitle: 'Map-Übersicht',
        mapOverviewText: 'Die Map gliedert sich in mehrere Bereiche. Verschaffe dir hier einen schnellen Überblick und klicke auf die Karte für eine vergrößerte Ansicht.',
        mapOverviewCaption: 'Klicke auf das Bild, um die Ansicht zu vergrößern.',
        entranceAreaTitle: 'Eingangsbereich',
        entranceAreaText: 'Dein Abenteuer startet im Eingangsbereich der Event-Ebene. Von hier gelangst du zu Bühne, Helpdesk, Partner-Bereich und in den TI‑Park.',
        entranceAreaCaption: 'Eingangsbereich der Event-Ebene',
        tiRangerTitle: 'TI-Ranger & Partner-Bereich',
        tiRangerText: 'Hier findest du den Helpdesk der TI‑Ranger, den gematik TI_ctf sowie den Partner-Bereich.',
        tiRangerCaption: 'TI‑Ranger Helpdesk, TI_ctf und Partner-Bereich',
        stageTitle: 'Bühne',
        stageText: 'Auf der Bühne wird das Event vorgestellt und offiziell freigegeben.',
        stageCaption: 'Bühnenbereich für Ankündigungen und Kick-off',
        tiParkAccessTitle: 'Zugang zum TI-Park',
        tiParkAccessText: 'Über diesen Bereich betrittst du den TI‑Park und findest die Aufgaben der virtuellen Welt. Bitte betrete den Bereich erst nach Freigabe durch die TI‑Ranger. Deine zugewiesene Tür ist in der Einladungs‑E‑Mail angegeben.',
        tiParkAccessCaption: 'Zugangstüren zum TI‑Park',
        helpdeskTitle: 'Helpdesk',
        helpdeskText: 'Im Helpdesk unterstützen dich die TI‑Ranger bei Fragen und technischen Anliegen.',
        helpdeskCaption: 'TI‑Ranger Helpdesk',
        zonesTitle: 'Zonen',
        zonesText: 'Bereiche, in denen die Kamera aktiviert wird, sind in der Map grün markiert und mit einem Lautsprecher‑Symbol gekennzeichnet.',
        zonesCaption: 'Zonen mit Kameraaktivierung (grün markiert)'
      }
    },
    en: {
      header: {
        title: 'Entrance Area'
      },
      content: {
        mapOverviewTitle: 'Map Overview',
        mapOverviewText: 'The map is divided into several areas. Get a quick overview here and click on the map for an enlarged view.',
        mapOverviewCaption: 'Click on the image to enlarge the view.',
        entranceAreaTitle: 'Entrance Area',
        entranceAreaText: 'Your adventure starts in the entrance area of the event level. From here you can reach the stage, helpdesk, partner area, and the TI Park.',
        entranceAreaCaption: 'Entrance area of the event level',
        tiRangerTitle: 'TI Rangers & Partner Area',
        tiRangerText: 'Here you will find the TI Rangers helpdesk, the gematik TI_ctf, and the partner area.',
        tiRangerCaption: 'TI Rangers Helpdesk, TI_ctf, and Partner Area',
        stageTitle: 'Stage',
        stageText: 'The event is presented and officially released on the stage.',
        stageCaption: 'Stage area for announcements and kick-off',
        tiParkAccessTitle: 'Access to TI Park',
        tiParkAccessText: 'Through this area, you enter the TI Park and find the tasks of the virtual world. Please only enter the area after release by the TI Rangers. Your assigned door is indicated in the invitation email.',
        tiParkAccessCaption: 'Access doors to TI Park',
        helpdeskTitle: 'Helpdesk',
        helpdeskText: 'At the helpdesk, the TI Rangers support you with questions and technical concerns.',
        helpdeskCaption: 'TI Rangers Helpdesk',
        zonesTitle: 'Zones',
        zonesText: 'Areas where the camera is activated are marked in green on the map and identified with a speaker symbol.',
        zonesCaption: 'Zones with camera activation (marked in green)'
      }
    }
  },

  hello_tictf: {
    de: {
      header: {
        title: 'TI Capture the Flag (TI_ctf)'
      },
      content: {
        briefDescriptionTitle: 'Kurzbeschreibung',
        briefDescription1: 'Das TI Capture the Flag (TI_ctf) ist der jährliche Cybersecurity‑Wettbewerb der gematik rund um die Telematikinfrastruktur (TI). In einer virtuellen Welt lösen Teams kreative Challenges zu Kernbausteinen wie e‑Rezept, ePA, KIM, TI‑Messenger und TI‑Gateway, sammeln Flags und messen sich im Team – vom Einsteiger bis zum Profi.',
        briefDescription2: 'Seit 2021 bringt das TI_ctf die Community zusammen: ein offener, spielerischer Cybersecurity‑Wettbewerb rund um die Telematikinfrastruktur (TI) – von Einsteiger bis Profi.',
        interviewTitle: 'Interview',
        interview1: 'Die Idee zu einem eigenen CTF bei der gematik hat uns früh begleitet. Unser CISO, Holm Diening, hat den Gedanken 2001 in unser Team getragen – und der Wunsch, ein offenes, wiederkehrendes Event aufzubauen, ist seitdem stetig gewachsen. Für mich war es die passende Verbindung aus Kreativität und Cyber Security. Von den ersten Schritten bis hin zu einem eigenen Framework durfte ich vieles mitgestalten und dabei auch viel lernen.',
        interview2: 'Seit dem Anfang entwerfe ich die Logos, Storylines und Maps – immer gemeinsam mit einem engagierten Team und mit Liebe zum Detail. Was mich antreibt, ist der Moment, in dem Idee, Technik und Spielspaß zusammenfinden und für die Community ein stimmiges Erlebnis entsteht.',
        interview3: 'Unser Ziel bleibt unverändert: ein öffentliches, jährliches CTF für den deutschsprachigen Raum, welches wir gemeinsam mit unseren Partnern in einer simulierten Umgebung ausrichten. Wir präsentieren unsere Produkte dabei als wechselnde Themenwelt – nicht, um Schwachstellen zu suchen, sondern um Lernen, Austausch und Teamgeist spielerisch zu fördern.',
        inHouseDevelopmentTitle: 'Eigenentwicklung',
        inHouseDevelopment: 'Neben unseren Aufgaben im Cyber Defense Center zur 360‑Grad‑Sicherheit in der TI entwickeln wir TI_ctf komplett in Eigenregie: vom Event‑Branding und den Logos über die virtuellen Maps und das Design unserer CTFd‑Plattform bis hin zu allen Challenges und Aufgaben. Alles stammt aus unserem Team – mit viel Liebe zum Detail und Fokus auf einen sicheren, lehrreichen und spielerischen Wettbewerb.',
        annualCycleTitle: 'Unser Jahreszyklus: Von der Idee bis zur Flag',
        annualCycle: 'Nach dem Event ist vor dem Event: Im Januar starten wir mit frischem Kopf und großer Lust in die neue Runde. Den Auftakt macht die Suche nach einer starken Storyline zum jeweiligen TI‑Produkt – ein roter Faden, der Technik und Spielspaß verbindet. Und doch beginnt es fast immer mit dem Gefühl: Ein Logo und ein Slogan müssen her. Wir lassen uns von Klassikern aus Film und Spiel inspirieren, von dem, womit wir aufgewachsen sind und was uns bis heute begeistert. So entstehen Wortspiele und Anlehnungen, die neugierig machen: Von „Capture the TI‑eRx" bis zur „KIM & TIM"-Reihe – jedes Jahr fordernd, jedes Jahr fesselnd. Der Moment, in dem Name und Bild zusammenpassen, ist der Startschuss: Jetzt nimmt das Event Form an.',
        brandingTitle: 'Vom Entwurf zum Pixel: Branding in Handarbeit',
        branding1: 'Die ersten Entwürfe sind die schwierigsten – so ist das mit guten Ideen. Wir setzen uns zusammen, skizzieren, verwerfen, verbessern. Wir nehmen den Pinsel sprichwörtlich selbst in die Hand und feilen an jeder Linie, bis Form, Farbe und Aussage stimmen. Dieses handgemachte Branding ist unser Versprechen: Wir gehen den extra Schritt. Und wenn das Logo schließlich sitzt, spüren wir dieses Kribbeln: „Dieses Jahr wird wieder großartig." Es ist mehr als ein Bild – es ist der Puls des Events, der uns den Ton für alles Weitere vorgibt.',
        branding2: 'Und dann ist er plötzlich da: der passende Slogan. Nach wochenlanger, manchmal frustrierter Suche fällt er einem beim Teekochen ein – klar, stimmig, genau richtig. Solche goldenen Momente tragen uns durch die langen Phasen des Tüftelns und erinnern daran, warum wir drangeblieben sind: weil aus Beharrlichkeit und Freude am Detail etwas entsteht, das begeistert.',
        mapDesignTitle: 'Map‑Design und Story‑Engineering',
        mapDesign: 'Maps zu gestalten ist, als würde man ein Buch schreiben: Die erste Seite kostet am meisten Mut. Wir investieren Zeit und Energie in Storylines, Aufgaben und einen runden Schliff, damit der Rundgang durch die Welt sich stimmig und spannend anfühlt. Jede Station soll Sinn machen, fair sein, überraschen – für Einsteiger wie für Profis. Wir arbeiten an Räumen, die leiten statt verwirren, und an Aufgaben, die herausfordern statt frustrieren. Unser Ziel ist klar: Ein Erlebnis, das trägt. Wer die Map betritt, soll neugierig werden und am Ende zufrieden sagen: „Das hat sich gelohnt."',
        workadventureTitle: 'Bereitstellung in WorkAdventure: Automatisiert per API',
        workadventure: 'Sechs Maps für jedes Team? Per Hand wäre das ein Kraftakt – also automatisieren wir. Mit API‑Calls an WorkAdventure provisionieren wir die Welten reproduzierbar, effizient und sauber. Neben dem Design zeigen wir hier unsere Skript‑ und Integrationsfähigkeiten: Templates, Konfigurationen und QA greifen ineinander, sodass aus einer Idee eine skalierbare Infrastruktur wird. So bleibt die kreative Energie da, wo sie hingehört: in die Inhalte. Den Rest erledigt unsere Automatisierung verlässlich im Hintergrund.',
        participantManagementTitle: 'Teilnehmermanagement: Skalierbar und empathisch',
        participantManagement: 'Von der Registrierung bis zur Bestätigung begleiten wir unsere Community mit klaren Prozessen und freundlicher Kommunikation. Wir haben den Weg durchgespielt – von handgeschriebenen E‑Mails bis zur vollautomatischen Einladung. Ab rund 180 Teilnehmern ist Automatisierung nicht mehr Kür, sondern Pflicht: saubere Datenflüsse, belastbare Zustellung, transparente Schritte. Dabei bleibt eines unverändert: Wir kümmern uns. Die Technik skaliert, die Haltung bleibt persönlich.',
        partnerCollaborationTitle: 'Zusammenarbeit mit Partnern: Iterativ und transparent',
        partnerCollaboration: 'Frühzeitig gehen wir in den Schulterschluss mit unseren Partnern. In regelmäßigen Abstimmungen teilen wir Ideen, priorisieren gemeinsam und erleben im Wochenrhythmus, wie das Projekt wächst. Anforderungen werden synchronisiert, Inhalte abgestimmt, Tests geplant und Ergebnisse freigegeben. Diese Transparenz schafft Vertrauen – und sorgt dafür, dass das, was wir bauen, wirklich trägt. Am Ende sind es die gemeinsamen Meilensteine, die das Event stark machen.',
        communicationTitle: 'Kommunikation: Präzise, schnell und mit voller Power',
        communication1: 'Frühzeitig verzahnen wir unsere Kampagne mit den Kanälen – von Social Media bis zur Website. Täglich beobachten wir die Anmeldezahlen, erkennen Muster und schärfen die Botschaften nach. Wir testen Hooks, variieren Visuals und justieren die Posting-Zeiten, damit jede Nachricht dort landet, wo sie Wirkung entfaltet.',
        communication2: 'In kurzen Feedback-Schleifen werden Texte, Bilder und Videos abgestimmt, freigegeben und publiziert. Transparenz ist dabei unser Taktgeber: Was performt, wird skaliert. Was nicht zieht, wird verbessert – sofort und nachvollziehbar. So entsteht ein klarer Rhythmus aus Planen, Messen, Optimieren.',
        communication3: 'Gemeinsam mit dem Team und unseren Partnern erhöhen wir die Sichtbarkeit – iterativ und zielgerichtet. Jeder Post hat einen Zweck, jeder CTA eine Richtung: Aufmerksamkeit in Anmeldungen verwandeln. Am Ende zählt der Effekt: Mehr Reichweite, mehr Engagement, mehr Momentum für ein starkes Event.',
        taskManagementTitle: 'Aufgabenmanagement: Organisieren, Prüfen, Bereitstellen',
        taskManagement1: 'Bei unserem CTF möchten wir Aufgaben entwickeln, die euch zeigen, wie die Produkte der Telematikinfrastruktur wirklich funktionieren. Dafür sprechen wir intensiv mit den Fachteams und tauchen in die Spezifikationen ein – so stellen wir sicher, dass die Aufgaben nicht nur spannend, sondern auch fachlich korrekt sind.',
        taskManagement2: 'Das Ganze teilen wir auf: Im Workadventure lernt ihr die Grundlagen spielerisch kennen. Im eigentlichen CTF könnt ihr dann mit kniffligeren Aufgaben zeigen, was ihr draufhabt – immer basierend auf dem, was ihr vorher gelernt habt. Außerdem holen wir uns Unterstützung von gematiker:innen und externen Partner:innen, die eigene Aufgaben beisteuern.',
        taskManagement3: 'Alle Aufgaben prüfen wir sorgfältig und entwickeln passende Lösungswege. So können wir euch während des Events gezielt Hinweise geben, falls ihr mal nicht weiterkommt. Unser Ziel: Ihr sollt Spaß haben, gemeinsam lernen und am Ende ein gutes Gefühl für die TI bekommen.',
        challengesTitle: 'Challenges mit Know-How und Liebe zum Detail',
        challenges1: 'Unsere Challenges für dieses Jahr entstehen direkt aus der TI‑Praxis: passend zu Produkt und Spezifikation, kuratiert von Spezialistinnen und Spezialisten mit jahrelanger CTF‑Erfahrung.',
        challenges2: '2025 sind wir stark aufgestellt: Mit echter Begeisterung für Cybersecurity und tiefem Know‑how in e‑Rezept, ePA, KIM, TI‑Messenger und TI‑Gateway. Wir entwickeln die Umgebungen stetig weiter und liefern realistische, lustige und anspruchsvolle Aufgaben nah am Wesen der Telematikinfrastruktur.',
        fiveYearsTitle: 'Fünf Jahre TI_ctf: Dankbarkeit und Antrieb',
        fiveYears: 'Fünf Jahre TI_ctf bedeuten: viel Erfahrung, viele Geschichten und eine wachsende Beliebtheit, über die wir uns ehrlich freuen. Wir machen das für euch – für die Community, die Lernfreude, den Teamgeist. Wir lieben die Idee eines eigenen CTF‑Events und leben sie jedes Jahr aufs Neue. Unser Dank gilt allen Teilnehmerinnen und Teilnehmern, die diesen Traum möglich machen. Und unser Antrieb bleibt: besser werden, neugierig bleiben, mit Leidenschaft gestalten. Das nächste Jahr beginnt im Januar – und wir können es kaum erwarten.',
        moreInfo: 'Mehr Informationen:'
      },
      team: {
        tobiasKirschke: 'Tobias Kirschke<br>Projektleitung TI_ctf',
        robinAvci: 'Robin Avci<br>Teilnehmermanagement',
        christophImmisch: 'Christoph Immisch<br>Partnermanagement',
        andreTietjen: 'Andre Tietjen<br>Kommunikation',
        stefanSander: 'Stefan Sander<br>Aufgabenmanagement',
        willyMroczowski: 'Willy Mroczowski<br>Aufgabenmanagement'
      }
    },
    en: {
      header: {
        title: 'TI Capture the Flag (TI_ctf)'
      },
      content: {
        briefDescriptionTitle: 'Brief Description',
        briefDescription1: 'The TI Capture the Flag (TI_ctf) is gematik\'s annual cybersecurity competition around the Telematics Infrastructure (TI). In a virtual world, teams solve creative challenges about core components such as e-prescription, ePA, KIM, TI Messenger, and TI Gateway, collect flags, and compete as a team – from beginners to professionals.',
        briefDescription2: 'Since 2021, TI_ctf has brought the community together: an open, playful cybersecurity competition around the Telematics Infrastructure (TI) – from beginners to professionals.',
        interviewTitle: 'Interview',
        interview1: 'The idea of having our own CTF at gematik has accompanied us early on. Our CISO, Holm Diening, brought the idea to our team in 2001 – and the desire to build an open, recurring event has been growing ever since. For me, it was the perfect connection between creativity and cybersecurity. From the first steps to our own framework, I was able to help shape many things and learn a lot in the process.',
        interview2: 'Since the beginning, I have been designing the logos, storylines, and maps – always together with a dedicated team and with attention to detail. What drives me is the moment when idea, technology, and gameplay come together to create a coherent experience for the community.',
        interview3: 'Our goal remains unchanged: a public, annual CTF for the German-speaking region, which we host together with our partners in a simulated environment. We present our products as changing themed worlds – not to find vulnerabilities, but to promote learning, exchange, and team spirit in a playful way.',
        inHouseDevelopmentTitle: 'In-House Development',
        inHouseDevelopment: 'In addition to our tasks in the Cyber Defense Center for 360-degree security in the TI, we develop TI_ctf completely in-house: from event branding and logos to virtual maps and the design of our CTFd platform to all challenges and tasks. Everything comes from our team – with great attention to detail and focus on a secure, educational, and playful competition.',
        annualCycleTitle: 'Our Annual Cycle: From Idea to Flag',
        annualCycle: 'After the event comes before the event: In January, we start the new round with fresh minds and great enthusiasm. It begins with the search for a strong storyline for the respective TI product – a common thread that connects technology and gameplay. And yet it almost always starts with the feeling: We need a logo and a slogan. We draw inspiration from classics from film and games, from what we grew up with and what still excites us today. This creates wordplays and allusions that spark curiosity: From "Capture the TI-eRx" to the "KIM & TIM" series – challenging every year, captivating every year. The moment when name and image fit together is the starting signal: Now the event takes shape.',
        brandingTitle: 'From Draft to Pixel: Handcrafted Branding',
        branding1: 'The first drafts are the most difficult – that\'s how it is with good ideas. We sit together, sketch, discard, improve. We literally take the brush into our own hands and refine every line until form, color, and statement are right. This handmade branding is our promise: We go the extra mile. And when the logo finally fits, we feel that tingle: "This year will be great again." It\'s more than an image – it\'s the pulse of the event that sets the tone for everything else.',
        branding2: 'And then it\'s suddenly there: the right slogan. After weeks, sometimes frustrated searching, it comes to you while making tea – clear, coherent, just right. Such golden moments carry us through the long phases of tinkering and remind us why we persevered: because persistence and attention to detail create something that inspires.',
        mapDesignTitle: 'Map Design and Story Engineering',
        mapDesign: 'Designing maps is like writing a book: The first page takes the most courage. We invest time and energy in storylines, tasks, and a polished finish so that the tour through the world feels coherent and exciting. Every station should make sense, be fair, surprise – for beginners as well as professionals. We work on spaces that guide rather than confuse, and on tasks that challenge rather than frustrate. Our goal is clear: An experience that carries. Whoever enters the map should become curious and say satisfied at the end: "That was worth it."',
        workadventureTitle: 'Deployment in WorkAdventure: Automated via API',
        workadventure: 'Six maps for each team? By hand, that would be a huge effort – so we automate. With API calls to WorkAdventure, we provision worlds reproducibly, efficiently, and cleanly. In addition to design, we demonstrate our scripting and integration capabilities here: Templates, configurations, and QA interlock so that an idea becomes a scalable infrastructure. This keeps the creative energy where it belongs: in the content. Automation reliably handles the rest in the background.',
        participantManagementTitle: 'Participant Management: Scalable and Empathetic',
        participantManagement: 'From registration to confirmation, we accompany our community with clear processes and friendly communication. We have played through the journey – from handwritten emails to fully automatic invitations. From around 180 participants, automation is no longer optional but mandatory: clean data flows, reliable delivery, transparent steps. Yet one thing remains unchanged: We care. Technology scales, attitude stays personal.',
        partnerCollaborationTitle: 'Collaboration with Partners: Iterative and Transparent',
        partnerCollaboration: 'We join forces with our partners early on. In regular coordination meetings, we share ideas, prioritize together, and experience on a weekly basis how the project grows. Requirements are synchronized, content coordinated, tests planned, and results released. This transparency creates trust – and ensures that what we build really carries. In the end, it is the joint milestones that make the event strong.',
        communicationTitle: 'Communication: Precise, Fast, and at Full Power',
        communication1: 'We integrate our campaign with the channels early – from social media to the website. Daily, we monitor registration numbers, recognize patterns, and sharpen messages. We test hooks, vary visuals, and adjust posting times so that every message lands where it has an impact.',
        communication2: 'In short feedback loops, texts, images, and videos are coordinated, approved, and published. Transparency is our pacemaker: What performs gets scaled. What doesn\'t work gets improved – immediately and transparently. This creates a clear rhythm of planning, measuring, optimizing.',
        communication3: 'Together with the team and our partners, we increase visibility – iteratively and purposefully. Every post has a purpose, every CTA a direction: Convert attention into registrations. In the end, the effect counts: More reach, more engagement, more momentum for a strong event.',
        taskManagementTitle: 'Task Management: Organize, Review, Provide',
        taskManagement1: 'In our CTF, we want to develop tasks that show you how the products of the Telematics Infrastructure really work. For this, we talk intensively with the specialist teams and dive into the specifications – this way we ensure that the tasks are not only exciting but also technically correct.',
        taskManagement2: 'We divide everything: In WorkAdventure, you learn the basics in a playful way. In the actual CTF, you can then show what you\'ve got with trickier tasks – always based on what you learned before. We also get support from gematik colleagues and external partners who contribute their own tasks.',
        taskManagement3: 'We carefully review all tasks and develop appropriate solution paths. This way, we can give you targeted hints during the event if you get stuck. Our goal: You should have fun, learn together, and ultimately get a good feeling for the TI.',
        challengesTitle: 'Challenges with Know-How and Attention to Detail',
        challenges1: 'Our challenges for this year come directly from TI practice: tailored to product and specification, curated by specialists with years of CTF experience.',
        challenges2: '2025, we are strongly positioned: With genuine enthusiasm for cybersecurity and deep expertise in e-prescription, ePA, KIM, TI Messenger, and TI Gateway. We continuously develop the environments and deliver realistic, fun, and challenging tasks close to the nature of the Telematics Infrastructure.',
        fiveYearsTitle: 'Five Years of TI_ctf: Gratitude and Drive',
        fiveYears: 'Five years of TI_ctf means: a lot of experience, many stories, and growing popularity that we are honestly happy about. We do this for you – for the community, the joy of learning, the team spirit. We love the idea of our own CTF event and live it anew every year. Our thanks go to all participants who make this dream possible. And our drive remains: to get better, stay curious, shape with passion. The next year begins in January – and we can hardly wait.',
        moreInfo: 'More information:'
      },
      team: {
        tobiasKirschke: 'Tobias Kirschke<br>Project Lead TI_ctf',
        robinAvci: 'Robin Avci<br>Participant Management',
        christophImmisch: 'Christoph Immisch<br>Partner Management',
        andreTietjen: 'Andre Tietjen<br>Communication',
        stefanSander: 'Stefan Sander<br>Task Management',
        willyMroczowski: 'Willy Mroczowski<br>Task Management'
      }
    }
  },

  wa_epa_00: {
    de: {
      header: {
        title: 'ePA - E-Patientenakte'
      },
      content: {
        whatIsTitle: 'Was ist das?',
        whatIsDescription1: 'In der <b>elektronischen Patientenakte (ePA) „für alle"</b> werden medizinisch relevante Informationen strukturiert gebündelt – von Befunden und Medikation bis hin zu Entlassbriefen. Dadurch sind die Daten im Versorgungsalltag unmittelbar verfügbar und können gezielt in Entscheidungen einfließen.',
        whatIsDescription2: 'Im Behandlungskontext ist der Zugriff für beteiligte Leistungserbringer ohne erneute Freigabe zulässig, sofern kein dokumentierter Widerspruch vorliegt. Das entlastet Prozesse, verhindert Medienbrüche und verbessert die Kontinuität der Versorgung.',
        emlTitle: 'eML - elektronische Medikationsliste',
        emlDescription: 'Die <b>elektronische Medikationsliste (eML)</b> stellt eine strukturierte Übersicht über Verordnungs- und Ausgabedaten aus dem E-Rezept-Fachdienst bereit.',
        clickToEnlarge: 'Zur Vergrößerung klicken',
        fhirTitle: 'FHIR',
        fhirDescription1: '<b>FHIR</b> steht für "Fast Healthcare Interoperability Resources" und ist ein Standard für den Austausch von Gesundheitsinformationen. <b>FHIR</b> wurde entwickelt, um die Interoperabilität zwischen verschiedenen Gesundheitssystemen zu verbessern und den Austausch von Daten zu erleichtern.',
        fhirDescription2: 'Es basiert auf modernen Web-Technologien wie RESTful APIs und verwendet standardisierte Datenformate wie JSON, XML und RDF.'
      },
      help: {
        title: 'Weiterführende Informationen',
        text: 'Verwende folgende Webseiten zur Unterstützung:'
      }
    },
    en: {
      header: {
        title: 'ePA - Electronic Patient Record'
      },
      content: {
        whatIsTitle: 'What is it?',
        whatIsDescription1: 'The <b>electronic patient record (ePA) "for all"</b> bundles medically relevant information in a structured manner – from findings and medication to discharge letters. This makes the data immediately available in everyday care and allows it to be used purposefully in decision-making.',
        whatIsDescription2: 'In the treatment context, access is permitted for involved healthcare providers without renewed authorization, provided there is no documented objection. This streamlines processes, prevents media disruptions, and improves continuity of care.',
        emlTitle: 'eML - Electronic Medication List',
        emlDescription: 'The <b>electronic medication list (eML)</b> provides a structured overview of prescription and dispensing data from the e-prescription service.',
        clickToEnlarge: 'Click to enlarge',
        fhirTitle: 'FHIR',
        fhirDescription1: '<b>FHIR</b> stands for "Fast Healthcare Interoperability Resources" and is a standard for exchanging health information. <b>FHIR</b> was developed to improve interoperability between different health systems and facilitate data exchange.',
        fhirDescription2: 'It is based on modern web technologies such as RESTful APIs and uses standardized data formats such as JSON, XML, and RDF.'
      },
      help: {
        title: 'Further Information',
        text: 'Use the following websites for support:'
      }
    }
  },

  wa_epa_01: {
    de: {
      header: {
        title: 'ePA - E-Patientenakte (Aufgabe 1)'
      },
      content: {
        subtitle: 'ePA für alle?!',
        description: 'Alf gewährt der Klinik (in die er demnächst fährt) vorab Zugriff auf seine elektronische Patientenakte (ePA). Dazu erstellt er ein JSON Web Token (JWT) und übermittelt es an den ePA‑Fachdienst.',
        missionTitle: 'Deine Mission',
        missionDescription: 'Fülle den JWT mit den korrekten Daten aus.',
        infoTitle: 'Informationen zur Mission',
        jwtSetupTitle: 'JWT Setup',
        jwtSetupSubtitle: 'ePA Zugriffstoken – bereit zum Signieren',
        headerLabel: 'Header',
        payloadLabel: 'Payload',
        secretLabel: 'Signatur-Secret',
        algorithmLabel: 'Algorithmus',
        secretKeyLabel: 'Secret',
        furtherInfoTitle: 'Weitere Informationen',
        linkPayloadFields: 'Was bedeuten die Felder der Payload',
        linkWhatIsJwt: 'Was ist ein JWT',
        solutionLabel: 'Lösung',
        infoText: 'Die Antwort ist der generierte JWT'
      },
      help: {
        title: 'Überschrift',
        text: 'Verwende folgende Tools zur Analyse der Protokolle:'
      }
    },
    en: {
      header: {
        title: 'ePA - Electronic Patient Record (Task 1)'
      },
      content: {
        subtitle: 'ePA for everyone?!',
        description: 'Alf grants the clinic (which he is about to visit) advance access to his electronic patient record (ePA). To do this, he creates a JSON Web Token (JWT) and transmits it to the ePA service.',
        missionTitle: 'Your Mission',
        missionDescription: 'Fill the JWT with the correct data.',
        infoTitle: 'Mission Information',
        jwtSetupTitle: 'JWT Setup',
        jwtSetupSubtitle: 'ePA access token – ready for signing',
        headerLabel: 'Header',
        payloadLabel: 'Payload',
        secretLabel: 'Signature Secret',
        algorithmLabel: 'Algorithm',
        secretKeyLabel: 'Secret',
        furtherInfoTitle: 'Further Information',
        linkPayloadFields: 'What the payload fields mean',
        linkWhatIsJwt: 'What is a JWT',
        solutionLabel: 'Solution',
        infoText: 'The answer is the generated JWT'
      },
      help: {
        title: 'Heading',
        text: 'Use the following tools to analyze the protocols:'
      }
    }
  },

  wa_epa_02: {
    de: {
      header: {
        title: 'ePA - E-Patientenakte (Aufgabe 2)'
      },
      content: {
        subtitle: 'Watch out for overdose',
        description1: 'Alf rollt in der Klinik ein – bereit fürs nächste Kapitel. Die Mitarbeitenden öffnen die elektronische Patientenakte, um sich schnell ein Bild zu machen. First things first: Welche Medikamente musste Alf wann und wie einnehmen?',
        description2: 'Zum Glück wurde eine <b>Medikationsliste</b> geschrieben.',
        missionTitle: 'Deine Mission',
        missionDescription: 'Finde die korrekte Einnahmehäufigkeit (Dosierungsintervall), um mögliche Nebenwirkungen bestmöglich zu vermeiden!',
        infoTitle: 'Informationen zur Mission',
        infoDescription: 'Wir haben das damalige Papierrezept gefunden, allerdings sind nicht alle verordneten Medikamente ersichtlich.',
        attachment: 'Anhang:',
        solutionLabel: 'Lösung',
        infoText: 'Die Antwort ist die Einnahmehäufigkeit (Dosierungsintervall) des <b>ausgegebenen</b> Medikaments.'
      },
      help: {
        title: 'Überschrift',
        text: 'Verwende folgende Tools zur Analyse der Protokolle:'
      }
    },
    en: {
      header: {
        title: 'ePA - Electronic Patient Record (Task 2)'
      },
      content: {
        subtitle: 'Watch out for overdose',
        description1: 'Alf arrives at the clinic – ready for the next chapter. The staff opens the electronic patient record to quickly get an overview. First things first: Which medications did Alf have to take when and how?',
        description2: 'Fortunately, a <b>medication list</b> was written.',
        missionTitle: 'Your Mission',
        missionDescription: 'Find the correct intake frequency (dosing interval) to best avoid possible side effects!',
        infoTitle: 'Mission Information',
        infoDescription: 'We found the original paper prescription, but not all prescribed medications are visible.',
        attachment: 'Attachment:',
        solutionLabel: 'Solution',
        infoText: 'The answer is the intake frequency (dosing interval) of the <b>dispensed</b> medication.'
      },
      help: {
        title: 'Heading',
        text: 'Use the following tools to analyze the protocols:'
      }
    }
  },

  wa_epa_03: {
    de: {
      header: {
        title: 'ePA - E-Patientenakte (Aufgabe 3)'
      },
      content: {
        subtitle: 'Mix mit Risiko',
        description1: 'Nach einem turbulenten Klinikaufenthalt stellen die Mitarbeitenden fest: Er leidet an einer speziellen Phobie, die in Kombination mit seinen verordneten Medikamenten zu unglücklichen Wechselwirkungen geführt hat.',
        description2: 'Damit andere Behandler schnell, sicher und richtig reagieren können, soll der Befund in die elektronische Patientenakte (ePA) hochgeladen werden.',
        description3: 'Der Clou: Die entscheidende Diagnose steckt nicht plakativ im Klartext, sondern verborgen in der gelieferten ePA-Upload-Payload – einem ITI‑41 Paket mit eingebettetem PDF. Nur wer den Befund richtig aus der Nachricht extrahiert, kann die Diagnose eindeutig bestimmen und Alfs Behandlung auf Kurs bringen.',
        missionTitle: 'Deine Mission',
        missionDescription1: 'Finde die korrekte Diagnose aus dem extrahierten PDF, die im bereitgestellten',
        missionDescription2: 'Upload-Paket steckt. Analysiere nur die bereitgestellte XML-Payload und bestimme die genaue Diagnose.',
        infoTitle: 'Informationen zur Mission',
        technicalBackgroundTitle: 'Technischer Hintergrund',
        technicalBackground: 'Der Upload erfolgt über die Operation <strong>Provide and Register Document Set‑b</strong> (ITI‑41). Dabei kommt es insbesondere darauf an, die Metadaten korrekt zu annotieren (z.&nbsp;B. Dokumenttyp, Patient, Autor, Zeitstempel, Klassifikationen), damit das Dokument in der ePA korrekt registriert und auffindbar ist. Es handelt sich um eine <strong>hoch­spezialisierte</strong> Operation.',
        furtherHintsTitle: 'Weitere Hinweise',
        hint1: 'Die Diagnose ist als Klartext im PDF enthalten.',
        hint2: 'Du benötigst keine speziellen Zugänge, Zertifikate oder Live-Endpoints.',
        hint3: 'Tools nach Wahl: Base64-Decoder, Terminal, Online-Tool oder kleines Skript.',
        providedFileTitle: 'Bereitgestellte Datei',
        providedFileDescription1: 'Es wird eine',
        providedFileDescription2: 'bereitgestellt, die die Payload für die SOAP-Anfrage an das ePA-Aktensystem enthält. Diese folgt der Spezifikation <strong>IHE ITI‑41</strong>.',
        linkFile: 'Datei',
        attachment: 'Anhang:',
        solutionLabel: 'Lösung',
        infoText: 'Die Antwort ist die Diagnose, aus dem PDF Dokument'
      },
      help: {
        title: 'Überschrift',
        text: 'Verwende folgende Tools zur Analyse der Protokolle:'
      }
    },
    en: {
      header: {
        title: 'ePA - Electronic Patient Record (Task 3)'
      },
      content: {
        subtitle: 'Risky Mix',
        description1: 'After a turbulent hospital stay, the staff discovers: He suffers from a special phobia that, in combination with his prescribed medications, has led to unfortunate interactions.',
        description2: 'So that other practitioners can respond quickly, safely, and correctly, the findings should be uploaded to the electronic patient record (ePA).',
        description3: 'The catch: The crucial diagnosis is not obvious in plain text, but hidden in the provided ePA upload payload – an ITI-41 package with an embedded PDF. Only those who correctly extract the findings from the message can clearly determine the diagnosis and get Alf\'s treatment on track.',
        missionTitle: 'Your Mission',
        missionDescription1: 'Find the correct diagnosis from the extracted PDF that is contained in the provided',
        missionDescription2: 'upload package. Analyze only the provided XML payload and determine the exact diagnosis.',
        infoTitle: 'Mission Information',
        technicalBackgroundTitle: 'Technical Background',
        technicalBackground: 'The upload is done via the operation <strong>Provide and Register Document Set-b</strong> (ITI-41). It is particularly important to correctly annotate the metadata (e.g., document type, patient, author, timestamp, classifications) so that the document is correctly registered and findable in the ePA. This is a <strong>highly specialized</strong> operation.',
        furtherHintsTitle: 'Further Hints',
        hint1: 'The diagnosis is contained as plain text in the PDF.',
        hint2: 'You do not need special access, certificates, or live endpoints.',
        hint3: 'Tools of choice: Base64 decoder, terminal, online tool, or small script.',
        providedFileTitle: 'Provided File',
        providedFileDescription1: 'A',
        providedFileDescription2: 'is provided that contains the payload for the SOAP request to the ePA record system. This follows the <strong>IHE ITI-41</strong> specification.',
        linkFile: 'file',
        attachment: 'Attachment:',
        solutionLabel: 'Solution',
        infoText: 'The answer is the diagnosis from the PDF document'
      },
      help: {
        title: 'Heading',
        text: 'Use the following tools to analyze the protocols:'
      }
    }
  },

  wa_epa_04: {
    de: {
      header: {
        title: 'ePA - E-Patientenakte (Aufgabe 4)'
      },
      content: {
        subtitle: 'Privacy Patrol: Alf\'s Befund im Visier',
        description: 'Alf ist nach einem ziemlich belastenden Klinikbesuch wieder zu Hause. Bevor er zur Ruhe kommt, will er sicher sein: Hat wirklich nur die Klinik seinen Befund gesehen? Also: Auditlog auf, Spuren lesen, Fakten checken.',
        missionTitle: 'Deine Mission',
        missionDescription: 'Analysiere den Auditlog und identifiziere die drei exakt verwendeten Operationen in den relevanten Audit-Events. Trage die Operationen in der richtigen Reihenfolge untereinander in die Textbox ein.',
        infoTitle: 'Informationen zur Mission',
        infoDescription: 'Gefragt sind hier die spezifischen Operationen, welche in den AuditLogs zu finden sind.',
        attachment: 'Anhang:',
        solutionLabel: 'Lösung',
        infoText: 'Gefragt sind hier die spezifischen Operationen, genutzt in den drei Audit Events (<code>entity.0.description</code>)'
      },
      help: {
        title: 'Überschrift',
        text: 'Verwende folgende Tools zur Analyse der Protokolle:'
      }
    },
    en: {
      header: {
        title: 'ePA - Electronic Patient Record (Task 4)'
      },
      content: {
        subtitle: 'Privacy Patrol: Alf\'s Report in Focus',
        description: 'Alf is back home after a rather stressful clinic visit. Before he settles down, he wants to be sure: Did really only the clinic see his findings? So: Audit log open, read traces, check facts.',
        missionTitle: 'Your Mission',
        missionDescription: 'Analyze the audit log and identify the three exact operations used in the relevant audit events. Enter the operations in the correct order one below the other in the text box.',
        infoTitle: 'Mission Information',
        infoDescription: 'The specific operations found in the audit logs are required here.',
        attachment: 'Attachment:',
        solutionLabel: 'Solution',
        infoText: 'The specific operations used in the three audit events are required here (<code>entity.0.description</code>)'
      },
      help: {
        title: 'Heading',
        text: 'Use the following tools to analyze the protocols:'
      }
    }
  },

  wa_epa_05: {
    de: {
      header: {
        title: 'ePA - E-Patientenakte (Aufgabe 5)'
      },
      content: {
        subtitle: 'Panic at the Befund',
        description1: 'Nachdem Alf beruhigt ist, dass sein Befund sicher ist,... Stellt er fest, dass er nicht möchte, dass sein Therapeut über seine Triskaidekaphobie Bescheid weiß. Deshalb will er nun den Zugriff seines Therapeuten sperren.',
        missionTitle: 'Deine Mission',
        missionDescription: 'Sperre den Therapeuten aus, indem du den Zugriff verweigerst...',
        infoTitle: 'Informationen zur Mission',
        infoDescription: 'Vom <b>FdV</b> aus ist ein POST-Request zu folgendem definierten Endpunkt vorgesehen.',
        plannedEndpointTitle: 'Geplanter Endpunkt vom FdV',
        plannedEndpointSubtitle: 'POST-Request für gesperrte Nutzer',
        openAPISpecTitle: 'OpenAPI Spec',
        swaggerTitle: 'Swagger',
        swaggerDescription: 'Wir würden dir empfehlen die Specifikation im Swagger Editor zu öffnen, um die Endpunkte und benötigten Felder besser zu verstehen:',
        solutionLabel: 'Lösung',
        infoText: 'Gesucht werden die drei Feld Namen, welche für den request benötigt werden.'
      },
      help: {
        title: 'Überschrift',
        text: 'Verwende folgende Tools zur Analyse der Protokolle:'
      }
    },
    en: {
      header: {
        title: 'ePA - Electronic Patient Record (Task 5)'
      },
      content: {
        subtitle: 'Panic at the Findings',
        description1: 'After Alf is reassured that his findings are secure... He realizes that he doesn\'t want his therapist to know about his triskaidekaphobia. Therefore, he now wants to block his therapist\'s access.',
        missionTitle: 'Your Mission',
        missionDescription: 'Block the therapist by denying access...',
        infoTitle: 'Mission Information',
        infoDescription: 'From the <b>FdV</b>, a POST request to the following defined endpoint is intended.',
        plannedEndpointTitle: 'Planned Endpoint from FdV',
        plannedEndpointSubtitle: 'POST request for blocked users',
        openAPISpecTitle: 'OpenAPI Spec',
        swaggerTitle: 'Swagger',
        swaggerDescription: 'We recommend opening the specification in the Swagger Editor to better understand the endpoints and required fields:',
        solutionLabel: 'Solution',
        infoText: 'The three field names required for the request are sought.'
      },
      help: {
        title: 'Heading',
        text: 'Use the following tools to analyze the protocols:'
      }
    }
  },

  wa_erx_00: {
    de: {
      header: {
        title: 'eRX – E-Rezept'
      },
      content: {
        whatIsTitle: 'Was ist das?',
        whatIsDescription1: 'Das <b>elektronische Rezept (E-Rezept)</b> ersetzt den Papierausdruck für verschreibungspflichtige Arzneimittel. Die Praxis lädt das Rezept in die <b>Telematikinfrastruktur (TI)</b>. Mit <b>eGK</b>, <b>E-Rezept-App</b> oder Ausdruck können Sie es in der Apotheke einlösen.',
        pathTitle: 'Der Weg von der Praxis zum Medikament',
        step1Title: 'Rezept erstellen',
        step1Item1: 'Praxis signiert das Rezept digital',
        step1Item2: 'Speicherung in der <b>TI</b>',
        step2Title: 'Rezept einlösen',
        step2Item1: 'Mit <b>eGK</b> in der Apotheke',
        step2Item2: 'Mit Ausdruck und <b>DataMatrix-Code</b>',
        step2Item3: 'Über <b>E-Rezept-App</b> (mit eGK oder Code)',
        step3Title: 'Medikament erhalten',
        step3Item1: 'Apotheke ruft Rezept aus der <b>TI</b> ab',
        step3Item2: 'Gibt Medikament aus und bestätigt die Abgabe',
        dataMatrixTitle: 'DataMatrix',
        dataMatrixDescription: 'Die <b>DataMatrix</b> auf dem Papierausdruck enthält die TaskID und den AccessCode, um das Rezept aus der <b>TI</b> abzurufen.',
        dataMatrixStructureTitle: 'Aufbau',
        prescriptionIdTitle: 'Aufbau der E-Rezept-ID:',
        prescriptionIdDescription: 'Die E-Rezept-ID besteht aus drei Teilen: dem <span class="seg-a"><b>Typ</b> (aaa)</span>, der <span class="seg-b"><b>Rezeptnummer</b> (bbb.bbb.bbb.bbb)</span> und der <span class="seg-c"><b>Prüfziffer</b> (cc)</span>.',
        prescriptionIdHint: 'Bewege die Maus über die farbigen Segmente, um mehr zu erfahren:',
        tooltipType: 'E-Rezept-Typ',
        tooltipPrescriptionNumber: 'Fortlaufende Rezeptnummer',
        tooltipCheckDigit: 'Prüfziffer'
      },
      help: {
        title: 'Überschrift',
        text: 'Verwende folgende Tools zur Analyse der Protokolle:'
      }
    },
    en: {
      header: {
        title: 'eRX – E-Prescription'
      },
      content: {
        whatIsTitle: 'What is it?',
        whatIsDescription1: 'The <b>electronic prescription (e-prescription)</b> replaces the paper printout for prescription drugs. The practice uploads the prescription to the <b>Telematics Infrastructure (TI)</b>. With <b>eGK</b>, <b>e-prescription app</b>, or printout, you can redeem it at the pharmacy.',
        pathTitle: 'The Path from Practice to Medication',
        step1Title: 'Create prescription',
        step1Item1: 'Practice digitally signs the prescription',
        step1Item2: 'Storage in the <b>TI</b>',
        step2Title: 'Redeem prescription',
        step2Item1: 'With <b>eGK</b> at the pharmacy',
        step2Item2: 'With printout and <b>DataMatrix code</b>',
        step2Item3: 'Via <b>e-prescription app</b> (with eGK or code)',
        step3Title: 'Receive medication',
        step3Item1: 'Pharmacy retrieves prescription from the <b>TI</b>',
        step3Item2: 'Dispenses medication and confirms dispensing',
        dataMatrixTitle: 'DataMatrix',
        dataMatrixDescription: 'The <b>DataMatrix</b> on the paper printout contains the TaskID and AccessCode to retrieve the prescription from the <b>TI</b>.',
        dataMatrixStructureTitle: 'Structure',
        prescriptionIdTitle: 'Structure of the E-Prescription ID:',
        prescriptionIdDescription: 'The e-prescription ID consists of three parts: the <span class="seg-a"><b>type</b> (aaa)</span>, the <span class="seg-b"><b>prescription number</b> (bbb.bbb.bbb.bbb)</span>, and the <span class="seg-c"><b>check digit</b> (cc)</span>.',
        prescriptionIdHint: 'Move the mouse over the colored segments to learn more:',
        tooltipType: 'E-Prescription Type',
        tooltipPrescriptionNumber: 'Sequential Prescription Number',
        tooltipCheckDigit: 'Check Digit'
      },
      help: {
        title: 'Heading',
        text: 'Use the following tools to analyze the protocols:'
      }
    }
  },

  wa_erx_01: {
    de: {
      header: {
        title: 'eRX - E-Rezept (Aufgabe 1)'
      },
      content: {
        description1: 'Ach, endlich Urlaub: Sonne, Strand – und das Medikament liegt zu Hause. Kein Problem! Ab zur Apotheke und nachfragen. Doch vor der Tür fällt dir ein: Der genaue, eindeutige Name des Präparats ist dir entfallen. Keine Panik! Dank des E‑Rezepts kannst du die exakte Bezeichnung jederzeit schnell nachsehen.',
        missionTitle: 'Deine Mission',
        missionDescription: 'Finde die richtige Angabe im E-Rezept, damit es in der Apotheke keine Missverständnisse gibt.',
        infoTitle: 'Informationen zur Mission',
        infoDescription: 'Zum Glück hast du das E‑Rezept als FHIR‑XML vorliegen. Lade die Datei in den E‑Rezept‑Parser und prüfe dort die Werte, insbesondere <code class="mi-k">Bezeichnung</code>, <code class="mi-k">PZN</code>, <code class="mi-k">Darreichungsform</code>, <code class="mi-k">Packungsgröße</code>, <code class="mi-k">Dosierung</code> und <code class="mi-k">Aut‑idem‑Status</code>. So bekommst du in der Apotheke exakt das richtige Medikament.',
        documentsTitle: 'Unterlagen',
        documentsDescription: 'Speichere dein E‑Rezept als FHIR‑XML und lade die Datei anschließend im Parser unten hoch. So werden die relevanten Felder übersichtlich angezeigt:',
        furtherInfoTitle: 'Weitere Informationen',
        parserTitle: 'FHIR-XML Parser',
        uploaderTitle: 'E‑Rezept FHIR‑XML hochladen',
        uploaderSubtitle: 'Datei auswählen oder hier ablegen – wir zeigen die wichtigsten Felder.',
        selectXmlButton: 'XML auswählen',
        dropzoneText: 'Datei hier ablegen oder auf „XML auswählen" klicken',
        accordionDesignationTitle: 'Bezeichnung',
        accordionDesignationText: 'Die Bezeichnung ist der eindeutige Arzneimittelname im E‑Rezept. Sie umfasst in der Regel Handelsname, Wirkstärke und Darreichungsform (z. B. „Sumatriptan‑1a Pharma 100 mg Tabletten").',
        accordionPznTitle: 'Pharmazentralnummer (PZN)',
        accordionPznText: 'Die Pharmazentralnummer (PZN) ist ein bundeseinheitlicher Identifikationsschlüssel für Arzneimittel, Medizinprodukte und weitere apothekenübliche Produkte. Sie dient der eindeutigen Zuordnung in der Apotheke.',
        accordionDosageFormTitle: 'Darreichungsform',
        accordionDosageFormText: 'Die Darreichungsform beschreibt, in welcher Form das Arzneimittel verabreicht wird (z. B. Tabletten, Kapseln, Tropfen). Im E‑Rezept wird sie häufig als Code abgebildet (z. B. „TAB" für Tabletten).',
        accordionPackageSizeTitle: 'Packungsgröße',
        accordionPackageSizeText: 'Die Packungsgröße gibt an, wie viele Einheiten in einer Packung enthalten sind (z. B. „12 Stück"). Ergänzend kann eine Normgröße (z. B. N1, N2, N3) angegeben sein.',
        accordionDosageTitle: 'Dosierung',
        accordionDosageText: 'Die Dosierung beschreibt das Einnahmeschema, etwa in Form eines vierteiligen Tagesrasters (z. B. „1‑0‑1‑0"). Sie legt fest, wie oft und in welcher Menge das Arzneimittel eingenommen werden soll.',
        accordionAutIdemTitle: 'Aut‑idem‑Status',
        accordionAutIdemText: 'Der Aut‑idem‑Status gibt an, ob die Apotheke ein wirkstoffgleiches Präparat abgeben darf. „Erlaubt" bedeutet, dass eine Substitution möglich ist; „nicht erlaubt" verhindert den Austausch.',
        solutionLabel: 'Lösung',
        infoText: 'Welche PZN hat das verschriebene Medikament?'
      },
      help: {
        title: 'Überschrift',
        text: 'Verwende folgende Tools zur Analyse der Protokolle:'
      }
    },
    en: {
      header: {
        title: 'eRX - E-Prescription (Task 1)'
      },
      content: {
        description1: 'Ah, finally vacation: sun, beach – and the medication is at home. No problem! Off to the pharmacy to ask. But before the door, you remember: The exact, unique name of the preparation has slipped your mind. No panic! Thanks to the e-prescription, you can quickly look up the exact designation at any time.',
        missionTitle: 'Your Mission',
        missionDescription: 'Find the correct information in the e-prescription so there are no misunderstandings at the pharmacy.',
        infoTitle: 'Mission Information',
        infoDescription: 'Fortunately, you have the e-prescription as FHIR XML. Load the file into the e-prescription parser and check the values there, especially <code class="mi-k">designation</code>, <code class="mi-k">PZN</code>, <code class="mi-k">dosage form</code>, <code class="mi-k">package size</code>, <code class="mi-k">dosage</code>, and <code class="mi-k">aut-idem status</code>. This way, you get exactly the right medication at the pharmacy.',
        documentsTitle: 'Documents',
        documentsDescription: 'Save your e-prescription as FHIR XML and then upload the file in the parser below. This will display the relevant fields clearly:',
        furtherInfoTitle: 'Further Information',
        parserTitle: 'FHIR XML Parser',
        uploaderTitle: 'Upload E-Prescription FHIR XML',
        uploaderSubtitle: 'Select file or drop here – we show the most important fields.',
        selectXmlButton: 'Select XML',
        dropzoneText: 'Drop file here or click "Select XML"',
        accordionDesignationTitle: 'Designation',
        accordionDesignationText: 'The designation is the unique drug name in the e-prescription. It usually includes the trade name, active ingredient strength, and dosage form (e.g., "Sumatriptan-1a Pharma 100 mg Tablets").',
        accordionPznTitle: 'Central Pharmaceutical Number (PZN)',
        accordionPznText: 'The Central Pharmaceutical Number (PZN) is a nationwide identification key for medications, medical devices, and other pharmacy products. It serves for unambiguous assignment in the pharmacy.',
        accordionDosageFormTitle: 'Dosage Form',
        accordionDosageFormText: 'The dosage form describes the form in which the medication is administered (e.g., tablets, capsules, drops). In the e-prescription, it is often represented as a code (e.g., "TAB" for tablets).',
        accordionPackageSizeTitle: 'Package Size',
        accordionPackageSizeText: 'The package size indicates how many units are contained in a package (e.g., "12 pieces"). Additionally, a standard size (e.g., N1, N2, N3) may be specified.',
        accordionDosageTitle: 'Dosage',
        accordionDosageText: 'The dosage describes the intake regimen, such as in the form of a four-part daily grid (e.g., "1-0-1-0"). It specifies how often and in what amount the medication should be taken.',
        accordionAutIdemTitle: 'Aut-idem Status',
        accordionAutIdemText: 'The aut-idem status indicates whether the pharmacy may dispense an equivalent active ingredient preparation. "Allowed" means that substitution is possible; "not allowed" prevents the exchange.',
        solutionLabel: 'Solution',
        infoText: 'What PZN does the prescribed medication have?'
      },
      help: {
        title: 'Heading',
        text: 'Use the following tools to analyze the protocols:'
      }
    }
  },

  wa_erx_02: {
    de: {
      header: {
        title: 'eRX - E-Rezept (Aufgabe 2)'
      },
      content: {
        subtitle: 'Flow was!',
        description1: 'Du hast die erste Hürde gemeistert und dein E‑Rezept erfolgreich analysiert. Jetzt kommt der knifflige Teil: Damit die Apotheke den richtigen Prozess startet, muss der passende <code class="mi-k">E‑Rezept‑FlowType</code> angegeben werden.',
        description2: 'Klingt trocken? Keine Sorge – Medikamente gibt es nicht "nur" an der Tiki-Bar....',
        missionTitle: 'Deine Mission',
        missionDescription: 'Irgendwie ist der E-Rezept Typ verloren gegangen. Welcher <code class="mi-k">E‑Rezept‑FlowType</code> muss hier für ein Apothekenpflichtige Arzneimittel eingetragen werden?',
        infoTitle: 'Informationen zur Mission',
        structureTitle: 'Aufbau',
        structureBadge: 'E-Rezept ID',
        solutionLabel: 'Lösung',
        infoText: 'Vielleicht steht etwas darüber in der Spezifikation Datenmodell E-Rezept.'
      },
      help: {
        title: 'Überschrift',
        text: 'Verwende folgende Tools zur Analyse der Protokolle:'
      }
    },
    en: {
      header: {
        title: 'eRX - E-Prescription (Task 2)'
      },
      content: {
        subtitle: 'Flow what!',
        description1: 'You have mastered the first hurdle and successfully analyzed your e-prescription. Now comes the tricky part: So that the pharmacy starts the right process, the appropriate <code class="mi-k">e-prescription FlowType</code> must be specified.',
        description2: 'Sounds dry? Don\'t worry – medications aren\'t "only" available at the tiki bar....',
        missionTitle: 'Your Mission',
        missionDescription: 'Somehow the e-prescription type has been lost. Which <code class="mi-k">e-prescription FlowType</code> must be entered here for a pharmacy-only medication?',
        infoTitle: 'Mission Information',
        structureTitle: 'Structure',
        structureBadge: 'E-Prescription ID',
        solutionLabel: 'Solution',
        infoText: 'Perhaps something about it is in the data model e-prescription specification.'
      },
      help: {
        title: 'Heading',
        text: 'Use the following tools to analyze the protocols:'
      }
    }
  },

  wa_erx_03: {
    de: {
      header: {
        title: 'eRX - E-Rezept (Aufgabe 3)'
      },
      content: {
        subtitle: 'Abruf am Endpoint',
        description1: 'Sonne, Sand, Strand – der Urlaub läuft perfekt. Fast. Denn ohne dein Ibuprofen wird der Beach‑Volleyball schnell zur Schmerz‑Olympiade...',
        description2: 'Dein Arzt meldet sich fix zurück, aber statt eines fertigen QR‑Codes schickt er dir <code class="mi-code">Task.Id</code> und <code class="mi-k">„AccessCode"</code>.',
        description3: 'Kein Drama: Genau daraus baust du dir am Strand den <code class="mi-k" style="color:#065f46;">E‑Rezept‑Token</code> selbst und die Apotheke vor Ort kann es direkt einlösen.',
        missionTitle: 'Deine Mission',
        missionDescription: 'Setze aus <code class="mi-code">Task.Id</code> und <code class="mi-k">„AccessCode"</code> den gültigen <code class="mi-k" style="color:#065f46;">E‑Rezept‑Token</code> zusammen.',
        infoTitle: 'Informationen zur Mission',
        structureTitle: 'Aufbau',
        structureBadge: 'E‑Rezept‑Token',
        furtherInfoTitle: 'Weitere Informationen',
        solutionLabel: 'Lösung',
        infoText: 'Gesucht wird die Datenstruktur der Einlöseinformationen.<br><i>Alles nach: <code>2D-Code-Daten = </code></i>'
      },
      help: {
        title: 'Überschrift',
        text: 'Verwende folgende Tools zur Analyse der Protokolle:'
      }
    },
    en: {
      header: {
        title: 'eRX - E-Prescription (Task 3)'
      },
      content: {
        subtitle: 'Retrieval at the Endpoint',
        description1: 'Sun, sand, beach – the vacation is going perfectly. Almost. Because without your ibuprofen, beach volleyball quickly becomes a pain Olympics...',
        description2: 'Your doctor gets back to you quickly, but instead of a finished QR code, he sends you <code class="mi-code">Task.Id</code> and <code class="mi-k">"AccessCode"</code>.',
        description3: 'No drama: You build the <code class="mi-k" style="color:#065f46;">e-prescription token</code> yourself on the beach and the local pharmacy can redeem it directly.',
        missionTitle: 'Your Mission',
        missionDescription: 'Compose the valid <code class="mi-k" style="color:#065f46;">e-prescription token</code> from <code class="mi-code">Task.Id</code> and <code class="mi-k">"AccessCode"</code>.',
        infoTitle: 'Mission Information',
        structureTitle: 'Structure',
        structureBadge: 'E-Prescription Token',
        furtherInfoTitle: 'Further Information',
        solutionLabel: 'Solution',
        infoText: 'The data structure of the redemption information is sought.<br><i>Everything after: <code>2D code data = </code></i>'
      },
      help: {
        title: 'Heading',
        text: 'Use the following tools to analyze the protocols:'
      }
    }
  },

  wa_erx_04: {
    de: {
      header: {
        title: 'eRX - E-Rezept (Aufgabe 4)'
      },
      content: {
        subtitle: 'Der etwas andere QR Code',
        description1: 'Aus deinem <code class="mi-k" style="color:#065f46;">E‑Rezept‑Token</code> entsteht eine <code class="mi-k">DatenMatrix</code>, die jede Strand‑Apotheke flott scannen kann. Sauber, normgerecht und ohne Sonnenbrand - einmal generieren, überall einlösen.',
        description2: '<b>Compliance:</b> Beachte die gematik‑Spezifikation und die ISO‑Norm für DataMatrix.',
        basisTitle: 'Basis',
        copyButton: 'Kopieren',
        tokenBadge: 'E‑Rezept‑Token',
        missionTitle: '🛰️ Deine Mission',
        missionDescription: 'Erzeuge aus dem Token‑String eine DatenMatrix, die den gematik‑Spezifikationen für das <code class="mi-code">E‑Rezept‑Datenmodell</code> entspricht und konform zu <code class="mi-code">ISO/IEC 16022:2006</code> ist.',
        infoTitle: '🗒️ Informationen zur Mission',
        complianceTitle: 'Compliance',
        complianceBadge: 'DataMatrix · E‑Rezept',
        specificationsTitle: 'Spezifikationen und Normen',
        specItem1: 'E‑Rezept Datenmodell, Abschnitt 2.3.1: Datenträger/DataMatrix <a href="https://gemspec.gematik.de/docs/gemSpec/gemSpec_DM_eRp/latest/#2.3.1" target="_blank" rel="noopener noreferrer">gemSpec DM eRp 2.3.1</a>',
        specItem2: 'Anforderungen an den Einlösetoken/DataMatrix <a href="https://gemspec.gematik.de/docs/gemSpec/gemSpec_DM_eRp/latest/#A_19543" target="_blank" rel="noopener noreferrer">A_19543</a>',
        specItem3: 'DataMatrix‑Standard: <a href="https://www.iso.org/standard/44255.html" target="_blank" rel="noopener noreferrer">ISO/IEC 16022:2006</a>',
        tokenContentTitle: 'Inhalt des Codes (Token)',
        tokenItem1: 'Nutze den exakten Token‑String aus Aufgabe 3',
        tokenItem2: 'Keine Zeilenumbrüche, keine zusätzlichen Leerzeichen, <strong>UTF‑8</strong>‑Kodierung',
        technicalImplementationTitle: 'Technische Umsetzung (Empfehlungen)',
        technicalItem1: 'Symbol: <strong>DataMatrix ECC 200</strong> (entspricht ISO/IEC 16022:2006)',
        technicalItem2: 'Fehlerkorrektur: ECC 200 ist integriert; Modulgröße für Druck z. B. <strong>0.6–1.0 mm</strong>',
        technicalItem3: 'Quiet Zone: mindestens <strong>1 Modul</strong> (empfohlen <strong>2–4</strong>), hell (weiß)',
        technicalItem4: 'Kontrast: dunkle Module auf hellem Hintergrund, keine Muster im Hintergrund',
        technicalItem5: 'Größe: Smartphone‑Anzeige <strong>240–512 px</strong>; Druck z. B. <strong>25–35 mm</strong> Kantenlänge',
        practicalTitle: 'Praxis am Strand',
        practicalItem1: 'Generiere die DatenMatrix, teste sie mit einer Scanner‑App und zeige sie in der Strand‑Apotheke vor',
        practicalItem2: 'Achte darauf, dass die Anzeige hell genug und nicht spiegelnd ist',
        generatorTitle: 'DataMatrix generieren',
        generatorDescription: 'Du kannst einen DataMatrix Generator verwenden, um die Datenmatrix zu erstellen. <br>Zum Beispiel diesen hier:',
        solutionLabel: 'Lösung (Upload Solution File)',
        infoText: 'Erstelle eine E-Rezept DatenMatrix wie du ihn von deiner Ärztin erhalten würdest. Verwende dazu den String aus der vorherigen Aufgabe.'
      },
      nav: {
        subtitle: 'Die Abenteuer von KIM & TIM',
        title: 'Kapt. III – Guardians of the TI'
      },
      form: {
        solutionLabel: '🎯 Lösung (Upload Solution File)',
        infoText: 'Erstelle eine E-Rezept DatenMatrix wie du ihn von deiner Ärztin erhalten würdest. Verwende dazu den String aus der vorherigen Aufgabe.'
      },
      help: {
        close: 'Schließen',
        title: 'Überschrift',
        text: 'Verwende folgende Tools zur Analyse:'
      },
      common: {
        submit: 'Submit'
      }
    },
    en: {
      header: {
        title: 'eRX - E-Prescription (Task 4)'
      },
      content: {
        subtitle: 'The Somewhat Different QR Code',
        description1: 'From your <code class="mi-k" style="color:#065f46;">e-prescription token</code>, a <code class="mi-k">data matrix</code> is created that any beach pharmacy can quickly scan. Clean, standards-compliant, and without sunburn - generate once, redeem everywhere.',
        description2: '<b>Compliance:</b> Observe the gematik specification and the ISO standard for DataMatrix.',
        basisTitle: 'Basis',
        copyButton: 'Copy',
        tokenBadge: 'E-Prescription Token',
        missionTitle: '🛰️ Your Mission',
        missionDescription: 'Create a data matrix from the token string that complies with the gematik specifications for the <code class="mi-code">e-prescription data model</code> and conforms to <code class="mi-code">ISO/IEC 16022:2006</code>.',
        infoTitle: '🗒️ Mission Information',
        complianceTitle: 'Compliance',
        complianceBadge: 'DataMatrix · E-Prescription',
        specificationsTitle: 'Specifications and Standards',
        specItem1: 'E-prescription data model, section 2.3.1: Data carrier/DataMatrix <a href="https://gemspec.gematik.de/docs/gemSpec/gemSpec_DM_eRp/latest/#2.3.1" target="_blank" rel="noopener noreferrer">gemSpec DM eRp 2.3.1</a>',
        specItem2: 'Requirements for the redemption token/DataMatrix <a href="https://gemspec.gematik.de/docs/gemSpec/gemSpec_DM_eRp/latest/#A_19543" target="_blank" rel="noopener noreferrer">A_19543</a>',
        specItem3: 'DataMatrix standard: <a href="https://www.iso.org/standard/44255.html" target="_blank" rel="noopener noreferrer">ISO/IEC 16022:2006</a>',
        tokenContentTitle: 'Code Content (Token)',
        tokenItem1: 'Use the exact token string from task 3',
        tokenItem2: 'No line breaks, no additional spaces, <strong>UTF-8</strong> encoding',
        technicalImplementationTitle: 'Technical Implementation (Recommendations)',
        technicalItem1: 'Symbol: <strong>DataMatrix ECC 200</strong> (corresponds to ISO/IEC 16022:2006)',
        technicalItem2: 'Error correction: ECC 200 is integrated; module size for printing e.g. <strong>0.6–1.0 mm</strong>',
        technicalItem3: 'Quiet Zone: at least <strong>1 module</strong> (recommended <strong>2–4</strong>), light (white)',
        technicalItem4: 'Contrast: dark modules on light background, no patterns in the background',
        technicalItem5: 'Size: smartphone display <strong>240–512 px</strong>; print e.g. <strong>25–35 mm</strong> edge length',
        practicalTitle: 'Practice on the Beach',
        practicalItem1: 'Generate the data matrix, test it with a scanner app and present it at the beach pharmacy',
        practicalItem2: 'Make sure the display is bright enough and not reflective',
        generatorTitle: 'Generate DataMatrix',
        generatorDescription: 'You can use a DataMatrix generator to create the data matrix. <br>For example, this one:',
        solutionLabel: 'Solution (Upload Solution File)',
        infoText: 'Create an e-prescription data matrix as you would receive it from your doctor. Use the string from the previous task for this.'
      },
      nav: {
        subtitle: 'The Adventures of KIM & TIM',
        title: 'Chapt. III – Guardians of the TI'
      },
      form: {
        solutionLabel: '🎯 Solution (Upload Solution File)',
        infoText: 'Create an e-prescription data matrix as you would receive it from your doctor. Use the string from the previous task for this.'
      },
      help: {
        close: 'Close',
        title: 'Heading',
        text: 'Use the following tools for analysis:'
      },
      common: {
        submit: 'Submit'
      }
    }
  },

  wa_erx_05: {
    de: {
      header: {
        title: 'eRX - E-Rezept (Aufgabe 5)'
      },
      content: {
        description1: 'Strandtag gerettet: Dein Ibuprofen ist abgeholt, die Sonne scheint, die Wellen rauschen. Jetzt fehlt nur der letzte Schritt, damit alles offiziell ist: Die Apotheke muss bestätigen, dass dein E‑Rezept tatsächlich eingelöst wurde.',
        description2: 'Keine Sorge – mit einem kurzen Call an den passenden Endpunkt holst du dir die <code class="mi-code">Transaktions‑ID</code> und schließt die Mission ab.',
        missionTitle: 'Deine Mission',
        missionDescription: 'Fordere die Transaktions‑ID der Apotheke an, um die Einlösung des E‑Rezepts zu bestätigen.',
        infoTitle: 'Informationen zur Mission',
        basisTitle: 'Basis',
        copyButton: 'Kopieren',
        tokenBadge: 'E‑Rezept‑Token',
        confirmationTitle: 'Bestätigung der Einlösung',
        confirmationBadge: 'Transaktions‑ID via $eu‑close',
        specificationTitle: 'Spezifikation',
        specItem1: 'Spezifikation des E‑Rezept‑Dokuments: <a href="https://gemspec.gematik.de/docs/gemSpec/gemSpec_DM_eRp/latest/#741-e-rezept-dokument" target="_blank" rel="noopener noreferrer"><strong>gemSpec – Abschnitt 7.4.1</strong></a>',
        prerequisitesTitle: 'Voraussetzungen',
        prerequisite1: 'FQDN der Apotheke/Dispense‑Instanz',
        prerequisite2: 'Task.id deines E‑Rezepts (z. B. aus dem Token)',
        prerequisite3: 'Ggf. erforderliche Authentisierung/Headers gemäß Umgebung',
        requestTitle: 'Request',
        requestItem1: 'URL: <code>https://5af8d53e05.ctfd.gematik.de/Task/&lt;id&gt;/$eu-close</code>',
        requestItem2: 'Methode: <strong>POST</strong> (oder <strong>GET</strong>)',
        requestItem3: 'Inhalt: Kein Body nötig, sofern Spezifikation und Umgebung dies so vorsehen',
        successCriteriaTitle: 'Erfolgskriterium',
        successCriteriaItem1: 'Response enthält die <strong>Transaktions‑ID</strong>',
        successCriteriaItem2: 'Mit dieser ID ist der Abschluss dokumentiert und das Rezept als <strong>dispensiert</strong> markiert',
        practicalTitle: 'Strand‑Praxis',
        practicalItem1: 'Führe den Call aus, prüfe die Transaktions‑ID, bewahre sie sicher auf (Screenshot/Notiz)',
        practicalItem2: 'Bei schlechter Verbindung: Wiederholen oder auf WLAN der Strandbar ausweichen – Hauptsache, die Bestätigung kommt durch',
        solutionLabel: 'Lösung',
        infoText: 'Gib die Transaktions‑ID an, die du beim Aufrufen des Endpunkts erhältst.'
      },
      form: {
        solutionLabel: '🎯 Lösung',
        infoText: 'Gib die Transaktions‑ID an, die du beim Aufrufen des Endpunkts erhältst.'
      },
      help: {
        close: 'Schließen',
        title: 'Überschrift',
        text: 'Verwende folgende Tools zur Analyse:'
      },
      common: {
        submit: 'Submit'
      }
    },
    en: {
      header: {
        title: 'eRX - E-Prescription (Task 5)'
      },
      content: {
        description1: 'Beach day saved: Your ibuprofen has been picked up, the sun is shining, the waves are rushing. Now only the last step is missing for everything to be official: The pharmacy must confirm that your e-prescription has actually been redeemed.',
        description2: 'No worries – with a quick call to the appropriate endpoint, you get the <code class="mi-code">transaction ID</code> and complete the mission.',
        missionTitle: 'Your Mission',
        missionDescription: 'Request the pharmacy\'s transaction ID to confirm the redemption of the e-prescription.',
        infoTitle: 'Mission Information',
        basisTitle: 'Basis',
        copyButton: 'Copy',
        tokenBadge: 'E-Prescription Token',
        confirmationTitle: 'Redemption Confirmation',
        confirmationBadge: 'Transaction ID via $eu-close',
        specificationTitle: 'Specification',
        specItem1: 'Specification of the e-prescription document: <a href="https://gemspec.gematik.de/docs/gemSpec/gemSpec_DM_eRp/latest/#741-e-rezept-dokument" target="_blank" rel="noopener noreferrer"><strong>gemSpec – Section 7.4.1</strong></a>',
        prerequisitesTitle: 'Prerequisites',
        prerequisite1: 'FQDN of the pharmacy/dispense instance',
        prerequisite2: 'Task.id of your e-prescription (e.g., from the token)',
        prerequisite3: 'If necessary, required authentication/headers according to environment',
        requestTitle: 'Request',
        requestItem1: 'URL: <code>https://5af8d53e05.ctfd.gematik.de/Task/&lt;id&gt;/$eu-close</code>',
        requestItem2: 'Method: <strong>POST</strong> (or <strong>GET</strong>)',
        requestItem3: 'Content: No body required, provided the specification and environment allow this',
        successCriteriaTitle: 'Success Criterion',
        successCriteriaItem1: 'Response contains the <strong>transaction ID</strong>',
        successCriteriaItem2: 'With this ID, the completion is documented and the prescription is marked as <strong>dispensed</strong>',
        practicalTitle: 'Beach Practice',
        practicalItem1: 'Execute the call, check the transaction ID, keep it safe (screenshot/note)',
        practicalItem2: 'If the connection is poor: Retry or switch to the beach bar WLAN – the main thing is that the confirmation comes through',
        solutionLabel: 'Solution',
        infoText: 'Provide the transaction ID you receive when calling the endpoint.'
      },
      form: {
        solutionLabel: '🎯 Solution',
        infoText: 'Provide the transaction ID you receive when calling the endpoint.'
      },
      help: {
        close: 'Close',
        title: 'Heading',
        text: 'Use the following tools for analysis:'
      },
      common: {
        submit: 'Submit'
      }
    }
  },

  wa_tim_00: {
    de: {
      header: {
        title: 'TI-Messenger'
      },
      content: {
        whatIs: 'Was ist das?',
        description: 'Der <b>TI-Messenger</b> ist der Kurznachrichtendienst für das Gesundheitswesen in Deutschland',
        featuresTitle: 'Funktionen und Vorteile von TIM',
        featuresDescription: '<b>TIM</b> bietet viele praktische Funktionen, die den Arbeitsalltag erleichtern: Gruppen-Chats für Teams, Versand von Bildern und Dokumenten, sowie die Möglichkeit, direkt mit Kolleg:innen oder Patient:innen zu kommunizieren. Alle Teilnehmer werden eindeutig über die TI identifiziert, sodass keine unbefugten Personen Zugriff haben.',
        feature1: 'Ende-zu-Ende-Verschlüsselung für maximale Sicherheit.',
        feature2: 'Gruppen- und Einzelchats für flexible Kommunikation.',
        feature3: 'Integration in bestehende Praxis- und Krankenhaussoftware.',
        feature4: 'Datenschutz und Vertraulichkeit sind jederzeit gewährleistet.',
        moreInfoText: 'Weitere Informationen und technische Details findest du im <a href="https://fachportal.gematik.de/anwendungen/ti-messenger" target="_blank" rel="noopener">Fachportal</a> der gematik.',
        technicalBasis: 'Technische Basis',
        techPoint1: '<b>TIM</b> basiert auf dem offenen <b>Matrix-Protokoll</b>, das von der Matrix.org Foundation entwickelt wurde.',
        techPoint2: 'Open-Source-Implementierungen sind in Behörden, Bundeswehr und Bildungswesen im Einsatz.',
        techPoint3: 'Vorteile: moderne Sicherheitsstandards, Interoperabilität, flexible und skalierbare Infrastruktur.',
        vzdTitle: 'Verzeichnisdienst (VZD)',
        vzdDescription: 'Der <b>Verzeichnisdienst (VZD)</b> ist das zentrale Adressbuch für die Telematikinfrastruktur (TI). Über den <b>VZD</b> finden Sie die Kontaktdaten anderer medizinischer Einrichtungen schnell und einfach. So können Sie per <b>KIM</b> oder <b>TI-Messenger</b> ohne Umwege in den Austausch mit Kolleginnen oder Kollegen treten. Außerdem werden im <b>VZD</b> Basisdaten (bspw. Adressdaten und Zertifikate) von Leistungserbringern wie Ärztinnen und Ärzten, Apothekerinnen und Apothekern sowie von Organisationen des Gesundheitswesens bereitgestellt.',
        variantsTitle: 'Produktvarianten',
        proDescription: 'Einfache, sektorenübergreifende Ad-hoc-Kommunikation zwischen den Heilberufen',
        epaDescription: 'Kommunikation zwischen Heilberufen und Versicherten sowie Austausch zwischen Versicherten und Kassen',
        connectDescription: 'Austausch per Videochat und Videosprechstunden.',
        sourceGematikTIM: '<i>Quelle: <a href="https://fachportal.gematik.de/anwendungen/ti-messenger" target="_blank" rel="noopener">Gematik Fachportal – TI-Messenger</a></i>'
      },
      help: {
        text: 'Auf der folgenden Seite findest du einen Hinweis dazu:'
      }
    },
    en: {
      header: {
        title: 'TI Messenger'
      },
      content: {
        whatIs: 'What is it?',
        description: 'The <b>TI Messenger</b> is the instant messaging service for the healthcare sector in Germany',
        featuresTitle: 'Features and Benefits of TIM',
        featuresDescription: '<b>TIM</b> offers many practical features that make everyday work easier: group chats for teams, sending images and documents, as well as the ability to communicate directly with colleagues or patients. All participants are uniquely identified via the TI, so no unauthorized persons have access.',
        feature1: 'End-to-end encryption for maximum security.',
        feature2: 'Group and individual chats for flexible communication.',
        feature3: 'Integration into existing practice and hospital software.',
        feature4: 'Data protection and confidentiality are guaranteed at all times.',
        moreInfoText: 'Further information and technical details can be found in the gematik <a href="https://fachportal.gematik.de/anwendungen/ti-messenger" target="_blank" rel="noopener">specialist portal</a>.',
        technicalBasis: 'Technical Foundation',
        techPoint1: '<b>TIM</b> is based on the open <b>Matrix protocol</b>, developed by the Matrix.org Foundation.',
        techPoint2: 'Open-source implementations are in use in government agencies, the military, and education.',
        techPoint3: 'Advantages: modern security standards, interoperability, flexible and scalable infrastructure.',
        vzdTitle: 'Directory Service (VZD)',
        vzdDescription: 'The <b>Directory Service (VZD)</b> is the central address book for the telematics infrastructure (TI). Through the <b>VZD</b>, you can quickly and easily find the contact details of other medical facilities. This allows you to communicate with colleagues via <b>KIM</b> or <b>TI Messenger</b> without detours. In addition, the <b>VZD</b> provides basic data (e.g., address data and certificates) from healthcare providers such as doctors, pharmacists, and healthcare organizations.',
        variantsTitle: 'Product Variants',
        proDescription: 'Simple, cross-sector ad-hoc communication between healthcare professionals',
        epaDescription: 'Communication between healthcare professionals and insured persons as well as exchange between insured persons and health insurance funds',
        connectDescription: 'Exchange via video chat and video consultations.',
        sourceGematikTIM: '<i>Source: <a href="https://fachportal.gematik.de/anwendungen/ti-messenger" target="_blank" rel="noopener">Gematik Specialist Portal – TI Messenger</a></i>'
      },
      help: {
        text: 'On the following page you will find a hint:'
      }
    }
  },

  wa_tim_01: {
    de: {
      header: {
        title: 'TI-Messenger (Aufgabe 1)'
      },
      content: {
        subtitle: 'Mist, verklickt, mal wieder mit dem Finger ausgerutscht...',
        scenario: 'Larissa hat aus Versehen ein peinliches Partyfoto an ihre Hautärztin gesendet – statt der Biopsieergebnisse.',
        question: 'Sie möchte wissen, ob die Nachricht gelöscht werden kann... Kannst du ihr helfen?'
      },
      mission: {
        description: 'Prüfe die Anforderungen in der TI‑Messenger‑Basis­spezifikation, um die passende Vorgabe zu finden, in welcher so eine Funktionalität verankert sein könnte.'
      },
      form: {
        solutionLabel: 'Lösung',
        placeholder: 'A_12345'
      },
      info: {
        text: 'Wir suchen hier die AFO (Anforderung) für diese Funktion.<br>Das Format ist: <strong>A_XXXXX</strong><br><br><em>Tipp:</em> Schau mal im <a href="https://gemspec.gematik.de/" target="_blank" rel="noopener">Gemspec Portal</a> der gematik nach der Spezifikation TI-Messenger (Basis).'
      },
      help: {
        text: 'Auf der folgenden Seite findest du einen Hinweis dazu:'
      }
    },
    en: {
      header: {
        title: 'TI Messenger (Task 1)'
      },
      content: {
        subtitle: 'Darn, misclicked, finger slipped again...',
        scenario: 'Larissa accidentally sent an embarrassing party photo to her dermatologist – instead of the biopsy results.',
        question: 'She wants to know if the message can be deleted... Can you help her?'
      },
      mission: {
        description: 'Check the requirements in the TI Messenger base specification to find the appropriate provision where such functionality could be anchored.'
      },
      form: {
        solutionLabel: 'Solution',
        placeholder: 'A_12345'
      },
      info: {
        text: 'We are looking for the AFO (requirement) for this function.<br>The format is: <strong>A_XXXXX</strong><br><br><em>Tip:</em> Take a look at the gematik <a href="https://gemspec.gematik.de/" target="_blank" rel="noopener">Gemspec portal</a> for the TI Messenger (Base) specification.'
      },
      help: {
        text: 'On the following page you will find a hint:'
      }
    }
  },

  wa_tim_02: {
    de: {
      header: {
        title: 'TI-Messenger (Aufgabe 2)'
      },
      content: {
        taskTitle: 'Welche Nachricht ist gültig?',
        scenario: 'Während eines Serverausfalls koordiniert das Team die Behandlung von Patient Heinrich Böll per TI‑Messenger. Der Chefarzt hebt temporär Berechtigungen an, damit das Pflege-Team den Raum für die Reanimation kennzeichnen kann.'
      },
      mission: {
        description: 'Identifiziere aus den eingehenden Events die zulässigen Aktionen.'
      },
      info: {
        powerLevelTitle: 'PowerLevel',
        powerLevelDescription: 'Power Level (deutsch: „Berechtigungsstufe" oder „Machtlevel") bezeichnet das Rechte- und Rollensystem innerhalb eines Raumes (Room). Es handelt sich um ein numerisches Rechtemodell, das festlegt, welche Aktionen ein Nutzer in einem Raum durchführen darf.',
        processingTitle: 'Abarbeitung',
        sortingTitle: '1) Sortierung',
        sortStep1: 'timestamp (aufsteigend)',
        sortStep2: 'Power Level Events zuerst',
        sortStep3: 'Event-ID (alphabetisch)',
        checkTitle: '2) Berechtigungen prüfen',
        text: 'Folge den Schritten aus der Abarbeitungsdefinition'
      },
      form: {
        messagesTitle: 'Messages (Drag & Drop zum Sortieren)'
      },
      help: {
        text: 'Auf der folgenden Seite findest du einen Hinweis dazu:',
        tip: 'Tipp:',
        tipText: 'Schau mal im <a href="https://fachportal.gematik.de/anwendungen/ti-messenger" target="_blank" rel="noopener">Fachportal</a> der gematik zum TI-Messenger.'
      }
    },
    en: {
      header: {
        title: 'TI Messenger (Task 2)'
      },
      content: {
        taskTitle: 'Which message is valid?',
        scenario: 'During a server outage, the team coordinates the treatment of patient Heinrich Böll via TI Messenger. The chief physician temporarily raises permissions so that the nursing team can mark the room for resuscitation.'
      },
      mission: {
        description: 'Identify the permissible actions from the incoming events.'
      },
      info: {
        powerLevelTitle: 'PowerLevel',
        powerLevelDescription: 'Power Level refers to the rights and role system within a room. It is a numerical permission model that determines which actions a user may perform in a room.',
        processingTitle: 'Processing',
        sortingTitle: '1) Sorting',
        sortStep1: 'timestamp (ascending)',
        sortStep2: 'Power Level Events first',
        sortStep3: 'Event-ID (alphabetical)',
        checkTitle: '2) Check permissions',
        text: 'Follow the steps from the processing definition'
      },
      form: {
        messagesTitle: 'Messages (Drag & Drop to sort)'
      },
      help: {
        text: 'On the following page you will find a hint:',
        tip: 'Tip:',
        tipText: 'Take a look at the gematik <a href="https://fachportal.gematik.de/anwendungen/ti-messenger" target="_blank" rel="noopener">specialist portal</a> for TI Messenger.'
      }
    }
  },

  wa_tim_03: {
    de: {
      header: {
        title: 'TI-Messenger (Aufgabe 3)'
      },
      content: {
        taskTitle: 'Federation Fakes',
        alertTitle: 'Alarmstufe Rot!',
        alertText1: 'Jemand hat sich in unseren hochsicheren Kommunikationsraum eingeschlichen...',
        alertText2: '...und liest Staatsgeheimnisse mit.'
      },
      mission: {
        description: 'Identifiziere den Maulwurf und melde ihn an die zuständigen Autoritäten. Bleib ruhig, arbeite präzise – und vertraue deinen Augen nicht blind, denn der Angreifer spielt mit subtilen Zeichen.'
      },
      info: {
        description: 'Wir haben Zugriff auf die aktuellen Raumteilnehmer (<code><a href="files/TIM.wa.3/room_members.json" target="_blank" rel="noopener noreferrer">room_members.json</a></code>) und eine signierte, zugelassene Föderationsliste (<code><a href="files/TIM.wa.3/fedlist-jws.txt" target="_blank" rel="noopener noreferrer">fedlist-jws.txt</a></code>). Deine Aufgabe ist es, die Teilnehmer im Raum gegen die zugelassene Föderationsliste abzugleichen und potenzielle Manipulationen aufzudecken.',
        instruction1: 'Vergleiche alle MXIDs aus <code class="mi-k">room_members.json</code> mit den zulässigen Einträgen aus <code class="mi-k">fedlist-jws.txt</code>.',
        instruction2: 'Markiere Teilnehmer, die nicht in der Föderationsliste enthalten sind oder deren MXID von der zugelassenen Schreibweise abweicht.',
        instruction3: 'Achte besonders auf Homograph-Angriffe',
        text: 'Die Antwort ist die <code class="mi-code">mxid</code> des Intruders.'
      },
      form: {
        solutionLabel: 'Lösung (Upload Solution File)',
        placeholder: '@username:homeserver.tld'
      },
      help: {
        close: 'Schließen',
        furtherInfo: 'Weitere Infos',
        text: 'Auf der folgenden Seite findest du einen Hinweis dazu:',
        link1: 'matrix.org – MXID',
        link2: 'CyberChef – Datenanalyse, Encoding/Decoding',
        link3: 'Unicode Confusables – Homoglyphen erkennen (til.unicode.org)'
      }
    },
    en: {
      header: {
        title: 'TI Messenger (Task 3)'
      },
      content: {
        taskTitle: 'Federation Fakes',
        alertTitle: 'Red Alert!',
        alertText1: 'Someone has infiltrated our highly secure communication room...',
        alertText2: '...and is reading state secrets.'
      },
      mission: {
        description: 'Identify the mole and report them to the appropriate authorities. Stay calm, work precisely – and don\'t blindly trust your eyes, as the attacker is playing with subtle characters.'
      },
      info: {
        description: 'We have access to the current room members (<code><a href="files/TIM.wa.3/room_members.json" target="_blank" rel="noopener noreferrer">room_members.json</a></code>) and a signed, approved federation list (<code><a href="files/TIM.wa.3/fedlist-jws.txt" target="_blank" rel="noopener noreferrer">fedlist-jws.txt</a></code>). Your task is to compare the participants in the room against the approved federation list and uncover potential manipulations.',
        instruction1: 'Compare all MXIDs from <code class="mi-k">room_members.json</code> with the authorized entries from <code class="mi-k">fedlist-jws.txt</code>.',
        instruction2: 'Mark participants who are not in the federation list or whose MXID deviates from the authorized spelling.',
        instruction3: 'Pay special attention to homograph attacks',
        text: 'The answer is the <code class="mi-code">mxid</code> of the intruder.'
      },
      form: {
        solutionLabel: 'Solution (Upload Solution File)',
        placeholder: '@username:homeserver.tld'
      },
      help: {
        close: 'Close',
        furtherInfo: 'Further Information',
        text: 'On the following page you can find a hint about this:',
        link1: 'matrix.org – MXID',
        link2: 'CyberChef – Data Analysis, Encoding/Decoding',
        link3: 'Unicode Confusables – Detect Homoglyphs (til.unicode.org)'
      }
    }
  },

  wa_tim_04: {
    de: {
      header: {
        title: 'TI-Messenger (Aufgabe 4)'
      },
      content: {
        subtitle: 'Deprecation Derby',
        description: 'TIM hat ein sensibles Bild in einem Matrix Raum hochgeladen... Nun will KIM versuchen, die Informationen aus den Bildern zu stehlen. KIM weiß, dass es eine Weile her gewesen sein muss...',
        missionTitle: 'Deine Mission',
        missionDescription: 'Finde das Bild und rette die Welt!',
        infoTitle: 'Informationen zur Mission',
        infoDescription1: 'Du hast eine <code class="mi-code">AttachmentID</code> erhalten und Zugriff auf einen Dienst, der mehrere Endpoints nach Matrix-Spezifikation für den Mediendownload anbietet. <b>Deine Mission:</b> Finde den korrekten Download-Endpoint, hänge die <code class="mi-code">AttachmentID</code> an und liefere das Bild beim WA-Flag Service ab.',
        infoDescription2: 'Triffst du ins Schwarze, verifiziert der Dienst das Bild per Hash aus. Einfach? Fast. Du musst noch die richtige Route wählen...',
        connectionDetailsTitle: 'Connection Details',
        timEndpointsTitle: 'TI-Messenger Endpunkte für Medien:',
        solutionLabel: 'Lösung',
        infoText: 'Die Antwort ist der <code>MD5 Hash</code> des Bildes'
      },
      help: {
        title: 'Weitere Infos',
        text: 'Auf der folgenden Seite findest du einen Hinweis dazu:',
        tip: '<em>Tipp:</em> Schau mal im <a href="https://fachportal.gematik.de/anwendungen/ti-messenger" target="_blank" rel="noopener">Fachportal</a> der gematik zum TI-Messenger.'
      }
    },
    en: {
      header: {
        title: 'TI Messenger (Task 4)'
      },
      content: {
        subtitle: 'Deprecation Derby',
        description: 'TIM uploaded a sensitive image to a Matrix room... Now KIM wants to try to steal the information from the images. KIM knows it must have been a while ago...',
        missionTitle: 'Your Mission',
        missionDescription: 'Find the image and save the world!',
        infoTitle: 'Mission Information',
        infoDescription1: 'You have received an <code class="mi-code">AttachmentID</code> and access to a service that offers multiple endpoints according to Matrix specification for media download. <b>Your mission:</b> Find the correct download endpoint, append the <code class="mi-code">AttachmentID</code>, and deliver the image to the WA flag service.',
        infoDescription2: 'If you hit the bullseye, the service verifies the image by hash. Easy? Almost. You still have to choose the right route...',
        connectionDetailsTitle: 'Connection Details',
        timEndpointsTitle: 'TI Messenger endpoints for media:',
        solutionLabel: 'Solution',
        infoText: 'The answer is the <code>MD5 hash</code> of the image'
      },
      help: {
        title: 'Further Information',
        text: 'On the following page you will find a hint:',
        tip: '<em>Tip:</em> Take a look at the gematik <a href="https://fachportal.gematik.de/anwendungen/ti-messenger" target="_blank" rel="noopener">specialist portal</a> for TI Messenger.'
      }
    }
  },

  wa_tim_05: {
    de: {
      header: {
        title: 'TI-Messenger (Aufgabe 5)'
      },
      content: {
        subtitle: 'Chatbot Commotion',
        description: 'TIM will einer Sprechstundenhilfe zeigen wie Patienten den Diensthabenden Arzt finden können, doch der Chatbot wehrt sich!',
        missionTitle: 'Deine Mission',
        missionDescription: 'Hilf der Sprechstundenhilfe dabei, den diensthabenden Arzt zu finden und überliste den Chatbot!',
        infoTitle: 'Informationen zur Mission',
        infoDescription: 'Bringe den Chatbot dazu, die Informationen zu verraten...',
        authInfoTitle: '🔐 Authentifizierung',
        authInfoText: 'Der AUTH_KEY wurde dir per E-Mail zugeschickt. Du benötigst ihn, um auf den Chatbot zugreifen zu können.',
        rateLimitsTitle: '⚠️ Rate Limits',
        rateLimitsIntro: 'Beachte die folgenden Limitierungen:',
        rateLimit1: 'Ratelimiting: Maximal eine Anfrage pro AUTH_KEY alle 10 Sekunden',
        rateLimit2: 'Token-Limit: Maximal 3000 Tokens pro AUTH_KEY (alle 5 Minuten werden 250 Tokens aufgefüllt)',
        authRequired: '🔑 Authentifizierung erforderlich',
        authKeyLabel: 'AUTH_KEY',
        authKeyPlaceholder: 'Geben Sie Ihren AUTH_KEY ein...',
        connectButton: 'Mit Chatbot verbinden',
        chatHeaderTitle: 'Chatbot Assistant',
        chatWelcome: 'Welcome to Praxis Dr. Müller! I answer all questions regarding our medical service!',
        chatPlaceholder: 'Stelle eine Frage...',
        chatSendButton: 'Senden',
        solutionLabel: 'Lösung',
        infoText: 'Die Antwort ist der <br><code>Doctor on duty</code>'
      },
      help: {
        title: 'Weitere Infos',
        text: 'Auf der folgenden Seite findest du einen Hinweis dazu:',
        tip: '<em>Tipp:</em> Schau mal im <a href="https://fachportal.gematik.de/anwendungen/ti-messenger" target="_blank" rel="noopener">Fachportal</a> der gematik zum TI-Messenger.'
      }
    },
    en: {
      header: {
        title: 'TI Messenger (Task 5)'
      },
      content: {
        subtitle: 'Chatbot Commotion',
        description: 'TIM wants to show a medical assistant how patients can find the doctor on duty, but the chatbot resists!',
        missionTitle: 'Your Mission',
        missionDescription: 'Help the medical assistant find the doctor on duty and outsmart the chatbot!',
        infoTitle: 'Mission Information',
        infoDescription: 'Get the chatbot to reveal the information...',
        authInfoTitle: '🔐 Authentication',
        authInfoText: 'The AUTH_KEY was sent to you via email. You need it to access the chatbot.',
        rateLimitsTitle: '⚠️ Rate Limits',
        rateLimitsIntro: 'Please note the following limitations:',
        rateLimit1: 'Rate limiting: Maximum one request per AUTH_KEY every 10 seconds',
        rateLimit2: 'Token limit: Maximum 3000 tokens per AUTH_KEY (250 tokens are topped up every 5 minutes)',
        authRequired: '🔑 Authentication Required',
        authKeyLabel: 'AUTH_KEY',
        authKeyPlaceholder: 'Enter your AUTH_KEY...',
        connectButton: 'Connect to Chatbot',
        chatHeaderTitle: 'Chatbot Assistant',
        chatWelcome: 'Welcome to Praxis Dr. Müller! I answer all questions regarding our medical service!',
        chatPlaceholder: 'Ask a question...',
        chatSendButton: 'Send',
        solutionLabel: 'Solution',
        infoText: 'The answer is the <br><code>Doctor on duty</code>'
      },
      help: {
        title: 'Further Information',
        text: 'On the following page you will find a hint:',
        tip: '<em>Tip:</em> Take a look at the gematik <a href="https://fachportal.gematik.de/anwendungen/ti-messenger" target="_blank" rel="noopener">specialist portal</a> for TI Messenger.'
      }
    }
  }
};

/**
 * Merge common and page-specific translations
 * @param {string} pageName - Name of the page
 * @returns {Object} Complete translations for the page
 */
function getPageTranslations(pageName) {
  const pageData = pageTranslations[pageName] || {};

  return {
    de: { ...commonTranslations.de, ...pageData.de },
    en: { ...commonTranslations.en, ...pageData.en }
  };
}

// Export for use in HTML pages
if (typeof window !== 'undefined') {
  window.getPageTranslations = getPageTranslations;
  window.pageTranslations = pageTranslations;
  window.commonTranslations = commonTranslations;
}
