status="";
function preload() {
    picture1=loadImage('almirah.jpg');
    picture2=loadImage('bed.jpg');
    picture3=loadImage('chair.jpg');
    picture4=loadImage('slippers.jpg');
    picture5=loadImage('tv.jpg');


}
function setup() {
  canvas=  createCanvas(500,350);
canvas.center();
objectdetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML="status=detecting object";
}

function draw() {
    image(picture1,0,0,500,350); 
    fill("red");
text("almirah",70,100);
noFill();
stroke("orange");
rect(100,100,350,250);

image(picture2,0,0,500,450); 
    fill("red");
text("bed",70,100);
noFill();
stroke("orange");
rect(100,100,350,250);

image(picture3,0,0,500,450); 
    fill("red");
text("chair",70,100);
noFill();
stroke("orange");
rect(100,100,350,250);

image(picture4,0,0,500,450); 
    fill("red");
text("slippers",70,100);
noFill();
stroke("orange");
rect(100,100,350,250);

image(picture5,0,0,500,450); 
    fill("red");
text("televison",70,100);
noFill();
stroke("orange");
rect(100,100,350,250);
}

function Almirah() {
  document.getElementById("almirah").src =("almirah.jpg");
}

function chair() {
  document.getElementById("chair").src =("chair.jpg");
}
function bed() {
  document.getElementById("bed").src =("bed.jpg");
}

function slippers() {
  document.getElementById("slippers").src =("slippers.jpg");
}

function televison() {
  document.getElementById("tv").src =("tv.jpg");
}
function modelloaded() {
    console.log ('modelloaded'); 
    status=true;
    objectdetector.detect(picture1,gotresult);
   }
   function gotresult(error,result) {
     if (error) {
       console.log(error);
     }
     else{
       console.log(result);
     }
   }