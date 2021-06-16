/*
    GLITCHING IMAGE WITH CURSOR

    -with the "DARKEST" blend mode on the photo, it can be a way to represent destruction, perhaps by climate change?

*/


var img;

function preload() {
    img = loadImage('assets/nature.jpg');
}


function setup() {

    createCanvas(windowWidth, windowHeight);
    background(img);
}

function draw() {

    var sourceWidth = 100;
    var sourceHeight = sourceWidth;

    var finalWidth = 100;
    var finalHeight = finalWidth;

    var increment = random(10);

    noFill();
    noStroke();
    rect(mouseX, mouseY, sourceWidth, sourceHeight);

    blendMode(DARKEST);

    /*
    BLEND MODE 
        -NORMAL --> glitch effect
        -DARKEST --> destruction?
        -LIGHTEST --> soft painting effect?
        
    */

    copy(mouseX, mouseY, sourceWidth, sourceHeight, mouseX, mouseY + increment, finalWidth, finalHeight);

}