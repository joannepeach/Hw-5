function setup() { 
  createCanvas(600, 600);
} 

function draw() { 
  background(0);
for (var x = 0; x < 600; x = x+10){
	stroke (255);
  line (x, 0, x, 600);
	
	var rectH = 250;
  var rectW = 250;
  var rectX = 25;
  var rectY = 80;
	
  rect(rectX, rectY, rectW, rectH);
	for (var y = 80; y < 340; y = y+10){
		fill (0);
  line (25, y, 275, y);
		
	ellipse(450, 200, 250, 250); 
		fill (0);
	}
}
}
