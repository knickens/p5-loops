var y = 100;
var speed = 6 ;

function setup(){
  createCanvas(600,400);
  
}

function draw(){
  background(255);
  strokeWeight(2);  
  stroke(0);
  
    greenRow();
  
  pinkRow(y);
  moveRow();
}

function moveRow(){
    y = y+speed;
    if(y>=400 || y<=100){
        speed = speed * -1;
    }
}

function greenRow(){
    var x = 0;
    while(x<650){
        fill(0,255,0);
        ellipse(x, 50, 25, 25);
        x = x + 50;  
    }
}


function pinkRow(y){
        fill(255,0,200);
        for(var x2 = 0; x2 < 650 ; x2 = x2 + 50){
            ellipse(x2,y,25,25);
        }
}


