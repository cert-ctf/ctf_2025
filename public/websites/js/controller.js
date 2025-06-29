
// Konami-Code: oben, oben, unten, unten, links, rechts, links, rechts, B, A
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown','ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];    
let inputBuffer = [];
let input_text = [];

var images = [];
var imagePaths = ["img/controller.png", "img/controller_up.png","img/controller_down.png","img/controller_left.png","img/controller_right.png","img/controller_a.png","img/controller_b.png","img/konami_end.png"];
var progressBar = document.getElementById("loadingProgressBar");
var progressText = document.getElementById("progressText");
var controller = document.getElementById("controller-img");
var tv = document.getElementById("tv")

// Tasten-Overlay-Elemente
const buttonA = document.getElementById('button-a');
const buttonB = document.getElementById('button-b');

const buttonUp = document.getElementById('button-up');
const buttonDown = document.getElementById('button-down');

const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
// Füge weitere Tasten hinzu

// Mausklicks auf Tasten behandeln
buttonA.addEventListener('mousedown', () => Button_Click_A());
buttonB.addEventListener('mousedown', () => Button_Click_B());

buttonUp.addEventListener('mousedown', () => Button_Click_Up());
buttonDown.addEventListener('mousedown', () => Button_Click_Down());
buttonLeft.addEventListener('mousedown', () => Button_Click_Left());
buttonRight.addEventListener('mousedown', () => Button_Click_Right());

document.addEventListener('mouseup', function(event) {
	controller.src = images[0].src;
	controller.style.display = "block";	
});

function Button_Click_A() {
	handleButtonClick('KeyA')
}

function Button_Click_B() {
	handleButtonClick('KeyB')
}

function Button_Click_Up() {
	handleButtonClick('ArrowUp')
}

function Button_Click_Down() {
	handleButtonClick('ArrowDown')
}

function Button_Click_Left() {
	handleButtonClick('ArrowLeft')
}

function Button_Click_Right() {
	handleButtonClick('ArrowRight')
}

function handleButtonClick(keyCode) {	
	if (input_text.length > 10)	
	{								
		input_text.shift();
	}
				
	switch(keyCode.toString()) {
		case "ArrowUp":
			input_text.push("⬆️");
			controller.src = images[1].src;
			break;
		case "ArrowDown":
			input_text.push("⬇️");
			controller.src = images[2].src;
			break;
		case "ArrowLeft":
			input_text.push("⬅️");
			controller.src = images[3].src;
			break;
		case "ArrowRight":
			input_text.push("➡️");
			controller.src = images[4].src;
			break;
		case "KeyA":
			input_text.push("🅰️");
			controller.src = images[5].src;
			break;
		case "KeyB":
			input_text.push("🅱️");								
			controller.src = images[6].src;						
			break;
		default:
			// code block
		} 			
		controller.style.display = "block";	
		document.getElementById("input_text").textContent = input_text.join('');	

	if (inputBuffer.length < konamiCode.length) {
		inputBuffer.push(keyCode);
	} else {
		inputBuffer.shift();
		inputBuffer.push(keyCode);
	}

	// Überprüfe, ob die gedrückten Tasten dem Konami-Code entsprechen
	if (inputBuffer.toString() === konamiCode.toString()) {
		tv.src = images[7].src;	
		tv.style.display = "block";
		resetInputBuffer();
	} else if (!konamiCode.includes(keyCode)) {
		resetInputBuffer();
	}
}

function resetInputBuffer() {
	inputBuffer = [];
}

function preloadImages(callback) {
	var loadedImages = 0;

	function imageLoaded() {
		loadedImages++;
		var progress = (loadedImages / imagePaths.length) * 100;
		progressBar.value = progress;
		progressText.innerHTML = Math.round(progress) + "%";		
		console.log(Math.round(progress) + "%");

		if (loadedImages === imagePaths.length) {
			// Alle Bilder wurden geladen
			progressBar.style.display = "none"; // Verstecke die Progressbar
			progressText.style.display = "none";
			document.getElementById("magic").style.display = "block";
			callback();
		}
	}

	for (var i = 0; i < imagePaths.length; i++) {
		images[i] = new Image();
		images[i].onload = imageLoaded;
		images[i].src = imagePaths[i];
	}
}

preloadImages(function() {
	console.log("Alle Bilder wurden geladen!");
});