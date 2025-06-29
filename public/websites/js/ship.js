const output = document.getElementById('output');
const input = document.getElementById('userInput');
const missionBriefing = `
Willkommen zum Benutzerhandbuch der ACME Raumschiff-KI. Diese fortschrittliche künstliche Intelligenz wurde entwickelt, um Ihre Reisen durch das Universum sicherer, effizienter und angenehmer zu gestalten. Die Warner Acme KI ist darauf programmiert, die komplexesten Navigations- und Steuerungsvorgänge zu übernehmen, während Sie sich auf Ihre Mission konzentrieren können.

Manchmal kann die KI etwas eigensinnig und zickig reagieren, was gelegentlich zu unerwarteten Herausforderungen führt.

1. Prüfen Sie den Befehlsatz Log im command_center nach aufgetretenen Fehlern.
2. Prüfen sie zusätzlich den aktuellen Status über das KI-Steuerungsprogramm.
3. Finden Sie den Befehlsatz, der die KI steuert.
4. Nutzen Sie den override-Befehl, um die betroffene KI-Einheit zu deaktivieren.
5. Aktivieren Sie die Systeme erneut, um die Ansteuerung zu ermöglichen.

VERSION:
- K1-KL1M4-v0.2.3, K1-C0MMUN1C4T0R-v4.3.7, K1-40T0P1L0T-v1.9.9`;

const commandHints = {
    command: ['override', 'status', 'start', 'stop'],
};

let currentDir = '/home/spaceship';
let commandsFile = [
    'code      info           status',
    '100001    movement:      forward',
    '100002    velocity:      Warp 9.5',
    '100003    autopilot      active',
    '100004    communication: active',
    '100005    navigation:    course to moon',    
    '100020    velocity:      0, stop',
    '100021    status:        stop'
];
let LogFile = [
    '2024-11-15 10:00:00 - Manöver: <i>Vorwärts</i>',
    '2024-11-15 10:00:01 - Geschwindigkeit: <i>Warp 9.5</i>',
    '2024-11-15 10:00:02 - Autopilot: <i>aktiviert</i>',
    '2024-11-15 10:00:03 - Kommunikation: <i>aktiviert</i>',
    '2024-11-15 10:00:04 - Navigation: <i>Kurs setzen, Ziel: Mond</i>',
    '2024-11-15 10:00:05 - <font color="red">[ERROR]</font> set course: Moon landing not possible, reason: <b>moon does not exist</b></i>',
    '2024-11-15 10:00:06 - Geschwindigkeit: <i>0, <b>Stillstand</b></i>',
    '2024-11-15 10:00:07 - Status: <i>stopped</i>'
];
let moonLandingAllowed = false;
let autopilot = true;
let commandHistory = []; 
let historyIndex = -1;   

const fileSystem = {
    '/home/spaceship': {
        'visible_files': ['ki_manual.txt'],
        'hidden_files': [''],
        'subdirectories': ['command_center'],
    },
    '/home/spaceship/command_center': {
        'visible_files': ['commands.log'],
        'hidden_files': [],
        'subdirectories': [],
    },
};

// Starfield variables
let starFieldCanvas = document.getElementById('starfield');
let ctx = starFieldCanvas.getContext('2d');
let stars = [];
let starfieldAnimation;

function createStars(numStars) {
    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * starFieldCanvas.width - starFieldCanvas.width / 2,
            y: Math.random() * starFieldCanvas.height - starFieldCanvas.height / 2,
            z: Math.random() * starFieldCanvas.width
        });
    }
}

function updateStars() {
    const speed = 0.9; // Adjust this value to slow down the stars
    for (let star of stars) {
        star.z -= speed;
        if (star.z <= 0) {
            star.z = starFieldCanvas.width;
        }
    }
}

function drawStars() {
    ctx.clearRect(0, 0, starFieldCanvas.width, starFieldCanvas.height);
    ctx.fillStyle = 'white';


    for (let star of stars) {
        let k = 128.0 / star.z;
        let x = star.x * k + starFieldCanvas.width / 2;
        let y = star.y * k + starFieldCanvas.height / 2;
        let size = (1 - star.z / starFieldCanvas.width) * 3;
        ctx.fillRect(x, y, size, size);
    }
}

function animateStarfield() {
    updateStars();
    drawStars();
    starfieldAnimation = requestAnimationFrame(animateStarfield);
}

