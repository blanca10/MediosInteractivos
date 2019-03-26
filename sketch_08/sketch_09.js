var tierraX=0
var tierraY=300

var cieloX=0
var cieloY=0

var mosquitosX=[];
var mosquitosY =[];
var cantmosquitos=5;
var direcmosquito=true


var helechosX=[];
var helechosY =[];
var canthelechos=5;


var helechos2X=[];
var helechos2Y =[];
var canthelechos2=5;


var helechos3X=[];
var helechos3Y =[];
var canthelechos3=5;


var arañaX=[];
var arañaY =[];
var cantaraña = 5;
var direcaraña=true


var gusanitoX=[];
var gusanitoY =[];
var cantgusanito=5;
var direcgusanito=true


var telarañaX=0
var telarañaY=0



var carnivoraX = [];
var carnivoraY = [];
var cantcarnivora = 5;



function setup() {
  createCanvas(500, 400);
  
  
  
  for (var i = 0; i < cantcarnivora; i = i + 1) {



        carnivoraX[i] = random(200, 500);

        carnivoraY[i] = random(300, 0);

}

  

for (var i=0;i < cantmosquitos; i =i+1){
  
    //aquí le estamos diciendo que los mosquitos se van a mover en x de 0
  //hasta el final de la pantalla y en Y solamente de 0 a 100 porque os mosquitos no vuelan 
  //en la tierra sino en la parte superior de la pantalla
      mosquitosX[i] = random(width);
      mosquitosY[i] = random(0,100);
    }
  
  //aquí estamos diciendo que los helechos van a moverse en la parte derecha de la pantalla
  // no se van a pasar de un rango entre 500 y 400 y en Y se van a mover a 
  //partir de 300 hasta llegar a 0 
  for (var i=0;i < canthelechos; i =i+1){
    
  helechosX[i] = random(500,400);
  helechosY[i] = random(300,0);
    
}
  
  for (var i=0;i < cantaraña; i =i+1){
    
    //como las arañas se mueven el la parte izq de la pantalla pusimos un 
    //rango de 0 a 100 y en Y, ellas comienzan a bajar a partir de 50 
    //hata 500
      arañaX[i] = random(0,100);
      arañaY[i] = random(50,500);
    }
  
  
   for (var i=0;i < cantgusanito; i =i+1){
    //como los gusanitos se mueven en la parte inferior de la pantalla, esto es en la tierra,
     // le pusimos que se movieran a lo largo de la pantalla pero en un rango de Y
     //de 300 a 400
      gusanitoX[i] = random(width);
      gusanitoY[i] = random(300,400);
     
    
    }
  
    for (var i=0;i < canthelechos2; i =i+1){
    
  helechos2X[i] = random(300,350);
  helechos2Y[i] = random(300,0);
    
}
  
   
  for (var i=0;i < canthelechos3; i =i+1){
    
  helechos3X[i] = random(150,100);
  helechos3Y[i] = random(300,0);
    
}
  }

