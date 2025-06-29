function entschluesselnBild() {
				var passwort = document.getElementById("passwordInput").value;
				var pruefung = caesarPruefung(passwort, 3); // Prüfung mit Caesar-Chiffre um 3 verschoben
	
				if (pruefung) {
					document.getElementById("computer").src = "./img/computer.png";
					document.getElementById("computer").style.display = "block";
                    document.getElementById("info_text").style.display = "block";
				} else {
					alert("Falsches Passwort. Zugriff verweigert.");
				}
			}	

			function caesarPruefung(passwort, verschluesselung) {
				
				// Die Caesar-Chiffre Funktion
				function caesarChiffre(str, num) {
					num = num % 26;
					var lowercaseString = str.toLowerCase();
					var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
					var verschluesselteString = '';

					for (var i = 0; i < lowercaseString.length; i++) {
						var aktuellerBuchstabe = lowercaseString[i];
						if (aktuellerBuchstabe === ' ') {
							verschluesselteString += aktuellerBuchstabe;
							continue;
						}
						var aktuellerIndex = alphabet.indexOf(aktuellerBuchstabe);
						var newIndex = aktuellerIndex + num;
						if (newIndex > 25) newIndex = newIndex - 26;
						if (newIndex < 0) newIndex = newIndex + 26;
						if (str[i] === str[i].toUpperCase()) {
							verschluesselteString += alphabet[newIndex].toUpperCase();
						}
						else verschluesselteString += alphabet[newIndex];
					}

					return verschluesselteString;
				}
				var withNoDigits = passwort.replace(/[0-9]/g, '');				

				return caesarChiffre(withNoDigits, 3) === 'nlp';
			}