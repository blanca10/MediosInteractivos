//aquí vamos a estipular los arreglos de cada animalito y una variable de cantidad 


//gusanitos
var gusanos = [];
var numGusanos = 5;

// mariquitas rojas
var mariquita = [];
var numMariquitas = 3;

// mariquitas naranjas
var mariquitos = [];
var numMariquitos = 3;

//florecitas
var plantas = [];
var numPlantas = 10;

//mosquitos
var mosquitos = [];
var numMosquitos = 5;

//arañitas
var arañas = [];
var numArañas = 6;

var x=0;


//esto es para que se cargue la imagen en la posición que nosotros determinemos 
function preload(){
  
  miFoto = loadImage('pasto.jpg');
  miCancion=loadSound('grito.mp3');
}



function setup() {
  createCanvas(600, 400);



  for (var i = 0; i < numGusanos; i++) {
    gusanos[i] = new Gusanito();
  }

for (var i = 0; i < numMariquitas; i++) {
    mariquita[i] = new Mariquita();
  }

   for (var i = 0; i < numMariquitos; i++) {
    mariquitos[i] = new Mariquitos();
  }

   for (var i = 0; i < numPlantas; i++) {
    plantas[i] = new Plantita();
  }

  for (var i = 0; i < numMosquitos; i++) {
    mosquitos[i] = new Mosquitos();
  }
  
   for (var i = 0; i < numArañas; i++) {
    arañas[i] = new Arañita();
  }
  }

function draw() {
  
  //la foto se pone en el background del draw porque si se deja como imagen en el setup no aparece a no ser que su quite el background del draw y si se quita el background, los animalitos van dejando un rastro. :(
  
  //la idea de este tint es que vaya amaneciendo 
tint(x/10, 2*x/40, 200,200);
  
  background(miFoto,0,0);
  

x = x+0.1*frameCount;
  
  
   for (var i = 0; i < numArañas; i++) {
    arañas[i].dibujarse();
    arañas[i].moverse();

  }

   for (var i = 0; i < numMosquitos; i++) {
    mosquitos[i].dibujarse();
   mosquitos[i].moverse();

  }
  for (var i = 0; i < numPlantas; i++) {
    plantas[i].dibujarse();
    plantas[i].moverse();

  }

  for (var i = 0; i < numMariquitas; i++) {
    mariquita[i].dibujarse();
    mariquita[i].moverse();

  }

   for (var i = 0; i < numMariquitos; i++) {
    mariquitos[i].dibujarse();
    mariquitos[i].moverse();

  }

  for (var i = 0; i < numGusanos; i++)
  {
    gusanos[i].dibujarse();
    gusanos[i].moverse();
   
  }

  //hacemos otro "for" parecido al que hicimos al principio  tanto para las mariquitas macho como para las mariquitas hembra para poder hacer que estas se puedan reproducir y también más adelante puedan comerse a otras especies
  
  for (var contadormariquitosL = 0; contadormariquitosL < numMariquitos; contadormariquitosL++)
  {
    if (mariquitos[contadormariquitosL].viva)
    {
    for (var contadormariquitasL =0; contadormariquitasL < numMariquitas; contadormariquitasL++)
    {
      if (mariquita[contadormariquitasL].viva)
    {
      
//hacemos una variable de ditancia (distreproduccion) en donde  ponemos los valores en "x" y en "y" tanto de las mariquitas como de los mariquitos.  
      
var distreproduccion = dist(mariquitos[contadormariquitosL].x, mariquitos[contadormariquitosL].y, mariquita[contadormariquitasL].x, mariquita[contadormariquitasL].y);

  //si la mariquitas machos y hembras se acercan a una dist de /8 tienen hijitos
      
       if (distreproduccion < mariquitos[contadormariquitosL].tamano/8)
       {
       {
         
//van a ir aumentando de a 1 hijito cada vez que se encuentren 
         
numMariquitas = numMariquitas+1;
mariquita[mariquita.length] = new Mariquita();
       }
             
numMariquitos = numMariquitos+1;
mariquitos[mariquitos.length] = new Mariquitos();
               
       }
    
//este for dice que las mariquitas comen gusanitos yumi yumi 
      
          for (var contagusanosL =0; contagusanosL < numGusanos; contagusanosL++)
          {
            if (gusanos[contagusanosL].viva)
            {
              
//se hace un var parecido al que hicimos para el de reproducción en donde se tiene en cuenta la posición de x y de y tanto de los mariquitos como de los gusanitos 
              
              var distgusanomuere = dist(mariquitos[contadormariquitosL].x, mariquitos[contadormariquitosL].y, gusanos[contagusanosL].x, gusanos[contagusanosL].y);
              
// si se acercan a una distancia de 1/2 del tamaño del mariquito, el gusanito muere :(
              
                if (distgusanomuere < mariquitos[contadormariquitosL].tamano/2) 
                {
                 gusanos[contagusanosL].morir();

                }
              
//mismo procedimiento para que las hembras se coman a los gusanos 
              
            var distGusanomuere = dist(mariquita[contadormariquitasL].x, mariquita[contadormariquitasL].y, gusanos[contagusanosL].x, gusanos[contagusanosL].y);
                if (distGusanomuere < mariquita[contadormariquitasL].tamano/2)
                {
                   gusanos[contagusanosL].morir();
                }
              
//este for hace que las plantas mueran cuando se encuentran con los gusanitos
              
              
              for (var contaplantasC =0; contaplantasC < numPlantas; contaplantasC++)
          {
            if (plantas[contaplantasC].viva)
            {
              
    var distmorirplanta = dist(plantas[contaplantasC].x, plantas[contaplantasC].y, gusanos[contagusanosL].x, gusanos[contagusanosL].y);
            
                if (distmorirplanta < plantas[contaplantasC].tamano/2) 
                {
                 plantas[contaplantasC].morir();

                }
            
              
}
}
}        
}
}
    }
    
      //este for lo que dice es que las mariquitas naranjas se van a comer a las arañitas 
      
    for (var contadorarañas =0; contadorarañas < numArañas; contadorarañas++)
    {
      if (arañas[contadorarañas].viva){
      
      var distarañasmueren = dist(mariquitos[contadormariquitosL].x, mariquitos[contadormariquitosL].y, arañas[contadorarañas].x, arañas[contadorarañas].y);

       if (distarañasmueren  < mariquitos[contadormariquitosL].tamano/2)
       {
         arañas[contadorarañas].morir();
         
       }
      }


//arañas comen deliciosos mosquitos
      
      for (var contadormosquitos =0; contadormosquitos < numMosquitos; contadormosquitos++){
        
      if (mosquitos[contadormosquitos].viva){
        
      
var distmosquitosmueren = dist(arañas[contadorarañas].x, arañas[contadorarañas].y, mosquitos[contadormosquitos].x, mosquitos[contadormosquitos].y);

       if (distmosquitosmueren  < arañas[contadorarañasL].tamano/2)
       {
         mosquitos[contadormosquitos].morir();
         
}
}
}
}
}
}
}


