/*
 UNINTUITIVE DRAWING - WITH LINES 

*/


function setup() {
    createCanvas(windowWidth, windowHeight);
    background('white');

    noFill();
    rect(0, 0, width, height);


    frameRate(20);
}

function draw() {
    

    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);


}