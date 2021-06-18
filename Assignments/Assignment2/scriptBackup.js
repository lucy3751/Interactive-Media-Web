// CURSORS
var firstCursor;
var xerox;
var windows;
var appleOld;
var appleNew;
var ipad;

function preload() {
    firstCursor = loadImage('assets/firstCursor.png');
    xerox = loadImage('assets/xerox.png');
    windows = loadImage('assets/windows.png');
    appleOld = loadImage('assets/appleOld.png');
    appleNew = loadImage('assets/appleNew.png');
    ipad = loadImage('assets/ipad.png');

    reference = loadImage('reference.png');
}



function setup() {
    createCanvas(windowWidth, windowHeight);

    background('grey');

    noFill();
    rect(0, 0, width, height);

    // image(reference, 0, 0, width, height);

    //APPLE NEW
    ellipse(0, height / 3, 50);
    image(appleNew, -245 / 1.1, height / 3 - 245 / 1.1, 947 / 1.1, 1216 / 1.1);


    //FIRST CURSOR
    ellipse(width / 5, 0, 50);
    image(firstCursor, width / 5 - 10, 0, 439 / 10 / 2, 959 / 10 / 2);

    //XEROX
    ellipse(width / 5 * 2.25, height / 25, 50);
    image(xerox, width / 5 * 2.25, height / 25, 424 / 8, 852 / 8);

    //APPLE OLD
    ellipse(width - width / 3, height / 10, 50);
    image(appleOld, width - width / 3, height / 10, 476 / 3, 686 / 3);

    //WINDOWS
    ellipse(width - width / 6, height / 3.5, 50);
    image(windows, width - width / 6, height / 3.5, 404 / 2, 641 / 2);


    //MOVE CURSOR BOUNDARY
    noStroke();
    fill('grey');
    ellipse(width / 2, height / 2, 150);

}

function draw() {
    // image(appleNew, mouseX, mouseY, 40 * scale, 40 * scale);
}



