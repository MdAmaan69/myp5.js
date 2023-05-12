

function preload() {
  img =  loadImage  ("https://i.postimg.cc/CxLMcWhs/google.png");
} 

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(110, 250);
    // video = createCapture(VIDEO);
    //     video.hide();
}

function draw () {
   stroke(0, 128, 0);
    rect ( 100, 100, 400, 400);
    stroke(235, 91, 52);
    circle(100, 100, 20);
    // stroke(235, 91, 52);
    circle(500, 100,20);
    stroke(235, 91, 52);
    circle(500, 500, 20);
    stroke(235, 91, 52);
    circle(100, 500, 20);
    stroke(235, 91, 52);
   
        image(img, 180, 180, 200, 200);
        
}