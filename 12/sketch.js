var miFoto;
var tabla;

function preload(){
 
  miFoto = loadImage('mapa.jpeg');
 tabla= loadTable('tabla.csv','csv','header');
}
function setup() {
  createCanvas(1220,1020);
  tint(120);
  strokeWeight(2);
  image(miFoto,-50,-50,1220,1020);
  fill(255);
  stroke(255);
  ellipse(5,57,12,12);
  ellipse(40,32,12,12);
  line(5,57,40,32);
  ellipse(80,18,12,12);
  line(40,32,80,18);
  ellipse(120,58,12,12);
  line(80,18,120,58);
  ellipse(160,191,12,12);
  line(120,58,160,191);
  line(160,191,200,199);
  ellipse(200,199,12,12);
 line(200,199,240,210);
  ellipse(240,210,12,12);
  line(240,210,280,268);
  ellipse(280,268,12,12);
  line(280,268,320,323);
  ellipse(320,323,12,12);
  line(320,323,360,387);
  ellipse(360,387,12,12);
  line(360,387,400,423);
  ellipse(400,423,12,12);
  line(400,423,440,475);
  ellipse(440,475,12,12);
  line(440,475,480,522);
  ellipse(480,522,12,12);
  line(480,522,520,565);
  ellipse(520,565,12,12);
  line(520,565,560,607);
  ellipse(560,607,12,12);
  line(560,607,600,645);
  ellipse(600,645,12,12);
  line(600,645,640,681);
  ellipse(640,681,12,12);
  line(640,681,680,716);
  ellipse(680,716,12,12);
  line(680,716,720,747);
  ellipse(720,747,12,12);
  line(720,747,760,846);
  quad(0,827,1170,827,1170,835,0,835);
  ellipse(760,846,12,12);
  line(760,846,800,861);
  ellipse(800,861,12,12);
  line(800,861,840,882);
  ellipse(840,882,12,12);
  line(840,882,880,900);
  ellipse(880,900,12,12);
  line(880,900,920,916);
  ellipse(920,916,12,12);
  line(920,916,960,931);
  ellipse(960,931,12,12);
  line(960,931,1000,945);
  ellipse(1000,945,12,12);
  line(1000,945,1040,954);
  ellipse(1040,954,12,12);
  line(1040,954,1080,958);
  ellipse(1080,958,12,12);
  line(1080,958,1120,960);
  ellipse(1120,960,12,12);
  line(1120,960,1160,959);
  ellipse(1160,959,12,12);
  
  
  
   print(tabla.getString(10,0));
  
       }

function draw() {
 // background(220);
}