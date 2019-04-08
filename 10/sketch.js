var datos;
var info;
var cuantos;

//borrador//
var posXrec1 =10;
var posYrec1 =10;
var altoRec1= 40;
var anchoRec1=60

//botón 2 Barot
var posXrec2 =155;
var posYrec2 =150;
var tamRec2A= 98;
var tamRec2L= 35

//botones info
var posXbolB=120
var posYbolB=20
var tamBolB=20


var posXbolB2=150;
var posYbolB2=20;
var tamBolB2=20


var posXbolB3=180
var posYbolB3=20
var tamBolB3=20



//botón3 Jonathan
var posXrec3 = 155;
var posYrec3 =200;
var tamRec3A =98;
var tamRec3L=35;

var posXbolJ=210
var posYbolJ=20
var tamBolJ=20


var posXbolJ2=240;
var posYbolJ2=20;
var tamBolJ2=20


var posXbolJ3=270
var posYbolJ3=20
var tamBolJ3=20


//botón4 Hassum
var posXrec4 =155;
var posYrec4 =250;
var tamRec4A =98;
var tamRec4L=35;

var posXbolH=310
var posYbolH=20
var tamBolH=20


var posXbolH2=340;
var posYbolH2=20;
var tamBolH2=20


var posXbolH3=370
var posYbolH3=20
var tamBolH3=20


//botón5 Riley
var posXrec5 =155;
var posYrec5 =300;
var tamRec5A =98;
var tamRec5L =35;

var posXbolR=410
var posYbolR=20
var tamBolR=20


var posXbolR2=440;
var posYbolR2=20;
var tamBolR2=20


var posXbolR3=470
var posYbolR3=20
var tamBolR3=20


//botón6 Xhou Ta
var posXrec6 =155;
var posYrec6 =350;
var tamRec6A =98;
var tamRec6L =35;

var posXbolX=510
var posYbolX=20
var tamBolX=20


var posXbolX2=540;
var posYbolX2=20;
var tamBolX2=20


var posXbolX3=570
var posYbolX3=20
var tamBolX3=20



//botón7 Hillary
var posXrec7 =54;
var posYrec7 =170;
var tamRec7A =90;
var tamRec7L =40;

//bolitas de info
var posXbolHi=120
var posYbolHi=50
var tamBolHi=20


var posXbolHi2=150;
var posYbolHi2=50;
var tamBolHi2=20


var posXbolHi3=180
var posYbolHi3=50
var tamBolHi3=20



//botón 8 Jennifer
var posXrec8 =54;
var posYrec8 =220;
var tamRec8A =90;
var tamRec8L =40;

var posXbolJe=210
var posYbolJe=50
var tamBolJe=20


var posXbolJe2=240;
var posYbolJe2=50;
var tamBolJe2=20


var posXbolJe3=270
var posYbolJe3=50
var tamBolJe3=20

//
//botón 9 Lavonne
var posXrec9 =54;
var posYrec9 =270;
var tamRec9A =90;
var tamRec9L =40;

var posXbolL=310
var posYbolL=50
var tamBolL=20


var posXbolL2=340;
var posYbolL2=50;
var tamBolL2=20


var posXbolL3=370
var posYbolL3=50
var tamBolL3=20


//botón10 Constance
var posXrec10 =54;
var posYrec10= 320;
var tamRec10A = 90;
var tamRec10L = 40;


var posXbolC=410
var posYbolC=50
var tamBolC=20


var posXbolC2=440;
var posYbolC2=50;
var tamBolC2=20


var posXbolC3=470
var posYbolC3=50
var tamBolC3=20



//variables para las fotos

var pintura;

var Barot;
var Barot2;
var Barot3;

var Jonathan;
var Jonathan2;
var JOnathan3;

var Hassum;
var Hassum2;
var Hassum3;

var Riley;
var Riley2;
var Riley3;

var Xhou;
var Xhou2;
var Xhou3;

var Hillary;
var Hillary2;
var Hillary3;

var Jennifer;
var Jennifer2;
var Jennifer3;

var Lavonne;
var Lavonne2;
var Lavonne3;

var Constance;
var Constance2;
var Constance3;

//otros
//USA (Chicas y Riley)
var Bandera;

// Londres (jonathan)
var Bandera2;

//Francia(Barot)
var Bandera3;

//China(xhou)
var Bandera4;

//India(Hassum);
var Bandera5;




