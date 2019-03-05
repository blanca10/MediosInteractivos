var x1=100;
var y1=80;
var xE=0
var yE=0
var x2=800 
var y2=700
var puntaje= 100
var puntaje2=100
//var direccion=1


function setup() {
  createCanvas(1000,800);
  //variables bolas de fuego
  xE=random(0,width);
  yE=random(0,height);
 
}

function draw() {
  //cielo
  fill(100,100,140);
  rect(0,0,1500,1000);
  
 
  //montaña atrás
  stroke(200);
  fill(100);
beginShape();
vertex(0,300);
vertex(20,250);
vertex(70,200);
vertex(90,200);
vertex(120,250);
vertex(150,260);
vertex(180,220);
vertex(220,220);
vertex(300,300);
vertex(350,290);
vertex(380,250);
vertex(420,200);
vertex(500,160);
vertex(530,220);
vertex(570,250);
vertex(600,280);
vertex(630,250);
vertex(660,200);
vertex(690,230);
vertex(700,250);
vertex(730,270);
vertex(760,230);
vertex(800,280);
vertex(850,290);
vertex(900,300);
vertex(930,280);
vertex(1000,310);
endShape();
//lava
noStroke();
fill(160,70,70);
beginShape();
vertex(0,300)
vertex(20,290);
vertex(60,295);
vertex(80,290);
vertex(120,300);
vertex(160,300);
vertex(200,300)
vertex(260,290);
vertex(290,295);
vertex(320,290);
vertex(340,300);
vertex(355,300);
vertex(410,300)
vertex(480,290);
vertex(500,295);
vertex(520,290);
vertex(580,300);
vertex(600,300);
vertex(640,300)
vertex(660,290);
vertex(700,295);
vertex(760,290);
vertex(790,300);
vertex(810,300);
vertex(840,300)
vertex(900,290);
vertex(910,295);
vertex(930,290);
vertex(990,300);
vertex(1500,400);
vertex(1000,1000);
vertex(0,1000);
vertex(0,300);
endShape();
//lava 2
noStroke();
fill(160,160,0,30);
beginShape();
vertex(0,500)
vertex(20,490);
vertex(60,495);
vertex(80,490);
vertex(120,500);
vertex(160,500);
vertex(200,500)
vertex(260,490);
vertex(290,495);
vertex(320,490);
vertex(340,500);
vertex(355,500);
vertex(410,500)
vertex(480,490);
vertex(500,495);
vertex(520,490);
vertex(580,500);
vertex(600,500);
vertex(640,500)
vertex(660,490);
vertex(700,495);
vertex(760,490);
vertex(790,500);
vertex(810,500);
vertex(840,500)
vertex(900,490);
vertex(910,495);
vertex(930,490);
vertex(990,500);
vertex(1500,600);
vertex(1000,1000);
vertex(0,1000);
vertex(0,300);
endShape();
//lava 3
noStroke();
fill(200,200,0,30);
beginShape();
vertex(0,600)
vertex(20,590);
vertex(60,595);
vertex(80,590);
vertex(120,600);
vertex(160,600);
vertex(200,600)
vertex(260,600);
vertex(290,600);
vertex(320,600);
vertex(340,600);
vertex(355,600);
vertex(410,600)
vertex(480,590);
vertex(500,595);
vertex(520,590);
vertex(580,600);
vertex(600,600);
vertex(640,600)
vertex(660,590);
vertex(700,595);
vertex(760,590);
vertex(790,600);
vertex(810,600);
vertex(840,600)
vertex(900,590);
vertex(910,595);
vertex(930,590);
vertex(990,600);
vertex(1500,700);
vertex(1000,1000);
vertex(0,1000);
vertex(0,300);
endShape();


//montañas cerca
  stroke(200);
fill(80);
beginShape();
vertex(0,350);
vertex(20,300);
vertex(70,250);
vertex(90,250);
vertex(120,300);
vertex(150,310);
vertex(180,280);
vertex(220,280);
vertex(300,350);
vertex(350,340);
vertex(380,300);
vertex(420,250);
vertex(500,210);
vertex(530,270);
vertex(570,300);
vertex(600,250);
vertex(630,300);
vertex(660,250);
vertex(690,280);
vertex(700,300);
vertex(730,310);
vertex(760,350);
vertex(800,330);
vertex(850,310);
vertex(900,350);
vertex(930,330);
vertex(1000,360);
endShape();

  noStroke();
  //dragón1 (arriba);
  //cuernos
  fill(100,200,100);
  triangle(x1+20,y1-70,x1+30,y1-30,x1,y1-40);
  triangle(x1,y1-40,x1-20,y1-65,x1-25,y1-30);
  triangle(x1-20,y1-30,x1-50,y1-40,x1-40,y1-20);
  triangle(x1-40,y1-20,x1-60,y1-20,x1-30,y1+10);
  triangle(x1-65,y1-5,x1+40,y1-10,x1-30,y1+20);
  triangle(x1-50,y1+5,x1-65,y1+6,x1-40,y1+30);


  //cuerpo
  fill(200,250,200);
  ellipse(x1,y1,90,90);
  //ojo
   stroke(255);
  fill(puntaje);
  ellipse(x1+20,y1-10,40,40);
  //ojo Chiquito
  fill(0);
  ellipse(x1+20,y1-10,10,10);
  fill(0);
  //sonrisa
  stroke(80,180,80);
fill(200,250,200);
  beginShape();
  vertex(x1+5,y1+13);
  vertex(x1+15,y1+18);
  vertex(x1+20,y1+20);
  vertex(x1+35,y1+24);
  vertex(x1+45,y1+24);
  vertex(x1+50,y1+22);
  vertex(x1+45,y1+26);
  vertex(x1+40,y1+30);
  vertex(x1+35,y1+34);
  vertex(x1+30,y1+38);
 vertex(x1+25,y1+40);
  vertex(x1+20,y1+42);
  vertex(x1+15,y1+43);
  endShape();
  
  //dientes
 stroke(150);
  fill(255);
  triangle(x1+15,y1+18,x1+22,y1+10,x1+25,y1+20);
  triangle(x1+25,y1+20,x1+32,y1+12,x1+35,y1+22);
 
  
  noStroke();
 //colita
 fill(200,250,200);
 triangle(x1-20,y1-40,x1-70,y1+30,x1-20,y1+40);
  //alita
   stroke(80,180,80);
  line(x1-10,y1,x1-30,y1-10);
  line(x1-10,y1+10,x1-30,y1+20);
  line(x1-10,y1+5,x1-20,y1+5);
  line(x1-30,y1-10,x1-20,y1+5);
  line(x1-20,y1+5,x1-30,y1+20);
  //ceja
  stroke(200);
  fill(200);
  beginShape();
  vertex(x1+20,y1-33);
  vertex(x1+25,y1-36);
  vertex(x1+30,y1-36);
  vertex(x1+35,y1-36);
  endShape();
  
  // nariz
   stroke(80,180,80);
  line(x1+38,y1+5,x1+38,y1+10);
  endShape();
  //pata grande
  noFill();
 stroke(80,180,80);
  beginShape();
  vertex(x1-10,y1+30);
  vertex(x1-5,y1+30);
  vertex(x1,y1+30);
  vertex(x1+5,y1+32);
  vertex(x1+10,y1+34);
  vertex(x1+11,y1+36);
  vertex(x1+12,y1+38);
  vertex(x1+12,y1+40);
  vertex(x1+12,y1+43);
  endShape();
  //pata pequeña
 stroke(80,180,80);
  beginShape();
  vertex(x1,y1+34);
  vertex(x1+5,y1+36);
  vertex(x1+8,y1+38);
  vertex(x1+8,y1+40);
  vertex(x1+7,y1+42);
  vertex(x1+7,y1+44);
  endShape();
  
  //nalguita
   stroke(80,180,80);
  beginShape();
  vertex(x1-35,y1+25);
  vertex(x1-37,y1+27);
  vertex(x1-38,y1+31);
  vertex(x1-38,y1+35);
  vertex(x1-37,y1+37);
  endShape();
 endShape();
 
  //escamas cola
   stroke(80,180,80);
  triangle(x1-38,y1+27,x1-70,y1+30,x1-38,y1+37);
  line(x1-45,y1+28,x1-45,y1+36);
  line(x1-49,y1+28,x1-49,y1+35);
  line(x1-53,y1+28,x1-53,y1+34);
   line(x1-57,y1+28,x1-57,y1+33);
   
 
  if(keyCode==RIGHT_ARROW){
       x1=x1+5;
       
     }
  
     if(keyCode==LEFT_ARROW){
       x1=x1-5;
       
     }
  
  if(keyCode==DOWN_ARROW){
       y1=y1+5;
       
     }
   if(keyCode==UP_ARROW){
       y1=y1-5;
       
     }
   
   
   
   //dragón abajo
   
   
   //cuernos
   noStroke();
   fill(255,100,100);
   triangle(x2+20,y2-30,x2+60,y2-30,x2+30,y2-70);
   triangle(x2+70,y2-70,x2+40,y2-30,x2+80,y2-30);
   triangle(x2+80,y2-30,x2+110,y2-35,x2+90,y2);
   triangle(x2+50,y2-10,x2+120,y2,x2+92,y2+30);
   triangle(x2+92,y2+10,x2+125,y2+20,x2+95,y2+40);
   triangle(x2+90,y2+25,x2+128,y2+35,x2+120,y2+42);
  
  //cuerpo
  noStroke();
  fill(255,200,200);
  ellipse(x2+50,y2,90,90);
  //ojo
   stroke(255);
  fill(puntaje2-25);
  ellipse(x2+30,y2-5,40,40);
 //ojo Chiquito
 fill(0);
 ellipse(x2+30,y2-6,10,10);
 
 
  //fill(0);
  
  //sonrisa

 stroke(255,100,100);
fill(255,200,200);
 beginShape();
 vertex(x2+40,y2+24);
vertex(x2+35,y2+26);
vertex(x2+25,y2+28);
vertex(x2+20,y2+28);
vertex(x2+15,y2+27);
vertex(x2+10,y2+27);
vertex(x2+5,y2+26);
vertex(x2+8,y2+34);
vertex(x2+10,y2+36);
vertex(x2+12,y2+38);
vertex(x2+22,y2+41);
vertex(x2+30,y2+43);
vertex(x2+40,y2+44);
endShape();
  
  //dientes
 stroke(255,100,100);
  fill(255);
  triangle(x2+35,y2+26,x2+25,y2+28,x2+30,y2+20);
triangle(x2+25,y2+28,x2+18,y2+28,x2+20,y2+20);
 
  
  noStroke();
 //colita
fill(255,200,200);

 triangle(x2+120,y2+43,x2+70,y2-40,x2+45,y2+42);
 
 
  //alita
   stroke(255,100,100);
  line(x2+60,y2+5,x2+80,y2-5);
  line(x2+80,y2-5,x2+72,y2+13);
  line(x2+60,y2+13,x2+72,y2+13);
  line(x2+80,y2+30,x2+72,y2+13);
  line(x2+60,y2+20,x2+80,y2+30);
  //ceja
 stroke(255,100,100);
 
  beginShape();
  vertex(x2+40,y2-28);
  vertex(x2+30,y2-30);
  vertex(x2+20,y2-32);
  vertex(x2+10,y2-30);
  //vertex(800,670);
  endShape();
  
  // nariz
   stroke(200,80,80);
   line(x2+13,y2+13,x2+13,y2+18);
  
  //pata grande
  noFill();
  stroke(200,80,80);
  beginShape();
  vertex(x2+55,y2+30);
  vertex(x2+50,y2+31);
  vertex(x2+45,y2+33);
  vertex(x2+40,y2+35);
  vertex(x2+39,y2+37);
  vertex(x2+38,y2+39);
  vertex(x2+37,y2+41);
 vertex(x2+37,y2+45);
  
  endShape();
  
  //pata pequeña
 noFill();
  stroke(200,80,80);
  beginShape();
  vertex(x2+55,y2+35);
  vertex(x2+50,y2+36);
  vertex(x2+45,y2+38);
  vertex(x2+41,y2+40);
  vertex(x2+40,y2+42);
  vertex(x2+40,y2+43);
  vertex(x2+42,y2+44);
 vertex(x2+42,y2+44);
 endShape();
  
  //nalguita
   stroke(200,80,80);
  beginShape();
  vertex(x2+72,y2+30);
  vertex(x2+74,y2+35);
  vertex(x2+74,y2+38);
  vertex(x2+72,y2+40);
  vertex(x2+70,y2+42);
  endShape();

 
  //escamas cola
    stroke(200,80,80);
    line(x2+72,y2+30,x2+120,y2+43);
    //escamas
    line(x2+78,y2+32,x2+78,y2+42);
    line(x2+83,y2+33,x2+83,y2+42);
    line(x2+88,y2+34,x2+88,y2+42);
    line(x2+93,y2+35,x2+93,y2+42);
    line(x2+98,y2+36,x2+98,y2+42);
    
     if(keyCode==68){
      x2=x2+5;
       
     }
  
     if(keyCode==65){
       x2=x2-5;
       
     }
  
  if(keyCode==83){
       y2=y2+5;
       
     }
   if(keyCode==87){
       y2=y2-5;
       
     }
   
  
   
   
   //bola de fuego
   noStroke();
   fill(255,255,0);
   
   
   
   
   //por si acaso jejejej
   ellipse(xE,yE,50,50);
   fill(255,200,0,100);
   ellipse(xE,yE,30,30);
   
   
   
   //beginShape();
  //vertex(xE+105,yE+300);
 //vertex(xE+104,yE+305);
 //vertex(xE+104,yE+310);
//vertex(xE+103,yE+315);
//vertex(xE+105,yE+320);
 //vertex(xE+115,yE+323);
   //vertex(xE+125,yE+325);
  //vertex(xE+135,yE+323);
  //vertex(xE+145,yE+320);
 //vertex(xE+151,yE+315);
 //vertex(xE+150,yE+310);
 //vertex(xE+150,yE+305);
  //vertex(xE+148,yE+300);
   //vertex(xE+145,yE+305);
   //vertex(xE+143,yE+308);
 //vertex(xE+141,yE+305);
  //vertex(xE+135,yE+300);
  //vertex(xE+130,yE+295);
  //vertex(xE+125,yE+290);
  //vertex(xE+120,yE+295);
 //vertex(xE+115,yE+300);
  //vertex(xE+115,yE+305);
 //vertex(xE+116,yE+308);
 //vertex(xE+110,yE+305);

 //endShape();
   print(dist(x1,y1,xE,yE));
   if(dist(x1,y1,xE,yE)<30){
     xE=random(0,width);
     yE=random(0,height);
     puntaje=puntaje+30
    }
    
     print(dist(x2,y2,xE,yE));
   if(dist(x2,y2,xE,yE)<30){
     xE=random(0,width);
     yE=random(0,height);
     puntaje2=puntaje+30
    }
}
