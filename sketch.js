var t = 0.0;

function setup() {
  createCanvas(windowHeight, windowWidth);
}

function draw() {
  background(200);
  // Increment "time"
  t += 0.04;
  var x = t;

  noStroke();
  fill(0, 100);

  for (var i = 0; i <= width; i += 8) {
    var y = noise(x) * height;

    stroke(50);
    strokeWeight(1);
    fill(255, 100, 100);
    line(i, y, width/2, -100);
    rect(i, y, 3, height - y);
    
    // Move along x-axis
    x += 0.05;
  }
}
