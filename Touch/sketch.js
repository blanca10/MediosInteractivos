var intro;

var mujeres;
var hombres;
var niÒos;

//mujeres
var imagen2012;
var imagen2013;
var imagen2014;

//hombres
var imagenH2010;
var imagenH2012;
var imagenH2014;
var miAudio1;
//niños
var imagenN2010;
var imagenN2011;
var imagenN2012;
var imagenN2013;
var imagenN2014; 

//instrucciones
var instrucciones;

//validar vista
var mujerBtn=false;
var hombreBtn=false;
var bebeBtn=false;
var reinicioBtn=false;

//botÛn hombre 
var posXrec = 330;
var posYrec = 515;
var anchoRec=25;
var altoRec=15; 

//botÛn mujer
var posXrec1 =360;
var posYrec1 =515;
var altoRec1= 15;
var anchoRec1=25;



// boton bebesito 
var posXrecb =300;
var posYrecb =515;
var altoRecb= 15;
var anchoRecb=25;

//boton de muerte 
var posXrecM = 250;
var posYrecM = 510;
var altorecM = 20;
var anchorecM = 20;

// botÛn reinicio

var posXrec2 =10;
var posYrec2 =10;
var altoRec2= 15;
var anchoRec2=55

//barra de 2010
var posXrec3 =20;
var posYrec3 =515;
var altoRec3= 15;
var anchoRec3=40

//barra de 2011
var posXrec4 =60;
var posYrec4 =515;
var altoRec4= 15;
var anchoRec4=40
//barra de 2012
var posXrec5 =100;
var posYrec5 =515;
var altoRec5= 15;
var anchoRec5=40
//bara de 2013
var posXrec6 =140;
var posYrec6 =515;
var altoRec6= 15;
var anchoRec6=40
//barra de 2014
var posXrec7 =180;
var posYrec7 =515;
var altoRec7= 15;
var anchoRec7=40

var year="";


function preload(){
intro=loadImage('intro.jpg'); 
mujeres= loadImage('mujeres.jpg');
tablaSida= loadTable('sida.csv','csv','header');
hombres=loadImage('hombres.jpg');
imagen2012=loadImage('2012M.jpg');
imagen2013=loadImage('2013M.jpg');
imagen2014=loadImage('2014M.jpg');
imagenH2010=loadImage('2010H.jpg');
imagenH2012=loadImage('2012H.jpg');
imagenH2014=loadImage('2014H.jpg');
  
  imagenN2010=loadImage('2010N.jpg');
imagenN2011=loadImage('2011N.jpg');
imagenN2012=loadImage('2012N.jpg');
imagenN2013=loadImage('2013N.jpg');
imagenN2014=loadImage('2014N.jpg');


  imagenMM2010=loadImage('2010MM.jpg');
  imagenMM2011=loadImage('2011MM.jpg');
  imagenMM2012=loadImage('2012MM.jpg');
  imagenMM2013=loadImage('2013MM.jpg');
  imagenMM2014=loadImage('2014MM.jpg');
  
  
  
   imagenMN2010=loadImage('2010MN.jpg');
  imagenMN2011=loadImage('2011MN.jpg');
  imagenMN2012=loadImage('2012MN.jpg');
  imagenMN2013=loadImage('2013MN.jpg');
  imagenMN2014=loadImage('2014MN.jpg');
  
  imagenMH2010=loadImage('2010MH.jpg');
  imagenMH2011=loadImage('2011MH.jpg');
  imagenMH2012=loadImage('2012MH.jpg');
  imagenMH2013=loadImage('2013MH.jpg');
  imagenMH2014=loadImage('2014MH.jpg');
  instrucciones=loadImage('instrucciones.jpg');
  

  }


function setup() 
{
  reset();
}

