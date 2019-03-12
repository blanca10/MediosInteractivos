//variables de tiempo

var horas;
var minutos;
var segundos;

var horasPatty;
var minutosPatty;
var segundosPatty;




//borrador//
var posXrec1 =10;
var posYrec1 =10;
var altoRec1= 40;
var anchoRec1=60

//zona horaria 1-6 (0-320)
//botón 2
var posXrec2 =100;
var posYrec2 =10;
var tamRec2= 40;

//botón3
var posXrec3 = 150;
var posYrec3 =10;
var tamRec3 =40;

//muñequita 1
var posXmu =100
var posYmu =360

//

//zona horaria 7-12 (320-640)
//botón4
var posXrec4 =420;
var posYrec4 =10;
var tamRec4 =40;


//botón5
var posXrec5 =470;
var posYrec5 =10;
var tamRec5 =40;
//hoyo


//muñequita 2
var posXmu2 =400
var posYmu2 =360


//

//zona horaria 1-6 (640-980)
//botón6
var posXrec6 =740;
var posYrec6 =10;
var tamRec6 =40;

//botón7
var posXrec7 =790;
var posYrec7 =10;
var tamRec7 =40;

//muñequita 3
var posXmu3 = 700
var posYmu3 = 360

//lluvia
var xlluvia=640
var posY=20


//paraguas

var posXpara = 800
var posYpara = 250

//botas
var posXbota = 800
var posYbota = 582

//


//zona horaria 7-12 (980-1280);
//botón 8
var posXrec8 =1080;
var posYrec8 =10;
var tamRec8 =40;

//simbolo de corazon
var posXcora=1095
var posYcora=30

//botón 9
var posXrec9 =1130;
var posYrec9 =10;
var tamRec9 =40;

//pedazo de carne
var posXcarne=1090
var posYcarne=500

//osito 
var posXoso=1180
var posYoso=400

//muñequita 4
var posXmu4= 1000
var posYmu4= 360

//


function setup() {
  createCanvas(1280,600);
  
  //Este escenario se mantinene fijo y no cambia a pesar de las horas
    //cielo
  fill(180,200,255);
  quad(0,0,0,255,2000,165,2000,0);
   //montañas
  fill(30,100,0);
  stroke(0);
  beginShape();
  vertex(0,255);
  vertex(20,180);
  vertex(50,160);
  vertex(60,140);
  vertex(80,120);
  vertex(87,140);
  vertex(94,160);
  vertex(102,180);
  vertex(115,170);
  vertex(120,190);
  vertex(130,170);
  vertex(145,160);
  vertex(158,150);
  vertex(166,120);
  vertex(169,130);
  vertex(175,138);
  vertex(188,147);
  vertex(196,154);
  vertex(200,140);
  vertex(210,158);
  vertex(230,170);
  vertex(280,210);
  vertex(300,200);
  vertex(330,186);
  vertex(368,130);
  vertex(392,115);
  
  vertex(415,130);
  vertex(448,145);
  vertex(468,165);
  vertex(495,185);
  vertex(520,200);
  vertex(536,190);
  vertex(545,180);
  vertex(555,165);
  vertex(570,170);
  vertex(590,200);
  vertex(630,195);
  vertex(660,185);
  vertex(670,170);
  vertex(678,170);
  vertex(689,180);
  vertex(720,160);
  vertex(750,140);
  vertex(777,120);
  vertex(800,140);
  vertex(820,160);
  vertex(845,170);
  vertex(900,170);
  vertex(910,190);
  vertex(920,170);
  vertex(930,160);
  vertex(958,150);
  vertex(962,120);
  vertex(970,130);
  vertex(975,138);
  vertex(988,140);
  vertex(1000,154);
  vertex(1020,140);
  vertex(1035,158);
  vertex(1048,170);
  vertex(1062,210);
  vertex(1070,200);
  vertex(1085,186);
  vertex(1090,130);
  vertex(1098,115);
  vertex(1120,130);
  vertex(1150,145);
  vertex(1165,165);
  vertex(1178,185);
  vertex(1185,200);
  vertex(1198,190);
  vertex(2020,180);
  vertex(2035,165);
    endShape();
      //pasto
  fill(100,200,100);
  quad(0,255,2000,165,2000,600,0,600);
 
}