// familia gusanos hermosos
function Gusanito() {
  this.x = random(0, width);
  this.y = random(300, 400);
  
  this.viva = true;
  
  //recordemos que al usar arreglos también podemos guardar en nuestro "cajón" variables como la dirección o incluso el tamaño de una figurita. en este caso el gusano solo se mueve en x y solo necesitamos la direcc en x. 
  
  this.dirX = 1;
  

  this.dibujarse = function() {
    if (this.viva == true) {
      
      //parte estética del gusanito
      
      stroke(0);
 fill(90,255,90);
    ellipse(this.x+13,this.y-5,18,18);
    fill(90,200,200);
    ellipse(this.x, this.y,15,15);
    fill(200,100,200);
    ellipse(this.x-15,this.y,15,15);
   fill(90,200,200);
    ellipse(this.x-30,this.y,15,15);
     fill(90,255,90);
    ellipse(this.x-40,this.y-5,8,8);
   fill(0);
    ellipse(this.x+14,this.y-5,5,5);
    

 }
  }

  this.moverse = function() {
   
      
      //aquí se está usando el mismo método que se usó en la clase con Barragán (ejercicio pinguino). 
    
    this.x = this.x + (this.dirX*1);
      
    //aquí se le está dando la orden al bicho de que si su posición es  igual o mayor al ancho del canvas y si es menor o igual a cero entonces se convierte en -1. Si por ejemplo se omite la segunda parte del if (this.x<=0) entonces una vez que el bicho se convierta en menor a cero desaparecerá for ever. 
      
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      
    }
}



  this.morir = function() {
    this.viva = false;
  }
}


// Amigas Mariquitas
function Mariquita() {
  this.x = random(0, width);
  this.y = random(0, height);
  
  //tanto los mariquitos como las mariquitas necesitan una direccion en x y en y porque ellas no se mueven en linea recta sino que pasean por toda la pantalla 
  
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = 30;
   this.viva = true;


  this.dibujarse = function() {
    if (this.viva == true) {
fill(255,0,0);
ellipse(this.x, this.y, this.tamano, this.tamano);
      fill(0);
      ellipse(this.x,this.y-15,this.tamano-10,this.tamano-10);
      ellipse(this.x-6,this.y,this.tamano-22,this.tamano-22);
      ellipse(this.x+6,this.y,this.tamano-22,this.tamano-22);
      ellipse(this.x,this.y+10,this.tamano-22,this.tamano-22);
      fill(255);
      ellipse(this.x-6,this.y-20,this.tamano-25,this.tamano-25);
      ellipse(this.x+6,this.y-20,this.tamano-25,this.tamano-25);
      
    }

  }

  this.moverse = function() {
    
    //esta es exactamente la misma explicación del movimiento del gusanito. La explicación está arriba en Gusanito. 
    
     this.x = this.x + (this.dirX*2);
    
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
     }
    
    
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);
    }
    
    

    // esto hace que la mariquita vibre 
    this.x = this.x + (this.dirX*random(0, 2));
   this.y = this.y + (this.dirY*random(0, 2));
  }
  
  this.morir = function() {
    this.viva = false;
  }
}


