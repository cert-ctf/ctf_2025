import os

# Neue Eingabedateien (wie von dir oben definiert)
input_file_map_gematik = 'dist/map_gematik.tmj'
input_file_map_floor1  = 'dist/map_floor1.tmj'
input_file_map_floor2  = 'dist/map_floor2.tmj'
input_file_map_floor3  = 'dist/map_floor3.tmj'  
input_file_map_epa     = 'dist/map_epa.tmj'
input_file_map_erx     = 'dist/map_erx.tmj'
input_file_map_kim     = 'dist/map_kim.tmj'
input_file_map_tim     = 'dist/map_tim.tmj'

output_folder = "."
map_count = 108

# Hilfsfunktionen
def read_map(map_name):
    try:
        with open(map_name, 'r', encoding='utf-8') as file:
            data = file.read()
        return data
    except FileNotFoundError:
        print(f'Die Datei {map_name} konnte nicht gefunden werden.')
        exit(1)

def write_map(map_file, data):
    try:
        with open(map_file, 'w', encoding='utf-8') as file:
            file.write(data)
        print(f'Daten geschrieben: {map_file}')
    except Exception as e:
        print(f'Fehler beim Schreiben in die Datei {map_file}: {e}')

# Dateien lesen
file_map_gematik = read_map(input_file_map_gematik)
file_map_floor1  = read_map(input_file_map_floor1)
file_map_floor2  = read_map(input_file_map_floor2)
file_map_floor3  = read_map(input_file_map_floor3)
file_map_epa     = read_map(input_file_map_epa)
file_map_erx     = read_map(input_file_map_erx)
file_map_kim     = read_map(input_file_map_kim)
file_map_tim     = read_map(input_file_map_tim)

# Output-Ordner erstellen
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Ersetzungslogik:
# Passe die Platzhalter in den .tmj-Dateien an deine Ziel-URLs an.
# Unten sind Beispiele – ersetze die Platzhalter-Namen ("map_floor1.tmj", ...) so,
# wie sie tatsächlich in deinen TMJ-Dateien referenziert werden.
for i in range(1, map_count + 1):
    team = f"team_{str(i).zfill(2)}"
    base = f"https://play.workadventu.re/@/gematik/ti-guardians/{team}"

    # gematik Hauptkarte: verweist auf Floors
    modified_map_gematik = (file_map_gematik
        .replace("map_floor1.tmj", f"{base}_floor1")
        .replace("map_floor2.tmj", f"{base}_floor2")
        .replace("map_floor3.tmj", f"{base}_floor3")
        .replace("map_epa.tmj",    f"{base}_epa")
        .replace("map_erx.tmj",    f"{base}_erx")
        .replace("map_kim.tmj",    f"{base}_kim")
        .replace("map_tim.tmj",    f"{base}_tim")
    )

    # floor1: Backlinks oder weitere Türen
    modified_map_floor1 = (file_map_floor1
        .replace("map_gematik.tmj", f"{base}_gematik")
        .replace("map_floor2.tmj",  f"{base}_floor2")
        .replace("map_floor3.tmj",  f"{base}_floor3")
        .replace("map_epa.tmj",     f"{base}_epa")
        .replace("map_erx.tmj",     f"{base}_erx")
        .replace("map_kim.tmj",     f"{base}_kim")
        .replace("map_tim.tmj",     f"{base}_tim")
    )

    # floor2
    modified_map_floor2 = (file_map_floor2
        .replace("map_gematik.tmj", f"{base}_gematik")
        .replace("map_floor1.tmj",  f"{base}_floor1")
        .replace("map_floor3.tmj",  f"{base}_floor3")
        .replace("map_epa.tmj",     f"{base}_epa")
        .replace("map_erx.tmj",     f"{base}_erx")
        .replace("map_kim.tmj",     f"{base}_kim")
        .replace("map_tim.tmj",     f"{base}_tim")
    )

    # floor3
    modified_map_floor3 = (file_map_floor3
        .replace("map_gematik.tmj", f"{base}_gematik")
        .replace("map_floor1.tmj",  f"{base}_floor1")
        .replace("map_floor2.tmj",  f"{base}_floor2")
        .replace("map_epa.tmj",     f"{base}_epa")
        .replace("map_erx.tmj",     f"{base}_erx")
        .replace("map_kim.tmj",     f"{base}_kim")
        .replace("map_tim.tmj",     f"{base}_tim")
    )

    # Fachanwendungen
    modified_map_epa = (file_map_epa
        .replace("map_gematik.tmj", f"{base}_gematik")
        .replace("map_floor1.tmj",  f"{base}_floor1")
        .replace("map_floor2.tmj",  f"{base}_floor2")
        .replace("map_floor3.tmj",  f"{base}_floor3")
    )

    modified_map_erx = (file_map_erx
        .replace("map_gematik.tmj", f"{base}_gematik")
        .replace("map_floor1.tmj",  f"{base}_floor1")
        .replace("map_floor2.tmj",  f"{base}_floor2")
        .replace("map_floor3.tmj",  f"{base}_floor3")
    )

    modified_map_kim = (file_map_kim
        .replace("map_gematik.tmj", f"{base}_gematik")
        .replace("map_floor1.tmj",  f"{base}_floor1")
        .replace("map_floor2.tmj",  f"{base}_floor2")
        .replace("map_floor3.tmj",  f"{base}_floor3")
    )

    modified_map_tim = (file_map_tim
        .replace("map_gematik.tmj", f"{base}_gematik")
        .replace("map_floor1.tmj",  f"{base}_floor1")
        .replace("map_floor2.tmj",  f"{base}_floor2")
        .replace("map_floor3.tmj",  f"{base}_floor3")
    )

    # Dateien schreiben
    write_map(output_folder + "/" + input_file_map_gematik.replace(".tmj","") + "_" + str(i).zfill(2) + ".tmj", modified_map_gematik)
    write_map(output_folder + "/" + input_file_map_floor1.replace(".tmj","")  + "_" + str(i).zfill(2) + ".tmj", modified_map_floor1)
    write_map(output_folder + "/" + input_file_map_floor2.replace(".tmj","")  + "_" + str(i).zfill(2) + ".tmj", modified_map_floor2)
    write_map(output_folder + "/" + input_file_map_floor3.replace(".tmj","")  + "_" + str(i).zfill(2) + ".tmj", modified_map_floor3)
    write_map(output_folder + "/" + input_file_map_epa.replace(".tmj","")     + "_" + str(i).zfill(2) + ".tmj", modified_map_epa)
    write_map(output_folder + "/" + input_file_map_erx.replace(".tmj","")     + "_" + str(i).zfill(2) + ".tmj", modified_map_erx)
    write_map(output_folder + "/" + input_file_map_kim.replace(".tmj","")     + "_" + str(i).zfill(2) + ".tmj", modified_map_kim)
    write_map(output_folder + "/" + input_file_map_tim.replace(".tmj","")     + "_" + str(i).zfill(2) + ".tmj", modified_map_tim)


exit(0)
