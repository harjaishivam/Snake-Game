var s;
var scl = 20;
var food;
let x;

function setup() {
	createCanvas(600, 600);
	s = new Snake();
	frameRate(10);
	pickLocation();

}

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);
}

function draw() {
	background(51);
	x = 10;
	frameRate(x);
	s.death();
	s.update();
	s.show();

	if(s.eat(food)) {
		pickLocation();
	}

	fill(255,0,100);

	rect(food.x,food.y,scl,scl);
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		s.dir(0,-1);
	}
	if(keyCode === DOWN_ARROW) {
		s.dir(0,1);
	}
	if(keyCode === RIGHT_ARROW) {
		s.dir(1,0);
	}
	if(keyCode === LEFT_ARROW) {
		s.dir(-1,0);
	}

}

function keyTyped() {
	if(key === 'k') {x = x-1;}
	if(key === 'l'){x++;}
}
