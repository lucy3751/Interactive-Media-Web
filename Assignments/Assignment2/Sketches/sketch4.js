/*
 UNINTUITIVE DRAWING 

*/


function setup() {
    createCanvas(windowWidth, windowHeight);

    noFill();
    rect(0, 0, width, height);

    colorMode(HSB);
}



function draw() {
    noStroke();
    fill('red');
    ellipse(width - mouseX, height - mouseY, 30, 30);
}


function clearCanvas() {
    fill('white');
    rect(0, 0, width, height);
}