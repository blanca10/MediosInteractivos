///borrador//
var posXrec1 =10;
var posYrec1 =10;
var altoRec1= 40;
var anchoRec1=60

//botón 2
var posXrec2 =210;
var posYrec2 =10;
var tamRec2= 40;

//botón3
var posXrec3 = 290;
var posYrec3 =10;
var tamRec3 =40;

//botón4
var posXrec4 =370;
var posYrec4 =10;
var tamRec4 =40;

//botón5
var posXrec5 =450;
var posYrec5 =10;
var tamRec5 =40;

//botón6
var posXrec6 =530;
var posYrec6 =10;
var tamRec6 =40;

//botón7
var posXrec7 =610;
var posYrec7 =10;
var tamRec7 =40;

//botón 8
var posXrec8 =690;
var posYrec8 =10;
var tamRec8 =40;

//botón 9
var posXrec9 =770;
var posYrec9 =10;
var tamRec9 =40;

//botón10
var posXrec10 =850;
var posYrec10= 10;
var tamRec10 = 40;

//botón11
var posXrec11 =930;
var posYrec11 =10;
var tamRec11 =40;

//

//bolita roja
var posXbol1 =1130;
var posYbol1 =30;
var tamBol1 =30;

//bolita rosada
var posXbol2 =1190;
var posYbol2 =30;
var tamBol2 =30;

//bolita morada
var posXbol3 =1250;
var posYbol3 =30;
var tamBol3 =30;

//bolita azul
var posXbol5 =1160;
var posYbol5 =70;
var tamBol5 =30;

//bolita celeste
var posXbol6 =1220;
var posYbol6 =70;
var tamBol6 =30;

//bolita agua marina
var posXbol7 =1190;
var posYbol7 =110;
var tamBol7 =30;

//bolita naranja
var posXbol4 =1250;
var posYbol4 =110;
var tamBol4 =30;

//bolita verde oscuro
var posXbol8 =1140;
var posYbol8 =110;
var tamBol8 =30;

//bolita verde claro
var posXbol9 =1160;
var posYbol9 =150;
var tamBol9 =30;

