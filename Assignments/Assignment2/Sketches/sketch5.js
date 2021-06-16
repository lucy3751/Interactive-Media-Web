var canvasWidth = 1000;
var canvasHeight = 1000;

/* 
GET THE SPEED OF THE MOUSE MOVING - PART 1 - FIND TIME DIFFERENCE

see the line of code about speed:
https://p5js.org/reference/#/p5/winMouseX
https://p5js.org/reference/#/p5/pwinMouseX


https://p5js.org/reference/#/p5/pmouseX


FIX THIS PART 
var time;
var time2;


setTimeout(function () {
    time2 = new Date();
    console.log(time2 - time);
}, 2000);
*/

function mouseMoved() {
    console.log("mouse moved");
    return false; //this makes the code stop calling the function when the mouse is not moving
}



function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background('white');

    noFill();
    rect(0, 0, canvasWidth, canvasHeight);


    frameRate(10);
}

function draw() {
    var speed;


    line(mouseX, mouseY, pmouseX, pmouseY);
    speed = abs(mouseX - pmouseX);
    // console.log(speed);

    // console.log(time);


}