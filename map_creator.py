import os

# Datei einlesen
input_file_map_flat = 'dist/map_flat.tmj'
input_file_map_city = 'dist/map_city.tmj'
input_file_map_radar = 'dist/map_radar.tmj'
input_file_map_radar_inside = 'dist/map_radar_inside.tmj'
input_file_map_spaceship = 'dist/map_spaceship.tmj'
input_file_map_moon = 'dist/map_moon.tmj'

output_folder="."
map_count=96

#Funktionen
def read_map(map_name):
    try:
        with open(map_name, 'r') as file:
            data = file.read()
        return data
    except FileNotFoundError:
        print(f'Die Datei {map_name} konnte nicht gefunden werden.')
        exit()

def write_map(map_file,data):
    try:
        with open(map_file, 'w') as file:
            file.write(data)
        print(f'Die Daten wurden in die Datei {map_file} geschrieben.')
    except Exception as e:
        print(f'Fehler beim Schreiben in die Datei {map_file}: {e}')

#LESE Maps
file_map_flat = read_map(input_file_map_flat)
file_map_city = read_map(input_file_map_city)
file_map_radar = read_map(input_file_map_radar)
file_map_radar_inside = read_map(input_file_map_radar_inside)
file_map_spaceship = read_map(input_file_map_spaceship)
file_map_moon= read_map(input_file_map_moon)

#Erstelle Output Ordner
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for i in range(1,map_count+1):
    #Ersetze Strings in Maps
    modified_map_flat = file_map_flat.replace("map_city.tmj", "https://play.workadventu.re/@/gematik/tim_ti/team_"+str(i).zfill(2)+"_city")
    modified_map_flat = modified_map_flat.replace("map_spaceship.tmj", "https://play.workadventu.re/@/gematik/tim_ti/team_"+str(i).zfill(2)+"_spaceship")

    modified_data_map_city = file_map_city.replace("map_radar.tmj", "https://play.workadventu.re/@/gematik/tim_ti/team_"+str(i).zfill(2)+"_radar")
    modified_data_map_city = modified_data_map_city.replace("map_flat.tmj", "https://play.workadventu.re/@/gematik/tim_ti/team_"+str(i).zfill(2)+"_flat")

    modified_data_map_radar = file_map_radar.replace("map_radar_inside.tmj", "https://play.workadventu.re/@/gematik/tim_ti/team_"+str(i).zfill(2)+"_radar_inside")
    modified_data_map_radar = modified_data_map_radar.replace("map_city.tmj", "https://play.workadventu.re/@/gematik/tim_ti/team_"+str(i).zfill(2)+"_city")

    modified_data_map_radar_inside = file_map_radar_inside.replace("map_radar.tmj", "https://play.workadventu.re/@/gematik/tim_ti/team_"+str(i).zfill(2)+"_radar")

    modified_data_map_spaceship = file_map_spaceship.replace("map_flat.tmj", "https://play.workadventu.re/@/gematik/tim_ti/team_"+str(i).zfill(2)+"_flat")
    modified_data_map_spaceship = modified_data_map_spaceship.replace("map_moon.tmj", "https://play.workadventu.re/@/gematik/tim_ti/team_"+str(i).zfill(2)+"_moon")

    modified_data_map_moon = file_map_moon.replace("map_spaceship.tmj", "https://play.workadventu.re/@/gematik/tim_ti/team_"+str(i).zfill(2)+"_spaceship")

    #Schreibe neue Datei
    write_map(output_folder+"/"+input_file_map_flat.replace(".tmj","")+"_"+str(i).zfill(2)+".tmj",modified_map_flat)
    write_map(output_folder+"/"+input_file_map_city.replace(".tmj","")+"_"+str(i).zfill(2)+".tmj",modified_data_map_city)
    write_map(output_folder+"/"+input_file_map_radar.replace(".tmj","")+"_"+str(i).zfill(2)+".tmj",modified_data_map_radar)
    write_map(output_folder+"/"+input_file_map_radar_inside.replace(".tmj","")+"_"+str(i).zfill(2)+".tmj",modified_data_map_radar_inside)
    write_map(output_folder+"/"+input_file_map_spaceship.replace(".tmj","")+"_"+str(i).zfill(2)+".tmj",modified_data_map_spaceship)
    write_map(output_folder+"/"+input_file_map_moon.replace(".tmj","")+"_"+str(i).zfill(2)+".tmj",modified_data_map_moon)

exit()


