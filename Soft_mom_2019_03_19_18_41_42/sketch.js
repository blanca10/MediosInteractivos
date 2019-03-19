var miCancion;
var vol;

var miCancion2;
var vol2;
var miFoto;
var miFoto1;
var miFoto2;
var miFoto3;
var miFoto4;





function preload(){
  miCancion = loadSound('assets/takeonme.mp3');
  miCancion2 = loadSound('instru.mp3');
  miFoto = loadImage('takeonme.jpg');
  miFoto1 = loadImage('foto1.png');
  miFoto2 = loadImage('foto2.png');
  miFoto3 = loadImage('foto 3.png');
  miFoto4 = loadImage('foto 4.png');
}
  function setup() {
  
  frameRate=(50);
    
    
  miCancion.play();
  miCancion2.play();
  
  createCanvas(400,400);
  
 
  image(miFoto,0,0,400,400);
  
}



function draw() {
  
  //estos "ifs" me permiten cambiar la tinta de las
  //imagenes 
  
  if(frameCount >= 200 && frameCount < 300){
    tint(255,0,0);
      image(miFoto1,0,0,200,200);
  }
  
  if(frameCount >= 300 && frameCount < 400){
    tint(150,150,255);
    image(miFoto2,200,0,200,200);
  }
  
 if(frameCount >= 400 && frameCount < 500){
   tint(50,255,50);
   image(miFoto3,0,200,200,200);
   
 }
  
if(frameCount>=500 && frameCount<600){
    tint(255,255,0);
    image(miFoto4,200,200,200,200);
  }
 
if(frameCount >=600 && frameCount< 800){
  noTint();
  image(miFoto,0,0,400,400);
}
 
  if (frameCount >= 800 && frameCount < 900){
    tint(255,255,0);
    image(miFoto2,200,0,200,200);
  }
  
  if (frameCount >= 900 && frameCount <1000){
  tint(150,150,255);
  image(miFoto3,0,200,200,200);
  }
  
  if (frameCount >= 1000 && frameCount< 1100){
    tint(255,0,0);
    image(miFoto1,0,0,200,200);
  }
  
  if (frameCount >= 1100 && frameCount < 1200){
   tint(50,255,50);
  image(miFoto4,200,200,200,200);
      }
      
  if (frameCount >= 1200 && frameCount < 1500){
    noTint();
    image(miFoto,0,0,400,400);
  }
  
  if(frameCount >= 1500 && frameCount < 1600){

    tint(50,255,50);
    image(miFoto4,200,200,200,200);
  }
  
  if(frameCount >= 1600 && frameCount < 1700){
    
     tint(150,150,255);
  image(miFoto3,0,200,200,200);
  }
  
  if (frameCount >= 1700 && frameCount < 1800){
     tint(255,255,0);
    image(miFoto2,200,0,200,200);
  }
  
  if (frameCount >= 1800 && frameCount < 1900){
     tint(255,0,0);
    image(miFoto1,0,0,200,200);
  }
  
    
    
  //aquí le estamos haciendo un mapeo que hace posible que conforme el mouse
  //aumenta en x la velocidad de ambas canciones pase de 1 a
  //4 
  var speed = map(mouseX, 1, 400, 0, 2);
  speed = constrain(speed, 1, 4);
  miCancion.rate(speed);
  miCancion2.rate(speed);
  
  // este mapeo lo que hace es que la canción 1 que es 
  //la versióm original de "Take on me" sune más duro cuando
  //el mouse esté en la posición 0 de Y y vaya disminuyendo
  //conforme va aumentando la posición en Y

  
 vol = map(mouseY, 0, 400, 1.1, 0.0);
 miCancion.setVolume(vol);
 
  //este mapeo lo que hace es que la canción instrumental
  //suene más duro conforme vaya aumentando  la posición
  //de Y. Esto crea una relación inversa pues 
  //mientras la canción original va disminuyendo su volumen,
  // la otra va aumentando.
  
  vol2 = map(mouseY,0,400,0.0,1,1);
  miCancion2.setVolume(vol2);
  
 
  
  if(mouseIsPressed == true){
    //if (miCancion.isPlaying ()== true{
       
      //cuando presiono el mouse se pone en pausa
    
    //para que aumente un segundo hacia adelante cuando
    //presiono el mouse
    miCancion.pause();
    miCancion2.pause();
    }
  
  if(keyIsPressed == true){
    miCancion.play();
    miCancion2.play();
  }
  }
 