function draw() {
  background(220);
  
  
  
  //variables del cielo
  fill(200,220,255);
  quad(cieloX,cieloY,cieloX+500,cieloY,cieloX+500,cieloY+300,cieloX,cieloY+300);
  
  
  //variables de la tierra
  noStroke();
  fill(180,150,100);
  quad(tierraX,tierraY,tierraX+500,tierraY,tierraX+500,tierraY+100,tierraX,tierraY+100);
  
  //estas son las variables de la telaraña
  noFill();
  stroke(0);
  ellipse(telarañaX,telarañaY,20,20);
  ellipse(telarañaX,telarañaY,40,40);
  ellipse(telarañaX,telarañaY,60,60);
  ellipse(telarañaX,telarañaY,80,80);
  ellipse(telarañaX,telarañaY,100,100);
  
  //variables planta carnivora
  for (var i = 0; i < cantcarnivora; i = i + 1) {

        fill(100, 255, 50);
noStroke();
        ellipse(carnivoraX[i], carnivoraY[i], 40, 20);


        stroke(100, 105, 50);

        quad(carnivoraX[i], carnivoraY[i] + 6, 200, 300);
}

//este for lo que va a hacer es que la planta carnivora persiga a los mosquitos  
  for(i=0;i<cantcarnivora;i++){
        
        if (mosquitosX[i] > carnivoraX[i])
        {

       carnivoraX[i] = carnivoraX[i] + random(0, 1);
        }
    
    if (mosquitosX[i] < carnivoraX[i])

    {

        carnivoraX[i] = carnivoraX[i] - random(1, 0);
     }

    if (mosquitosY[i] < carnivoraY[i])

    {
    carnivoraY[i] = carnivoraY[i] - random(0,2);

    }

    if (mosquitosY[i] > carnivoraY[i])

    {
     carnivoraY[i] = carnivoraY[i] + random(1);

    }
}
    
    
  
  // variables de los helechos
  
  //aquí estamos determianndo que i es =  0, que debe ser menor a la cantidad
  //que se estipuló arriba, esto es 5 y que aumente de a uno
   for (var i=0;i < canthelechos; i =i+1){
    fill(100,255,50);
     //en realidad i es una ellipse muy pequeñita de donde salen 3 quadrilateros que parecen el pasto
    ellipse(helechosX[i], helechosY[i],2,2);
    
 //aquí lo que se está estipulando es que los cuadrilateros, que en realidad se ven como pasto,
//comiencen en la posición de la ellipse  y terminen en
// el ultimo y penúltimo número
     stroke(10,155,10);
    quad(helechosX[i], helechosY[i],460,300);
    quad(helechosX[i],helechosY[i],480,300);
    quad(helechosX[i],helechosY[i],500,300);
   
     //aqui le estamos dando la orden de que los helechos se muevan hacia arribe con el signo -
     //en x ellos no se mueven porque no se mueven hacia los lados y de Y se mueven a una vel 
     //de 0.2
     helechosX[i]=helechosX[i] - random(0,0);
    helechosY[i]=helechosY[i] - random(0.2,0.2);
    
}
  //el mismo procedimiento se lleva a cabo para cada uno de los
  //helechos
   for (var i=0;i < canthelechos2; i =i+1){
    fill(200,255,200);
    ellipse(helechos2X[i], helechos2Y[i],2,2);
    
    // esto lo que hace es que se creen unos quad que empiecen en la posicion de las bolitas hasta 20,20
    //de x y de y
     stroke(10,155,10);
    quad(helechos2X[i], helechos2Y[i],300,350);
    quad(helechos2X[i],helechos2Y[i],340,350);
    quad(helechos2X[i],helechos2Y[i],360,350);
    
     helechos2X[i]=helechos2X[i] - random(0,0);
    helechos2Y[i]=helechos2Y[i] - random(0.2,0.2);
    
    
  }
  
  for (var i=0;i < canthelechos3; i =i+1){
    fill(100,255,50);
    ellipse(helechos3X[i], helechos3Y[i],2,2);
    
    // esto lo que hace es que se creen unos quad que empiecen en la posicion de las bolitas hasta 20,20
    //de x y de y
     stroke(10,155,10);
    quad(helechos3X[i], helechos3Y[i],60,350);
    quad(helechos3X[i],helechos3Y[i],80,350);
    quad(helechos3X[i],helechos3Y[i],100,350);
    
     helechos3X[i]=helechos3X[i] - random(0,0);
    helechos3Y[i]=helechos3Y[i] - random(0.1,0.1);
    
    
  }
  
  for (var i=0;i < cantmosquitos; i =i+1){
    stroke(10,90,10);
    
     fill(0);
    ellipse(mosquitosX[i],mosquitosY[i],18,10);
    ellipse(mosquitosX[i]+10,mosquitosY[i]-5,10,10);
    stroke(100);
    fill(255);
    ellipse(mosquitosX[i],mosquitosY[i]-10,10,10);
    ellipse(mosquitosX[i]-5,mosquitosY[i]-7,10,10);
    ellipse(mosquitosX[i]+10,mosquitosY[i]-6,3.5,3.5);
    
    mosquitosX[i]=mosquitosX[i] + random(1,0);
    mosquitosY[i]=mosquitosY[i] + random(-1,1);
 
    //estos if lo que hacen es que una vez que el mosquito llega al final de la pantalla se devuelvan
    
    if(mosquitosX[i] >= 700)
    {
    direcmosquito = false;
    }
    if(mosquitosX[i] <=0)
    {
    direcmosquito = true;
    } 
    
    if(direcmosquito==true){
    mosquitosX[i]=mosquitosX[i] + random(1,1);
    mosquitosY[i]=mosquitosY[i]+ random(-1,1);
    }
    else{
    mosquitosX[i]=mosquitosX[i] -random (1,1);
    mosquitosY[i]=mosquitosY[i] -random(-1,1);
    }
    
     
  }
 
   for (var i=0;i < cantaraña; i =i+1){
    stroke(10,90,10);
    
     fill(0);
    ellipse(arañaX[i],arañaY[i],18,18);
    quad(arañaX[i], arañaY[i],20,20);
     
    //patitas izquierdas
    ellipse(arañaX[i]-10,arañaY[i]-5,5,2);
     ellipse(arañaX[i]-10,arañaY[i],5,2);
    ellipse(arañaX[i]-10,arañaY[i]+5,5,2);
    
    //patitas derechas
   ellipse(arañaX[i]+10,arañaY[i]-5,5,2);
     ellipse(arañaX[i]+10,arañaY[i],5,2);
    ellipse(arañaX[i]+10,arañaY[i]+5,5,2);
    
    //ojos  blancos
    fill(255);
    ellipse(arañaX[i]-4,arañaY[i]-2,7,7);
    ellipse(arañaX[i]+4,arañaY[i]-2,7,7);
    //ojos  negros
    fill(0);
    ellipse(arañaX[i]-4,arañaY[i]-2,1,1);
    ellipse(arañaX[i]+4,arañaY[i]-2,1,1);

    
    arañaX[i]=arañaX[i] + random(0,0);
    arañaY[i]=arañaY[i] + random(0,0.5);
     
     
      if(arañaY[i] >= 550)
    {
    direcaraña = false;
    }
    if(arañaY[i] <=0)
    {
    direcaraña = true;
    } 
    
    if(direcaraña==true){
    arañaX[i]=arañaX[i] + random(0,0);
    arañaY[i]=arañaY[i]+ random(0.2,0);
    }
    else{
   arañaX[i]=arañaX[i] -random (0,0);
    arañaY[i]=arañaY[i] -random(0,1);
      
      }
  
      
      
    }
     
    

    
  for (var i=0;i < cantgusanito; i =i+1){
    stroke(10,90,10);
    
     fill(90,255,90);
    ellipse(gusanitoX[i]+13,gusanitoY[i]-5,18,18);
    fill(90,200,200);
    ellipse(gusanitoX[i], gusanitoY[i],15,15);
    fill(200,100,200);
    ellipse(gusanitoX[i]-15,gusanitoY[i],15,15);
   fill(90,200,200);
    ellipse(gusanitoX[i]-30,gusanitoY[i],15,15);
     fill(90,255,90);
    ellipse(gusanitoX[i]-40,gusanitoY[i]-5,8,8);
   fill(0);
    ellipse(gusanitoX[i]+14,gusanitoY[i]-5,5,5);
    
    gusanitoX[i]=gusanitoX[i] + random(0.2,0);
    gusanitoY[i]=gusanitoY[i] + random(0,0);
    
     
     //los siguientes if lo que hacen es que cuando el primer gusanito llega a la posicion de 700 en x 
     //se regresen todos los gusanos 
     if(gusanitoX[i] >= 700)
    {
    direcgusanito = false;
    }
    if(gusanitoX[i] <=0)
    {
    direcgusanito = true;
    } 
    
    if(direcgusanito==true){
    gusanitoX[i]=gusanitoX[i] + random(0.2,0);
    gusanitoY[i]=gusanitoY[i]+ random(0,0);
    }
    else{
    gusanitoX[i]=gusanitoX[i] +random (-1,0);
    gusanitoY[i]=gusanitoY[i] +random(0,0);
    }
    
     
  }
 //este if lo que hace es que si las arañitas están a una distancia de 
  //< 10 de los gusanitos, las arañas se hagan gorditas
  
 if(dist(arañaX[i],arañaY[i],gusanitoX[i],gusanitoY[i]) <10)
    {
    
    ellipse(arañaX[i],arañaY[i],22,22);
}
    
   } 
  
