var rectY = 100;
   rectSpeed = 2;
   rectAcc = 0.5;
   ellX = 200;
   ellY = 200;
   ellSpeedX = 5;
   ellSpeedY = -4;
   ellR = 30;
   gameOver = 0;
   speed = [-3, -4, -5, 3, 4, 5];
   score = 0;
var   wid, hei, wid0, hei0, k;


  function setup() {
     createCanvas(windowWidth,windowHeight);
if (windowWidth < windowHeight) {
   wid = windowWidth;
   hei = windowWidth;
   wid0 = 0;
   hei0 = 0;
   } else {
      wid = windowHeight;
      hei = windowHeight;
      wid0 = windowWidth/2 - windowHeight/2;
      hei0 = 0
   }
k = wid / 400;
  ellX = random(wid0 + 100, wid - 100);
  ellY = random(hei0 + 100, hei - 100);
  ellSpeedY = random(speed);
  }

  function mousePressed() {
    rectSpeed = -7;
    rectAcc = -0.3;
    ellSpeedX = ellSpeedX * 1.2;
  }

  function keyPressed() {
    rectSpeed = -7;
    rectAcc = -0.3;
    ellSpeedX = ellSpeedX * 1.2;


  }

  function mouseReleased() {
    rectAcc = 0.5;
    ellSpeedX = ellSpeedX / 1.2;

     if (gameOver == 1) {
  ellX = random(wid0 + 100, wid - 100);
  ellY = random(hei0 + 100, hei - 100);
  ellSpeedY = random(speed);
  ellSpeedX = 5;
  gameOver = 0;
  score = 0;
  loop();
    }
  }

  function keyReleased() {
    rectAcc = 0.5;
    ellSpeedX = ellSpeedX / 1.2;
                                //change plz
    if (gameOver == 1) {
  ellX = random(100, wid - 100);
  ellY = random(100, hei - 100);
  ellSpeedY = random(speed);
  ellSpeedX = 5;
  gameOver = 0;
  score = 0;
  loop();
    }
  }

  function draw() {
     fill(230);
  rect(wid0*k, hei0*k, (wid+5)*k, (hei+5)*k);

 if (ellX*k < 10*k) {
    gameOver = 1;
    score = ('Your score: ' + score + '  Press any key');
  noLoop();
  }

  textSize(35*k);
  fill(0, 102, 153);
  text(score + "  " + k , wid0 + 15, hei0 + 50);
  noStroke();
  rect((wid0 + 10)*k, rectY*k, 10*k, 50*k);
  rectY = rectY + rectSpeed;
  rectSpeed = rectSpeed + rectAcc;
     
     
  if ((rectY + 50)*k > (hei - 10)*k) {
  rectSpeed = 0;
  rectY = hei - 60;
  }
  if ((rectY) < 10) {
  rectSpeed = 0;
  rectY = 10;
  }

  ellipse(ellX, ellY, ellR, ellR);
  ellX = ellX + ellSpeedX;
  ellY = ellY + ellSpeedY;
  if ((ellY + ellR/2 > hei)
   || (ellY - ellR/2 < hei0)) {
    ellSpeedY = -ellSpeedY;
  }
  if ((ellX - ellR/2 < 20) && (ellY > rectY-5) && (ellY < rectY + 55)) {
    ellX = 20 + ellR/2;
    ellSpeedX = -ellSpeedX;
    score ++;
     if (score > 3) {
        ellSpeedX = ellSpeedX * 1.01;
         ellSpeedY = ellSpeedY * 1.01;
  }
  }
  if (ellX + ellR/2 > wid)  {
    ellSpeedX = -ellSpeedX;

  }

  }
