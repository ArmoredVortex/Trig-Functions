var center;
let constant = 120;
let angle = 0.05;
let scalar = 100;
let speed = 0.03;
let sine = [];
let sineAngles = [];
let sineAngleV = [];
let cosAngles = [];
let cosAngleV = [];
let r = 4;
function setup() {
  createCanvas(windowWidth , windowHeight);
  center = 120
  let total = floor(width / (r * 2));
  for (let i = 0; i < total + 1; i++) {
    sineAngles[i] = map(i, 0, total, 0, 2 * TWO_PI);
    // angleV[i] = 0.01 + i / 100;
  }
  for (let i = 0; i < total + 1; i++) {
    cosAngles[i] = map(i, 0, total, 0, 2 * TWO_PI);
    // angleV[i] = 0.01 + i / 100;
  }
}

function draw() {
  background(100);
  fill(100)
  stroke(2);
  ellipse(center,center,200)
  let x = constant + sin(angle) * scalar;
  let y = constant + cos(angle) * scalar;
  fill(20,40,150)
  ellipse(x,y,20,20);
  angle = angle + speed; 
  ellipse(center,y,20,20)
  line(x,y,center,y)
  ellipse(x,center,20,20)
  line(x,y,x,center)
//   sine.push(y);
//   if(sine.length > 100){
//     sine.pop();
//   }
  beginShape();
  for (let i = 0; i < sineAngles.length; i++) {
    let y = map(cos(sineAngles[i]), -1, 1, 20, 220);
    noStroke();
    let x = map(i, 0, sineAngles.length, 300, 1000);
    // line(x, 0, x, y);
    fill(0)
    circle(x, y, r * 2);
    // vertex(x,y);
    sineAngles[i] += 0.03;
    // angles[i] += angleV[i];
  }
  endShape();
  beginShape();
  for (let i = 0; i < cosAngles.length; i++) {
    let y = map(sin(cosAngles[i]), -1, 1, 20, 220);
    let x = map(i, 0, cosAngles.length, 300, 1000);
    // line(x, 0, x, y);
    noStroke();
    fill(200,0,0)
    circle(x, y, r * 2);
    // vertex(x,y);
    cosAngles[i] += 0.03;
    // angles[i] += angleV[i];
  }
  endShape();
}