function preload(){
pintura=loadImage('Pintura.jpeg'); 
Barot = loadImage('Barot.jpeg');
  Barot2 = loadImage('Barot2.jpeg');
   Barot3 = loadImage('Barot3.jpeg');
  
  
Jonathan= loadImage('Jonathan.jpeg');
  Jonathan2= loadImage('Jonathan2.jpeg');
  Jonathan3= loadImage('Jonathan3.jpeg');
  
  
  Hassum=loadImage('Hassum.jpeg');
  Hassum2=loadImage('Hassum2.jpeg');
  Hassum3=loadImage('Hassum3.jpeg');
  
  Riley= loadImage('Riley.jpeg');
   Riley2= loadImage('Riley2.jpeg');
   Riley3= loadImage('Riley3.jpeg');
  
Xhou= loadImage('Xhou.jpeg');
Xhou2= loadImage('Xhou2.jpeg');
Xhou3= loadImage('Xhou3.jpeg');
  
 Hillary= loadImage('Hillary.jpeg');
 Hillary2= loadImage('Hillary2.jpeg');
 Hillary3= loadImage('Hillary3.jpeg');
  
  
  
   Jennifer= loadImage('Jennifer.jpeg');
  Jennifer2= loadImage('Jennifer2.jpeg');
  Jennifer3= loadImage('Jennifer3.jpeg');
  
   Lavonne= loadImage('Lavonne.jpeg');
   Lavonne2= loadImage('Lavonne2.jpeg');
   Lavonne3= loadImage('Lavonne3.jpeg');
  
   Constance= loadImage('Constance.jpeg');
   Constance2= loadImage('Constance2.jpeg');
   Constance3= loadImage('Constance3.jpeg');
  
  
   Bandera= loadImage('Bandera.jpeg');
  Bandera2= loadImage('Bandera2.jpeg');
   Bandera3= loadImage('Bandera3.jpeg');
   Bandera4= loadImage('Bandera4.jpeg');
  Bandera5= loadImage('Bandera5.jpeg');
  
  datos = loadJSON("data.json");
  
}


function setup() {
  createCanvas(600, 400);
  background(pintura,0,0,600,400);
  
   datos = loadJSON("data.json");
  var info = datos.reknown;
   
 stroke(100,100,10);
  fill(170,100,80);
 quad(145,140,155,140,155,400,145,400);
  
  image(Bandera, 40,130,40,30);
  
  //bandera de riley
  image(Bandera, 270,305,40,30);
  
  //bandera 2 Londres jonathan 
  image(Bandera2, 270,205,40,30);
  
  //Bandera 3 Barot (Francia)
   image(Bandera3, 270,154,40,30);
  
  //Bandera 4 (China Xhou)
  image(Bandera4, 270,354,40,30);
  
   //Bandera 5 (IndiaHassum)
  image(Bandera5, 270,255,40,30);
  
  
  
 //Artistas 
 rect(90,100,110,40);
  
  fill(255);
  textSize(27);
textFont('Georgia');
  text('Artistas', 100,130);

  

  
   //Boton 2 Bellingham
   stroke(100,100,10);
  fill(170,100,80);
  rect(posXrec2,posYrec2,tamRec2A,tamRec2L);
 textSize(12);
  fill(255);
  textFont('Georgia');
  text('Barot Belingham',160,170);
    
 
   
    //botón3 J0nathan
    stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec3,posYrec3,tamRec3A,tamRec3L);
  textSize(12);
  fill(255);
  textFont('Georgia');
  text('Jonathan Ferrar',160,220);
    
// botón4 Hassum
   stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec4,posYrec4,tamRec4A,tamRec4L);
   textSize(12);
  fill(255);
  textFont('Georgia');
  text('Hassum Harrod',160,270);
   
  
    //botón5 Riley
     stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec5,posYrec5,tamRec5A,tamRec5L);
  textSize(12);
  fill(255);
  textFont('Georgia');
  text('Riley Rewington',160,320);
  
   
    //botón6 Xhou Ta
   stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec6,posYrec6,tamRec6A,tamRec6L);
  textSize(12);
  fill(255);
  textFont('Georgia');
  text('Xhou Ta',175,370);
  
    

    //botón7 Hillary 
    stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec7,posYrec7,tamRec7A,tamRec7L);
  textSize(12);
  fill(255);
  textFont('Georgia');
   text('Hillary Goldwyn',57,195);

   
    //botón8 Jennifer
    stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec8,posYrec8,tamRec8A,tamRec8L);
   textSize(12);
  fill(255);
  textFont('Georgia');
  text('Jennifer Jerome',57,245);
    

    //botón9 Lavonne
      stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec9,posYrec9,tamRec9A,tamRec9L);
  textSize(12);
  fill(255);
  textFont('Georgia');
   text('LaVonne LaRue', 57 ,295);
    
   
   
    //botón10 Constance
     stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec10,posYrec10,tamRec10A,tamRec10L);
  textSize(12);
  fill(255);
  textFont('Georgia');
   text('Constance Smith', 57, 345);
  
}


