let canvas, width, height, ctx, backgroundImage;
        let fireworks = [];
        let particles = [];

        function setup() {
            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
            backgroundImage = new Image();
            backgroundImage.onload = function () {
                setSize(canvas);
                drawBackground();
            };
            backgroundImage.src = './img/tim_logo.png'; // Pfad zu Ihrem Bild hier einfügen
            window.addEventListener("resize", windowResized);
            document.addEventListener("click", onClick);
            fireworks.push(new Firework(Math.random() * (width - 200) + 100));
        }

        setTimeout(setup, 1);

        function loop(){
            //ctx.globalAlpha = 0.1;
            ctx.drawImage(backgroundImage, 0, 0, width, height);
            //drawBackground()
            ctx.globalAlpha = 1;

            for(let i=0; i<fireworks.length; i++){
                let done = fireworks[i].update();
                fireworks[i].draw();
                if(done) fireworks.splice(i, 1);
            }

            for(let i=0; i<particles.length; i++){
                particles[i].update();
                particles[i].draw();
                if(particles[i].lifetime>80) particles.splice(i,1);
            }

            if(Math.random()<1/60) fireworks.push(new Firework(Math.random()*(width-200)+100));
        }
        setInterval(loop, 1/60);

class Particle{
	constructor(x, y, col){
		this.x = x;
		this.y = y;
		this.col = col;
		this.vel = randomVec(2);
		this.lifetime = 0;
	}

	update(){
		this.x += this.vel.x;
		this.y += this.vel.y;
		this.vel.y += 0.01;
		this.vel.x *= 0.99;
		this.vel.y *= 0.99;
		this.lifetime++;
	}

	draw(){
		ctx.globalAlpha = Math.max(1-this.lifetime/80, 0);
		ctx.fillStyle = this.col;
		ctx.fillRect(this.x, this.y, 2, 2);
	}
}

class Firework{
	constructor(x){
		this.x = x;
		this.y = height;
		this.isBlown = false;
		this.col = randomCol();
	}

	update(){
        this.y -= 1.5; // Reduziere den Wert, um die Geschwindigkeit zu verringern
        if(this.y < 350-Math.sqrt(Math.random()*500)*30){
            // Anpassung des Geschwindigkeitsfaktors, um die Verzögerung zu erhöhen
            this.isBlown = true;
            for(let i=0; i<60; i++){
                particles.push(new Particle(this.x, this.y, this.col))
            }
        }
        return this.isBlown;
    }

	draw(){
		ctx.globalAlpha = 1;
		ctx.fillStyle = this.col;
		ctx.fillRect(this.x, this.y, 2, 2);
	}
}

function randomCol(){
	var letter = '0123456789ABCDEF';
	var nums = [];

	for(var i=0; i<3; i++){
		nums[i] = Math.floor(Math.random()*256);
	}

	let brightest = 0;
	for(var i=0; i<3; i++){
		if(brightest<nums[i]) brightest = nums[i];
	}

	brightest /=255;
	for(var i=0; i<3; i++){
		nums[i] /= brightest;
	}

	let color = "#";
	for(var i=0; i<3; i++){
		color += letter[Math.floor(nums[i]/16)];
		color += letter[Math.floor(nums[i]%16)];
	}
	return color;
}

function randomVec(max){
	let dir = Math.random()*Math.PI*2;
	let spd = Math.random()*max;
	return{x: Math.cos(dir)*spd, y: Math.sin(dir)*spd};
}

function drawBackground() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

function setSize(canv){
    let container = document.querySelector('.container');
    let containerStyles = window.getComputedStyle(container);
    let containerWidth = parseInt(containerStyles.width);

    let imgAspectRatio = backgroundImage.width / backgroundImage.height;
    let containerHeight = containerWidth / imgAspectRatio;

    canv.width = containerWidth * window.devicePixelRatio;
    canv.height = containerHeight * window.devicePixelRatio;

    canv.style.width = containerWidth + "px";
    canv.style.height = containerHeight + "px";

    width = containerWidth;
    height = containerHeight;

    canvas.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
}


function onClick(e){
	fireworks.push(new Firework(e.clientX));
}

function windowResized(){
	setSize(canvas);
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, width, height);
}