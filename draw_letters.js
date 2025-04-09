/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFFFFC";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

//-------------------------------- Colours ----------------------------
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";
const red  = "#FFADAD";
const yellow  = "#FDFFB6";
const green  = "#CAFFBF";
const blue  = "#9BF6FF";
const purple  = "#BDB2FF";
const connectorColour = "#6796CD";



//------------------------------ Main Function ----------------------------
function drawLetter(letterData) {
  angleMode(DEGREES)

  // setup stroke
  stroke(strokeColor);
  strokeWeight(0.5);

//------------------------------ Variable Setup ----------------------------
  let c1size2 = letterData["c1size"]; // size of circle 1 (will either be 70px by 70px or 30px by 30px)
  let c1x2 = letterData["c1x"]; // x coordinates of circle 1
  let c1y2 = letterData["c1y"]; // y coordinates of circle 1
  let c2x2 = letterData["c2x"]; // x coordinates of circle 2
  let c2y2 = letterData["c2y"]; // y coordinates of circle 2
  let c3x2 = letterData["c3x"]; // x coordinates of circle 3
  let c3y2 = letterData["c3y"]; // y coordinates of circle 3
  let c4x2 = letterData["c4x"]; // x coordinates of circle 4
  let c4y2 = letterData["c4y"]; // y coordinates of circle 4
  let c5x2 = letterData["c5x"]; // x coordinates of circle 5
  let c5y2 = letterData["c5y"]; // y coordinates of circle 5
  //more variables... toggle for connectors

  // large or small circle
  fill(red);
  ellipse(c1x2, c1y2, c1size2, c1size2);//circle 1

  // circle 2-3 connector 
  //fill(yellow);
  //drawConnector(c1x2, c1y2, c2x2, c2y2); 
  // circle 2-3 connector 
  fill(green);
  drawConnector(c2x2, c2y2, c3x2, c3y2);
  // circle 3-4 connector 
  fill(blue);
  drawConnector(c3x2, c3y2, c4x2, c4y2);
  // circle 4-5 connector 
  fill(purple);
  drawConnector(c4x2, c4y2, c5x2, c5y2);

  // small circles 
  fill(yellow);
  ellipse(c2x2, c2y2, 30, 30);//circle 2
  fill(green);
  ellipse(c3x2, c3y2, 30, 30);//circle 3
  fill(blue);
  ellipse(c4x2, c4y2, 30, 30);//circle 4
  fill(purple);
  ellipse(c5x2, c5y2, 30, 30);//circle 5

  //------------------------------ TEST VALUES ----------------------------
  //for when I am suspicious variables aren't working
    // // large or small circle
    // fill(red);
    // ellipse(35, 150, 70, 70);//circle 1
  
    // // circle 2-3 connector 
    // //fill(yellow);
    // //drawConnector(c1x2, c1y2, c2x2, c2y2); 
    // // circle 2-3 connector 
    // fill(green);
    // drawConnector(15, 15, 60, 30);
    // // circle 3-4 connector 
    // fill(blue);
    // drawConnector(60, 30, 60, 70);
    // // circle 4-5 connector 
    // fill(purple);
    // drawConnector(60, 70, 20, 100);
  
    // // small circles 
    // fill(yellow);
    // ellipse(15, 15, 30, 30);//circle 2
    // fill(green);
    // ellipse(60, 30, 30, 30);//circle 3
    // fill(blue);
    // ellipse(60, 70, 30, 30);//circle 4
    // fill(purple);
    // ellipse(20, 100, 30, 30);//circle 5




}

  //------------------------------ Connector Function ----------------------------
function drawConnector(startCircleX, startCircleY, endCircleX, endCircleY) { //draw a connector between circles
  startx = startCircleX //15
  starty = startCircleY //15
  endx = endCircleX //55
  endy = endCircleY //60

  //------------ Calculate Greater and Lesser ----------
  // this is so that the hypotnuse function doesn't produce a negative value when starting from a greater coordinate
  let greaterX = Math.max(startx, endx)
  let lesserX = Math.min(startx, endx);
  let greaterY = Math.max(starty, endy)
  let lesserY = Math.min(starty, endy);

  //------------ Calculate Hypotnuse of Coordinates ----------
  // this is for the length of the connector, so will be correct when I rotate it.
  let hypot = Math.hypot(greaterX-lesserX, greaterY-lesserY) //calculating hypotnuse WILL NOT WORK IN WITH NEGATIVE COORDS

  // //------------ Calculate Angle ----------
  let deltaY = endy - starty;
  let deltaX = endx - startx;
  let angleInRadians = Math.atan2(deltaY, deltaX);
  let angle = angleInRadians * (180 / Math.PI);
  if (angle < 0) {
    angle += 360; 
  }

  //fill(connectorColour);
  push()
    translate(startx, starty); //correct rotation point
    rotate(angle) //change to angle variable once function working
    translate(-startx, -starty); //set back to normal
    beginShape();
      curveVertex(startx, starty);
      curveVertex(startx, starty);
      curveVertex(startx, starty-14); // 0+1 to hide connector edges
      curveVertex(startx + hypot/2,starty-7); // inbetween part
      curveVertex(startx + hypot, starty-14); // 0+1 to hide connector edges
      curveVertex(startx + hypot, starty); // need to do trig
      curveVertex(startx + hypot, starty);
      curveVertex(startx + hypot, starty+14); // 30-1 to hide connector edges
      curveVertex(startx + hypot/2, starty+7); // inbetween part
      curveVertex(startx, starty+14); // 30-1 to hide connector edges
      curveVertex(startx, starty);
      curveVertex(startx, starty);
    endShape();
  pop()
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
