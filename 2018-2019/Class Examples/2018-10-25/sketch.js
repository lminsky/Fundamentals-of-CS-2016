function setup() {
  createCanvas(windowHeight, windowHeight);
  background(0);
  noStroke();
  fill(255);
  ellipseMode(CORNER);
  fractal(0, 0, width, height);
}

function fractal(x, y, w, h) {
  rect(x + w/3, y + h/3, w/3, h/3);
  // ellipse(x + w/3, y + h/3, w/3);

  if(w > 2) {
    fractal(x + 0*w/3, y + 0*h/3, w/3, h/3);
    fractal(x + 1*w/3, y + 0*h/3, w/3, h/3);
    fractal(x + 2*w/3, y + 0*h/3, w/3, h/3);

    fractal(x + 0*w/3, y + 1*h/3, w/3, h/3);
    fractal(x + 1*w/3, y + 1*h/3, w/3, h/3);
    fractal(x + 2*w/3, y + 1*h/3, w/3, h/3);

    fractal(x + 0*w/3, y + 2*h/3, w/3, h/3);
    fractal(x + 1*w/3, y + 2*h/3, w/3, h/3);
    fractal(x + 2*w/3, y + 2*h/3, w/3, h/3);
  }
}