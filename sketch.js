var center;
let constant = 120;
let angle = 0.05;
let scalar = 100;
let speed = 0.05;
let sine = [];
let angles = [];
let angleV = [];
let r = 4;
function setup() {
  createCanvas(windowWidth , windowHeight);
  center = 120
  let total = floor(width / (r * 2));
  for (let i = 0; i < total + 1; i++) {
    angles[i] = map(i, 0, total, 0, 5 * TWO_PI);
    // angleV[i] = 0.01 + i / 100;
  }
}

function draw() {
  background(100);
  fill(100)
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
  for (let i = 0; i < angles.length; i++) {
    let y = map(cos(angles[i]), -1, 1, 20, 220);
    strokeWeight(4);
    let x = map(i, 0, angles.length, 300, 1000);
    // line(x, 0, x, y);
    circle(x, y, r * 2);
    // vertex(x,y);
    angles[i] += 0.05;
    // angles[i] += angleV[i];
  }
  endShape();
}