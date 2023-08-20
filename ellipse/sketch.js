function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("display", "block");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    stroke(255, 255, 255);
    fill(0);
  } else {
    stroke(0, 0, 0);
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
