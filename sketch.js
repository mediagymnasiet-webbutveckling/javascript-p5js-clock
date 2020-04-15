function setup() {
    let canvas = createCanvas(400, 400);
    canvas.id("mycanvas")
    angleMode(DEGREES);
    
  }
  
  function draw() {
   
    background(0);
    translate(200,200);
    rotate(-90);
    let hr = hour();
    let mn = minute();
    let sc = second();

   /* fill(255);
    noStroke();
    text(hr + ":" + mn + ":" + sc, 10, 200);
    */

   strokeWeight(8);
   noFill();
   
   stroke(255, 100, 150);
   let secAngle = map(sc, 0, 60, 0, 360);
   arc(0, 0, 300, 300, 0, secAngle);

   stroke(150, 100, 255);
   let minAngle = map(mn, 0, 60, 0, 360);
   arc(0, 0, 280, 280, 0, minAngle);

   stroke(150, 255, 100);
   let hourAngle = map(hr%12, 0, 12, 0, 360);
   arc(0, 0, 260, 260, 0, hourAngle);

    push();
    rotate(secAngle);
    stroke(255, 100, 150);
    line(0,0,100,0);
    pop();

    push();
    rotate(minAngle);
    stroke(150, 100, 255);
    line(0,0,75,0);
    pop();


    push();
    rotate(hourAngle);
    stroke(150, 255, 100);
    line(0,0,50,0);
    pop();

    stroke(255);
    point(0,0);
    
  }

  new p5(sketch, 'container');
