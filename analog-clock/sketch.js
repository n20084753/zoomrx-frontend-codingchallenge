function setup() {
	createCanvas(window.innerWidth - 10, window.innerHeight - 20);
	angleMode(DEGREES);
}

function drawArc(hand, value, angle) {
	let handAngle = 0,
		arcDiameter = 0,
		stroke_weight = 0,
		lineHeight = 0;
	
	switch (hand) {
		case 'seconds':
			stroke(255, 100, 150);			
			arcDiameter = 500;
			stroke_weight = 1;
			lineHeight = 200;
		break;
		case 'minutes':
			stroke(150, 100, 255);
			arcDiameter = 480;
			stroke_weight = 4;
			lineHeight = 160;
		break;
		case 'hours':
			stroke(150, 255, 100);
			arcDiameter = 460;
			stroke_weight = 12;
			lineHeight = 100;
		break;
	}	

	// ARC
	strokeWeight(6);
	noFill();
	arc(0, 0, arcDiameter, arcDiameter, 0, angle);
	
	// Line
	push();
	rotate(angle);
	strokeWeight(stroke_weight);
	line(0, 0, lineHeight, 0);
	let left = (window.innerWidth - 10) / 2;
	let top = (window.innerHeight - 20) / 2;		
	pop();
	
	// Center
	stroke(255);
	ellipse(0, 0, 8, 8);
}

function draw() {
	background(0);
	let left = (window.innerWidth - 10) / 2;
	let top = (window.innerHeight - 20) / 2;	
	translate(left, top);
	rotate(-90);

	let hours = hour(),
		minutes = minute(),
		seconds = second(),
		secondAngle = map(seconds, 0, 60, 0, 360),
		minuteAngle = map(minutes, 0, 60, 0, 360) + map(secondAngle, 0, 360, 0, 6),
		hourAngle = map(hours % 12, 0, 12, 0, 360) + map(minuteAngle, 0 , 360, 0, 30);

	drawArc('seconds', seconds, secondAngle);
	drawArc('minutes', minutes, minuteAngle);
	drawArc('hours', hours, hourAngle);	
}