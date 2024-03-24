function setup() {
  createCanvas(400, 400).parent('canvasContainer');
  noLoop();
}

function draw() {
  background(255);
  drawPattern();
}

function drawPattern() {
  let tileSize = 20;
  for (let x = 0; x < width; x += tileSize) {
    for (let y = 0; y < height; y += tileSize) {
      let r = random(255);
      let g = random(255);
      let b = random(255);
      fill(r, g, b);
      rect(x, y, tileSize, tileSize);
    }
  }
}