// amigos Mariquitos
function Mariquitos() {
  this.x = random(0, width);
  this.y = random(0, height);
  
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = 30;
   this.viva = true;


  this.dibujarse = function() {
    fill(255,153,0);
ellipse(this.x, this.y, this.tamano, this.tamano);
     fill(0);
      ellipse(this.x,this.y-15,this.tamano-10,this.tamano-10);
      ellipse(this.x-6,this.y,this.tamano-22,this.tamano-22);
      ellipse(this.x+6,this.y,this.tamano-22,this.tamano-22);
      ellipse(this.x,this.y+10,this.tamano-22,this.tamano-22);
      fill(255);
      ellipse(this.x-6,this.y-20,this.tamano-25,this.tamano-25);
      ellipse(this.x+6,this.y-20,this.tamano-25,this.tamano-25);

  }

  this.moverse = function() 
  {
    if (this.x >= width || this.x <= 0)
    {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);
    }
    if (this.y >= width || this.y <= 0)
    {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);
    }

    this.x = this.x + (this.dirX*random(0, 2));
    this.y = this.y + (this.dirY*random(0, 2));
  }
  
   this.morir = function() {
    this.viva = false;
  }
}

// familia Florecitas
function Plantita() {
  this.x = random(0, width);
  this.y = random(300, 500);
  this.tamano = 20;
  this.viva = true;
  

  this.dibujarse = function() {
    if (this.viva == true) {
      fill(255,150,150);
      
    noStroke();  
ellipse(this.x,this.y, this.tamano,this.tamano);
ellipse(this.x-15,this.y, this.tamano,this.tamano);
ellipse(this.x-15,this.y+10, this.tamano,this.tamano);
ellipse(this.x,this.y+10, this.tamano,this.tamano);
fill(255,50,50);
ellipse(this.x-7,this.y+5, this.tamano,this.tamano);
    }
  }

  //las florecitas no tienen una dirección para moverse sino que ellas solo vibran en su lugar 
  
  this.moverse=function()
  {
     this.x =this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }

  this.morir = function() {
    this.viva = false;
  }
}

// familia mosquitos
function Mosquitos() {
  this.x = random(0, width);
  this.y = random(40, 100);
  this.dirX = 1;
 


  this.dibujarse = function() {
        
   stroke(10,90,10);
    
     fill(0);
    //cuerpo
    ellipse(this.x,this.y,28,20);
    //cabeza
    ellipse(this.x+10,this.y-8,15,15);
    stroke(100);
    //alas
    fill(255);
    ellipse(this.x-5,this.y-10,10,10);
    ellipse(this.x-10,this.y-7,10,10);
    //ojo
    ellipse(this.x+11,this.y-8,6,6);
    
   
  }

  this.moverse = function()
  {
    //este es exactamente el mismo ejemplo que se usó arriba con los gusanitos. La explicación está arriba. 
    
     this.x = this.x + (2 * this.dirX);
    
    
    if (this.x >= width || this.x <= 0)
    {
      this.dirX = - this.dirX;
    }
     
  }
}



              
// familia arañitas 
function Arañita() {
  this.x = random(0, width);
  this.y = random(0, height);
 
  //solo necesitamos la direcc en "y" porque ellas no se mueven en el eje de "x" 
  
  this.dirY = 1;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      fill(0);
      stroke(200);
    ellipse(this.x,this.y,18,18);
      //stroke(255);
    
    noStroke();
    //patitas izquierdas
    ellipse(this.x-10,this.y-5,5,2);
     ellipse(this.x-10,this.y,5,2);
    ellipse(this.x-10,this.y+5,5,2);
    
    //patitas derechas
   ellipse(this.x+10,this.y-5,5,2);
     ellipse(this.x+10,this.y,5,2);
    ellipse(this.x+10,this.y+5,5,2);
    
    //ojos  blancos
      stroke(0);
    fill(255);
    ellipse(this.x-4,this.y-2,7,7);
    ellipse(this.x+4,this.y-2,7,7);
    //ojos  negros
      stroke(255);
      stroke(0);
    fill(0);
    ellipse(this.x-4,this.y-2,1,1);
    ellipse(this.x+4,this.y-2,1,1);
      
       fill(255);
      noStroke();
    quad(this.x,this.y-10,this.x+2,this.y-10,this.x+2,this.y-500,this.x,this.y-500);

    }
  }
  
 this.moverse = function()
 
  {
   
   //exactamente mismo procedimiento de gusanitos y mosquitos. Explicación está arriba en gusanitos. 
   
   this.y = this.y + (1 * this.dirY);
   
   
    if (this.y >= height || this.y <= 0)
    {
      this.dirY = - this.dirY;
    }
     
  }


  this.morir = function() {
    this.viva = false;
    
    //cada vez que se muere una arañita suena un grito 
    
    miCancion.play();
    miCancion.rate(1.5);
  }
}

