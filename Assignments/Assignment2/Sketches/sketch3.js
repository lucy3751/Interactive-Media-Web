/*
    DRAWING WITH CURSOR

    -As the mouse move right, the cursor changes to a much newer cursor

    -Mouse also controls color:
        -move right, the brightness increase
        -move down - saturation increases

    -Move down - size of cursor increases

*/




// CURSORS
var firstCursor;
var xerox;
var windows;
var appleOld;
var appleNew;
var ipad;


//HSB VALUES
var h = 0;
var s = 0;
var b = 0;


function preload() {
    firstCursor = loadImage('assets/firstCursor.png');
    xerox = loadImage('assets/xerox.png');
    windows = loadImage('assets/windows.png');
    appleOld = loadImage('assets/appleOld.png');
    appleNew = loadImage('assets/appleNew.png');
    ipad = loadImage('assets/ipad.png');

}


function setup() {

    createCanvas(windowWidth, windowHeight);
    background('white');

    noFill();
    rect(0, 0, width, height);

    noCursor();
    colorMode(HSB);


}

function draw() {

    //VARIABLES FOR CURSOR CHANGE
    var cursorDirection = mouseX;
    var canvasDirection = width;
    var scale = mouseY/100;




    // USE MOUSE TO CONTROL COLOR - https://editor.p5js.org/aferriss/sketches/BJuQLbkcz
    h++;
    // reset h value
    if (h >= 360) {
        h = 0;
    }

    s = map(mouseY, 0, width, 0, 100);
    b = map(mouseX, 0, height, 0, 100);

    tint(h, s, b);

    console.log(h);



    // CURSOR CHANGE BASED ON LOCATION
    if (cursorDirection < canvasDirection / 6) {
        image(firstCursor, mouseX, mouseY, 20 * scale, 40 * scale);
    }
    else if (cursorDirection < canvasDirection / 6 * 2) {
        image(xerox, mouseX, mouseY, 20 * scale, 40 * scale);
    }
    else if (cursorDirection < canvasDirection / 6 * 3) {
        image(windows, mouseX, mouseY, 25 * scale, 40 * scale);
    }
    else if (cursorDirection < canvasDirection / 6 * 4) {
        image(appleOld, mouseX, mouseY, 30 * scale, 40 * scale);
    }
    else if (cursorDirection < canvasDirection / 6 * 5) {
        image(appleNew, mouseX, mouseY, 60 * scale, 80 * scale);
    }
    else if (cursorDirection < canvasDirection) {
        image(ipad, mouseX, mouseY, 40 * scale, 40 * scale);
    }




}

function clearCanvas() {
    fill('white')
    rect(0, 0, width, height)
}