function draw() {
  noStroke();
  
   horas=hour();
   minutos=minute();
   segundos=second();
   
    horasPatty=horas;
   minutosPatty=minutos;
   segundosPatty=segundos;
 
   
  
  //borrador
  noFill();
  stroke(255);
  rect(posXrec1,posYrec1,anchoRec1,altoRec1);
  //simbolo
  fill(255);
  quad(30,25,60,25,60,30,25,30);
  triangle(30,20,30,35,15,27);
  
    

  
  

  //zona horaria 1-6 am
if(horasPatty >= 1 && horasPatty < 6)
{
//niña var posXmu =100  posYmu =360
//pelo
noStroke();
fill(0);
ellipse(posXmu,posYmu,50,50);
//cebolla
stroke(200,200,100);
ellipse(posXmu-10,posYmu-20,30,30);
//cara
fill(255,190,130);
ellipse(posXmu+10,posYmu,35,45);
//ojo
fill(255);
stroke(0);
ellipse(posXmu+15,posYmu-5,10,8);
fill(0);
ellipse(posXmu+17,posYmu-5,5,4);
//nariz
noStroke();
fill(255,190,130);
triangle(posXmu+27,posYmu-3,posXmu+33,posYmu-3,posXmu+27,posYmu+2);
//sonrisa
stroke(0);
noFill();
beginShape();
vertex(posXmu+27,posYmu+8);
vertex(posXmu+26,posYmu+8);
vertex(posXmu+25,posYmu+7);
vertex(posXmu+24,posYmu+7);
vertex(posXmu+23,posYmu+6);
vertex(posXmu+23,posYmu+6);
endShape();
//cola
noStroke();
fill(50,50,200);
ellipse(posXmu,posYmu+130,35,50);

//cuello
noStroke();
fill(255,190,130);
quad(posXmu-6,posYmu+10,posXmu+15,posYmu+20,posXmu+10,posYmu+40,posXmu,posYmu+40);
//parte inferior a cuello
fill(255);
quad(posXmu-2,posYmu+40,posXmu+13,posYmu+40,posXmu+18,posYmu+58,posXmu-18,posYmu+58);
//hombro
//ellipse(98,405,15,15);
//bubi
fill(255);
ellipse(posXmu+18,posYmu+65,15,25);
//pierna
fill(50,50,200);
quad(posXmu-10,posYmu+140,posXmu+17,posYmu+140,posXmu+12,posYmu+220,posXmu-2,posYmu+220);
//zapato
fill(255);
ellipse(posXmu+15,posYmu+222,35,20);
//abdomen
rect(posXmu-17,posYmu+55,35,60);
//brazo
fill(200,0,0);
ellipse(posXmu+1,posYmu+85,15,73);
//maletita
fill(200);
quad(posXmu-30,posYmu+50,posXmu-10,posYmu+50,posXmu-10,posYmu+105,posXmu-30,posYmu+105);
fill(170);
quad(posXmu-10,posYmu+50,posXmu-35,posYmu+50,posXmu-35,posYmu+60,posXmu-10,posYmu+60);


   fill(255);
   //botón2
   stroke(80,0,80);
    rect(posXrec2,posYrec2,tamRec2,tamRec2);
    //simbolo tipee
     stroke(130,30,0);
  fill(230,130,30);
    triangle(120,15,140,45,100,45);
    
   //botón3
   fill(255);
     stroke(80,0,80);
    rect(posXrec3,posYrec3,tamRec3,tamRec3);
    //simbolo de fuego
    noStroke();
    fill(255,200,0);
    ellipse(170,30,30,30);
    
    
}
    
     //zona horaria 7-12 am
     //el reto en esta zona horaria es que la niña tiene mucho sueño
     //y debe encontrar la forma de despertarse
     
   else if(horasPatty >=6 && horasPatty < 12)
   {
     //niña var posXmu =100  posYmu =360
//pelo
noStroke();
fill(0);
ellipse(posXmu2,posYmu2,50,50);
//cebolla
stroke(200,200,100);
ellipse(posXmu2-10,posYmu2-20,30,30);
//cara
fill(255,190,130);
ellipse(posXmu2+10,posYmu2,35,45);
//ojo
fill(255);
stroke(0);
ellipse(posXmu2+15,posYmu2-5,10,8);
//ojera

fill(0,0,0,50);
ellipse(posXmu2+15,posYmu2-3,10,8);
fill(0);
ellipse(posXmu2+17,posYmu2-5,5,4);
//nariz
noStroke();
fill(255,190,130);
triangle(posXmu2+27,posYmu2-3,posXmu2+33,posYmu2-3,posXmu2+27,posYmu2+2);
//sonrisa
stroke(0);
noFill();
beginShape();
vertex(posXmu2+27,posYmu2+8);
vertex(posXmu2+26,posYmu2+8);
vertex(posXmu2+25,posYmu2+7);
vertex(posXmu2+24,posYmu2+7);
vertex(posXmu2+23,posYmu2+6);
vertex(posXmu2+23,posYmu2+6);
endShape();
//cola
noStroke();
fill(50,50,200);
ellipse(posXmu2,posYmu2+130,35,50);

//cuello
noStroke();
fill(255,190,130);
quad(posXmu2-6,posYmu2+10,posXmu2+15,posYmu2+20,posXmu2+10,posYmu2+40,posXmu2,posYmu2+40);
//parte inferior a cuello
fill(255);
quad(posXmu2-2,posYmu2+40,posXmu2+13,posYmu2+40,posXmu2+18,posYmu2+58,posXmu2-18,posYmu2+58);
//hombro
//ellipse(98,405,15,15);
//bubi
fill(255);
ellipse(posXmu2+18,posYmu2+65,15,25);
//pierna
fill(50,50,200);
quad(posXmu2-10,posYmu2+140,posXmu2+17,posYmu2+140,posXmu2+12,posYmu2+220,posXmu2-2,posYmu2+220);
//zapato
fill(255);
ellipse(posXmu2+15,posYmu2+222,35,20);
//abdomen
rect(posXmu2-17,posYmu2+55,35,60);
//brazo
fill(200,0,0);
ellipse(posXmu2+28,posYmu2+70,73,15);
//maletita
fill(200);
quad(posXmu2-30,posYmu2+50,posXmu2-10,posYmu2+50,posXmu2-10,posYmu2+105,posXmu2-30,posYmu2+105);
fill(170);
quad(posXmu2-10,posYmu2+50,posXmu2-35,posYmu2+50,posXmu2-35,posYmu2+60,posXmu2-10,posYmu2+60);
    
    fill(255);
    // botón4
     stroke(80,0,80);
    rect(posXrec4,posYrec4,tamRec4,tamRec4);
    //simbolo de balde de agua
    fill(100,100,255);
    noStroke();
    quad(425,15,455,15,448,45,432,45);
    
    //botón5
    fill(255);
     stroke(80,0,80);
    rect(posXrec5,posYrec5,tamRec5,tamRec5);
    
    //simbolo cafecito 
    quad(475,15,505,15,498,45,482,45);
   
 // zs de sueño
    line(480,280,500,280);
    line(500,280,480,310);
    line(480,310,500,310);
    
    line(460,310,470,310);
    line(470,310,460,330);
    line(460,330,470,330);
    
    line(445,330,450,330);
    line(450,330,445,340);
    line(445,340,450,340);
    
  }


   //zona horaria 1-6 pm
   //aqui el reto es que comienza a llover 
 else if(horasPatty >=12 && horasPatty < 18)
  {
  //charcos
     noStroke();
 fill(255,255,255,100);
 ellipse(660,550,100,30);
 ellipse(750,530,60,10);
 ellipse(860,550,120,30);
 
    
    //niña var posXmu =100  posYmu =360
//pelo
noStroke();
fill(0);
ellipse(posXmu3,posYmu3,50,50);
//cebolla
stroke(200,200,100);
ellipse(posXmu3-10,posYmu3-20,30,30);
//cara
fill(255,190,130);
ellipse(posXmu3+10,posYmu3,35,45);
//ojo
fill(255);
stroke(0);
ellipse(posXmu3+15,posYmu3-5,10,8);
fill(0);
ellipse(posXmu3+17,posYmu3-5,5,4);
//nariz
noStroke();
fill(255,190,130);
triangle(posXmu3+27,posYmu3-3,posXmu3+33,posYmu3-3,posXmu3+27,posYmu3+2);
//sonrisa
stroke(0);
noFill();
beginShape();
vertex(posXmu3+27,posYmu3+8);
vertex(posXmu3+26,posYmu3+8);
vertex(posXmu3+25,posYmu3+7);
vertex(posXmu3+24,posYmu3+7);
vertex(posXmu3+23,posYmu3+6);
vertex(posXmu3+23,posYmu3+6);
endShape();
//cola
noStroke();
fill(50,50,200);
ellipse(posXmu3,posYmu3+130,35,50);

//cuello
noStroke();
fill(255,190,130);
quad(posXmu3-6,posYmu3+10,posXmu3+15,posYmu3+20,posXmu3+10,posYmu3+40,posXmu3,posYmu3+40);
//parte inferior a cuello
fill(255);
quad(posXmu3-2,posYmu3+40,posXmu3+13,posYmu3+40,posXmu3+18,posYmu3+58,posXmu3-18,posYmu3+58);
//hombro
//ellipse(98,405,15,15);
//bubi
fill(255);
ellipse(posXmu3+18,posYmu3+65,15,25);
//pierna
fill(50,50,200);
quad(posXmu3-10,posYmu3+140,posXmu3+17,posYmu3+140,posXmu3+12,posYmu3+170,posXmu3-2,posYmu3+170);

//abdomen
fill(255);
rect(posXmu3-17,posYmu3+55,35,60);
//brazo
fill(200,0,0);
ellipse(posXmu3+1,posYmu3+85,15,73);
//maletita
fill(200);
quad(posXmu3-30,posYmu3+50,posXmu3-10,posYmu3+50,posXmu3-10,posYmu3+105,posXmu3-30,posYmu3+105);
fill(170);
quad(posXmu3-10,posYmu3+50,posXmu3-35,posYmu3+50,posXmu3-35,posYmu3+60,posXmu3-10,posYmu3+60);
  
 
 //lluvia
 var posY=20
 noStroke();
 fill(255);
 quad(xlluvia,posY,xlluvia+5,posY,xlluvia+3,posY+10,xlluvia-2,posY+10);
 quad(xlluvia+30,posY+5,xlluvia+35,posY+5,xlluvia+33,posY+15,xlluvia+28,posY+15);
 quad(xlluvia+50,posY,xlluvia+55,posY,xlluvia+53,posY+10,xlluvia+47,posY+10);
 quad(xlluvia+70,posY+5,xlluvia+75,posY+5,xlluvia+73,posY+15,xlluvia+68,posY+15);
 quad(xlluvia+100,posY,xlluvia+105,posY,xlluvia+103,posY+10,xlluvia+98,posY+10);
 quad(xlluvia+130,posY+5,xlluvia+135,posY+5,xlluvia+133,posY+15,xlluvia+128,posY+15);
 quad(xlluvia+170,posY,xlluvia+175,posY,xlluvia+173,posY+10,xlluvia+168,posY+10);
 quad(xlluvia+200,posY+5,xlluvia+205,posY+5,xlluvia+203,posY+15,xlluvia+198,posY+15);
 quad(xlluvia+240,posY,xlluvia+245,posY,xlluvia+243,posY+10,xlluvia+238,posY+10);
 quad(xlluvia+270,posY+5,xlluvia+275,posY+5,xlluvia+273,posY+15,xlluvia+268,posY+15);
 quad(xlluvia+300,posY,xlluvia+305,posY,xlluvia+303,posY+10,xlluvia+298,posY+10);
 quad(xlluvia+340,posY+5,xlluvia+345,posY+5,xlluvia+343,posY+15,xlluvia+338,posY+15);
 
var posY=posY+30
quad(xlluvia,posY,xlluvia+5,posY,xlluvia+3,posY+10,xlluvia-2,posY+10);
 quad(xlluvia+30,posY+5,xlluvia+35,posY+5,xlluvia+33,posY+15,xlluvia+28,posY+15);
 quad(xlluvia+50,posY,xlluvia+55,posY,xlluvia+53,posY+10,xlluvia+47,posY+10);
 quad(xlluvia+70,posY+5,xlluvia+75,posY+5,xlluvia+73,posY+15,xlluvia+68,posY+15);
 quad(xlluvia+100,posY,xlluvia+105,posY,xlluvia+103,posY+10,xlluvia+98,posY+10);
 quad(xlluvia+130,posY+5,xlluvia+135,posY+5,xlluvia+133,posY+15,xlluvia+128,posY+15);
 quad(xlluvia+170,posY,xlluvia+175,posY,xlluvia+173,posY+10,xlluvia+168,posY+10);
 quad(xlluvia+200,posY+5,xlluvia+205,posY+5,xlluvia+203,posY+15,xlluvia+198,posY+15);
 quad(xlluvia+240,posY,xlluvia+245,posY,xlluvia+243,posY+10,xlluvia+238,posY+10);
 quad(xlluvia+270,posY+5,xlluvia+275,posY+5,xlluvia+273,posY+15,xlluvia+268,posY+15);
 quad(xlluvia+300,posY,xlluvia+305,posY,xlluvia+303,posY+10,xlluvia+298,posY+10);
 quad(xlluvia+340,posY+5,xlluvia+345,posY+5,xlluvia+343,posY+15,xlluvia+338,posY+15);
 
  var posY=posY+40
  quad(xlluvia,posY,xlluvia+5,posY,xlluvia+3,posY+10,xlluvia-2,posY+10);
 quad(xlluvia+30,posY+5,xlluvia+35,posY+5,xlluvia+33,posY+15,xlluvia+28,posY+15);
 quad(xlluvia+50,posY,xlluvia+55,posY,xlluvia+53,posY+10,xlluvia+47,posY+10);
 quad(xlluvia+70,posY+5,xlluvia+75,posY+5,xlluvia+73,posY+15,xlluvia+68,posY+15);
 quad(xlluvia+100,posY,xlluvia+105,posY,xlluvia+103,posY+10,xlluvia+98,posY+10);
 quad(xlluvia+130,posY+5,xlluvia+135,posY+5,xlluvia+133,posY+15,xlluvia+128,posY+15);
 quad(xlluvia+170,posY,xlluvia+175,posY,xlluvia+173,posY+10,xlluvia+168,posY+10);
 quad(xlluvia+200,posY+5,xlluvia+205,posY+5,xlluvia+203,posY+15,xlluvia+198,posY+15);
 quad(xlluvia+240,posY,xlluvia+245,posY,xlluvia+243,posY+10,xlluvia+238,posY+10);
 quad(xlluvia+270,posY+5,xlluvia+275,posY+5,xlluvia+273,posY+15,xlluvia+268,posY+15);
 quad(xlluvia+300,posY,xlluvia+305,posY,xlluvia+303,posY+10,xlluvia+298,posY+10);
 quad(xlluvia+340,posY+5,xlluvia+345,posY+5,xlluvia+343,posY+15,xlluvia+338,posY+15);
 
 var posY=posY+50
 quad(xlluvia,posY,xlluvia+5,posY,xlluvia+3,posY+10,xlluvia-2,posY+10);
 quad(xlluvia+30,posY+5,xlluvia+35,posY+5,xlluvia+33,posY+15,xlluvia+28,posY+15);
 quad(xlluvia+50,posY,xlluvia+55,posY,xlluvia+53,posY+10,xlluvia+47,posY+10);
 quad(xlluvia+70,posY+5,xlluvia+75,posY+5,xlluvia+73,posY+15,xlluvia+68,posY+15);
 quad(xlluvia+100,posY,xlluvia+105,posY,xlluvia+103,posY+10,xlluvia+98,posY+10);
 quad(xlluvia+130,posY+5,xlluvia+135,posY+5,xlluvia+133,posY+15,xlluvia+128,posY+15);
 quad(xlluvia+170,posY,xlluvia+175,posY,xlluvia+173,posY+10,xlluvia+168,posY+10);
 quad(xlluvia+200,posY+5,xlluvia+205,posY+5,xlluvia+203,posY+15,xlluvia+198,posY+15);
 quad(xlluvia+240,posY,xlluvia+245,posY,xlluvia+243,posY+10,xlluvia+238,posY+10);
 quad(xlluvia+270,posY+5,xlluvia+275,posY+5,xlluvia+273,posY+15,xlluvia+268,posY+15);
 quad(xlluvia+300,posY,xlluvia+305,posY,xlluvia+303,posY+10,xlluvia+298,posY+10);
 quad(xlluvia+340,posY+5,xlluvia+345,posY+5,xlluvia+343,posY+15,xlluvia+338,posY+15);
  
  var posY=posY+65
  quad(xlluvia,posY,xlluvia+5,posY,xlluvia+3,posY+10,xlluvia-2,posY+10);
 quad(xlluvia+30,posY+5,xlluvia+35,posY+5,xlluvia+33,posY+15,xlluvia+28,posY+15);
 quad(xlluvia+50,posY,xlluvia+55,posY,xlluvia+53,posY+10,xlluvia+47,posY+10);
 quad(xlluvia+70,posY+5,xlluvia+75,posY+5,xlluvia+73,posY+15,xlluvia+68,posY+15);
 quad(xlluvia+100,posY,xlluvia+105,posY,xlluvia+103,posY+10,xlluvia+98,posY+10);
 quad(xlluvia+130,posY+5,xlluvia+135,posY+5,xlluvia+133,posY+15,xlluvia+128,posY+15);
 quad(xlluvia+170,posY,xlluvia+175,posY,xlluvia+173,posY+10,xlluvia+168,posY+10);
 quad(xlluvia+200,posY+5,xlluvia+205,posY+5,xlluvia+203,posY+15,xlluvia+198,posY+15);
 quad(xlluvia+240,posY,xlluvia+245,posY,xlluvia+243,posY+10,xlluvia+238,posY+10);
 quad(xlluvia+270,posY+5,xlluvia+275,posY+5,xlluvia+273,posY+15,xlluvia+268,posY+15);
 quad(xlluvia+300,posY,xlluvia+305,posY,xlluvia+303,posY+10,xlluvia+298,posY+10);
 quad(xlluvia+340,posY+5,xlluvia+345,posY+5,xlluvia+343,posY+15,xlluvia+338,posY+15);
 var posY=posY+65
  quad(xlluvia,posY,xlluvia+5,posY,xlluvia+3,posY+10,xlluvia-2,posY+10);
 quad(xlluvia+30,posY+5,xlluvia+35,posY+5,xlluvia+33,posY+15,xlluvia+28,posY+15);
 quad(xlluvia+50,posY,xlluvia+55,posY,xlluvia+53,posY+10,xlluvia+47,posY+10);
 quad(xlluvia+70,posY+5,xlluvia+75,posY+5,xlluvia+73,posY+15,xlluvia+68,posY+15);
 quad(xlluvia+100,posY,xlluvia+105,posY,xlluvia+103,posY+10,xlluvia+98,posY+10);
 quad(xlluvia+130,posY+5,xlluvia+135,posY+5,xlluvia+133,posY+15,xlluvia+128,posY+15);
 quad(xlluvia+170,posY,xlluvia+175,posY,xlluvia+173,posY+10,xlluvia+168,posY+10);
 quad(xlluvia+200,posY+5,xlluvia+205,posY+5,xlluvia+203,posY+15,xlluvia+198,posY+15);
 quad(xlluvia+240,posY,xlluvia+245,posY,xlluvia+243,posY+10,xlluvia+238,posY+10);
 quad(xlluvia+270,posY+5,xlluvia+275,posY+5,xlluvia+273,posY+15,xlluvia+268,posY+15);
 quad(xlluvia+300,posY,xlluvia+305,posY,xlluvia+303,posY+10,xlluvia+298,posY+10);
 quad(xlluvia+340,posY+5,xlluvia+345,posY+5,xlluvia+343,posY+15,xlluvia+338,posY+15);
  var posY=posY+65
  quad(xlluvia,posY,xlluvia+5,posY,xlluvia+3,posY+10,xlluvia-2,posY+10);
 quad(xlluvia+30,posY+5,xlluvia+35,posY+5,xlluvia+33,posY+15,xlluvia+28,posY+15);
 quad(xlluvia+50,posY,xlluvia+55,posY,xlluvia+53,posY+10,xlluvia+47,posY+10);
 quad(xlluvia+70,posY+5,xlluvia+75,posY+5,xlluvia+73,posY+15,xlluvia+68,posY+15);
 quad(xlluvia+100,posY,xlluvia+105,posY,xlluvia+103,posY+10,xlluvia+98,posY+10);
 quad(xlluvia+130,posY+5,xlluvia+135,posY+5,xlluvia+133,posY+15,xlluvia+128,posY+15);
 quad(xlluvia+170,posY,xlluvia+175,posY,xlluvia+173,posY+10,xlluvia+168,posY+10);
 quad(xlluvia+200,posY+5,xlluvia+205,posY+5,xlluvia+203,posY+15,xlluvia+198,posY+15);
 quad(xlluvia+240,posY,xlluvia+245,posY,xlluvia+243,posY+10,xlluvia+238,posY+10);
 quad(xlluvia+270,posY+5,xlluvia+275,posY+5,xlluvia+273,posY+15,xlluvia+268,posY+15);
 quad(xlluvia+300,posY,xlluvia+305,posY,xlluvia+303,posY+10,xlluvia+298,posY+10);
 quad(xlluvia+340,posY+5,xlluvia+345,posY+5,xlluvia+343,posY+15,xlluvia+338,posY+15);
   var posY=posY+80
  quad(xlluvia,posY,xlluvia+5,posY,xlluvia+3,posY+10,xlluvia-2,posY+10);
 quad(xlluvia+30,posY+5,xlluvia+35,posY+5,xlluvia+33,posY+15,xlluvia+28,posY+15);
 quad(xlluvia+50,posY,xlluvia+55,posY,xlluvia+53,posY+10,xlluvia+47,posY+10);
 quad(xlluvia+70,posY+5,xlluvia+75,posY+5,xlluvia+73,posY+15,xlluvia+68,posY+15);
 quad(xlluvia+100,posY,xlluvia+105,posY,xlluvia+103,posY+10,xlluvia+98,posY+10);
 quad(xlluvia+130,posY+5,xlluvia+135,posY+5,xlluvia+133,posY+15,xlluvia+128,posY+15);
 quad(xlluvia+170,posY,xlluvia+175,posY,xlluvia+173,posY+10,xlluvia+168,posY+10);
 quad(xlluvia+200,posY+5,xlluvia+205,posY+5,xlluvia+203,posY+15,xlluvia+198,posY+15);
 quad(xlluvia+240,posY,xlluvia+245,posY,xlluvia+243,posY+10,xlluvia+238,posY+10);
 quad(xlluvia+270,posY+5,xlluvia+275,posY+5,xlluvia+273,posY+15,xlluvia+268,posY+15);
 quad(xlluvia+300,posY,xlluvia+305,posY,xlluvia+303,posY+10,xlluvia+298,posY+10);
 quad(xlluvia+340,posY+5,xlluvia+345,posY+5,xlluvia+343,posY+15,xlluvia+338,posY+15);
 var posY=posY+80
  quad(xlluvia,posY,xlluvia+5,posY,xlluvia+3,posY+10,xlluvia-2,posY+10);
 quad(xlluvia+30,posY+5,xlluvia+35,posY+5,xlluvia+33,posY+15,xlluvia+28,posY+15);
 quad(xlluvia+50,posY,xlluvia+55,posY,xlluvia+53,posY+10,xlluvia+47,posY+10);
 quad(xlluvia+70,posY+5,xlluvia+75,posY+5,xlluvia+73,posY+15,xlluvia+68,posY+15);
 quad(xlluvia+100,posY,xlluvia+105,posY,xlluvia+103,posY+10,xlluvia+98,posY+10);
 quad(xlluvia+130,posY+5,xlluvia+135,posY+5,xlluvia+133,posY+15,xlluvia+128,posY+15);
 quad(xlluvia+170,posY,xlluvia+175,posY,xlluvia+173,posY+10,xlluvia+168,posY+10);
 quad(xlluvia+200,posY+5,xlluvia+205,posY+5,xlluvia+203,posY+15,xlluvia+198,posY+15);
 quad(xlluvia+240,posY,xlluvia+245,posY,xlluvia+243,posY+10,xlluvia+238,posY+10);
 quad(xlluvia+270,posY+5,xlluvia+275,posY+5,xlluvia+273,posY+15,xlluvia+268,posY+15);
 quad(xlluvia+300,posY,xlluvia+305,posY,xlluvia+303,posY+10,xlluvia+298,posY+10);
 quad(xlluvia+340,posY+5,xlluvia+345,posY+5,xlluvia+343,posY+15,xlluvia+338,posY+15);
 var posY=posY+80
  quad(xlluvia,posY,xlluvia+5,posY,xlluvia+3,posY+10,xlluvia-2,posY+10);
 quad(xlluvia+30,posY+5,xlluvia+35,posY+5,xlluvia+33,posY+15,xlluvia+28,posY+15);
 quad(xlluvia+50,posY,xlluvia+55,posY,xlluvia+53,posY+10,xlluvia+47,posY+10);
 quad(xlluvia+70,posY+5,xlluvia+75,posY+5,xlluvia+73,posY+15,xlluvia+68,posY+15);
 quad(xlluvia+100,posY,xlluvia+105,posY,xlluvia+103,posY+10,xlluvia+98,posY+10);
 quad(xlluvia+130,posY+5,xlluvia+135,posY+5,xlluvia+133,posY+15,xlluvia+128,posY+15);
 quad(xlluvia+170,posY,xlluvia+175,posY,xlluvia+173,posY+10,xlluvia+168,posY+10);
 quad(xlluvia+200,posY+5,xlluvia+205,posY+5,xlluvia+203,posY+15,xlluvia+198,posY+15);
 quad(xlluvia+240,posY,xlluvia+245,posY,xlluvia+243,posY+10,xlluvia+238,posY+10);
 quad(xlluvia+270,posY+5,xlluvia+275,posY+5,xlluvia+273,posY+15,xlluvia+268,posY+15);
 quad(xlluvia+300,posY,xlluvia+305,posY,xlluvia+303,posY+10,xlluvia+298,posY+10);
 quad(xlluvia+340,posY+5,xlluvia+345,posY+5,xlluvia+343,posY+15,xlluvia+338,posY+15);
 
    fill(255);
    //botón6
     stroke(80,0,80);
    rect(posXrec6,posYrec6,tamRec6,tamRec6);
    
   // simbolo de la bota Pantanera 
   fill(255,0,0);
   noStroke();
   quad(750,15,760,15,760,40,750,40);
   ellipse(761,40,20,10);
   
   
    fill(255);
    //botón7
     stroke(80,0,80);
    rect(posXrec7,posYrec7,tamRec7,tamRec7);
    
    //simbolo de sombrilla
    fill(255,0,0);
    noStroke();
    ellipse(810,30,25,25);
    fill(255);
    ellipse(800,36,15,15);
    ellipse(810,36,15,15);
    ellipse(820,36,15,15);
 
  }

   
    //zona horaria de 7-12 pm
    
    //el reto en esta zona horaria es que se aparece un oso 
    
  else if(horasPatty >=18 && horasPatty < 24)
   {
    //botón8
    fill(255);
     stroke(80,0,80);
    rect(posXrec8,posYrec8,tamRec8,tamRec8);
   
    fill(255);
    //botón9
     stroke(80,0,80);
    rect(posXrec9,posYrec9,tamRec9,tamRec9);
    
    //simbolo de carne
    noStroke();
    fill(150,50,0);
    ellipse(1150,30,30,15);
    fill(255,255,200);
    ellipse(1150,30,10,5);
    
    fill(0);
   line(960,0,960,600);
   line(320,0,320,600);
   line(640,0,640,600);
  
   //simbolo de corazon  posXcora=1095 posYcora=30
   noStroke();
   fill(200,0,0);
   ellipse(posXcora,posYcora,15,15);
   ellipse(posXcora+15,posYcora,15,15);
   triangle(posXcora-4,posYcora+2,posXcora+20,posYcora+2,posXcora+7,posYcora+18);
   
  //osito salvaje
   //carita
   noStroke();
   fill(100,90,0);
   ellipse(posXoso,posYoso,60,60);
   //hocico
   ellipse(posXoso-20,posYoso,40,30);
   //nariz
   fill(0);
   ellipse(posXoso-35,posYoso-10,10,10);
   //ojo blanco
   fill(255);
   ellipse(posXoso-15,posYoso-5,15,15);
   //ojo negro
   fill(0);
   ellipse(posXoso-20,posYoso-8,5,5);
   //oreja
   fill(100,90,0);
   ellipse(posXoso+20,posYoso-25,30,40);
   ellipse(posXoso,posYoso-25,20,30);
   //cuerpo
   ellipse(posXoso,posYoso+60,60,70);
   //brazo
   ellipse(posXoso-30,posYoso+50,40,20);
  
   ellipse(posXoso-45,posYoso+45,10,20);
   //muslo
   ellipse(posXoso+5,posYoso+90,30,60);
   ellipse(posXoso-3,posYoso+120,20,10);
   //cola
   ellipse(posXoso+25,posYoso+70,20,20);
   
   //niña var posXmu =100  posYmu =360
//pelo
noStroke();
fill(0);
ellipse(posXmu4,posYmu4,50,50);
//cebolla
stroke(200,200,100);
ellipse(posXmu4-10,posYmu4-20,30,30);
//cara
fill(255,190,130);
ellipse(posXmu4+10,posYmu4,35,45);
//ojo
fill(255);
stroke(0);
ellipse(posXmu4+15,posYmu4-5,12,10);
fill(0);
ellipse(posXmu4+17,posYmu4-4,5,4);
//nariz
noStroke();
fill(255,190,130);
triangle(posXmu4+27,posYmu4-3,posXmu4+33,posYmu4-3,posXmu4+27,posYmu4+2);
//sonrisa
stroke(0);
noFill();
beginShape();
vertex(posXmu4+27,posYmu4+8);
vertex(posXmu4+26,posYmu4+8);
vertex(posXmu4+25,posYmu4+7);
vertex(posXmu4+24,posYmu4+7);
vertex(posXmu4+23,posYmu4+6);
vertex(posXmu4+23,posYmu4+6);
endShape();
//cola
noStroke();
fill(50,50,200);
ellipse(posXmu4,posYmu4+130,35,50);

//cuello
noStroke();
fill(255,190,130);
quad(posXmu4-6,posYmu4+10,posXmu4+15,posYmu4+20,posXmu4+10,posYmu4+40,posXmu4,posYmu4+40);
//parte inferior a cuello
fill(255);
quad(posXmu4-2,posYmu4+40,posXmu4+13,posYmu4+40,posXmu4+18,posYmu4+58,posXmu4-18,posYmu4+58);
//hombro
//ellipse(98,405,15,15);
//bubi
fill(255);
ellipse(posXmu4+18,posYmu4+65,15,25);
//pierna
fill(50,50,200);
quad(posXmu4-10,posYmu4+140,posXmu4+17,posYmu4+140,posXmu4+12,posYmu4+220,posXmu4-2,posYmu4+220);
//zapato
fill(255);
ellipse(posXmu4+15,posYmu4+222,35,20);
//abdomen
rect(posXmu4-17,posYmu4+55,35,60);
//brazo
fill(200,0,0);
ellipse(posXmu4+1,posYmu4+85,15,73);
//maletita
fill(200);
quad(posXmu4-30,posYmu4+50,posXmu4-10,posYmu4+50,posXmu4-10,posYmu4+105,posXmu4-30,posYmu4+105);
fill(170);
quad(posXmu4-10,posYmu4+50,posXmu4-35,posYmu4+50,posXmu4-35,posYmu4+60,posXmu4-10,posYmu4+60);
   }
   

   
   if(mouseIsPressed==true){
    
   if(mouseX>posXrec1 
    && mouseX< posXrec1 + anchoRec1
    && mouseY> posYrec1
    && mouseY< posYrec1 +altoRec1){
       //Este escenario se mantinene fijo y no cambia a pesar de las horas
    //cielo
  fill(180,200,255);
  quad(0,0,0,255,2000,165,2000,0);
   //montañas
  fill(30,100,0);
  stroke(0);
  beginShape();
  vertex(0,255);
  vertex(20,180);
  vertex(50,160);
  vertex(60,140);
  vertex(80,120);
  vertex(87,140);
  vertex(94,160);
  vertex(102,180);
  vertex(115,170);
  vertex(120,190);
  vertex(130,170);
  vertex(145,160);
  vertex(158,150);
  vertex(166,120);
  vertex(169,130);
  vertex(175,138);
  vertex(188,147);
  vertex(196,154);
  vertex(200,140);
  vertex(210,158);
  vertex(230,170);
  vertex(280,210);
  vertex(300,200);
  vertex(330,186);
  vertex(368,130);
  vertex(392,115);
  
  vertex(415,130);
  vertex(448,145);
  vertex(468,165);
  vertex(495,185);
  vertex(520,200);
  vertex(536,190);
  vertex(545,180);
  vertex(555,165);
  vertex(570,170);
  vertex(590,200);
  vertex(630,195);
  vertex(660,185);
  vertex(670,170);
  vertex(678,170);
  vertex(689,180);
  vertex(720,160);
  vertex(750,140);
  vertex(777,120);
  vertex(800,140);
  vertex(820,160);
  vertex(845,170);
  vertex(900,170);
  vertex(910,190);
  vertex(920,170);
  vertex(930,160);
  vertex(958,150);
  vertex(962,120);
  vertex(970,130);
  vertex(975,138);
  vertex(988,140);
  vertex(1000,154);
  vertex(1020,140);
  vertex(1035,158);
  vertex(1048,170);
  vertex(1062,210);
  vertex(1070,200);
  vertex(1085,186);
  vertex(1090,130);
  vertex(1098,115);
  vertex(1120,130);
  vertex(1150,145);
  vertex(1165,165);
  vertex(1178,185);
  vertex(1185,200);
  vertex(1198,190);
  vertex(2020,180);
  vertex(2035,165);
    endShape();
      //pasto
  fill(100,200,100);
  quad(0,255,2000,165,2000,600,0,600);
  
}

  if(mouseX > posXrec2
  && mouseX < posXrec2 + tamRec2
  && mouseY > posYrec2 
  && mouseY < posYrec2+tamRec2){
  //tienda de campaña
  stroke(130,30,0);
  fill(230,130,30);
  triangle(5,593,100,250,215,593);
  fill(130,30,0);
 triangle(100,250,215,593,230,550);
 line(100,250,100,593);
 
  }
  

  
 if(mouseX > posXrec3
  && mouseX < posXrec3 + tamRec3
  && mouseY > posYrec3 
  && mouseY < posYrec3+tamRec3){
    
 //fuego chiquito
  stroke(200,200,0);
  fill(255,255,0);
     beginShape();
  vertex(235,550);
 vertex(234,555);
 vertex(234,560);
vertex(233,565);
vertex(235,570);
 vertex(245,573);
 vertex(255,575);
 vertex(265,573);
 vertex(275,570);
 vertex(281,565);
 vertex(280,560);
 vertex(280,555);
 
 //punta extrema derecha
  vertex(278,540);
   vertex(275,555);
   vertex(273,558);
 vertex(271,555);
  vertex(265,540);
  
  vertex(260,545);
  vertex(255,535);
  vertex(250,545);
 vertex(245,550);
  vertex(245,555);
 vertex(246,558);
 vertex(240,550);
 endShape();
 
 //fuego arriba
 stroke(205,150,0);
 fill(255,200,0);
     beginShape();
  vertex(255,550);
 vertex(254,555);
 vertex(254,560);
vertex(253,565);
vertex(255,570);
 vertex(265,573);
 vertex(275,575);
 vertex(285,573);
 vertex(295,570);
 vertex(301,565);
 vertex(300,560);
 vertex(300,555);
 
 //punta extrema derecha
  vertex(298,540);
   vertex(295,555);
   vertex(293,558);
 vertex(291,555);
  vertex(285,540);
  
  vertex(280,545);
  vertex(275,535);
  vertex(270,545);
 vertex(265,550);
  vertex(265,555);
 vertex(266,558);
 vertex(260,550);
 endShape();
  }
  
 //rombitos
 if(mouseX > posXrec4
  && mouseX < posXrec4 + tamRec4
  && mouseY > posYrec4 
  && mouseY < posYrec4+tamRec4){
    
//Balde de agua fria para despertarse
    fill(200,200,255);
    noStroke();
    quad(350,230,380,220,410,250,350,270);
   //agua
   fill(255,255,255,70);
   quad(350,270,410,250,410,350,380,330);


}
if(mouseX > posXrec5
  && mouseX < posXrec5 + tamRec5
  && mouseY > posYrec5 
  && mouseY < posYrec5+tamRec5){

 
  //vaso con café posXmu =100  posYmu =360
  fill(255);
    noStroke();
    quad(450,400,490,400,480,430,460,430);
    stroke(0);
    ellipse(470,400,40,10);
    fill(150,80,10);
    noStroke();
    quad(455,415,485,415,480,430,460,430);
   
   


 } 
 
 //botas
 
 if(mouseX > posXrec6
  && mouseX < posXrec6 + tamRec6
  && mouseY > posYrec6 
  && mouseY < posYrec6+tamRec6){
    
    
      
  // posXbota=800  posYbota=582
 fill(200,0,0);
 ellipse(posXbota-80,posYbota,40,25);
 quad(posXbota-105,posYbota+10,posXbota-105,posYbota-52,posXbota-80,posYbota-52,posXbota-80,posYbota,posXbota-95,posYbota);
}

//paraguas
if(mouseX > posXrec7
  && mouseX < posXrec7 + tamRec7
  && mouseY > posYrec7 
  && mouseY < posYrec7+tamRec7){
//paraguas posX=800 posY=200

 fill(255,0,0);
 ellipse(posXpara-80,posYpara,140,110);
fill(100,200,100);
 ellipse(posXpara-125,posYpara+35,60,60);
ellipse(posXpara-80,posYpara+35,60,60);
ellipse(posXpara-36,posYpara+35,60,60);
fill(0);
ellipse(posXpara-80,posYpara-55,10,10);
rect(720,256,10,100);


}
//corazon
if(mouseX > posXrec8
  && mouseX < posXrec8 + tamRec8
  && mouseY > posYrec8 
  && mouseY < posYrec8+tamRec8){
   //corazon real
  fill(200,0,0);
  ellipse(posXcora-20,posYcora+330,25,25);
   ellipse(posXcora-44,posYcora+330,25,25);
  triangle(posXcora-58,posYcora+332,posXcora-7,posYcora+333,posXcora-30,posYcora+360);
   
  }
  
//lineas horizontales

if(mouseX > posXrec9
  && mouseX < posXrec9 + tamRec9
  && mouseY > posYrec9 
  && mouseY < posYrec9+tamRec9){
    //carne var carne=1090  posYcarne=500
   fill(200,200,100);
   //hueso grande
   ellipse(posXcarne, posYcarne,70,40);
   //carne
   fill(100,0,0);
   ellipse(posXcarne,posYcarne,50,30);
   //hueso pequeño
   fill(200,200,100);
   ellipse(posXcarne,posYcarne,10,5);
   
  }
  
}
}
