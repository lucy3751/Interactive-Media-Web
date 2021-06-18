// STORE OBJECTS

// cursors
var firstCursor;
var xerox;
var windows;
var appleOld;
var appleNew;

//middle circle
var middleCircle;
var middleCircleDiameter = 200;

//moving increment
var i = 0;
var speed = -0.5;



// STORE THE CURSOR IMAGES
var firstCursorImage;
var xeroxImage;
var windowsImage;
var appleOldImage;
var appleNewImage;




// LOAD CURSOR IMAGES INTO THE VARIABLES
function preload() {
    firstCursorImage = loadImage('assets/firstCursor.png');
    xeroxImage = loadImage('assets/xerox.png');
    windowsImage = loadImage('assets/windows.png');
    appleOldImage = loadImage('assets/appleOld.png');
    appleNewImage = loadImage('assets/appleNewNoShadow.png');

    reference = loadImage('reference.png');
}



function setup() {
    createCanvas(windowWidth, windowHeight);

    background('darkgrey');


    //OBJECTS

    //cursors
    firstCursor = {
        cursorImage: firstCursorImage,
        cursorWidth: width / 5 - 10,
        cursorHeight: 0,
        cursorX: 439 / 10 / 2,
        cursorY: 959 / 10 / 2
    }

    xerox = {
        cursorImage: xeroxImage,
        cursorWidth: width / 5 * 2.25,
        cursorHeight: height / 25,
        cursorX: 424 / 8,
        cursorY: 852 / 8
    }

    windows = {
        cursorImage: windowsImage,
        cursorWidth: -245 / 1.1,
        cursorHeight: height / 3 - 245 / 1.1,
        cursorX: 947 / 1.1,
        cursorY: 1216 / 1.1
    }

    appleOld = {
        cursorImage: appleOldImage,
        cursorWidth: width - width / 3,
        cursorHeight: height / 10,
        cursorX: 476 / 3,
        cursorY: 686 / 3
    }

    appleNew = {
        cursorImage: appleNewImage,
        cursorWidth: -245 / 1.1,
        cursorHeight: height / 3 - 245 / 1.1,
        cursorX: 947 / 1.1,
        cursorY: 1216 / 1.1
    }


    //middle circle
    middleCircle = {
        diameter: middleCircleDiameter,
        boundaryStartX: width / 2 - middleCircleDiameter / 2,
        boundaryEndX: width / 2 + middleCircleDiameter / 2,
        boundaryStartY: height / 2 - middleCircleDiameter / 2,
        boundaryEndY: height / 2 + middleCircleDiameter / 2,
        color: 'grey'
    }

    // REFERENCES OF WHERE TO PLACE THE CURSORS
    // noFill();
    // ellipse(0, height / 3, 50);
    // ellipse(width / 5, 0, 50);
    // ellipse(width / 5 * 2.25, height / 25, 50);
    // ellipse(width - width / 3, height / 10, 50);
    // ellipse(width - width / 6, height / 3.5, 50);

}

function draw() {

    //CLEAR CANVAS
    background('darkgrey');

    //CURSOR 'DRAWINGS'
    push();
    translate(0, -i);
    image(firstCursor.cursorImage, firstCursor.cursorWidth, firstCursor.cursorHeight, firstCursor.cursorX, firstCursor.cursorY);
    image(xerox.cursorImage, xerox.cursorWidth, xerox.cursorHeight, xerox.cursorX, xerox.cursorY);
    image(appleOld.cursorImage, appleOld.cursorWidth, appleOld.cursorHeight, appleOld.cursorX, appleOld.cursorY);
    image(windows.cursorImage, width - width / 6, height / 3.5, 404 / 2, 641 / 2);
    image(appleNew.cursorImage, appleNew.cursorWidth, appleNew.cursorHeight, appleNew.cursorX, appleNew.cursorY);
    pop();

    //MIDDLE CIRCLE
    noFill();
    strokeWeight(11);
    stroke(middleCircle.color);
    ellipse(width / 2, height / 2, middleCircle.diameter);

    

   
}



function mouseMoved() {

    // if the cursor is moving inside the middle circle
    if (mouseX < middleCircle.boundaryEndX &&
        mouseX > middleCircle.boundaryStartX &&
        mouseY < middleCircle.boundaryEndY &&
        mouseY > middleCircle.boundaryStartY) {

        i+=speed
        print(i);

        if(i <= -729){
            i=-729;
            print('STOP');
        }
        

    }

}






