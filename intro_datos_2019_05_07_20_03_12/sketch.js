var intro;

var mujeres;
var hombres;
var niños;
var tablaSida;
var numfilas;
var numColumnas;

//botón hombre 
var posXrec = 330;
var posYrec = 515;
var anchoRec=25;
var altoRec=15; 

//botón mujer
var posXrec1 =360;
var posYrec1 =515;
var altoRec1= 15;
var anchoRec1=25;

// boton bebesito 
var posXrecb =300;
var posYrecb =515;
var altoRecb= 15;
var anchoRecb=25;

// botón reinicio

var posXrec2 =10;
var posYrec2 =10;
var altoRec2= 20;
var anchoRec2=20

//barra de 2010
var posXrec3 =40;
var posYrec3 =515;
var altoRec3= 15;
var anchoRec3=40

//barra de 2011
var posXrec4 =80;
var posYrec4 =515;
var altoRec4= 15;
var anchoRec4=40
//barra de 2012
var posXrec5 =120;
var posYrec5 =515;
var altoRec5= 15;
var anchoRec5=40
//bara de 2013
var posXrec6 =160;
var posYrec6 =515;
var altoRec6= 15;
var anchoRec6=40
//barra de 2014
var posXrec7 =200;
var posYrec7 =515;
var altoRec7= 15;
var anchoRec7=40


function preload(){
intro=loadImage('intro.jpg'); 
mujeres= loadImage('mujeres.jpg');
tablaSida= loadTable('sida.csv','csv','header');
hombres=loadImage('hombres.jpg');
//niños=loadImage('niños.jpg');
  }


function setup() {
  createCanvas(400, 600);

  
   image(intro, 0,0,400,500);
  textSize(16);
   fill(150,50,30);
  text('Población infectada con VIH en Colombia',60,40)
   noStroke();
  fill(200,130,80,100);
  rect(0,498,400,50);
}

