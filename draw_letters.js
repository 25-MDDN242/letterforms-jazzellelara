/* these are optional special variables which will change the system */
var systemBackgroundColor = "#c7eaff";
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
const white  = "#ffffff";
const transparent  = "#ffffff00";
const pink  = "#ffc7f3";
const red  = "#FFADAD";
const yellow  = "#FDFFB6";
const green  = "#c7ffeb";
const blue  = "#CCE7F7";
const purple  = "#BDB2FF";
const connectorColour = "#6796CD";

const whiteST  = "#ffffff95"; //ST stands for semi transparent
const pinkST  = "#ffc7f395";
const blueST  = "#CCE7F795";

const whiteT  = "#ffffff50"; //T stands for transparent
const pinkT  = "#ffc7f350";
const greenT  = "#c7ffeb50";
const blueT  = "#CCE7F750";

//------------------------------ Main Function ----------------------------
function drawLetter(letterData) {
  angleMode(DEGREES)
  
  // setup stroke
  stroke(white);
  strokeWeight(0);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Variable Setup ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
  let connector1 = letterData["con1"]; // toggle for connector 1 (c1-c2)
  let connector2 = letterData["con2"]; // toggle for connector 2 (c2-c3)
  let connector3 = letterData["con3"]; // toggle for connector 3 (c3-c4)
  let connector4 = letterData["con4"]; // toggle for connector 4 (c4-c5)
  let connector5 = letterData["con5"]; // toggle for connector 5 (c2-c4)
  let connector6 = letterData["con6"]; // toggle for connector 6 (c2-c5)

  //------------ Connectors ----------
  //Connector 1 - circle 1-2 
  if (connector1 > 0){ 
    fill(yellow);
    drawConnector(c1x2, c1y2, c2x2, c2y2); 
  }
  // Connector 2 - circle 2-3  
  if (connector2 > 0){ 
    fill(green);
    drawConnector(c2x2, c2y2, c3x2, c3y2);
  }
  // Connector 3 - circle 3-4  
  if (connector3 > 0){ 
    fill(blue);
    drawConnector(c3x2, c3y2, c4x2, c4y2);
  }
  // Connector 4 - circle 4-5  
  if (connector4 > 0){ 
    fill(purple);
    drawConnector(c4x2, c4y2, c5x2, c5y2);
  }
  // Connector 5 - circle 2-4  
  if (connector5 > 0){ 
    fill(purple);
    drawConnector(c2x2, c2y2, c4x2, c4y2);
  }
  // Connector 6 - circle 2-5  
  if (connector6 > 0){ 
    fill(purple);
    drawConnector(c2x2, c2y2, c5x2, c5y2);
  }

  //------------ Small Circles (Bubbles) ----------
  drawBubble(c2x2, c2y2, 30);//circle 2
  drawBubble(c3x2, c3y2, 30);//circle 3
  drawBubble(c4x2, c4y2, 30);//circle 4
  drawBubble(c5x2, c5y2, 30);//circle 5

  //------------ Large/Small Circle (Bubbles) ----------
  //to debug design switch circle element to bottom layer
  drawBubble(c1x2, c1y2, c1size2);//circle 1

  //------------------------ Original Coloured Variables for Debugging ------------------------
  // //------------ Small Circles ----------
  // fill(yellow);
  // ellipse(c2x2, c2y2, 30, 30);//circle 2
  // fill(green);
  // ellipse(c3x2, c3y2, 30, 30);//circle 3
  // fill(blue);
  // ellipse(c4x2, c4y2, 30, 30);//circle 4
  // fill(purple);
  // ellipse(c5x2, c5y2, 30, 30);//circle 5

  // //------------ Large/Small Circle ----------
  // //to debug design switch circle element to bottom layer
  // ellipse(c1x2, c1y2, c1size2, c1size2);//circle 1

}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Variable Setup ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //------------------------ Draw Bubble Function ------------------------
  function drawBubble(circleX, circleY, circleDiameter){
    push()

    push()
    strokeWeight(circleDiameter/10);
    stroke(whiteST);
    noFill()
    ellipse(circleX, circleY, circleDiameter, circleDiameter);

    strokeWeight(circleDiameter/5);
    conicGradientStroke(0, circleX, circleY, [whiteT, pinkT, blueT, greenT])
    ellipse(circleX, circleY, circleDiameter, circleDiameter);
    pop()

    linearGradient(circleX, circleY, blueT, whiteT, circleDiameter);
    ellipse(circleX, circleY, circleDiameter, circleDiameter);

    strokeWeight(0);

    conicGradient(0, circleX, circleY, [white, pink, blue, green])
    ellipse(circleX, circleY, circleDiameter, circleDiameter);

    radialGradient(circleX, circleY, 0, circleDiameter/2, blue, transparent, 0, 0);
    ellipse(circleX, circleY, circleDiameter, circleDiameter);

    radialGradient(circleX, circleY, 0, circleDiameter/4, white, transparent, -circleDiameter/6, -circleDiameter/4);
    ellipse(circleX, circleY, circleDiameter, circleDiameter);

    pop()
  }

  //------------------------ Gradient Functions ------------------------
  //linearGradient(c1x2, c1y2, white, pink, 70)
  //radialGradient(c1x2, c1y2, 0, 40, pink, transparent, -15, -15)
  //conicGradient(0, c1x2, c1y2, [white, pink, blue, green])

  function linearGradient(sX, sY, colS, colE, circleDia){ //length is circle diameter
    let gradient = drawingContext.createLinearGradient(
      sX, sY, sX+circleDia, sY+circleDia
      );
    gradient.addColorStop(0, colS)
    gradient.addColorStop(1, colE)
  
    drawingContext.fillStyle = gradient; 
  }

  function radialGradient(sX, sY, sRad, eRad, colS, colE, RCX, RCY){ //RC stands for Relative Coordinates, and dictates the radial gradient's center relative to the circle's center
    let gradient = drawingContext.createRadialGradient(
      sX+RCX, sY+RCY, sRad, sX+RCX, sY+RCY, eRad
      );
    gradient.addColorStop(0, colS)
    gradient.addColorStop(1, colE)
  
    drawingContext.fillStyle = gradient; 
  }

  function conicGradient(sA, centerX, centerY, colours){ //the center of the conical gradient will always be in the center of the circle
    let gradient = drawingContext.createConicGradient(
      sA, centerX, centerY
      );
    gradient.addColorStop(0, colours[0])
    gradient.addColorStop(0.25, colours[1])
    gradient.addColorStop(0.5, colours[2])
    gradient.addColorStop(0.75, colours[3])
    gradient.addColorStop(1, colours[0])
  
    drawingContext.fillStyle = gradient; 
    //drawingContext.strokeStyle = gradient;
  }

  function conicGradientStroke(sA, centerX, centerY, colours){ //the center of the conical gradient will always be in the center of the circle
    let gradient = drawingContext.createConicGradient(
      sA, centerX, centerY
      );
    gradient.addColorStop(0, colours[2])
    gradient.addColorStop(0.25, colours[3])
    gradient.addColorStop(0.5, colours[1])
    gradient.addColorStop(0.75, colours[0])
    gradient.addColorStop(1, colours[2])
  
    drawingContext.strokeStyle = gradient;
  }

  function conicGradientConnector(sA, centerX, centerY, colours){
    let gradient = drawingContext.createConicGradient(
      sA, centerX, centerY
      );
    gradient.addColorStop(0, colours[0])
    gradient.addColorStop(0.2, colours[1])
    gradient.addColorStop(0.4, colours[1])
    gradient.addColorStop(0.5, colours[0])
    gradient.addColorStop(0.65, colours[2])
    gradient.addColorStop(0.75, colours[2])
    gradient.addColorStop(1, colours[0])
  
    drawingContext.fillStyle = gradient; 
    //drawingContext.strokeStyle = gradient;
  }

  //------------------------ Connector Function ------------------------
  function drawConnector(startCircleX, startCircleY, endCircleX, endCircleY) { //draw a connector between circles
  startx = startCircleX
  starty = startCircleY
  endx = endCircleX
  endy = endCircleY

  //------------ Calculate Greater and Lesser ----------
  // this is so that the hypotnuse function doesn't produce a negative value when starting from a greater coordinate
  let greaterX = Math.max(startx, endx)
  let lesserX = Math.min(startx, endx);
  let greaterY = Math.max(starty, endy)
  let lesserY = Math.min(starty, endy);

  //------------ Calculate Hypotnuse of Coordinates ----------
  // this is for the length of the connector, so will be correct when I rotate it.
  let hypot = Math.hypot(greaterX-lesserX, greaterY-lesserY) //calculating hypotnuse WILL NOT WORK IN WITH NEGATIVE COORDS

  //------------ Calculate Center Point of Connector ----------
  let centerPoint = hypot / 2 

  //------------ Calculate Angle ----------
  let deltaY = endy - starty;
  let deltaX = endx - startx;
  let angleInRadians = Math.atan2(deltaY, deltaX);
  let angle = angleInRadians * (180 / Math.PI);
  if (angle < 0) {
    angle += 360; 
  }

  push()
    translate(startx, starty); //correct rotation point
    rotate(angle) //change to angle variable once function working
    translate(-startx, -starty); //set back to normal
    strokeWeight(0);
    conicGradientConnector(0, startx+centerPoint, starty, [whiteST, blueST, pinkST])//base color fill
    beginShape();
      curveVertex(startx, starty);
      curveVertex(startx, starty);
      curveVertex(startx, starty-14); // 0+1 to hide connector edges
      curveVertex(startx + hypot/2,starty-7); // inbetween part
      curveVertex(startx + hypot, starty-14); // 0+1 to hide connector edges
      curveVertex(startx + hypot, starty);
      curveVertex(startx + hypot, starty);
      curveVertex(startx + hypot, starty+14); // 30-1 to hide connector edges
      curveVertex(startx + hypot/2, starty+7); // inbetween part
      curveVertex(startx, starty+14); // 30-1 to hide connector edges
      curveVertex(startx, starty);
      curveVertex(startx, starty);
    endShape();
    radialGradient(startx+centerPoint, starty, 0, 20, white, transparent, 0, 0);//top color fill
    beginShape();
      curveVertex(startx, starty);
      curveVertex(startx, starty);
      curveVertex(startx, starty-14); // 0+1 to hide connector edges
      curveVertex(startx + hypot/2,starty-7); // inbetween part
      curveVertex(startx + hypot, starty-14); // 0+1 to hide connector edges
      curveVertex(startx + hypot, starty);
      curveVertex(startx + hypot, starty);
      curveVertex(startx + hypot, starty+14); // 30-1 to hide connector edges
      curveVertex(startx + hypot/2, starty+7); // inbetween part
      curveVertex(startx, starty+14); // 30-1 to hide connector edges
      curveVertex(startx, starty);
      curveVertex(startx, starty);
    endShape();
  pop()
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Interpolations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["c1size"]    = map(percent, 0, 100, oldObj["c1size"], newObj["c1size"]);

  new_letter["c1x"] = map(percent, 0, 100, oldObj["c1x"], newObj["c1x"]);
  new_letter["c1y"] = map(percent, 0, 100, oldObj["c1y"], newObj["c1y"]);

  new_letter["c2x"] = map(percent, 0, 100, oldObj["c2x"], newObj["c2x"]);
  new_letter["c2y"] = map(percent, 0, 100, oldObj["c2y"], newObj["c2y"]);

  new_letter["c3x"] = map(percent, 0, 100, oldObj["c3x"], newObj["c3x"]);
  new_letter["c3y"] = map(percent, 0, 100, oldObj["c3y"], newObj["c3y"]);

  new_letter["c4x"] = map(percent, 0, 100, oldObj["c4x"], newObj["c4x"]);
  new_letter["c4y"] = map(percent, 0, 100, oldObj["c4y"], newObj["c4y"]);

  new_letter["c5x"] = map(percent, 0, 100, oldObj["c5x"], newObj["c5x"]);
  new_letter["c5y"] = map(percent, 0, 100, oldObj["c5y"], newObj["c5y"]);

  new_letter["con1"] = map(percent, 0, 100, oldObj["con1"], newObj["con1"]);
  new_letter["con2"] = map(percent, 0, 100, oldObj["con2"], newObj["con2"]);
  new_letter["con3"] = map(percent, 0, 100, oldObj["con3"], newObj["con3"]);
  new_letter["con4"] = map(percent, 0, 100, oldObj["con4"], newObj["con4"]);
  new_letter["con5"] = map(percent, 0, 100, oldObj["con5"], newObj["con5"]);
  new_letter["con6"] = map(percent, 0, 100, oldObj["con6"], newObj["con6"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