function a()
{
  if(mujerBtn==true && year=="2010M" )
 
  {
  image(imagenMM2010,0,0,400,500);
     push();
 textSize(16);
  fill(0);
 noStroke();
 text('Total mujeres muertas = 3,085', 65,95); 
pop();
  } 
  
  else if (mujerBtn==true && year=="2011M" )
  {
  image(imagenMM2011,0,0,400,500);
     push();
 textSize(16);
  fill(0);
 noStroke();
 text('Total mujeres muertas = 2,910', 65,95); 
pop();
  }
  else if (mujerBtn==true && year=="2012M" )
  {
  image(imagenMM2012,0,0,400,500);
   push();
 textSize(16);
  fill(0);
 noStroke();
 text('Total mujeres muertas = 2,600', 65,95); 
pop();
  }
  else if (mujerBtn==true && year=="2013M" )
  {
  image(imagenMM2011,0,0,400,500);
   push();
 textSize(16);
  fill(0);
 noStroke();
 text('Total mujeres muertas = 2,470', 65,95); 
pop();
  }
  else if (mujerBtn==true && year=="2014M" )
  {
  image(imagenMM2014,0,0,400,500);
   push();
 textSize(16);
  fill(0);
 noStroke();
 text('Total mujeres muertas = 2,043', 65,95); 
pop();
  }
  
  if(hombreBtn==true && year=="2010H" )
  {
  image(imagenMH2010,0,0,400,500);
     push();
  stroke(50,50,155);
fill(255,0,0);
ellipse(140,460,9,9);     
ellipse(120,440,9,9);
ellipse(100,420,9,9);
ellipse(80,400,9,9);
      
ellipse(80,460,9,9);
ellipse(60,440,9,9);
ellipse(40,420,9,9);
pop();
    push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total hombres muertos = 4,866', 65,95); 
  
pop();  


  } 
  else if (hombreBtn==true && year=="2011H" )
  {
  image(imagenMH2011,0,0,400,500);
  push();
 stroke(50,50,155);
fill(255,0,0);
  
ellipse(140,480,9,9);     
ellipse(100,480,9,9);
      
ellipse(140,460,9,9);     
ellipse(120,440,9,9);
ellipse(100,420,9,9);
ellipse(80,400,9,9);
      
ellipse(80,460,9,9);
ellipse(60,440,9,9);
ellipse(40,420,9,9);
pop();
    
push();
noStroke();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total hombres muertos = 4,528', 65,95); 
  
pop();  

  }
  else if (hombreBtn==true && year=="2012H" )
  {
  image(imagenMH2012,0,0,400,500);
    push();
 stroke(50,50,155);
fill(255,0,0);
  
ellipse(270,390,9,9);                            
ellipse(300,390,9,9);
pop();

    push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total hombres muertos = 3,574', 65,95); 
 pop();  

  }
  else if (hombreBtn==true && year=="2013H" )
  {
  image(imagenMH2013,0,0,400,500);
    
   push();
  stroke(50,50,155);
fill(255,0,0);
                            
ellipse(270,390,9,9);                            
ellipse(300,390,9,9);
ellipse(330,390,9,9);
ellipse(360,390,9,9);
  
ellipse(270,410,9,9);
ellipse(300,410,9,9);
ellipse(330,410,9,9);
ellipse(360,410,9,9);                           
pop();

    push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total hombres muertos = 3,182', 65,95); 
pop();  

  }
  else if (hombreBtn==true && year=="2014H" )
  {
  image(imagenMH2014,0,0,400,500);
    push();
  stroke(50,50,155);
fill(255,0,0);
                            
                           
ellipse(300,390,9,9);
ellipse(330,390,9,9);
ellipse(300,410,9,9);
ellipse(330,410,9,9);
pop(); 
    
push();
  noStroke();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total hombres muertos = 2,473', 65,95); 
  
pop();  

  }
  
  if (bebeBtn==true && year=="2010N" )
  {
  image(imagenMN2010,0,0,400,500);
  push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total niños muertos = 232', 65,95); 
 pop(); 
  }
  
 else if (bebeBtn==true && year=="2011N" )
  {
  image(imagenMN2011,0,0,400,500);
  push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total niños muertos  = 184', 65,95); 
 pop(); 
  }
  
   else if (bebeBtn==true && year=="2012N" )
  {
  image(imagenMN2012,0,0,400,500);
  push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total niños muertos = 176', 65,95); 
 pop(); 
  }

   else if (bebeBtn==true && year=="2013N" )
  {
  image(imagenMN2013,0,0,400,500);
  push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total niños muertos = 177', 65,95); 
 pop(); 
  }
  
 else if (bebeBtn==true && year=="2014N" )
  {
  image(imagenMN2014,0,0,400,500);
  push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total niños muertos = 178', 65,95); 
 pop(); 
  }
}