function draw() {
  //background(220);
  
  //borrador
  noFill();
  stroke(0);
  rect(posXrec2,posYrec2,anchoRec2,altoRec2);
  
  

 fill(0);
  noStroke();
  if(frameCount >= 100 && frameCount < 500){
    
  text('A partir de las siguientes visualizaciones,se',30,270);
    
text('representará la cantidad total de personas ',30,295);   

 text('infectadas con VIH en Colombia, así como el ',30,320);  
text('porcentaje de mujeres, hombres y niños ', 30,345);
text('de los años 2010-2014.',30,370);
    
   } 
  
  if(frameCount >= 500 && frameCount < 1000){
   text('También se mostrará la cantidad de personas que ',30,420);
    
 text('mueren al año debido al SIDA.  ',30,445);
         
}
  
  if(frameCount >= 1000 && frameCount < 1500){
   noStroke();
    
  //borrador
  noFill();
  noStroke();
  strokeWeight(1);
 fill(190,70,70);
 rect(posXrec1,posYrec1,anchoRec1,altoRec1);
 fill(50,50,255);  
 rect(posXrec,posYrec,anchoRec,altoRec);
fill(255,255,50);
 rect(posXrecb,posYrecb,anchoRecb,altoRecb);

  
}
  
if(mouseIsPressed==true){
   
   
    //Botón mujer
    if(mouseX>posXrec1 
    && mouseX< posXrec1 + anchoRec1
    && mouseY> posYrec1
    && mouseY< posYrec1 +altoRec1){
      
     textSize(14); 
  image(mujeres, 0,0,400,500);
  fill(150,50,30);
  text(' Mujeres infectadas con VIH', 100,30);
      
      textSize(10);
  text('Capacidad estadio El Campín: 36,343',100,55);
  text('Capacidad estadio Jorge Torres Rocha: 3,500',100,70);
      
 noStroke();
  fill(200,150,100);  
 rect(posXrec3,posYrec3,anchoRec3,altoRec3);
 fill(190,130,90);   
 rect(posXrec4,posYrec4,anchoRec4,altoRec4);
 fill(160,100,70);
 rect(posXrec5,posYrec5,anchoRec5,altoRec5);
 fill(130,50,30);
 rect(posXrec6,posYrec6,anchoRec6,altoRec6);
 fill(110,10,0);
 rect(posXrec7,posYrec7,anchoRec7,altoRec7);
 textSize(10);
 text('2010',50,540);
 text('2014',210,540);
  //palanquita 
      fill(0);
  rect(40,508,5,30);

}
 
  
 //botón 2010
  if(mouseX>posXrec3 
    && mouseX< posXrec3 + anchoRec3
    && mouseY> posYrec3
    && mouseY< posYrec3 +altoRec3){
    
  image(mujeres, 0,0,400,500); 
  stroke(255,0,0);
   fill(200,150,100);
    
  //bolitas estadio campin 
  for( var i=43; i < 330; i= i+30){
  for(var i2=138; i2 < 266; i2=i2+22){
    
  ellipse(i,i2,9,9);
    
//bolitas estadio rocha
for( var i3=280; i3 < 320; i3= i3+30){
for(var i4=400; i4 < 450; i4=i4+22){  
ellipse(i3,i4,9,9);
  
ellipse(80,450,9,9);
ellipse(100,450,9,9);
  
//esta elipse equivale a 300
  push();
  stroke(50,50,155);
fill(150,150,255);
ellipse(120,450,9,9);
  pop();
  
//ellipse de convencion arriba 600
  stroke(255,0,0);
   fill(200,150,100); 
ellipse(80,28,9,9);
  
  push();
fill(0);
noStroke();
text('=   600',100,30);
text('=   300',100,50);
pop(); 
  //bolita 600
ellipse(80,28,9,9); 
  
//bolita de 300  
push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
 pop();
  
   }
}
}
}
    
  }
  
  //boton 2011
  if(mouseX>posXrec4 
    && mouseX< posXrec4 + anchoRec4
    && mouseY> posYrec4
    && mouseY< posYrec4 +altoRec4){
    
   image(mujeres, 0,0,400,500);
    //ellipse de convencion arriba 600
  stroke(255,0,0);
   fill(200,150,100); 
ellipse(80,28,9,9);
  
  push();
fill(0);
noStroke();
text('=   600',100,30);
text('=   300',100,50);
pop(); 
  //bolita 600
ellipse(80,28,9,9); 
  
//bolita de 300  
push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
 pop();
  
    
    stroke(255,0,0);
   fill(200,150,100);  
      //bolitas estadio campin 
  for( var i=43; i < 330; i= i+30){
  for(var i2=138; i2 < 266; i2=i2+22){
  ellipse(i,i2,9,9);
    
    //bolitas estadio rocha
for( var i3=280; i3 < 320; i3= i3+30){
for(var i4=400; i4 < 450; i4=i4+22){  
ellipse(i3,i4,9,9);
  
//esta elipse equivale a 300
  push();
 stroke(50,50,155);
fill(150,150,255);
ellipse(120,450,9,9);
pop();
  }
  }
  }
  }
  }
  
//boton 2012
   if(mouseX>posXrec5 
    && mouseX< posXrec5 + anchoRec5
    && mouseY> posYrec5
    && mouseY< posYrec5 +altoRec5){
    image(mujeres, 0,0,400,500);
     //ellipse de convencion arriba 600
  stroke(255,0,0);
   fill(200,150,100); 
ellipse(80,28,9,9);
  
  push();
fill(0);
noStroke();
text('=   600',100,30);
text('=   300',100,50);
pop(); 
  //bolita 600
ellipse(80,28,9,9); 
  
//bolita de 300  
push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
 pop();
  
     
     stroke(255,0,0);
   fill(200,150,100);
     
      //bolitas estadio campin 
    stroke(255,0,0);
   fill(200,150,100);
  for( var i=43; i < 330; i= i+30){
  for(var i2=138; i2 < 266; i2=i2+22){
  ellipse(i,i2,9,9);
    
  stroke(255,0,0);
fill(200,150,100);  
 ellipse(280,400,9,9);
 ellipse(280,422,9,9);
 ellipse(280,444,9,9);
 ellipse(310,400,9,9);
 ellipse(310,422,9,9);
    


}
}
}
 
  
 //boton 2013
  if(mouseX>posXrec6 
    && mouseX< posXrec6 + anchoRec6
    && mouseY> posYrec6
    && mouseY< posYrec6 +altoRec6){
    image(mujeres, 0,0,400,500);
    //ellipse de convencion arriba 600
  stroke(255,0,0);
   fill(200,150,100); 
ellipse(80,28,9,9);
  
  push();
fill(0);
noStroke();
text('=   600',100,30);
text('=   300',100,50);
pop(); 
  //bolita 600
ellipse(80,28,9,9); 
  
//bolita de 300  
push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
 pop();
  
    stroke(255,0,0);
   fill(200,150,100);
     
      //bolitas estadio campin 
    stroke(255,0,0);
   fill(200,150,100);
  for( var i=43; i < 330; i= i+30){
  for(var i2=138; i2 < 266; i2=i2+22){
  ellipse(i,i2,9,9);
    
  stroke(255,0,0);
fill(200,150,100);  
 ellipse(280,400,9,9);
 ellipse(280,422,9,9);
ellipse(310,400,9,9);
 //esta ellipse equivale a 300
push();
stroke(50,50,155);
fill(150,150,255);
 ellipse(310,422,9,9);
 pop();
    

  

   
  }
  }
  }
  //boton 2014
  if(mouseX>posXrec7 
    && mouseX< posXrec7 + anchoRec7
    && mouseY> posYrec7
    && mouseY< posYrec7 +altoRec7){
    image(mujeres, 0,0,400,500);
    //ellipse de convencion arriba 600
  stroke(255,0,0);
   fill(200,150,100); 
ellipse(80,28,9,9);
  
  push();
fill(0);
noStroke();
text('=   600',100,30);
text('=   300',100,50);
pop(); 
  //bolita 600
ellipse(80,28,9,9); 
  
//bolita de 300  
push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
 pop();
  
    stroke(255,0,0);
   fill(200,150,100);
     
      //bolitas estadio campin 
    stroke(255,0,0);
   fill(200,150,100);
  for( var i=43; i < 330; i= i+30){
  for(var i2=138; i2 < 266; i2=i2+22){
  ellipse(i,i2,9,9);
    
    //estadio rocha
  ellipse(280,400,9,9);
 ellipse(280,422,9,9);

//esta elipse equivale a 300
    push();
    stroke(50,50,155);
fill(150,150,255);
 ellipse(310,422,9,9);
    pop();
    
     } 
  }
  }
  
  

   //Botón hombre
    if(mouseX>posXrec 
    && mouseX< posXrec + anchoRec
    && mouseY> posYrec
    && mouseY< posYrec +altoRec){
    image(hombres, 0,0,400,500);
      noStroke();
  fill(200,150,100);  
 rect(posXrec3,posYrec3,anchoRec3,altoRec3);
 fill(190,130,90);   
 rect(posXrec4,posYrec4,anchoRec4,altoRec4);
 fill(160,100,70);
 rect(posXrec5,posYrec5,anchoRec5,altoRec5);
 fill(130,50,30);
 rect(posXrec6,posYrec6,anchoRec6,altoRec6);
 fill(110,10,0);
 rect(posXrec7,posYrec7,anchoRec7,altoRec7);
 textSize(10);
  text('2010',50,540);
 text('2014',210,540);
  //palanquita 
      fill(0);
  rect(40,508,5,30);
  ellipse(43,508,10,10);
  ellipse(43,533,10,10);
  fill(150,50,30);
  text(' Hombres infectados con VIH', 100,25);
      
 fill(255);
rect(100,45,200,30);  
textSize(10);
fill(150,50,30);
  text('Capacidad estadio El Campín: 36,343',100,45);
  text('Capacidad estadio Jorge Torres Rocha: 3,500',100,60);
      
 }
  

 
   //Botón atras
    if(mouseX>posXrec2 
    && mouseX< posXrec2 + anchoRec2
    && mouseY> posYrec2
    && mouseY< posYrec2 +altoRec2){
      
    image(intro, 0,0,400,500);
   
}
}
  
} 