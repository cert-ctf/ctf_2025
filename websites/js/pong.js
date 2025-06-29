const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'img/logo.png';         
let playerScore = 0;
let computerScore = 0;
let drawlogo = false;
const maxPoints = 3; // Punkte für den Gewinn
let playerSpeed = 1; // Geschwindigkeit des Spielers
let computerSpeed = 10; // Hohe Geschwindigkeit des Computers
const player = { x: canvas.width - 20, y: canvas.height / 2 - 50, width: 10, height: 100, dy: 0 };
const computer = { x: 10, y: canvas.height / 2 - 50, width: 10, height: 100 };
let ballSpeed = 20; // Ballgeschwindigkeit
const ball = { x: canvas.width / 2, y: canvas.height / 2, radius: 7, speed: ballSpeed, dx: ballSpeed, dy: ballSpeed };
const imgWidth = 200; // Breite des Bildes
const imgHeight = 200; // Höhe des Bildes
const x = (canvas.width - imgWidth) / 2;
const y = (canvas.height - imgHeight) / 2;
// Matrix-Effekt Variablen
const charArr = '01'.split('');
const fontSize = 10;
const maxColums = Math.floor(canvas.width / fontSize);
const fallingCharArr = [];
let gameLoop;

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.value = charArr[randomInt(0, charArr.length)].toUpperCase();
    this.speed = randomFloat(1, 5);
    this.opacity = randomFloat(0.3, 1); // Zufällige Helligkeit
}

Point.prototype.draw = function(ctx) {
    ctx.fillStyle = `rgba(0, 255, 0, ${this.opacity})`; // Grün mit variabler Helligkeit
    ctx.font = fontSize + "px sans-serif";
    ctx.fillText(this.value, this.x, this.y);

    this.y += this.speed;
    if (this.y > canvas.height) {
        this.y = randomFloat(-100, 0);
        this.speed = randomFloat(2, 5);
        this.value = charArr[randomInt(0, charArr.length)].toUpperCase();
        this.opacity = randomFloat(0.3, 1); // Neue Helligkeit
    }
}

// Initialisieren der fallenden Zeichen
for (let i = 0; i < maxColums; i++) {
    fallingCharArr.push(new Point(i * fontSize, randomFloat(-500, 0)));
}

// Funktion zum Zeichnen des Matrix-Effekts
function drawMatrix() {
    // Sehr leicht transparentes Schwarz, um den Schweif zu erzeugen
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let i = fallingCharArr.length;
    while (i--) {
        fallingCharArr[i].draw(ctx);
    }
}

// Hilfsfunktionen
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}



function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

function drawText(text, x, y) {
    ctx.fillStyle = "#fff";
    ctx.font = "32px Arial";
    ctx.fillText(text, x, y);
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = ballSpeed * (Math.random() > 0.5 ? 1 : -1);
    ball.dy = ballSpeed * (Math.random() > 0.5 ? 1 : -1);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resetBall();
    document.getElementById('message').textContent = '\xa0';

    // Stoppe das aktuelle Spielintervall, falls es läuft
    clearInterval(gameLoop);

    // Starte das Spielintervall neu
    gameLoop = setInterval(game, 1000 / 60);
}