function b (){
 if (reinicioBtn==true){ 
   image(intro,0,0,400,500);
}}
   


function reset(){
   createCanvas(400, 600);

  
   image(intro, 0,0,400,500);
  textSize(16);
   fill(150,50,30);
  text('Poblacion infectada con VIH en Colombia',60,40)
   noStroke();
  fill(200,130,80,100);
  rect(0,498,400,50);
  dibujar();
  
}
function dibujar()
{ 
  fill(0);
  noStroke();
  if(frameCount >= 100 && frameCount < 500)
  {
    
  text('A partir de las siguientes visualizaciones,se',30,270);
    
text('representará la cantidad total de personas ',30,295);   

 text('infectadas con VIH en Colombia, así como el ',30,320);  
text('porcentaje de mujeres, hombres y niños ', 30,345);
text('de los años 2010-2014.',30,370);
    
  //miAudio1.play();    
   } 
  
  if(frameCount >= 500 && frameCount < 1000)
  {
    
   text('También se mostrará la cantidad de personas que ',30,420);
    
 text('mueren al año debido al SIDA.  ',30,445);
         
}
  
// estos framecount lo que hacen es un xoom de la imagen 
  
  if(frameCount >= 1000 && frameCount < 1005)
  {
    
    image(intro, 0,0,410,510);
    fill(200,130,80,100);
  rect(0,498,400,50);
    }
 if(frameCount >= 1005 && frameCount < 1010)
 {
    
   image(intro, 0,0,420,520);
   fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1010 && frameCount < 1015)
   {
    
    image(intro, 0,0,430,530);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
  if(frameCount >= 1015 && frameCount < 1020){
    
   image(intro, 0,0,440,540);
    fill(200,130,80,100);
  rect(0,498,400,50);
   }
  
   if(frameCount >= 1020 && frameCount < 1025)
   {
    
    image(intro, 0,0,450,550);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
   if(frameCount >= 1025 && frameCount < 1030)
   {
    
    image(intro, 0,0,460,560);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1030 && frameCount < 1035)
   {
    
    image(intro, 0,0,470,570);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1035 && frameCount < 1040){
    
    image(intro, 0,0,480,580);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1040 && frameCount < 1045)
   {
    
    image(intro, 0,0,490,590);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
  
   if(frameCount >= 1045 && frameCount < 1050)
   {
    
    image(intro, 0,0,500,600);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1050 && frameCount < 1055)
   {
    
    image(intro, 0,0,510,610);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
   if(frameCount >= 1055 && frameCount < 1060)
   {
    
    image(intro, 0,0,520,620);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
  
  
   if(frameCount >= 1060 && frameCount < 1065)
   {
    
    image(intro, 0,0,530,630);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1065 && frameCount < 1070)
   {
    
    image(intro, 0,0,540,640);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1070 && frameCount < 1075)
   {
    
    image(intro, 0,0,550,650);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1075 && frameCount < 1080)
   {
    
    image(intro, 0,0,560,660);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1080 && frameCount < 1085)
   {
    
    image(intro, 0,0,570,670);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1085 && frameCount < 1090)
   {
    
    image(intro, 0,0,580,680);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
   if(frameCount >= 1090 && frameCount < 1095)
   {
    
    image(intro, 0,0,590,690);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
  
   if(frameCount >= 1095 && frameCount < 1100)
   {
    
    image(intro, 0,0,600,700);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1100 && frameCount < 1105)
   {
    
    image(intro, 0,0,610,710);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1105 && frameCount < 1110)
   {
    
    image(intro, 0,0,620,720);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1110 && frameCount < 1115)
   {
    
    image(intro, 0,0,630,730);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
    if(frameCount >= 1115 && frameCount < 1120)
    {
    
    image(intro, 0,0,640,740);
      fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1120 && frameCount < 1125)
   {
    
    image(intro, 0,0,650,750);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1125 && frameCount < 1130)
   {
    
    image(intro, 0,0,660,760);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1130 && frameCount < 1135)
   {
    
    image(intro, 0,0,670,770);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1135 && frameCount < 1140)
   {
    
    image(intro, 0,0,680,780);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1140 && frameCount < 1145)
   {
    
    image(intro, 0,0,690,790);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1145 && frameCount < 1150)
   {
    
    image(intro, 0,0,700,800);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1150 && frameCount < 1155)
   {
    
    image(intro, 0,0,710,810);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1155 && frameCount < 1160)
   {
    
    image(intro, 0,0,720,820);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1160 && frameCount < 1165)
   {
    
    image(intro, 0,0,730,830);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1165 && frameCount < 1170)
   {
    
    image(intro, 0,0,740,840);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1170 && frameCount < 1175){
    
    image(intro, 0,0,750,850);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1175 && frameCount < 1180){
    
    image(intro, 0,0,760,860);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1180 && frameCount < 1185){
    
    image(intro, 0,0,770,870);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
  
  
   if(frameCount >= 1185 && frameCount < 1190){
    
    image(intro, 0,0,780,880);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1190 && frameCount < 1195){
    
    image(intro, 0,0,790,890);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1195 && frameCount < 1200){
    
    image(intro, 0,0,800,900);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
  if(frameCount >= 1200 && frameCount < 1205){
    
    image(intro, 0,0,810,910);
    fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
   if(frameCount >= 1205 && frameCount < 1210){
    
    image(intro, 0,0,820,920);
     fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
  if(frameCount >= 1210 && frameCount < 1215){
    
    image(intro, 0,0,830,930);
    fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
  if(frameCount >= 1215 && frameCount < 1220){
    
    image(intro, 0,0,840,940);
    fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
  if(frameCount >= 1220 && frameCount < 1225){
    
    image(intro, 0,0,850,950);
    fill(200,130,80,100);
  rect(0,498,400,50);
    }
  
  if(frameCount >= 1225 && frameCount < 1500){
    
    image(intro, 0,0,850,950);
    textSize(16);
    fill(150,50,30);
    text(' Caucasia,Antioquia', 130,40);
    text('Población = 123,304',130,60);
    fill(200,130,80,100);
  rect(0,498,400,50);
    
 
  
 
    }
  
  if(frameCount >= 1500 && frameCount < 1900){
    
    image(intro, 0,0,850,950);
     textSize(16);
    fill(150,50,30);
    text(' Caucasia,Antioquia', 130,40);
    text('Población = 123,304',130,60);
    text('Población colombiana infectada con VIH',70,90);
    text('122,980-124,447',150,110);
      
noStroke();
    fill(200,130,80,100);
  rect(0,498,400,50);
    
  }
  
  
   if(frameCount >= 1900 && frameCount < 2010){ 
    image(mujeres,0,0,400,500);
     fill(255);
    rect(0,500,400,100);
    
   }
     
   if(frameCount >= 2010 && frameCount < 2300){ 
     image(mujeres,0,0,400,500);
     fill(255);
    rect(0,500,400,100);
     textSize(18);
     fill(255);
     rect(205,180,145,60);
    fill(0);
    text('Estadio El Campín',200,200);
    text(' 36,343 personas',200,230);
   }
  
  
  if(frameCount >= 2300 && frameCount < 2320){
     image(mujeres,0,0,400,500);
     fill(255);
    rect(0,500,400,100);
     textSize(18);
    //cuadrado de fondo estadio campin
     rect(205,180,145,60);
    //cuadrado de fondo estadio Rocha
      rect(10,379,150,55);
      rect(157,380,30,20);
    
    fill(0);
     text('Estadio El Campín',200,200);
    text(' 36,343 personas',200,230);
    textSize(14);
    text('Estadio Jorge Torres Rocha',15,400);
    text('3,500 personas',35,420);
  }
  
if(frameCount >= 2320 && frameCount < 2500){
  
image(mujeres,0,0,400,500);
     fill(255);
    rect(0,500,400,100);
     textSize(18);
    //cuadrado de fondo estadio campin
     rect(205,180,145,60);
    //cuadrado de fondo estadio Rocha
    rect(10,379,150,55);
    rect(157,380,30,20);
    
    fill(0);
     text('Estadio El Campín',200,200);
    text(' 36,343 personas',200,230);
    textSize(14);
    text('Estadio Jorge Torres Rocha',15,400);
    text('3,500 personas',35,420);

} 
  
//if(frameCount >= 2500 && frameCount < 2520){  
  //estos son los botones interactivos 
//image(mujeres,0,0,400,500);
  
  //noStroke();
    //fill(200,130,80,100);
  //rect(0,498,400,50);
//}
  
if(frameCount >= 2500 && frameCount < 2620){  
  //estos son los botones interactivos 
image(mujeres,0,0,400,500);
   push();
    fill(0);
  text('Los botones de colores representan a ', 150,140);
  text('los niños, las mujeres y los hombres ',150,160);
text(' respectivamente. Al oprimir cada botón, ',150,180);
  text('estos te llevarán a la plataforma ',150,200);
  text('de interacción con sus',150,220);
  text('respectivas estadisticas.',150,240);
    pop();
   noStroke();
    fill(200,130,80,100);
  rect(0,498,400,50);
}
    
  if(frameCount >= 2620 && frameCount < 3000){  
   
  //estos son los botones interactivos 
image(mujeres,0,0,400,500);
  
  noStroke();
    fill(200,130,80,100);
  rect(0,498,400,50);
  push();
    fill(0);
  text('Los botones de colores representan a ', 150,140);
  text('los niños, las mujeres y los hombres ',150,160);
text(' respectivamente. Al oprimir cada botón, ',150,180);
  text('estos te llevarán a la plataforma ',150,200);
  text('de interacción con sus',150,220);
  text('respectivas estadisticas.',150,240);
  
    
  text( ' La barra de los años nos muestra un porcentaje de', 40,350);
    
  text('los niños, mujeres y hombres infectados por año y', 40,370);
  text( 'el botón de "muertos"  funciona  después de elegir ',40,390);
  text('un año en la barra café. Este botón nos muestra el', 40,410);
  text('porcentaje de personas muertas por Sida en el año', 40, 430);
  text('elegido previamente.',40,450);  
   pop();
    
  }
if(frameCount >= 3000 && frameCount < 3010){ 
  
    //estos son los botones interactivos 
image(mujeres,0,0,400,500);
  
  noStroke();
    fill(200,130,80,100);
  rect(0,498,400,50);
   push();
    fill(0);
  text('Los botones de colores representan a ', 150,140);
  text('los niños, las mujeres y los hombres ',150,160);
text(' respectivamente. Al oprimir cada botón, ',150,180);
  text('estos te llevarán a la plataforma ',150,200);
  text('de interacción con sus',150,220);
  text('respectivas estadisticas.',150,240);
    
  text( ' La barra de los años nos muestra un porcentaje de', 40,350);
    
  text('los niños, mujeres y hombres infectados por año y', 40,370);
  text( 'el botón de "muertos"  funciona  después de elegir ',40,390);
  text('un año en la barra café. Este botón nos muestra el', 40,410);
  text('porcentaje de personas muertas por Sida en el año', 40, 430);
  text('elegido previamente.',40,450);  
   pop();
  
    //botones personas
  noFill();
  noStroke();
  strokeWeight(1);
 fill(190,70,70);
 rect(posXrec1,posYrec1,anchoRec1,altoRec1);
 fill(50,50,255);  
 rect(posXrec,posYrec,anchoRec,altoRec);
fill(255,255,50);
 rect(posXrecb,posYrecb,anchoRecb,altoRecb);
  
  button = createButton("Muertos");
	button.position(235, 515);
	button.mousePressed(a);    
  
  button2 = createButton("Reinicio");
  button2.position(10, 10);
 button2.mousePressed(b); 

    
}
}


function draw() 
{
  
  dibujar();


if(mouseIsPressed==true)
{
   
   
    //BotÛn mujer
    if(mouseX>posXrec1 
    && mouseX< posXrec1 + anchoRec1
    && mouseY> posYrec1
    && mouseY< posYrec1 +altoRec1)
    {
      
      mujerBtn=true;
     textSize(14); 
  image(mujeres, 0,0,400,500);
  fill(150,50,30);
  text(' Mujeres infectadas con VIH', 100,30);
      
      textSize(10);
  text('Capacidad estadio El CampÌn: 36,343',100,55);
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
 text('2010',30,540);
 text('2014',190,540);
      
 //borrador
  noFill();
 stroke(0);
rect(posXrec2,posYrec2,anchoRec2,altoRec2);     

 
  
}
 
  
 //botÛn 2010
  if(mouseX>posXrec3 
    && mouseX< posXrec3 + anchoRec3
    && mouseY> posYrec3
    && mouseY< posYrec3 +altoRec3)
  {
    
    
    if(mujerBtn==true)
    {
      year="2010M";
    image(mujeres, 0,0,400,500); 
  stroke(255,0,0);
   fill(200,150,100);
    


  
//esta elipse equivale a 300
  push();
  stroke(50,50,155);
fill(150,150,255);
ellipse(110,450,9,9);
  pop();
  

  push();
fill(0);
noStroke();
text('=   300',100,50);
pop(); 

  
//bolita de 300  
push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
 pop();
      push();
 textSize(16);
  fill(0);
 noStroke();
 text('Total mujeres infectadas = 41,102', 65,95); 
pop();
}
    
    
      
    else if (hombreBtn==true)
    {
    image(hombres, 0,0,400,500); 
  year="2010H";
//esta elipse equivale a 300
  push();
  stroke(50,50,155);
fill(150,150,255);
ellipse(140,460,9,9);     
ellipse(120,440,9,9);
ellipse(100,420,9,9);
ellipse(80,400,9,9);
      
ellipse(80,460,9,9);
ellipse(60,440,9,9);
ellipse(40,420,9,9);

  pop();
  

  
  push();
fill(0);
noStroke();
text('=   300',100,50);
pop(); 
      

  
//bolita de 300  
push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9);
pop();
      
 push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total hombres infectados = 78,475', 65,95); 
  
pop();  

  }
    
else if (bebeBtn==true)
    {
 year="2010N";
   image(imagenN2010,0,0,400,500);
 
      
  push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total niños infectados = 3,533', 65,95); 
  
pop();  

  }
 
  } 
  //boton 2011
  if(mouseX>posXrec4 
    && mouseX< posXrec4 + anchoRec4
    && mouseY> posYrec4
    && mouseY< posYrec4 +altoRec4)
  {
    if(mujerBtn==true)
    {
    
   image(mujeres, 0,0,400,500);
      
year="2011M";
  
  push();
fill(0);
noStroke();
text('=   300',100,50);
pop(); 

  push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
 pop();
      
 push();
 textSize(16);
  fill(0);
 noStroke();
text('Total mujeres infectadas = 39,976', 65,95); 
pop();
  
      //cierre condicional mujer
    }
    else if (hombreBtn==true)
    {
      year="2011H";
    image(hombres, 0,0,400,500);

  
  push();
fill(0);
noStroke();
text('=   300',100,50);
pop(); 
      

  
//bolita de 300  
push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
 pop();
  
    
stroke(255,0,0);
fill(200,150,100);  

  
//esta elipse equivale a 300
  push();
 stroke(50,50,155);
fill(150,150,255);
      
    
ellipse(140,480,9,9);     
ellipse(100,480,9,9);
      
ellipse(140,460,9,9);     
ellipse(120,440,9,9);
ellipse(100,420,9,9);
ellipse(80,400,9,9);
      
ellipse(80,460,9,9);
ellipse(60,440,9,9);
ellipse(40,420,9,9);
pop();
      
push();      
 fill(255);
  rect(60,70,253,40);
pop();
      
push();      
  textSize(16);
  fill(0);
 noStroke();
 text('Total hombres infectados = 78,921', 65,95); 
pop();
      

      
   
    
    }
    
    else if (bebeBtn==true)
    {

 year="2011N";
  image(imagenN2011,0,0,400,500);
      
  push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total niños infectados = 3,296', 65,95); 
  pop();
     
  }
  
  }
  

 
  
//boton 2012
   if(mouseX>posXrec5 
    && mouseX< posXrec5 + anchoRec5
    && mouseY> posYrec5
    && mouseY< posYrec5 +altoRec5)
   {
     if(mujerBtn==true)
     {
       
    
     year="2012M";
     image(imagen2012, 0,2,400,500);


push(); 
fill(0);
noStroke();
text('=   300',100,50);
pop();    

//bolita de 300  
push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9);
pop();
       

  
   push();
 textSize(16);
  fill(0);
 noStroke();
 text('Total mujeres infectadas = 39,022', 65,95);
 pop();
       

     
      
     }//if mujer
      else if (hombreBtn==true)
      {
      
     //stroke(255,0,0);
   //fill(200,150,100);
        year="2012H";
     image(imagenH2012, 0,0,400,500);

        
push();        
fill(0);
noStroke();
text('=   300',100,50);
pop();
        


  
//bolita de 300  
push(); 
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
pop();
        
push();
 stroke(50,50,155);
fill(150,150,255);
  
ellipse(270,390,9,9);                            
ellipse(300,390,9,9);
pop();
        
  push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total hombres infectados = 80,338', 65,95); 
 pop();
        
 
}
else if (bebeBtn==true)
    {
 year="2012N";
  image(imagenN2012,0,-2,400,500);

   push();   
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total niños infectados = 2,965', 65,95); 
 pop(); 

      
  }

    
}
 
 
 //boton 2013
  if(mouseX>posXrec6 
    && mouseX< posXrec6 + anchoRec6
    && mouseY> posYrec6
    && mouseY< posYrec6 +altoRec6)
  
  {
  
    if(mujerBtn==true){image(imagen2013, 0,1,400,500);
  
  year="2013M";

push();                       
fill(0);
noStroke();
text('=   300',100,50);
pop();
                       
push(); 
//bolita de 300  
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
pop();
                       
 push();
textSize(16);
  fill(0);
 noStroke();
 text('Total mujeres infectadas = 38,164', 65,95); 
 pop();
                       
                       
    stroke(255,0,0);
   fill(200,150,100);
     
      
  }else if(hombreBtn==true){image(imagenH2012, 0,0,400,500);
 
  year="2013H";

                            
fill(0);
noStroke();

text('=   300',100,50);

//bolita de 300  
push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
pop();
                          
 push();
stroke(50,50,155);
fill(150,150,255);
                            
ellipse(270,390,9,9);                            
ellipse(300,390,9,9);
ellipse(330,390,9,9);
ellipse(360,390,9,9);
  
ellipse(270,410,9,9);
ellipse(300,410,9,9);
ellipse(330,410,9,9);
ellipse(360,410,9,9);                           
pop(); 

push();
fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total hombres infectados = 82,113', 65,95); 
 pop();
                            
                              
  }
    
    else if (bebeBtn==true)
    {

 year="2013N";
  image(imagenN2013,1.5,0,400,500);

      
  push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total niños infectados = 2,677', 65,95); 
  pop();
      
 
      
  }

    
  }
  //boton 2014
  if(mouseX>posXrec7 
    && mouseX< posXrec7 + anchoRec7
    && mouseY> posYrec7
    && mouseY< posYrec7 +altoRec7){
    
    if(mujerBtn==true){ image(imagen2014, 1.9,1.9,400,500);
                       

  year="2014M";

push();                       
fill(0);
noStroke();
text('=   300',100,50);
pop();

                       

  
//bolita de 300  
push(); 
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
pop();
                       
 push();

 textSize(16);
  fill(0);
 noStroke();
 text('Total mujeres infectadas = 37,885', 65,95);
  pop();
                       
stroke(255,0,0);
fill(200,150,100);
     
           
  }else if(hombreBtn==true){ image(imagenH2014,0,0,400,500);
    
year="2014H";
fill(0);
noStroke();
text('=   300',100,50);
 

  
//bolita de 300  
push();
stroke(50,50,155);
fill(150,150,255);
ellipse(80,45,9,9)
 pop(); 
                            
  push();
                            
stroke(50,50,155);
fill(150,150,255);
                            
                           
ellipse(300,390,9,9);
ellipse(330,390,9,9);
ellipse(300,410,9,9);
ellipse(330,410,9,9);
pop(); 
                            
 push();                         
 fill(255);
  rect(60,70,253,40);
 pop();
 
 push();
 textSize(16);
  fill(0);
 noStroke();
 text('Total hombres infectados = 84,404', 65,95); 
pop();
                            
 
  }


 else if (bebeBtn==true)
    {
 year="2014N";
  image(imagenN2014,1.5,0,400,500);

      
  push();
  fill(255);
  rect(60,70,253,40);
 textSize(16);
  fill(0);
 noStroke();
 text('Total niños infectados = 2,358', 65,95); 
 pop(); 
      

      
  }  

  }
  
  

   //BotÛn hombre
    if(mouseX>posXrec 
    && mouseX< posXrec + anchoRec
    && mouseY> posYrec
    && mouseY< posYrec +altoRec)
    {
      hombreBtn=true;
      mujerBtn=false;
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
  text('2010',30,540);
 text('2014',190,540);
 
  fill(150,50,30);
  text(' Hombres infectados con VIH', 100,25);
      
 fill(255);
rect(100,45,200,30);  
textSize(10);
fill(150,50,30);
  text('Capacidad estadio El CampÌn: 36,343',100,45);
  text('Capacidad estadio Jorge Torres Rocha: 3,500',100,60);
   

 }
  
//BotÛn bebe
       if(mouseX>posXrecb 
    && mouseX< posXrecb + anchoRecb
    && mouseY> posYrecb
    && mouseY< posYrecb +altoRecb) {
     hombreBtn=false;
      mujerBtn=false; 
      bebeBtn=true;
      
      image(imagenN2010,0,0,400,500);
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
  text('2010',30,540);
 text('2014',190,540);
      
 fill(150,50,30);
 text('Capacidad estadio Jorge Torres Rocha: 3,500',100,40);

  
    }
 
  
   //BotÛn atras
    if(mouseX>posXrec2 
    && mouseX< posXrec2 + anchoRec2
    && mouseY> posYrec2
    && mouseY< posYrec2 +altoRec2)
    {
      
   image(intro, 0,0,400,500);
      reset();
      frameCount=-1;
   
}
}
  
}
 function mouseDragged(){
   return false;
 }
   