function startStarfield() {
    starFieldCanvas.style.display = 'block';
    const img = document.getElementById('cockpit');
    document.querySelector('.sshheader').textContent = '';
    img.style.display = 'block'; // Show the image
    img.style.zIndex = 1;

    // Bring the #output element to the front
    const output = document.getElementById('output');
    output.style.position = 'relative'; // Ensure it has a position context
    output.style.zIndex = 10; // Set a higher z-index to bring it to the front

    resizeCanvas(); // Ensure correct size on start
    createStars(100);  // Generate 100 stars
    animateStarfield();
}


function stopStarfield() {
    starFieldCanvas.style.display = 'none';
    cancelAnimationFrame(starfieldAnimation);
}

function resizeCanvas() {
    const container = document.querySelector('.ssh-container');
    starFieldCanvas.width = container.clientWidth;
    starFieldCanvas.height = container.clientHeight;
    drawStars();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initialer Aufruf



const commands = {
    help: () => {
        return `Verfügbare Befehle:\n - ls / ls -al / ll\n - cd [directory]\n - cat [file]\n - command\n - help`;
    },
    'ls': (args) => {
        const dir = fileSystem[currentDir];
        const visibleFiles = dir.visible_files.map(file => `-rw-r--r-- 1 user user 123 Sep 10 12:00 ${file}`);
        const hiddenFiles = dir.hidden_files.map(file => `-rw-r--r-- 1 user user 123 Sep 10 12:00 ${file}`);
        const subdirectories = dir.subdirectories.map(dir => `drwxr-xr-x 2 user user 4096 Sep 10 12:00 ${dir}`);

        if (args == "-al" || args =="-la" || args == "al" || args == "la") {
            return 'total ' + (visibleFiles.length + hiddenFiles.length + subdirectories.length) + '\n' +
                visibleFiles.concat(hiddenFiles).concat(subdirectories).join('\n') + '\n';
        }else if (dir) {
            return dir.visible_files.concat(dir.subdirectories).join(' ');

        } else {
            return 'Verzeichnis nicht gefunden.';
        }
    },
    'll': () => {
        const dir = fileSystem[currentDir];
        if (dir) {
            const visibleFiles = dir.visible_files.map(file => `-rw-r--r-- 1 user user 123  Sep 10 12:00 ${file}`);
            //const hiddenFiles = dir.hidden_files.map(file => `-rw-r--r-- 1 user user 123 Sep 10 12:00 ${file}`);
            const subdirectories = dir.subdirectories.map(dir => `drwxr-xr-x 2 user user 4096 Sep 10 12:00 ${dir}`);
            return 'total ' + (visibleFiles.length + subdirectories.length) + '\n' + visibleFiles.concat(subdirectories).join('\n') + '\n';
            //return 'total ' + (visibleFiles.length + hiddenFiles.length + subdirectories.length) + '\n' + visibleFiles.concat(hiddenFiles).concat(subdirectories).join('\n') + '\n';
        } else {
            return 'Verzeichnis nicht gefunden.';
        }
    },
    dir: () => {
        const dir = fileSystem[currentDir];
        if (dir) {
            return dir.visible_files.concat(dir.subdirectories).join('\n');
        } else {
            return 'Verzeichnis nicht gefunden.';
        }
    },
    cd: (dir) => {
        const newDir = dir === '..'
            ? currentDir.substring(0, currentDir.lastIndexOf('/')) || '/home/spaceship'
            : currentDir + '/' + dir;
        
        if (fileSystem[newDir] || newDir === '/home/spaceship') {
            currentDir = newDir;
            updatePrompt(); // Update prompt with new directory
            return `Verzeichnis gewechselt zu ${newDir}`;
        } else {
            return `Verzeichnis ${dir} nicht gefunden.`;
        }
    },
    cat: (file) => {
        if (file === 'commands.log') {
            return LogFile.join('\n');
        } else if (file === 'ki_manual.txt') {
            return missionBriefing;
        } else {
            return `${file} nicht gefunden.`;
        }
    },
    'command': (befehl, code, status) => {
        if (befehl === undefined || befehl === "help") {
            // Show command help if no command is provided
            return "Verfügbare Unterbefehle für 'command':\n"+
                  " - command override [code] [true/false]\n"+
                  " - command status\n"+
                  " - command start\n"+ 
                  " - command stop";
        }

        // Handle specific commands
        if (befehl === "override" && code === "100003" && status === 'false') {
            commandsFile = commandsFile.map(line => {
                if (line.startsWith('100003')) {
                    autopilot = false;
                    commandsFile.push('100003    autopilot      deactive');
                    LogFile.push(getCurrentFormattedTime()+' - Autopilot: <i>deaktiviert<i/>');
                    return '100003    autopilot      deactive';
                }
                return line;
            });
            return 'Befehl 100003 erfolgreich überschrieben. Autopilot deaktiviert.';
        }else if (befehl === "override" && code === "100003" && status === 'true') {
            commandsFile = commandsFile.map(line => {
                if (line.startsWith('100003')) {
                    autopilot = true;
                    commandsFile.push('100003 autopilot: active');
                    LogFile.push(getCurrentFormattedTime()+' - Autopilot: <i>aktiviert<i/>');
                    return '100003 autopilot: active';
                }
                return line;
            });
            return 'Befehl 100003 erfolgreich überschrieben. Autopilot aktiviert.';
        } else if (befehl === "status") {
            return commandsFile.join('\n'); // Return the current status of commands
        } else if (befehl === "start" && autopilot === false) {        
            document.getElementById("lnxinput").style.display = "none";
            startStarfield();     
            return "Systeme werden neu gestartet.\n"+
                    "100024 starting\n"+
                    "       status: started\n"+
                    "100003 set autopilot deactive\n"+
                    "100026 navigation: set course to moon\n"+
                    "       navigation: course accepted\n"+
                    "100028 movement: forward\n"+
                    "100029 velocity: Warp 9.5\n"+
                    "100030 communication: active\n"+
                    "100031 estimated time: <b>"+decrypt("6392")+"</b>"; 

                    function decrypt(input) {
        return input.replace(/[a-zA-Z0-9]/g, function(char) {
            if (char >= 'a' && char <= 'z') {
                return String.fromCharCode((char.charCodeAt(0) - 97 + 13) % 26 + 97);
            } else if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode((char.charCodeAt(0) - 65 + 13) % 26 + 65);
            } else if (char >= '0' && char <= '9') {
                return String.fromCharCode((char.charCodeAt(0) - 48 + 5) % 10 + 48);
            }
            return char;
        });
    }
                          
        } else if (befehl === "start" && autopilot === true) {                    
            return LogFile.join('\n');            
        } else if (befehl === "stop") {                    
        return "Maschinen bereits gestoppt.";            
    } 
        else {
            return `Befehl oder Parameter ungültig.`;
        }
    },
};


