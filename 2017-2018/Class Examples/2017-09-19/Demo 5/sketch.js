function setup() {
  createCanvas(500, 500);

  strokeWeight(5);

  var y1 = 0;
  var y2 = 500;
  var x = 0;
  var slope = 50;
  var distance = 10;

  while(x - slope < width) {
    line(x, y1, x - slope, y2);
    x = x + distance;
  }
}