//bolita negra
var posXbol10 =1220;
var posYbol10 =150;
var tamBol10 =30;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  noStroke();
  // Barra superior morada
  fill(150,100,150);
  rect(0,0,windowWidth,60);
  // Circulo paleta de color
  fill(230);
  ellipse(windowWidth+10,0+10,450,450);
  

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
  
  fill(255);
  
   //botón2
   stroke(80,0,80);
    rect(posXrec2,posYrec2,tamRec2,tamRec2);
    fill(200,0,0);
    noStroke();
     ellipse(230,30,20,20);
   fill(255);
   
    //botón3
     stroke(80,0,80);
    rect(posXrec3,posYrec3,tamRec3,tamRec3);
    //simbolo
    noStroke();
    fill(220,220,255);
    triangle(290,30,300,20,310,30);
    triangle(310,30,320,20,330,30);
    
    fill(255);
    // botón4
     stroke(80,0,80);
    rect(posXrec4,posYrec4,tamRec4,tamRec4);
    //simbolo
    fill(0,0,255);
    noStroke();
    quad(390,10,410,30,390,50,370,30);
    fill(255);
    //botón5
     stroke(80,0,80);
    rect(posXrec5,posYrec5,tamRec5,tamRec5);
    //simbolo
    noStroke();
    fill(100);
    ellipse(470,30,30,30);
    
    fill(255);
    //botón6
     stroke(80,0,80);
    rect(posXrec6,posYrec6,tamRec6,tamRec6);
    //simbolo
    noStroke();
     fill(100,200,255);
    quad(542,10,545,10,545,50,542,50);
    quad(557,10,560,10,560,50,557,50);
    
   fill(255);
    //botón7
     stroke(80,0,80);
    rect(posXrec7,posYrec7,tamRec7,tamRec7);
    //simbolo
    noStroke();
    fill(255,200,200,200);
    ellipse(620,20,20,20);
    ellipse(630,30,30,30);
    
    //botón8
    fill(255);
     stroke(80,0,80);
    rect(posXrec8,posYrec8,tamRec8,tamRec8);
    //simbolo
    noStroke();
    fill(30,100,30,100);
    quad(697,20,722,20,722,40,697,40);
    
    fill(255);
    //botón9
     stroke(80,0,80);
    rect(posXrec9,posYrec9,tamRec9,tamRec9);
    //simbolo
    noStroke();
     fill(230,230,150);
    quad(770,22,770,25,810,25,810,22);
    quad(770,34,770,37,810,37,810,34);
    
    fill(255);
    //botón10
     stroke(80,0,80);
    rect(posXrec10,posYrec10,tamRec10,tamRec10);
    //simbolo
    noStroke();
    fill(255,200,200);
    ellipse(870,30,40,30);
    fill(150,200,255);
    ellipse(870,30,20,10);
    
    
    fill(255);
    //botón11
    stroke(80,0,80);
    rect(posXrec11,posYrec11,tamRec11,tamRec11);
    //simbolo
    noStroke();
     fill(200,100,200);
    quad(930,10,942,10,942,50,930,50);
     fill(240,170,235);
    quad(942,10,954,10,954,50,942,50);
     fill(280,195,235);
    quad(954,10,970,10,970,50,954,50);
    noStroke();
    //bolita roja
    fill(150,0,90);
    ellipse(posXbol1,posYbol1,tamBol1,tamBol1);
    
    //bolita rosada
    fill(240,120,160,50);
    ellipse(posXbol2,posYbol2,tamBol2,tamBol2);
    
    //bolita morada
    fill(200,30,255);
    ellipse(posXbol3,posYbol3,tamBol3,tamBol3);
    
    //bolita naranja
    fill(250,150,100);
    ellipse(posXbol4,posYbol4,tamBol4,tamBol4);
    
    //bolita azul
    fill(0,0,255);
    ellipse(posXbol5,posYbol5,tamBol5,tamBol5);
    
    //bolita celeste
    fill(0,200,255);
    ellipse(posXbol6,posYbol6,tamBol6,tamBol6);
    
    //bolita aguamarina
    fill(0,230,190);
    ellipse(posXbol7,posYbol7,tamBol7,tamBol7);
    
    //bolita negra
    fill(0,0,0)
    ellipse(posXbol10,posYbol10,tamBol10,tamBol10);
    
    //bolita verde oscuro
    fill(0,150,0);
    ellipse(posXbol8,posYbol8,tamBol8,tamBol8);
    
    //bolita verde claro
    fill(200,240,200);
    ellipse(posXbol9,posYbol9,tamBol9,tamBol9);
    
 
  
  if(mouseIsPressed==true){
    fill(0,0,0);
    ellipse(mouseX,mouseY,10,10);
   
    
    if(mouseX>posXrec1 
    && mouseX< posXrec1 + anchoRec1
    && mouseY> posYrec1
    && mouseY< posYrec1 +altoRec1){
      background(255);
       fill(150,100,150);
  rect(0,0,windowWidth,60);
  fill(230);
  ellipse(windowWidth+10,0+10,450,450);
  
}

if(mouseX > posXbol1
&& mouseX < posXbol1 + tamBol1
&& mouseY > posYbol1
&& mouseY < posYbol1 +tamBol1){
  background(200,0,90);
  fill(80,0,100,95);
  rect(0,0,windowWidth,60);
  fill(230);
  ellipse(windowWidth+10,0+10,450,450);
  
  }
  
  //bolita rosada
  
  if(mouseX > posXbol2
&& mouseX < posXbol2 + tamBol2
&& mouseY > posYbol2
&& mouseY < posYbol2 +tamBol2){
  background(240,120,160,50);
  fill(80,0,100,95);
  rect(0,0,windowWidth,60);
  fill(240);
  ellipse(windowWidth+20,0+20,420,420);
  }
  
  //bolita morada
  
  if(mouseX > posXbol3
&& mouseX < posXbol3 + tamBol3
&& mouseY > posYbol3
&& mouseY < posYbol3 +tamBol3){
  background(200,30,255);
  fill(80,0,100,95);
  rect(0,0,windowWidth,60);
  fill(240);
  ellipse(windowWidth+20,0+20,420,420);
  }
  
  //bolita azul
  
  if(mouseX > posXbol5
&& mouseX < posXbol5 + tamBol5
&& mouseY > posYbol5
&& mouseY < posYbol5 +tamBol5){
  background(0,0,255);
  fill(80,0,100,95);
  rect(0,0,windowWidth,60);
  fill(240);
  ellipse(windowWidth+20,0+20,420,420);
  }
  
  //bolita celeste
  
   if(mouseX > posXbol6
&& mouseX < posXbol6 + tamBol6
&& mouseY > posYbol6
&& mouseY < posYbol6 +tamBol6){
  background(0,200,255);
  fill(80,0,100,95);
  rect(0,0,windowWidth,60);
  fill(240);
  ellipse(windowWidth+20,0+20,420,420);
  }
  
  //bolita verde oscuro
      if(mouseX > posXbol8
&& mouseX < posXbol8 + tamBol8
&& mouseY > posYbol8
&& mouseY < posYbol8 +tamBol8){
  background(0,150,0);
  fill(80,0,100,95);
  rect(0,0,windowWidth,60);
  fill(240);
  ellipse(windowWidth+20,0+20,420,420);
  
    }
    
    //bolita aguamarina
    
    if(mouseX > posXbol7
&& mouseX < posXbol7 + tamBol7
&& mouseY > posYbol7
&& mouseY < posYbol7 +tamBol7){
  background(0,230,190);
  fill(80,0,100,95);
  rect(0,0,windowWidth,60);
  fill(240);
  ellipse(windowWidth+20,0+20,420,420);
  
    }
    
    //bolita naranja
    
    if(mouseX > posXbol4
&& mouseX < posXbol4 + tamBol4
&& mouseY > posYbol4
&& mouseY < posYbol4 +tamBol4){
  background(250,150,100);
  fill(80,0,100,95);
  rect(0,0,windowWidth,60);
  fill(240);
  ellipse(windowWidth+20,0+20,420,420);
  
    }
    
    //bolita verde claro
    
    if(mouseX > posXbol9
&& mouseX < posXbol9 + tamBol9
&& mouseY > posYbol9
&& mouseY < posYbol9 +tamBol9){
  background(200,240,200);
  fill(80,0,100,95);
  rect(0,0,windowWidth,60);
  fill(240);
  ellipse(windowWidth+20,0+20,420,420);
  
    }
    
    //bolita negra
    if(mouseX > posXbol10
&& mouseX < posXbol10 + tamBol10
&& mouseY > posYbol10
&& mouseY < posYbol10 +tamBol10){
  background(0,0,0);
  //barra superior
  fill(145,80,145);
  rect(0,0,windowWidth,60);
  
  //paleta gris
  fill(240);
  ellipse(windowWidth+20,0+20,420,420);
  
    }
   //patrón puntos rojos
  if(mouseX > posXrec2
  && mouseX < posXrec2 + tamRec2
  && mouseY > posYrec2 
  && mouseY < posYrec2+tamRec2){
  posX=160
  posY=120
  noStroke();
  fill(200,0,0);
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
  posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);posX=posX+40
  ellipse(posX,posY,10,10);
  ellipse(posX,posY+20,10,10);
  ellipse(posX,posY+40,10,10);
  ellipse(posX,posY+60,10,10);
  ellipse(posX,posY+80,10,10);
  ellipse(posX,posY+100,10,10);
  ellipse(posX,posY+120,10,10);
  ellipse(posX,posY+140,10,10);
  ellipse(posX,posY+160,10,10);
  ellipse(posX,posY+180,10,10);
  ellipse(posX,posY+200,10,10);
  ellipse(posX,posY+220,10,10);
  ellipse(posX,posY+240,10,10);
  ellipse(posX,posY+260,10,10);
  ellipse(posX,posY+280,10,10);
  ellipse(posX,posY+300,10,10);
  ellipse(posX,posY+320,10,10);
  ellipse(posX,posY+340,10,10);
  ellipse(posX,posY+360,10,10);
  ellipse(posX,posY+380,10,10);
  ellipse(posX,posY+400,10,10);
 
  }
  
  //zigZag
  
 if(mouseX > posXrec3
  && mouseX < posXrec3 + tamRec3
  && mouseY > posYrec3 
  && mouseY < posYrec3+tamRec3){
    
 posY=100
fill(220,220,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();


var posY=posY+30
fill(220,220,255);

beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();


var posY=posY+30
fill(200,200,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();

var posY=posY+30
fill(200,200,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();

var posY=posY+30
fill(200,200,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();


var posY=posY+30
fill(200,200,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();


var posY=posY+30
fill(200,200,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();

var posY=posY+30
beginShape();
fill(150,150,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();

var posY=posY+30
fill(150,150,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();


var posY=posY+30
fill(130,130,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();

var posY=posY+30
fill(130,130,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();

var posY=posY+30
fill(100,100,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();

var posY=posY+30
fill(100,100,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();

var posY=posY+30
fill(80,80,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();

var posY=posY+30
fill(80,80,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();

var posY=posY+30
fill(60,60,255);
beginShape();
vertex(230,posY);
vertex(240,posY+20);
vertex(250,posY);
vertex(260,posY+20);
vertex(270,posY);
vertex(280,posY+20);
vertex(290,posY);
vertex(300,posY+20);
vertex(310,posY);
vertex(320,posY+20);
vertex(330,posY);
vertex(340,posY+20);
vertex(350,posY);
vertex(360,posY+20);
vertex(370,posY);
vertex(380,posY+20);
vertex(390,posY);
vertex(400,posY+20);
vertex(410,posY);
vertex(420,posY+20);
vertex(430,posY);
vertex(440,posY+20);
vertex(450,posY);
vertex(460,posY+20);
vertex(470,posY);
vertex(480,posY+20);
vertex(490,posY);
vertex(500,posY+20);
vertex(510,posY);
vertex(520,posY+20);
vertex(530,posY);
vertex(540,posY+20);
vertex(550,posY);
vertex(560,posY+20);
vertex(570,posY);
vertex(580,posY+20);
vertex(590,posY);
vertex(600,posY+20);
vertex(610,posY);
vertex(620,posY+20);
vertex(630,posY);
vertex(640,posY+20);
vertex(650,posY);
vertex(660,posY+20);
vertex(670,posY);
vertex(680,posY+20);
vertex(690,posY);
vertex(700,posY+20);
vertex(710,posY);
vertex(720,posY+20);
vertex(730,posY);
vertex(740,posY+20);
vertex(750,posY);
vertex(760,posY+20);
vertex(770,posY);
vertex(780,posY+20);
vertex(790,posY);
vertex(800,posY+20);
vertex(810,posY);
vertex(820,posY+20);
vertex(830,posY);
vertex(840,posY+20);
vertex(850,posY);
vertex(860,posY+20);
vertex(870,posY);
vertex(880,posY+20);
vertex(890,posY);
vertex(900,posY+20);
endShape();
}
  
 //rombitos
 if(mouseX > posXrec4
  && mouseX < posXrec4 + tamRec4
  && mouseY > posYrec4 
  && mouseY < posYrec4+tamRec4){
    
 
 posX=160
  posY=100
  fill(0,0,255);
  quad(posX,posY,posX+20,posY+20,posX,posY+40,posX-20,posY+20);
  //más 80
  quad(posX,posY+80,posX+20,posY+100,posX,posY+120,posX-20,posY+100);
  quad(posX,posY+160,posX+20,posY+180,posX,posY+200,posX-20,posY+180);
  quad(posX,posY+240,posX+20,posY+260,posX,posY+280,posX-20,posY+260);
  quad(posX,posY+320,posX+20,posY+340,posX,posY+360,posX-20,posY+340);
  quad(posX,posY+400,posX+20,posY+420,posX,posY+440,posX-20,posY+420);
 
  var posX=posX+100
  quad(posX,posY,posX+20,posY+20,posX,posY+40,posX-20,posY+20);
  quad(posX,posY+80,posX+20,posY+100,posX,posY+120,posX-20,posY+100);
  quad(posX,posY+160,posX+20,posY+180,posX,posY+200,posX-20,posY+180);
  quad(posX,posY+240,posX+20,posY+260,posX,posY+280,posX-20,posY+260);
  quad(posX,posY+320,posX+20,posY+340,posX,posY+360,posX-20,posY+340);
  quad(posX,posY+400,posX+20,posY+420,posX,posY+440,posX-20,posY+420);
 
  var posX=posX+100
  quad(posX,posY,posX+20,posY+20,posX,posY+40,posX-20,posY+20);
  quad(posX,posY+80,posX+20,posY+100,posX,posY+120,posX-20,posY+100);
  quad(posX,posY+160,posX+20,posY+180,posX,posY+200,posX-20,posY+180);
  quad(posX,posY+240,posX+20,posY+260,posX,posY+280,posX-20,posY+260);
  quad(posX,posY+320,posX+20,posY+340,posX,posY+360,posX-20,posY+340);
  quad(posX,posY+400,posX+20,posY+420,posX,posY+440,posX-20,posY+420);
  
  var posX=posX+100
  quad(posX,posY,posX+20,posY+20,posX,posY+40,posX-20,posY+20);
  quad(posX,posY+80,posX+20,posY+100,posX,posY+120,posX-20,posY+100);
  quad(posX,posY+160,posX+20,posY+180,posX,posY+200,posX-20,posY+180);
  quad(posX,posY+240,posX+20,posY+260,posX,posY+280,posX-20,posY+260);
  quad(posX,posY+320,posX+20,posY+340,posX,posY+360,posX-20,posY+340);
  quad(posX,posY+400,posX+20,posY+420,posX,posY+440,posX-20,posY+420);
 
  var posX=posX+100
  quad(posX,posY,posX+20,posY+20,posX,posY+40,posX-20,posY+20);
  quad(posX,posY+80,posX+20,posY+100,posX,posY+120,posX-20,posY+100);
  quad(posX,posY+160,posX+20,posY+180,posX,posY+200,posX-20,posY+180);
  quad(posX,posY+240,posX+20,posY+260,posX,posY+280,posX-20,posY+260);
  quad(posX,posY+320,posX+20,posY+340,posX,posY+360,posX-20,posY+340);
  quad(posX,posY+400,posX+20,posY+420,posX,posY+440,posX-20,posY+420);
  
  var posX=posX+100
  quad(posX,posY,posX+20,posY+20,posX,posY+40,posX-20,posY+20);
  quad(posX,posY+80,posX+20,posY+100,posX,posY+120,posX-20,posY+100);
  quad(posX,posY+160,posX+20,posY+180,posX,posY+200,posX-20,posY+180);
  quad(posX,posY+240,posX+20,posY+260,posX,posY+280,posX-20,posY+260);
  quad(posX,posY+320,posX+20,posY+340,posX,posY+360,posX-20,posY+340);
  quad(posX,posY+400,posX+20,posY+420,posX,posY+440,posX-20,posY+420);
  
  var posX=posX+100
  quad(posX,posY,posX+20,posY+20,posX,posY+40,posX-20,posY+20);
  quad(posX,posY+80,posX+20,posY+100,posX,posY+120,posX-20,posY+100);
  quad(posX,posY+160,posX+20,posY+180,posX,posY+200,posX-20,posY+180);
  quad(posX,posY+240,posX+20,posY+260,posX,posY+280,posX-20,posY+260);
  quad(posX,posY+320,posX+20,posY+340,posX,posY+360,posX-20,posY+340);
  quad(posX,posY+400,posX+20,posY+420,posX,posY+440,posX-20,posY+420);
 
  var posX=posX+100
  quad(posX,posY,posX+20,posY+20,posX,posY+40,posX-20,posY+20);
  quad(posX,posY+80,posX+20,posY+100,posX,posY+120,posX-20,posY+100);
  quad(posX,posY+160,posX+20,posY+180,posX,posY+200,posX-20,posY+180);
  quad(posX,posY+240,posX+20,posY+260,posX,posY+280,posX-20,posY+260);
  quad(posX,posY+320,posX+20,posY+340,posX,posY+360,posX-20,posY+340);
  quad(posX,posY+400,posX+20,posY+420,posX,posY+440,posX-20,posY+420);
  
  var posX=posX+100
  quad(posX,posY,posX+20,posY+20,posX,posY+40,posX-20,posY+20);
  quad(posX,posY+80,posX+20,posY+100,posX,posY+120,posX-20,posY+100);
  quad(posX,posY+160,posX+20,posY+180,posX,posY+200,posX-20,posY+180);
  quad(posX,posY+240,posX+20,posY+260,posX,posY+280,posX-20,posY+260);
  quad(posX,posY+320,posX+20,posY+340,posX,posY+360,posX-20,posY+340);
  quad(posX,posY+400,posX+20,posY+420,posX,posY+440,posX-20,posY+420);
 
  
  
  
//rombos grandes
posX=200
posY=100
noStroke(170,170,255);
fill(230,230,255);

quad(posX,posY,posX+30,posY+30,posX,posY+60,posX-30,posY+30);
//más 80
quad(posX,posY+80,posX+30,posY+110,posX,posY+140,posX-30,posY+110);
quad(posX,posY+160,posX+30,posY+190,posX,posY+220,posX-30,posY+190);
quad(posX,posY+240,posX+30,posY+270,posX,posY+300,posX-30,posY+270);
quad(posX,posY+320,posX+30,posY+350,posX,posY+380,posX-30,posY+350);
quad(posX,posY+400,posX+30,posY+430,posX,posY+460,posX-30,posY+430);

var posX=posX+100
quad(posX,posY,posX+30,posY+30,posX,posY+60,posX-30,posY+30);
quad(posX,posY+80,posX+30,posY+110,posX,posY+140,posX-30,posY+110);
quad(posX,posY+160,posX+30,posY+190,posX,posY+220,posX-30,posY+190);
quad(posX,posY+240,posX+30,posY+270,posX,posY+300,posX-30,posY+270);
quad(posX,posY+320,posX+30,posY+350,posX,posY+380,posX-30,posY+350);
quad(posX,posY+400,posX+30,posY+430,posX,posY+460,posX-30,posY+430);
var posX=posX+100
quad(posX,posY,posX+30,posY+30,posX,posY+60,posX-30,posY+30);
quad(posX,posY+80,posX+30,posY+110,posX,posY+140,posX-30,posY+110);
quad(posX,posY+160,posX+30,posY+190,posX,posY+220,posX-30,posY+190);
quad(posX,posY+240,posX+30,posY+270,posX,posY+300,posX-30,posY+270);
quad(posX,posY+320,posX+30,posY+350,posX,posY+380,posX-30,posY+350);
quad(posX,posY+400,posX+30,posY+430,posX,posY+460,posX-30,posY+430);
var posX=posX+100
quad(posX,posY,posX+30,posY+30,posX,posY+60,posX-30,posY+30);
quad(posX,posY+80,posX+30,posY+110,posX,posY+140,posX-30,posY+110);
quad(posX,posY+160,posX+30,posY+190,posX,posY+220,posX-30,posY+190);
quad(posX,posY+240,posX+30,posY+270,posX,posY+300,posX-30,posY+270);
quad(posX,posY+320,posX+30,posY+350,posX,posY+380,posX-30,posY+350);
quad(posX,posY+400,posX+30,posY+430,posX,posY+460,posX-30,posY+430);
var posX=posX+100
quad(posX,posY,posX+30,posY+30,posX,posY+60,posX-30,posY+30);
quad(posX,posY+80,posX+30,posY+110,posX,posY+140,posX-30,posY+110);
quad(posX,posY+160,posX+30,posY+190,posX,posY+220,posX-30,posY+190);
quad(posX,posY+240,posX+30,posY+270,posX,posY+300,posX-30,posY+270);
quad(posX,posY+320,posX+30,posY+350,posX,posY+380,posX-30,posY+350);
quad(posX,posY+400,posX+30,posY+430,posX,posY+460,posX-30,posY+430);
var posX=posX+100
quad(posX,posY,posX+30,posY+30,posX,posY+60,posX-30,posY+30);
quad(posX,posY+80,posX+30,posY+110,posX,posY+140,posX-30,posY+110);
quad(posX,posY+160,posX+30,posY+190,posX,posY+220,posX-30,posY+190);
quad(posX,posY+240,posX+30,posY+270,posX,posY+300,posX-30,posY+270);
quad(posX,posY+320,posX+30,posY+350,posX,posY+380,posX-30,posY+350);
quad(posX,posY+400,posX+30,posY+430,posX,posY+460,posX-30,posY+430);
var posX=posX+100
quad(posX,posY,posX+30,posY+30,posX,posY+60,posX-30,posY+30);
quad(posX,posY+80,posX+30,posY+110,posX,posY+140,posX-30,posY+110);
quad(posX,posY+160,posX+30,posY+190,posX,posY+220,posX-30,posY+190);
quad(posX,posY+240,posX+30,posY+270,posX,posY+300,posX-30,posY+270);
quad(posX,posY+320,posX+30,posY+350,posX,posY+380,posX-30,posY+350);
quad(posX,posY+400,posX+30,posY+430,posX,posY+460,posX-30,posY+430);
var posX=posX+100
quad(posX,posY,posX+30,posY+30,posX,posY+60,posX-30,posY+30);
quad(posX,posY+80,posX+30,posY+110,posX,posY+140,posX-30,posY+110);
quad(posX,posY+160,posX+30,posY+190,posX,posY+220,posX-30,posY+190);
quad(posX,posY+240,posX+30,posY+270,posX,posY+300,posX-30,posY+270);
quad(posX,posY+320,posX+30,posY+350,posX,posY+380,posX-30,posY+350);
quad(posX,posY+400,posX+30,posY+430,posX,posY+460,posX-30,posY+430);

}
if(mouseX > posXrec5
  && mouseX < posXrec5 + tamRec5
  && mouseY > posYrec5 
  && mouseY < posYrec5+tamRec5){
   
     fill(60,60,60);
  ellipse(250,190,50,50);
  ellipse(500,250,70,70);
  ellipse(600,200,30,30);
  ellipse(650,300,100,100);
  ellipse(350,280,80,80);
  ellipse(450,350,20,20);
  ellipse(380,150,40,40);
  ellipse(270,350,60,60);
  ellipse(520,150,65,65);
  ellipse(550,370,40,40);
  ellipse(800,200,130,130);
  ellipse(780,350,50,50);
  fill(100,100,100);
ellipse(370,450,130,130);
ellipse(550,500,70,70);
ellipse(720,450,100,100);
ellipse(850,500,30,30);
 } 
 
 //rejilla
 
 if(mouseX > posXrec6
  && mouseX < posXrec6 + tamRec6
  && mouseY > posYrec6 
  && mouseY < posYrec6+tamRec6){
      
    posX=160
    
    fill(100,200,255);
  
  quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
   quad(posX,120,posX+10,120,posX+10,550,posX,550);
  var posX=posX+50
 
}

//bolitas de chicle
if(mouseX > posXrec7
  && mouseX < posXrec7 + tamRec7
  && mouseY > posYrec7 
  && mouseY < posYrec7+tamRec7){
noStroke();
fill(255,200,200,50);
ellipse(200,150,90,90);
ellipse(260,170,110,110);
ellipse(330,150,50,50);
ellipse(210,250,120,120)
ellipse(320,220,60,60);
ellipse(370,180,80,80);
ellipse(390,265,115,115);
ellipse(300,290,95,95);
ellipse(400,140,80,80);
ellipse(460,190,110,110);
ellipse(470,260,50,50);
ellipse(520,160,90,90);
ellipse(520,220,40,40);
ellipse(500,300,70,70);
ellipse(560,270,110,110);
ellipse(590,200,60,60);
ellipse(620,150,100,100);
ellipse(650,210,50,50);
ellipse(640,260,80,80);
ellipse(700,310,110,110);
ellipse(760,250,80,80);
ellipse(730,220,40,40);
ellipse(710,160,100,100);
ellipse(770,150,30,30);
ellipse(580,360,100,100);
ellipse(400,340,110,110);
ellipse(825,180,120,120);
ellipse(250,330,50,50);
ellipse(330,390,110,110);
ellipse(460,380,50,50);
ellipse(490,420,70,70);
ellipse(650,410,120,120);
ellipse(760,330,40,40);
ellipse(720,400,40,40);
ellipse(790,390,110,110);
ellipse(710,460,60,60);
ellipse(840,300,110,110);
ellipse(900,290,60,60);
ellipse(930,240,90,90);
ellipse(820,480,120,120);
ellipse(400,460,110,110);

}
//cuadrados verdes
if(mouseX > posXrec8
  && mouseX < posXrec8 + tamRec8
  && mouseY > posYrec8 
  && mouseY < posYrec8+tamRec8){
  var posX=70
  var posY=160
  fill(30,100,30,100);
  rect(posX,posY,40,40);
  rect(posX+60,posY,40,40);
  rect(posX+120,posY,40,40);
  rect(posX+180,posY,40,40);
  rect(posX+240,posY,40,40);
  rect(posX+300,posY,40,40);
  rect(posX+360,posY,40,40);
  rect(posX+420,posY,40,40);
  rect(posX+480,posY,40,40);
  rect(posX+540,posY,40,40);
  rect(posX+600,posY,40,40);
  rect(posX+660,posY,40,40);
  
  var posY=posY+40
  var posX=posX+40
  
  fill(100,200,100,100);
  rect(posX,posY,40,40);
  rect(posX+60,posY,40,40);
  rect(posX+120,posY,40,40);
  rect(posX+180,posY,40,40);
  rect(posX+240,posY,40,40);
  rect(posX+300,posY,40,40);
  rect(posX+360,posY,40,40);
  rect(posX+420,posY,40,40);
  rect(posX+480,posY,40,40);
  rect(posX+540,posY,40,40);
  rect(posX+600,posY,40,40);
  rect(posX+660,posY,40,40);
   var posY=posY+40
  var posX=posX+40
  
   fill(30,100,30,100);
  rect(posX,posY,40,40);
  rect(posX+60,posY,40,40);
  rect(posX+120,posY,40,40);
  rect(posX+180,posY,40,40);
  rect(posX+240,posY,40,40);
  rect(posX+300,posY,40,40);
  rect(posX+360,posY,40,40);
  rect(posX+420,posY,40,40);
  rect(posX+480,posY,40,40);
  rect(posX+540,posY,40,40);
  rect(posX+600,posY,40,40);
  rect(posX+660,posY,40,40);
   
   
    var posY=posY+40
  var posX=posX+40
   fill(100,200,100,100);
  rect(posX,posY,40,40);
  rect(posX+60,posY,40,40);
  rect(posX+120,posY,40,40);
  rect(posX+180,posY,40,40);
  rect(posX+240,posY,40,40);
  rect(posX+300,posY,40,40);
  rect(posX+360,posY,40,40);
  rect(posX+420,posY,40,40);
  rect(posX+480,posY,40,40);
  rect(posX+540,posY,40,40);
  rect(posX+600,posY,40,40);
  rect(posX+660,posY,40,40);
  
    var posY=posY+40
  var posX=posX+40
   fill(30,100,30,100);
  rect(posX,posY,40,40);
  rect(posX+60,posY,40,40);
  rect(posX+120,posY,40,40);
  rect(posX+180,posY,40,40);
  rect(posX+240,posY,40,40);
  rect(posX+300,posY,40,40);
  rect(posX+360,posY,40,40);
  rect(posX+420,posY,40,40);
  rect(posX+480,posY,40,40);
  rect(posX+540,posY,40,40);
  rect(posX+600,posY,40,40);
  rect(posX+660,posY,40,40);
  
  var posY=posY+40
  var posX=posX+40
    fill(100,200,100,100);
  rect(posX,posY,40,40);
  rect(posX+60,posY,40,40);
  rect(posX+120,posY,40,40);
  rect(posX+180,posY,40,40);
  rect(posX+240,posY,40,40);
  rect(posX+300,posY,40,40);
  rect(posX+360,posY,40,40);
  rect(posX+420,posY,40,40);
  rect(posX+480,posY,40,40);
  rect(posX+540,posY,40,40);
  rect(posX+600,posY,40,40);
  rect(posX+660,posY,40,40);
   var posY=posY+40
  var posX=posX+40
 fill(30,100,30,100);
  rect(posX,posY,40,40);
  rect(posX+60,posY,40,40);
  rect(posX+120,posY,40,40);
  rect(posX+180,posY,40,40);
  rect(posX+240,posY,40,40);
  rect(posX+300,posY,40,40);
  rect(posX+360,posY,40,40);
  rect(posX+420,posY,40,40);
  rect(posX+480,posY,40,40);
  rect(posX+540,posY,40,40);
  rect(posX+600,posY,40,40);
  rect(posX+660,posY,40,40);
     var posY=posY+40
  var posX=posX+40
   fill(100,200,100,100);
  rect(posX,posY,40,40);
  rect(posX+60,posY,40,40);
  rect(posX+120,posY,40,40);
  rect(posX+180,posY,40,40);
  rect(posX+240,posY,40,40);
  rect(posX+300,posY,40,40);
  rect(posX+360,posY,40,40);
  rect(posX+420,posY,40,40);
  rect(posX+480,posY,40,40);
  rect(posX+540,posY,40,40);
  rect(posX+600,posY,40,40);
  rect(posX+660,posY,40,40);
  
    var posY=posY+40
  var posX=posX+40
   fill(30,100,30,100);
  rect(posX,posY,40,40);
  rect(posX+60,posY,40,40);
  rect(posX+120,posY,40,40);
  rect(posX+180,posY,40,40);
  rect(posX+240,posY,40,40);
  rect(posX+300,posY,40,40);
  rect(posX+360,posY,40,40);
  rect(posX+420,posY,40,40);
  rect(posX+480,posY,40,40);
  rect(posX+540,posY,40,40);
  rect(posX+600,posY,40,40);
  rect(posX+660,posY,40,40);
  }
  
//lineas horizontales

if(mouseX > posXrec9
  && mouseX < posXrec9 + tamRec9
  && mouseY > posYrec9 
  && mouseY < posYrec9+tamRec9){
    var posY=120
    fill(230,230,150);
    quad(160,posY,960,posY,960,posY+10,160,posY+10);
    var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);
    var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);
    var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);
    var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);
    var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);var posY=posY+30
    quad(160,posY,960,posY,960,posY+10,160,posY+10);
  }
  
  //bolitas galaxia
  if(mouseX > posXrec10
  && mouseX < posXrec10 + tamRec10
  && mouseY > posYrec10 
  && mouseY < posYrec10+tamRec10){
    fill(150,200,255);
    ellipse(200,200,100,60);
    fill(255,200,200);
    ellipse(200,200,50,30);
    fill(150,200,255);
    ellipse(300,300,150,100);
    fill(255,200,200);
    ellipse(300,300,100,50);
    fill(150,200,255);
    ellipse( 400,200,130,80);
   fill(255,200,200);
   ellipse(400,200,65,40);
    fill(150,200,255);
   ellipse(510,300,100,60);
   fill(255,200,200);
   ellipse(510,300,60,30);
   fill(150,200,255);
   ellipse(450,400,120,80);
   fill(255,200,200);
   ellipse(450,400,80,40);
   fill(150,200,255);
   ellipse(240,460, 100,50);
   fill(255,200,200);
   ellipse(240,460, 50,25);
   fill(150,200,255);
   ellipse(640,200,140,80);
   fill(255,200,200);
   ellipse(640,200,70,40);
   fill(150,200,255);
   ellipse(590,380,70,40);
   fill(255,200,200);
   ellipse(590,380,35,20);
   fill(150,200,255);
   ellipse(700,460,120,80);
   fill(255,200,200);
   ellipse(700,460,60,40);
   fill(150,200,255);
   ellipse(750,300,100,60);
   fill(255,200,200);
   ellipse(750,300,50,30);
   fill(150,200,255);
   ellipse(860,400,150,100);
   fill(255,200,200);
    ellipse(860,400,80,50);
    fill(150,200,255);
    ellipse(850,200,100,60);
    fill(255,200,200);
     ellipse(850,200,50,30);
    }
    //ultimo patrón
    if(mouseX > posXrec11
  && mouseX < posXrec11 + tamRec11
  && mouseY > posYrec11 
  && mouseY < posYrec11+tamRec11){
    fill(70,60,70);
    var posX=160
    
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(90,60,90);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(110,70,110);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(130,60,130);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(150,60,150);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(170,60,170);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(190,60,190);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
   var posX=posX+30
    fill(210,60,210);
    quad(posX,100,posX+30,100,posX+30,530,posX,530); 
    var posX=posX+30
    fill(230,60,230);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(230,80,230);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(230,90,230);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(230,100,230);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(230,110,230);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(230,120,230);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(230,130,230);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(230,140,230);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(235,150,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
     var posX=posX+30
    fill(240,160,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(245,170,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(250,180,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(255,190,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
     var posX=posX+30
    fill(260,195,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(262,210,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(264,220,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
     var posX=posX+30
    fill(266,230,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(268,240,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(270,250,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    var posX=posX+30
    fill(272,260,235);
    quad(posX,100,posX+30,100,posX+30,530,posX,530);
    
    
    
    
    
  
  
  
    
    









  }
}
}