function update() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }

    if (ball.x - ball.radius < 0) {
        playerScore++;
        resetBall();
    }

    if (ball.x + ball.radius > canvas.width) {
        computerScore++;
        resetBall();
    }

    // Player-Schläger Kollision
    if (ball.x + ball.radius > player.x && ball.y > player.y && ball.y < player.y + player.height) {
        let collidePoint = ball.y - (player.y + player.height / 2);
        collidePoint = collidePoint / (player.height / 2);
        let angleRad = collidePoint * Math.PI / 4;
        ball.dx = -ballSpeed * Math.cos(angleRad);
        ball.dy = ballSpeed * Math.sin(angleRad);
    }

    // Computer-Schläger Kollision
    if (ball.x - ball.radius < computer.x + computer.width && ball.y > computer.y && ball.y < computer.y + computer.height) {
        let collidePoint = ball.y - (computer.y + computer.height / 2);
        collidePoint = collidePoint / (computer.height / 2);
        let angleRad = collidePoint * Math.PI / 4;
        ball.dx = ballSpeed * Math.cos(angleRad);
        ball.dy = ballSpeed * Math.sin(angleRad);
    }

    // Begrenzung der Computerbewegung
    computer.y += (ball.y - (computer.y + computer.height / 2)) * 0.15 * computerSpeed;
    if (computer.y < 0) computer.y = 0;
    if (computer.y + computer.height > canvas.height) computer.y = canvas.height - computer.height;


    if (computerScore >= maxPoints) {
        clearInterval(gameLoop);
        document.getElementById('message').textContent = "The computer wins!";
    }

    if (playerScore >= maxPoints) {
        clearInterval(gameLoop);
        document.getElementById('message').textContent = "Congratulations!";
        document.getElementById('restart').style.display = "none";
        document.getElementById('seed').style.display = "none";		
        document.getElementById('shutdown').style.display = "block";	
        document.getElementById('info_text_field').textContent = "Geschafft! Jetzt ist es an der Zeit, den Supercomputer herunterzufahren und den Sieg zu sichern!";
    }
}

function render() {
    if (drawlogo)
        {
            ctx.fillStyle = '#212448'; // Setze die Füllfarbe auf Schwarz
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, imgWidth, imgHeight);
            drawMatrix()
        }else
            drawRect(0, 0, canvas.width, canvas.height, "#000");

    drawRect(player.x, player.y, player.width, player.height, "#00FF64");
    drawRect(computer.x, computer.y, computer.width, computer.height, "red");
    drawCircle(ball.x, ball.y, ball.radius, "#fff");
    drawText(playerScore, 3 * canvas.width / 4, 30);
    drawText(computerScore, canvas.width / 4, 30);


    
}

function game() {
    update();
    render();
}

window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault(); // Verhindert das Scrollen der Seite
        player.dy = (e.key === 'ArrowUp') ? -playerSpeed : playerSpeed;
        }
});

window.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault(); // Verhindert das Scrollen der Seite
        player.dy = 0;
        }
});

function movePlayer() {
    player.y += player.dy;
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}

setInterval(movePlayer, 1000 / 60);

function calculateChecksum(input) {
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += input.charCodeAt(i);
        }
        return sum.toString();
    }

document.getElementById('restart').addEventListener('click', function() {
    const checksum = 3118542;           
    const check = decrypt(decodeWithRotation(crypt,parseInt(document.getElementById('seed').value)));           
    
    if (calculateChecksum(check) === checksum) {
        computerSpeed = 0.1;
        playerSpeed = 10;
        ballSpeed = 6;
        drawlogo = true;

        if (!document.getElementById('seed').classList.contains("text-success")) {
            document.getElementById('seed').classList.remove("text-danger"); 
            document.getElementById('seed').classList.add("text-success");   
        }             
    }  else {
            document.getElementById('seed').classList.remove("text-success"); 
            document.getElementById('seed').classList.add("text-danger");            
    }


    resetGame(); // Spiel neu starten
});

// Initiales Starten des Spiels
resetGame();

document.getElementById('shutdown').addEventListener('click', function() {
    const inputValue = document.getElementById('seed').value;
    window.location.href = `sxopfdfsd.html?wert=${encodeURIComponent(inputValue)}`;
});

function calculateChecksum(input) {
        let checksum = 0;
        for (let i = 0; i < input.length; i++) {
            checksum += input.charCodeAt(i);
        }
        return checksum;
    }

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

    function decodeWithRotation(str, numberRotation) {
        return rotateNumbers(str, 10 - (numberRotation % 10));
    }

    function rotateNumbers(str, rotation) {
        return str.replace(/\d/g, function(digit) {
            return ((parseInt(digit) + rotation) % 10).toString();
        });
    }  

    const crypt = "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";           
