document.getElementById('sshScreen').addEventListener('click', function() {
    document.getElementById('userInput').focus();
});


// Beispiel-Befehle, die in der History erscheinen sollen
const randomHistory = [
    'ls -la',
    'sudo apt-get update',
    'mkdir /tmp/test',
    'rm -rf /tmp/test',
    'vi /etc/hosts',
    'ping moonbase42',
    'ssh-keygen -t rsa',
    'ps aux | grep apache',
    'netstat -tuln',
    'env x=\'() { :;}; /bin/bash -c echo "vulnerable" && "cat /tmp/flag.txt" \'', // Shellshock exploit
];

// Funktion, um den Befehl zu normalisieren
function normalizeCommand(command) {
    return command.replace(/\s+/g, '').toLowerCase();
}

// Funktion, um den Output eines Befehls zu generieren
function generateOutput(command) {
    switch (command) {
        case 'history':
            // Nach dem `history`-Befehl wird die Datei durch den Shellshock-Exploit erstellt
            flagCreated = true;
            const randomCommands = randomHistory.sort(() => 0.5 - Math.random()).slice(0, 10).join('\n');
            return `${randomCommands}\n`;
        case 'cat/tmp/flag.txt':
            return 'tim_ti{shellshock_exploit_successful1547}\n';
        case 'ls':
            return 'file1.txt\nfile2.txt\ndirectory1\ndirectory2\n';
        case 'ls la':
            return 'total 8\n-rw-r--r-- 1 user user  123 Sep 10 12:00 file1.txt\n-rw-r--r-- 1 user user  456 Sep 10 12:01 file2.txt\ndrwxr-xr-x 2 user user 4096 Sep 10 12:02 directory1\ndrwxr-xr-x 2 user user 4096 Sep 10 12:03 directory2\n';
            case 'll':
                return 'total 8\n-rw-r--r-- 1 user user  123 Sep 10 12:00 file1.txt\n-rw-r--r-- 1 user user  456 Sep 10 12:01 file2.txt\ndrwxr-xr-x 2 user user 4096 Sep 10 12:02 directory1\ndrwxr-xr-x 2 user user 4096 Sep 10 12:03 directory2\n';
        case 'pwd':
            return '/home/username\n';
        case 'whoami':
            return 'you got hacked\n';
        case 'df':
            return 'Filesystem     1K-blocks    Used Available Use% Mounted on\n/dev/sda1       10240000 5000000  5240000  55% /\n';
        case 'free':
            return '              total        used        free      shared  buff/cache   available\nMem:        1024000      512000      204000       102000      308000      256000\nSwap:       204800       102400      102400\n';
        case 'top':
            return 'top - 12:00:00 up  1:00,  1 user,  load average: 0.10, 0.20, 0.30\nTasks:  10 total,   1 running,   9 sleeping,   0 stopped,   0 zombie\n%Cpu(s): 10.0 us,  5.0 sy,  0.0 ni, 80.0 id,  5.0 wa,  0.0 hi,  0.0 si,  0.0 st\n';
        case 'grep':
            return 'nice try...\n';
        case 'echo':
            return 'echo back, whoop whoop\n';
        case 'man':
            return 'No manual entry for man\n';   
        case 'chmod':
            return 'Permissions changed successfully.\n';
        case 'chown':
            return 'Ownership changed successfully.\n';
        case 'ps':
            return '  PID TTY          TIME CMD\n 1234 pts/0    00:00:01 bash\n 5678 pts/0    00:00:00 ps\n';
        case 'kill':
            return 'dont be rude.\n';
        case 'mkdir':
            return 'Directory created, but you cant see it.\n';
        case 'rm':
            return 'remove yourself.\n';
        case 'cp':
            return 'copy that.\n';
        case 'mv':
            return '...get out the way.\n';
        case 'wget':
            return 'beforce you wget yourself, you better check yourself.\n';
        case 'curl':
            return 'curly fries?.\n';
        case 'tar':
            return 'tar tar tar.\n';
        case 'gzip':
            return 'dont make me slim.\n';
        case 'gunzip':
            return 'dont make me fat.\n';
        case 'find':
            return 'file1.txt\nfile2.txt\ndirectory1\nwaldo\n';
        case 'locate':
            return 'file1.txt\nfile2.txt\ndirectory1\nnwaldo\n';
        case 'alias':
            return 'alias ll=\'ls -la\'\n';
        case 'unalias':
            return 'Alias removed maybe.\n';
        case 'uptime':
            return ' 12:00:00 up 1 day,  1:00,  1 user,  load average: 0.10, 0.20, 0.30\n';
        case 'dmesg':
            return '[    0.000000] Booting Linux...\n[    0.123456] Initializing hardware...\n';
        case 'reboot':
                return 'nice try...\n';
        case 'shutdown -h now':
                    return 'try nsync byebyebye\n';
        case 'exit':
            return 'you cant run away\n';
        default:
            return 'bash: command not found, or its lost xD\n';
    }
}

document.getElementById('userInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const input = normalizeCommand(this.value.trim());
        const output = document.getElementById('output');
        
        // Erzeuge die Ausgabe basierend auf dem eingegebenen Befehl
        let newOutput = `\nusername@ubuntu-server:~$ ${this.value.trim()}\n`;
        newOutput += generateOutput(input);
        
        // Setze den Output-Bereich zurück und füge den neuen Output hinzu
        output.textContent = newOutput;

        this.value = ''; // Eingabefeld leeren
        output.scrollTop = output.scrollHeight; // Scrollen zum neuesten Output
    }
});