function decrypt(input) {
    return input.replace(/[a-zA-Z0-9]/g, function(char) {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode((char.charCodeAt(0) - 97 + 13) % 26 + 97);
        } else if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode((char.charCodeAt(0) - 65 + 13) % 26 + 65);
        } else if (char >= '0' && char <= '9') {
            return String.fromCharCode((char.charCodeAt(0) - 48 + 5) % 10 + 48);
        }
        return char;
    });
}

function getCurrentFormattedTime() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Monate sind 0-basiert
    const day = String(now.getDate()).padStart(2, '0');
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


function updatePrompt() {
    const prompt = `user@spaceship:${currentDir}$ `;
    document.querySelector('.cursor').textContent = prompt;
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const value = input.value.trim();
        const [cmd, ...args] = value.split(' ');

        if (value) {
            commandHistory.push(value);  // Add command to history
            historyIndex = commandHistory.length;  // Reset the index
        }

        // Reconstruct command with its arguments
        const command = `${cmd} ${args.join(' ')}`;
        let outputText = '';

        console.log(command);
        if (commands[cmd]) {
            try {
                outputText = commands[command] ? commands[command](...args) : commands[cmd](...args);
            } catch (error) {
                outputText = `Fehler bei der Befehlsausführung: ${error.message}`;
            }
        } else if (cmd.trim() =="") {
            outputText = `Bitte Befehl eingeben.`;
        }else {
            outputText = `Befehl '${cmd}' nicht gefunden.`;
        }

        // Setze den Output-Bereich auf den neuen Inhalt
        output.innerHTML = `<span>${outputText}</span><br>`;
        output.scrollTop = output.scrollHeight;  // Scrollt nach unten
        input.value = '';  // Leert das Eingabefeld

        updatePrompt();  // Aktualisiere die Eingabeaufforderung
    }

    // Handle arrow up and down for command history navigation
    if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
            historyIndex--;
            input.value = commandHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            input.value = commandHistory[historyIndex];
        } else {
            input.value = ''; // Clear input if no further history
        }
    }
});

// Fokussiert das Eingabefeld, wenn irgendwo im Terminalbereich geklickt wird
document.querySelector('.ssh-screen').addEventListener('click', () => {
    input.focus();
});