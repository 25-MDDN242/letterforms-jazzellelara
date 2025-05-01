const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 100,
  "line1startx": 100,
  "line1starty": 0,
  "line1endx": 100,
  "line1endy": -100,
  "line2startx": 100,
  "line2starty": -100,
  "line2endx": 0,
  "line2endy": -100,
  "hidelinestartx": -20,
  "hidelinestarty": 0,
  "hidelineendx": -20,
  "hidelineendy": 100
}

const letterB = {
  "size": 100,
  "line1startx": 0,
  "line1starty": 0,
  "line1endx": 0,
  "line1endy": -100,
  "line2startx": 0,
  "line2starty": -100,
  "line2endx": 0,
  "line2endy": -200,
  "hidelinestartx": -20,
  "hidelinestarty": 0,
  "hidelineendx": -20,
  "hidelineendy": 100
}

const letterC = {
  "size": 100,
  "line1startx": 0,
  "line1starty": 0,
  "line1endx": 100,
  "line1endy": 0,
  "line2startx": 0,
  "line2starty": 0,
  "line2endx": 0,
  "line2endy": 100,
  "hidelinestartx": 100,
  "hidelinestarty": 0,
  "hidelineendx": 100,
  "hidelineendy": 100
}

const backgroundColor  = "#c7eaff";

const darkGreen  = "#386641";
const lightGreen  = "#6A994E";
const strokeColor  = "#0a2d27"

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 300, center_y, letterA);
  drawLetter(center_x - 50, center_y, letterB);
  drawLetter(center_x + 200, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let line1startx2 = posx + letterData["line1startx"];
  let line1starty2 = posy + letterData["line1starty"];
  let line1endx2 = posx + letterData["line1endx"];
  let line1endy2 = posy + letterData["line1endy"];
  let line2startx2 = posx + letterData["line2startx"];
  let line2starty2 = posy + letterData["line2starty"];
  let line2endx2 = posx + letterData["line2endx"];
  let line2endy2 = posy + letterData["line2endy"];
  let hidelinestartx2 = posx + letterData["hidelinestartx"];
  let hidelinestarty2 = posy + letterData["hidelinestarty"];
  let hidelineendx2 = posx + letterData["hidelineendx"];
  let hidelineendy2 = posy + letterData["hidelineendy"];

  // draw shapes
  stroke(darkGreen); //square
  fill(backgroundColor);
  rect(posx, posy, 100, 100);
  stroke(lightGreen); //line 1
  line(line1startx2, line1starty2, line1endx2, line1endy2);
  stroke(lightGreen); //line 2
  line(line2startx2, line2starty2, line2endx2, line2endy2);
  stroke(backgroundColor); //hide line
  line(hidelinestartx2, hidelinestarty2, hidelineendx2, hidelineendy2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