function draw() {
  
  
  noStroke();
  //borrador
  noFill();
  stroke(255);
  rect(posXrec1,posYrec1,anchoRec1,altoRec1);
  //simbolo
  fill(255);
  quad(30,25,60,25,60,30,25,30);
  triangle(30,20,30,35,15,27);
  
 
  
  if(mouseIsPressed==true){
    fill(0,0,0);
    ellipse(mouseX,mouseY,10,10);
   
    //Botón de regreso
    if(mouseX>posXrec1 
    && mouseX< posXrec1 + anchoRec1
    && mouseY> posYrec1
    && mouseY< posYrec1 +altoRec1){
      
      
    background(pintura,0,0,600,400);
      
     
       stroke(100,100,10);
  fill(170,100,80);
 quad(145,140,155,140,155,400,145,400);
  
  image(Bandera, 40,130,40,30);
  
  //bandera de riley
  image(Bandera, 270,305,40,30);
  
  //bandera 2 Londres jonathan 
  image(Bandera2, 270,205,40,30);
  
  //Bandera 3 Barot (Francia)
   image(Bandera3, 270,154,40,30);
  
  //Bandera 4 (China Xhou)
  image(Bandera4, 270,354,40,30);
  
   //Bandera 5 (IndiaHassum)
    image(Bandera5, 270,255,40,30);
  
  
  
 //Artistas 
 rect(90,100,110,40);
  
  fill(255);
  textSize(27);
textFont('Georgia');
  text('Artistas', 100,130);

  

  
   //Boton 2 Bellingham
   stroke(100,100,10);
  fill(170,100,80);
  rect(posXrec2,posYrec2,tamRec2A,tamRec2L);
 textSize(12);
  fill(255);
  textFont('Georgia');
  text('Barot Belingham',160,170);
    
 
   
    //botón3 J0nathan
    stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec3,posYrec3,tamRec3A,tamRec3L);
  textSize(12);
  fill(255);
  textFont('Georgia');
  text('Jonathan Ferrar',160,220);
    
// botón4 Hassum
   stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec4,posYrec4,tamRec4A,tamRec4L);
   textSize(12);
  fill(255);
  textFont('Georgia');
  text('Hassum Harrod',160,270);
   
  
    //botón5 Riley
     stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec5,posYrec5,tamRec5A,tamRec5L);
  textSize(12);
  fill(255);
  textFont('Georgia');
  text('Riley Rewington',160,320);
  
   
    //botón6 Xhou Ta
   stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec6,posYrec6,tamRec6A,tamRec6L);
  textSize(12);
  fill(255);
  textFont('Georgia');
  text('Xhou Ta',175,370);
  
    

    //botón7 Hillary 
    stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec7,posYrec7,tamRec7A,tamRec7L);
  textSize(12);
  fill(255);
  textFont('Georgia');
   text('Hillary Goldwyn',57,195);

   
    //botón8 Jennifer
    stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec8,posYrec8,tamRec8A,tamRec8L);
   textSize(12);
  fill(255);
  textFont('Georgia');
  text('Jennifer Jerome',57,245);
    

    //botón9 Lavonne
      stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec9,posYrec9,tamRec9A,tamRec9L);
  textSize(12);
  fill(255);
  textFont('Georgia');
   text('LaVonne LaRue', 57 ,295);
    
   
   
    //botón10 Constance
     stroke(100,100,10);
    fill(170,100,80);
    rect(posXrec10,posYrec10,tamRec10A,tamRec10L);
  textSize(12);
  fill(255);
  textFont('Georgia');
   text('Constance Smith', 57, 345);
    
}


  //Barot Bellingham
  if(mouseX > posXrec2
  && mouseX < posXrec2 + tamRec2A
  && mouseY > posYrec2 
  && mouseY < posYrec2+tamRec2L){
    
  background(Barot,0,0,600,400);
    fill(50,0,50);
    rect(230,130,290,95);
    
  fill(255);
  textSize(35);
  textFont('Georgia');

    text(datos[0].name,245,180);
    
        fill(255,0,0);
  ellipse(posXbolB,posYbolB,tamBolB,tamBolB);
    fill(255);
    ellipse(posXbolB2,posYbolB2,tamBolB2,tamBolB2);
   
 ellipse(posXbolB3,posYbolB3,tamBolB3,tamBolB3);

 }
    
    //Barot Bellingham
  if(mouseX > posXbolB
  && mouseX < posXbolB + tamBolB
  && mouseY > posYbolB 
  && mouseY < posYbolB+tamBolB){
    
    image(Barot,0,0,600,400);
    fill(255,0,0);
  ellipse(posXbolB,posYbolB,tamBolB,tamBolB);
    fill(255);
     ellipse(posXbolB2,posYbolB2,tamBolB2,tamBolB2);
   
     ellipse(posXbolB3,posYbolB3,tamBolB3,tamBolB3);
     fill(50,0,50);
    rect(230,130,290,95);
    
  fill(255);
  textSize(35);
  textFont('Georgia');
    text(datos[0].name,245,180);
    
   
   
    }
   
     //Barot Bellingham
  if(mouseX > posXbolB2
  && mouseX < posXbolB2 + tamBolB2
  && mouseY > posYbolB2 
  && mouseY < posYbolB2+tamBolB2){
   image(Barot2,0,0,600,400);
    fill(255);
  ellipse(posXbolB,posYbolB,tamBolB,tamBolB);
    fill(255,0,0);
    ellipse(posXbolB2,posYbolB2,tamBolB2,tamBolB2);
   
   fill(255);
     ellipse(posXbolB3,posYbolB3,tamBolB3,tamBolB3);
   
   fill(0);
    noStroke();
    textSize(8);
    
    //esto lo que hace es imprimir la información del "reknown" del primer artista 
 
    text(datos[0].reknown,270,100);
    
    }

     //Barot Bellingham
  if(mouseX > posXbolB3
  && mouseX < posXbolB3 + tamBolB3
  && mouseY > posYbolB3 
  && mouseY < posYbolB3+tamBolB3){
    image(Barot3,0,0,600,400);
    fill(255);
  ellipse(posXbolB,posYbolB,tamBolB,tamBolB);
   ellipse(posXbolB2,posYbolB2,tamBolB2,tamBolB2);
    fill(255,0,0);
     ellipse(posXbolB3,posYbolB3,tamBolB3,tamBolB3); 
  
  
    fill(0);
    noStroke();
    textSize(12);
    
    text(datos[0].bio,268,90);
   
    }

    
   
  //Jonathan
  
 if(mouseX > posXrec3
  && mouseX < posXrec3 + tamRec3A
  && mouseY > posYrec3 
  && mouseY < posYrec3+tamRec3L){
    
 background(Jonathan,0,0,600,400);
   
     fill(50,0,50);
    rect(230,130,290,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');
 
   text(datos[1].name,268,180);
   
   //botones de info
   fill(255,0,0);
  ellipse(posXbolJ,posYbolJ,tamBolJ,tamBolJ);
   fill(255);
  ellipse(posXbolJ2,posYbolJ2,tamBolJ2,tamBolJ2);
  ellipse(posXbolJ3,posYbolJ3,tamBolJ3,tamBolJ3);
}
    
       //Jonathan
  if(mouseX > posXbolJ
  && mouseX < posXbolJ + tamBolJ
  && mouseY > posYbolJ 
  && mouseY < posYbolJ+tamBolJ){
    
    image(Jonathan,0,0,600,400);
    fill(255,0,0);
  ellipse(posXbolJ,posYbolJ,tamBolJ,tamBolJ);
    fill(255);
     ellipse(posXbolJ2,posYbolJ2,tamBolJ2,tamBolJ2);
   
     ellipse(posXbolJ3,posYbolJ3,tamBolJ3,tamBolJ3);
    
     fill(50,0,50);
   rect(230,130,290,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');
text(datos[1].name,268,180);
    
   
   
    }
   
     //JOnathan
  if(mouseX > posXbolJ2
  && mouseX < posXbolJ2 + tamBolJ2
  && mouseY > posYbolJ2 
  && mouseY < posYbolJ2+tamBolJ){
   image(Jonathan2,0,0,600,400);
    fill(255);
  ellipse(posXbolJ,posYbolJ,tamBolJ,tamBolJ);
    fill(255,0,0);
    ellipse(posXbolJ2,posYbolJ2,tamBolJ2,tamBolJ2);
   
   fill(255);
     ellipse(posXbolJ3,posYbolJ3,tamBolJ3,tamBolJ3);
   
    fill(255);
    noStroke();
    textSize(20);
    
     text(datos[1].reknown,268,130);
  }
    
    
          //JOnathan
  if(mouseX > posXbolJ3
  && mouseX < posXbolJ3 + tamBolJ3
  && mouseY > posYbolJ3 
  && mouseY < posYbolJ3+tamBolJ3){
   image(Jonathan3,0,0,600,400);
    fill(255);
  ellipse(posXbolJ,posYbolJ,tamBolJ,tamBolJ);
    fill(255);
    ellipse(posXbolJ2,posYbolJ2,tamBolJ2,tamBolJ2);
   
   fill(255,0,0);
     ellipse(posXbolJ3,posYbolJ3,tamBolJ3,tamBolJ3);
   
    fill(255);
    noStroke();
    textSize(10);
    text(datos[1].bio,268,140);
   
    
    }
   

 //Hassum
 if(mouseX > posXrec4
  && mouseX < posXrec4 + tamRec4A
  && mouseY > posYrec4 
  && mouseY < posYrec4+tamRec4L){
    background(Hassum,0,0,600,400);
   
    fill(50,0,50);
    rect(230,130,290,95);
    
  fill(255);
  textSize(35);
  textFont('Georgia');
 
   text(datos[3].name,245,180);
   
   fill(255,0,0);
  ellipse(posXbolH,posYbolH,tamBolH,tamBolH);
    fill(255);
    ellipse(posXbolH2,posYbolH2,tamBolH2,tamBolH2);
     ellipse(posXbolH3,posYbolH3,tamBolH3,tamBolH3);
}
    
       //Hassum
  if(mouseX > posXbolH
  && mouseX < posXbolH + tamBolH
  && mouseY > posYbolH 
  && mouseY < posYbolH+tamBolH){
    
    image(Hassum,0,0,600,400);
    fill(255,0,0);
  ellipse(posXbolH,posYbolH,tamBolH,tamBolH);
    fill(255);
     ellipse(posXbolH2,posYbolH2,tamBolH2,tamBolH2);
   
     ellipse(posXbolH3,posYbolH3,tamBolH3,tamBolH3);
    
     fill(50,0,50);
       rect(230,130,290,95);
    
  fill(255);
  textSize(35);
  textFont('Georgia');
 
   text(datos[3].name,245,180);
    
   
   
    }
   
     //Hassum
  if(mouseX > posXbolH2
  && mouseX < posXbolH2 + tamBolH2
  && mouseY > posYbolH2 
  && mouseY < posYbolH2+tamBolH){
   image(Hassum2,0,0,600,400);
    fill(255);
  ellipse(posXbolH,posYbolH,tamBolH,tamBolH);
    fill(255,0,0);
    ellipse(posXbolH2,posYbolH2,tamBolH2,tamBolH2);
   
   fill(255);
     ellipse(posXbolH3,posYbolH3,tamBolH3,tamBolH3);
   
    fill(0);
    noStroke();
    textSize(20);
    
    text(datos[3].reknown,260,140);
    
    }
    
     //Hassum
  if(mouseX > posXbolH3
  && mouseX < posXbolH3 + tamBolH3
  && mouseY > posYbolH3 
  && mouseY < posYbolH3+tamBolH3){
   image(Hassum3,0,0,600,400);
    fill(255);
  ellipse(posXbolH,posYbolH,tamBolH,tamBolH);
    fill(255);
    ellipse(posXbolH2,posYbolH2,tamBolH2,tamBolH2);
   
   fill(255,0,0);
     ellipse(posXbolH3,posYbolH3,tamBolH3,tamBolH3);
   
    fill(0);
    noStroke();
    textSize(12);
    text(datos[3].bio,240,140);
    
    }
   
    

    
    //Riley
if(mouseX > posXrec5
  && mouseX < posXrec5 + tamRec5A
  && mouseY > posYrec5 
  && mouseY < posYrec5+tamRec5L){
  background(Riley,0,0,600,400);
  
   fill(50,0,50);
    rect(230,130,305,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');
 
   
   text(datos[7].name,245,180);
 
  stroke(0);
  fill(255,0,0);
  ellipse(posXbolR,posYbolR,tamBolR,tamBolR);
  fill(255);
  ellipse(posXbolR2,posYbolR2,tamBolR2,tamBolR2);
  ellipse(posXbolR3,posYbolR3,tamBolR3,tamBolR3);
   
     }
    
    //Riley
  if(mouseX > posXbolR
  && mouseX < posXbolR + tamBolR
  && mouseY > posYbolR 
  && mouseY < posYbolR+tamBolR){
    
    image(Riley,0,0,600,400);
    stroke(0);
    fill(255,0,0);
  ellipse(posXbolR,posYbolR,tamBolR,tamBolR);
    fill(255);
     ellipse(posXbolR2,posYbolR2,tamBolR2,tamBolR2);
   
     ellipse(posXbolR3,posYbolR3,tamBolR3,tamBolR3);
    
     fill(50,0,50);
       rect(230,130,305,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');
    
   text(datos[7].name,245,180);
    
   
   
    }
   
     //Riley
  if(mouseX > posXbolR2
  && mouseX < posXbolR2 + tamBolR2
  && mouseY > posYbolR2 
  && mouseY < posYbolR2+tamBolR){
   image(Riley2,0,0,600,400);
    stroke(0);
    fill(255);
  ellipse(posXbolR,posYbolR,tamBolR,tamBolR);
    fill(255,0,0);
    ellipse(posXbolR2,posYbolR2,tamBolR2,tamBolR2);
   
   fill(255);
     ellipse(posXbolR3,posYbolR3,tamBolR3,tamBolR3);
   
    fill(0);
    noStroke();
    textSize(15);
    
     text(datos[7].reknown,200,60);
    
    }
    
     //Riley
  if(mouseX > posXbolR3
  && mouseX < posXbolR3 + tamBolR3
  && mouseY > posYbolR3 
  && mouseY < posYbolR3+tamBolR3){
   image(Riley3,0,0,600,400);
    stroke(0);
    fill(255);
  ellipse(posXbolR,posYbolR,tamBolR,tamBolR);
    fill(255);
    ellipse(posXbolR2,posYbolR2,tamBolR2,tamBolR2);
   
   fill(255,0,0);
     ellipse(posXbolR3,posYbolR3,tamBolR3,tamBolR3);
   
    fill(0);
    noStroke();
    textSize(12);
    text(datos[7].bio,258,130);
    
    }
    

//Xhou Ta
if(mouseX > posXrec6
  && mouseX < posXrec6 + tamRec6A
  && mouseY > posYrec6 
  && mouseY < posYrec6+tamRec6L){
  
   background(Xhou,0,0,600,400);
  
   fill(50,0,50);
    rect(230,130,150,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');

     
   text(datos[8].name,249,180);
  
  fill(255,0,0);
  ellipse(posXbolX,posYbolX,tamBolX,tamBolX);
    fill(255);
    ellipse(posXbolX2,posYbolX2,tamBolX2,tamBolX2);
   ellipse(posXbolX3,posYbolX3,tamBolX3,tamBolX3);
}
    
//Xhou Ta
  if(mouseX > posXbolX
  && mouseX < posXbolX + tamBolX
  && mouseY > posYbolX 
  && mouseY < posYbolX+tamBolX){
    
    image(Xhou,0,0,600,400);
    fill(255,0,0);
  ellipse(posXbolX,posYbolX,tamBolX,tamBolX);
    fill(255);
     ellipse(posXbolX2,posYbolX2,tamBolX2,tamBolX2);
   
     ellipse(posXbolX3,posYbolX3,tamBolX3,tamBolX3);
    
     fill(50,0,50);
       rect(230,130,150,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');
  text(datos[8].name,249,180);
    
   
   
    }
   
     //Xhou
  if(mouseX > posXbolX2
  && mouseX < posXbolX2 + tamBolX2
  && mouseY > posYbolX2 
  && mouseY < posYbolX2+tamBolX2){
    
   image(Xhou2,0,0,600,400);
    fill(255);
  ellipse(posXbolX,posYbolX,tamBolX,tamBolX);
    fill(255,0,0);
    ellipse(posXbolX2,posYbolX2,tamBolX2,tamBolX2);
   
   fill(255);
     ellipse(posXbolX3,posYbolX3,tamBolX3,tamBolX3);
   
    fill(0);
    noStroke();
    textSize(15);
   
     text(datos[8].reknown,265,130);
    
    }
   
     //Xhou Ta
  if(mouseX > posXbolX3
  && mouseX < posXbolX3 + tamBolX3
  && mouseY > posYbolX3 
  && mouseY < posYbolX3+tamBolX3){
    image(Xhou3,0,0,600,400);
    fill(255);
  ellipse(posXbolX,posYbolX,tamBolX,tamBolX);
   ellipse(posXbolX2,posYbolX2,tamBolX2,tamBolX2);
    fill(255,0,0);
     ellipse(posXbolX3,posYbolX3,tamBolX3,tamBolX3); 
  
  
    fill(0);
    noStroke();
    textSize(12);
    text(datos[8].bio,268,130);
    }   
    
//Hillary
if(mouseX > posXrec7
  && mouseX < posXrec7 + tamRec7A
  && mouseY > posYrec7 
  && mouseY < posYrec7+tamRec7L){
   background(Hillary,0,0,600,400);
  
   fill(50,0,50);
    rect(210,130,355,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');
 
   text(datos[2].name,215,180);
  
  fill(255,0,0);
  ellipse(posXbolHi,posYbolHi,tamBolHi,tamBolHi);
    fill(255);
    ellipse(posXbolHi2,posYbolHi2,tamBolHi2,tamBolHi2);
   ellipse(posXbolHi3,posYbolHi3,tamBolHi3,tamBolHi3);
   }
    
  //Hillary
  if(mouseX > posXbolHi
  && mouseX < posXbolHi + tamBolHi
  && mouseY > posYbolHi 
  && mouseY < posYbolHi+tamBolHi){
    
    image(Hillary,0,0,600,400);
    
   fill(50,0,50);
    rect(210,130,355,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');
  text(datos[2].name,215,180);
  
  
  fill(255,0,0);
  ellipse(posXbolHi,posYbolHi,tamBolHi,tamBolHi);
    fill(255);
    ellipse(posXbolHi2,posYbolHi2,tamBolHi2,tamBolHi2);
   ellipse(posXbolHi3,posYbolHi3,tamBolHi3,tamBolHi3);
    
   
   
    }
   
     //Hilary
  if(mouseX > posXbolHi2
  && mouseX < posXbolHi2 + tamBolHi2
  && mouseY > posYbolHi2 
  && mouseY < posYbolHi2+tamBolHi2){
    
   image(Hillary2,0,0,600,400);
    fill(255);
  ellipse(posXbolHi,posYbolHi,tamBolHi,tamBolHi);
    fill(255,0,0);
    ellipse(posXbolHi2,posYbolHi2,tamBolHi2,tamBolHi2);
   
   fill(255);
     ellipse(posXbolHi3,posYbolHi3,tamBolHi3,tamBolHi3);
   
    fill(0);
    noStroke();
    textSize(25);
    
     text(datos[2].reknown,220,90);
    
    }
   
     //Hillary
  if(mouseX > posXbolHi3
  && mouseX < posXbolHi3 + tamBolHi3
  && mouseY > posYbolHi3 
  && mouseY < posYbolHi3+tamBolHi3){
    image(Hillary3,0,0,600,400);
    fill(255);
  ellipse(posXbolHi,posYbolHi,tamBolHi,tamBolHi);
   ellipse(posXbolHi2,posYbolHi2,tamBolHi2,tamBolHi2);
    fill(255,0,0);
     ellipse(posXbolHi3,posYbolHi3,tamBolHi3,tamBolHi3); 
  
  
    fill(0);
    noStroke();
    textSize(12);
     text(datos[2].bio,268,130);
    }     
  
    
    
//Jennifer

if(mouseX > posXrec8
  && mouseX < posXrec8 + tamRec8A
  && mouseY > posYrec8 
  && mouseY < posYrec8+tamRec8L){
  background(Jennifer,0,0,600,400);
  
   fill(50,0,50);
    rect(220,130,230,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');

   text(datos[4].name,245,180);
  
  
  fill(255,0,0);
  ellipse(posXbolJe,posYbolJe,tamBolJe,tamBolJe);
    fill(255);
    ellipse(posXbolJe2,posYbolJe2,tamBolJe2,tamBolJe2);
   ellipse(posXbolJe3,posYbolJe3,tamBolJe3,tamBolJe3);
    }
    
      //Jennifer
  if(mouseX > posXbolJe
  && mouseX < posXbolJe + tamBolJe
  && mouseY > posYbolJe 
  && mouseY < posYbolJe+tamBolJe){
    
    image(Jennifer,0,0,600,400);
    
   fill(50,0,50);
    rect(220,130,230,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');
  text(datos[4].name,245,180);
  
  
  fill(255,0,0);
  ellipse(posXbolJe,posYbolJe,tamBolJe,tamBolJe);
    fill(255);
    ellipse(posXbolJe2,posYbolJe2,tamBolJe2,tamBolJe2);
   ellipse(posXbolJe3,posYbolJe3,tamBolJe3,tamBolJe3);
    
   
   
    }
   
     //Jennifer
  if(mouseX > posXbolJe2
  && mouseX < posXbolJe2 + tamBolJe2
  && mouseY > posYbolJe2 
  && mouseY < posYbolJe2+tamBolJe2){
    
   image(Jennifer2,0,0,600,400);
    fill(255);
  ellipse(posXbolJe,posYbolJe,tamBolJe,tamBolJe);
    fill(255,0,0);
    ellipse(posXbolJe2,posYbolJe2,tamBolJe2,tamBolJe2);
   
   fill(255);
     ellipse(posXbolJe3,posYbolJe3,tamBolJe3,tamBolJe3);
   
    fill(255);
    noStroke();
    textSize(25);
   
     text(datos[4].reknown,275,150);
    
    }
   
     //Jennifer
  if(mouseX > posXbolJe3
  && mouseX < posXbolJe3 + tamBolJe3
  && mouseY > posYbolJe3 
  && mouseY < posYbolJe3+tamBolJe3){
    image(Jennifer3,0,0,600,400);
    fill(255);
  ellipse(posXbolJe,posYbolJe,tamBolJe,tamBolJe);
   ellipse(posXbolJe2,posYbolJe2,tamBolJe2,tamBolJe2);
    fill(255,0,0);
    ellipse(posXbolJe3,posYbolJe3,tamBolJe3,tamBolJe3); 
  
  
    fill(255);
    noStroke();
    textSize(12);
    text(datos[4].bio,268,140);
    }   
    
    
  
  //Lavonne
  if(mouseX > posXrec9
  && mouseX < posXrec9 + tamRec9A
  && mouseY > posYrec9 
  && mouseY < posYrec9+tamRec9L){
    background(Lavonne,0,0,600,400);
    
     fill(50,0,50);
    rect(230,130,250,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');
 
     text(datos[5].name,245,180);
  
    fill(255,0,0);
    
    stroke(0);
  ellipse(posXbolL,posYbolL,tamBolL,tamBolL);
    fill(255);
    ellipse(posXbolL2,posYbolL2,tamBolL2,tamBolL2);
   ellipse(posXbolL3,posYbolL3,tamBolL3,tamBolL3);
    }
    
        //Lavonne
  if(mouseX > posXbolL
  && mouseX < posXbolL + tamBolL
  && mouseY > posYbolL 
  && mouseY < posYbolL+tamBolL){
    
    image(Lavonne,0,0,600,400);
    
   fill(50,0,50);
    rect(230,130,250,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');

     text(datos[5].name,245,180);
  
  
  fill(255,0,0);
  ellipse(posXbolL,posYbolL,tamBolL,tamBolL);
    fill(255);
    ellipse(posXbolL2,posYbolL2,tamBolL2,tamBolL2);
   ellipse(posXbolL3,posYbolL3,tamBolL3,tamBolL3);
    
   
   
    }
   
     //Lavonne
  if(mouseX > posXbolL2
  && mouseX < posXbolL2 + tamBolL2
  && mouseY > posYbolL2 
  && mouseY < posYbolL2+tamBolL2){
    
   image(Lavonne2,0,0,600,400);
    fill(255);
    stroke(0);
  ellipse(posXbolL,posYbolL,tamBolL,tamBolL);
    fill(255,0,0);
    ellipse(posXbolL2,posYbolL2,tamBolL2,tamBolL2);
   
   fill(255);
     ellipse(posXbolL3,posYbolL3,tamBolL3,tamBolL3);
   
    fill(0);
    noStroke();
    textSize(25);
   
     text(datos[5].reknown,400,230);
    
    
    }
   
     //Lavonne
  if(mouseX > posXbolL3
  && mouseX < posXbolL3 + tamBolL3
  && mouseY > posYbolL3 
  && mouseY < posYbolL3+tamBolL3){
    image(Lavonne3,0,0,600,400);
    fill(255);
    stroke(0);
  ellipse(posXbolL,posYbolL,tamBolL,tamBolL);
   ellipse(posXbolL2,posYbolL2,tamBolL2,tamBolL2);
    fill(255,0,0);
    ellipse(posXbolL3,posYbolL3,tamBolL3,tamBolL3); 
  
  
    fill(0);
    noStroke();
    textSize(12);
    text(datos[5].bio,268,130);
    }   
    
    
  
  //Constance
  if(mouseX > posXrec10
  && mouseX < posXrec10 + tamRec10A
  && mouseY > posYrec10 
  && mouseY < posYrec10+tamRec10L){
    
    background(Constance,0,0,600,400); 
    
     fill(50,0,50);
    rect(230,130,305,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');
 
     text(datos[6].name,245,180);
    
    fill(255,0,0);
    stroke(0);
  ellipse(posXbolC,posYbolC,tamBolC,tamBolC);
  fill(255);
  ellipse(posXbolC2,posYbolC2,tamBolC2,tamBolC2);
   ellipse(posXbolC3,posYbolC3,tamBolC3,tamBolC3);
    }
    
     
    
    
  //Constance
  if(mouseX > posXbolC
  && mouseX < posXbolC + tamBolC
  && mouseY > posYbolC 
  && mouseY < posYbolC+tamBolC){
    
    image(Constance,0,0,600,400);
    
   fill(50,0,50);
      rect(230,130,305,95);
    
  fill(255);
  textSize(25);
  textFont('Georgia');
   text(datos[6].name,245,180);
  
  fill(255,0,0);
 ellipse(posXbolC,posYbolC,tamBolC,tamBolC);
 fill(255);
 ellipse(posXbolC2,posYbolC2,tamBolC2,tamBolC2);
ellipse(posXbolC3,posYbolC3,tamBolC3,tamBolC3);
    
}
   
     //Constance
  if(mouseX > posXbolC2
  && mouseX < posXbolC2 + tamBolC2
  && mouseY > posYbolC2 
  && mouseY < posYbolC2+tamBolC2){
    
   image(Constance2,0,0,600,400);
    fill(255);
    stroke(0);
  ellipse(posXbolC,posYbolC,tamBolC,tamBolC);
    fill(255,0,0);
    ellipse(posXbolC2,posYbolC2,tamBolC2,tamBolC2);
    fill(255);
    ellipse(posXbolC3,posYbolC3,tamBolC3,tamBolC3);
   
    fill(255);
    noStroke();
    textSize(12);
    
     text(datos[6].reknown,265,130);
    
    }
   
     //Constance
  if(mouseX > posXbolC3
  && mouseX < posXbolC3 + tamBolC3
  && mouseY > posYbolC3 
  && mouseY < posYbolC3+tamBolC3){
    image(Constance3,0,0,600,400);
    fill(255);
    stroke(0);
  ellipse(posXbolC,posYbolC,tamBolC,tamBolC);
  ellipse(posXbolC2,posYbolC2,tamBolC2,tamBolC2);
    fill(255,0,0);
    ellipse(posXbolC3,posYbolC3,tamBolC3,tamBolC3); 
  
  
    fill(255);
    noStroke();
    textSize(12);
    text(datos[6].bio,268,130);
    } 
}
} 
