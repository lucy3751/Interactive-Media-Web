/* 

CLASS - https://www.youtube.com/watch?v=JN0u2oW3RA0&ab_channel=xinxin

1. create a class 
2. declare a global variable to store the instance
3. create a new instance in setup

*/


// STORE THE CURSOR IMAGES
var firstCursorImage;
var xeroxImage;
var windowsImage;
var appleOldImage;
var appleNewImage;


// STORE CLASS OBJECT INSTANCES
var firstCursor;
var xerox;
var windows;
var appleOld;
var appleNew;

var middleCircle;
var middleCircleDiameter = 200;


// STORE COLORS

//apple black, apple grey, windows red, windows blue, windows green, windows yellow
var allColors = ['black', '#A3AAAE', '#FE4526', '#01A5ED', '#71BB1E', '#FEB71F'];
var windowsColors = ['#FE4526', '#01A5ED', '#71BB1E', '#FEB71F'];
var appleColors = ['black', '#A3AAAE'];
var textColor;
var bgColor;
var currentColor;

//STORE CURSOR STATES
var cursorState;
var allCursors = ['default', 'none'];

// STORE BOOLEANS
var middleCircleExist = false;
var blackoutCalled = false;



// STORE FONT - https://p5js.org/reference/#/p5/loadFont
var myFont;


// STORE CURSORS MOVING INCREMENTS/SPEED
var i = 0;
var speed = -30;


// SETTING A REFERENCE POINT TO STOP THE CURSORS MOVING UP
var referencePoint;







// LOAD CURSOR IMAGES INTO THE VARIABLES
function preload() {
    //cursor images
    firstCursorImage = loadImage('assets/firstCursor.png');
    xeroxImage = loadImage('assets/xerox.png');
    windowsImage = loadImage('assets/windows.png');
    appleOldImage = loadImage('assets/appleOld.png');
    appleNewImage = loadImage('assets/appleNewNoShadow.png');

    //font
    myFont = loadFont('assets/Inconsolata-SemiBold.ttf');
}



function setup() {

    referencePoint = {
        x: 0,
        y: height + 200,
        diameter: 50
    }

    cursorState = allCursors[0];


    createCanvas(windowWidth, windowHeight);

    bgColor = random(allColors);


    /*
    CLASSES
    -create the new instance in the setup function
    -"new" creates a instance of the object (sort of like an instance of the components (which is the class)?)
    */

    firstCursor = new firstCursorClass();
    xerox = new xeroxClass();
    windows = new windowsClass();
    appleOld = new appleOldClass();
    appleNew = new appleNewClass();

    middleCircle = new middleCircleClass();
}

function draw() {

    //RESET CURSOR BACK TO DEFAULT AFTER HOVERING OVER OBJECTS
    cursor(cursorState);

    //CLEAR CANVAS
    background(bgColor);





    //use black for text if bg color is: 
    if (bgColor == allColors[2] || //red
        bgColor == allColors[4] || //green
        bgColor == allColors[5]) { //yellow

        textColor = 'black';

    } else { //use white for other bg color

        textColor = 'white';

    }



    push();
    translate(0, i);



    //update old apple cursor position when dragged
    appleOld.update();

    //hover effects of each cursor
    firstCursor.over();
    xerox.over();
    windows.over();
    appleOld.over();
    appleNew.over();

    //draw each cursor on canvas
    firstCursor.display();
    xerox.display();
    windows.display();
    appleOld.display();
    appleNew.display();
    pop();


    //if the xerox cursor object is clicked, summon the middle circle and instruction text
    if (xerox.clicked == true) {

        if (blackoutCalled != true) {
            //middle circle
            middleCircle.over();
            middleCircle.display();

            //text
            push();
            noStroke();
            fill(textColor);
            textFont(myFont);
            textSize(30);
            textAlign(CENTER, CENTER);
            text('Move your cursor inside the circle', width / 2, middleCircle.y - middleCircle.diameter + 30);
            pop();

        }
    }

    push();
    fill('black');
    ellipse(referencePoint.x, referencePoint.y, referencePoint.diameter);
    referencePoint.y = height + 200 + i;
    pop();




}


//////////////// MOUSE EVENTS //////////////////////

//long press in mouse - for dragging
function mousePressed() {

    appleOld.pressed();

}

//click - short press in mouse 
function mouseClicked() {
    firstCursor.pressed();
    xerox.pressed();
    windows.pressed();
    appleNew.pressed();

}

function mouseReleased() {
    //mouse released trigger on each cursor object
    // firstCursor.released();
    // xerox.released();
    // windows.released();
    appleOld.released();
    // appleNew.released();
}

function mouseMoved() {
    //if the middle circle exist
    if (middleCircleExist == true) {

        // if the cursor is moving inside the middle circle
        if (mouseX > middleCircle.x - middleCircle.diameter / 2 && mouseX < middleCircle.x + middleCircle.diameter / 2 &&
            mouseY > middleCircle.y - middleCircle.diameter / 2 && mouseY < middleCircle.y + middleCircle.diameter / 2) {

            i += speed

            // SETTING A REFERENCE POINT TO STOP THE CURSORS MOVING UP
            if (referencePoint.y + referencePoint.diameter / 2 <= 0) {
                speed = 0;

                //screen goes black when the cursors go away
                blackout();
            }
        }
    }
}




//////////////// CLASSES //////////////////////

class firstCursorClass { //class is like a template that generates objects

    //DECLARE PROPERTIES OF THE OBJECT ("this" refers to this class)
    constructor() {
        //appearance
        this.x = width / 3 - 10;
        this.y = 0;
        this.w = 439 / 10 / 2;
        this.h = 959 / 10 / 2;

        //states
        this.rollover = false; //mouse hovering the cursor object
        this.clicked = false; //mouse clicking the cursor object
    }

    // hover
    over() {
        if (mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }

    // draw cursor on canvas
    display() {

        if (this.clicked) { //when clicking the cursor object
            push();
            tint(255, 255, 255);
            image(firstCursorImage, this.x, this.y, this.w, this.h);//change color
            cursor('pointer');
            pop();


            //reload the page
            location.reload();
            this.clicked = false;//prevent reload function from calling again


        } else if (this.rollover) { //if mouse is on the cursor object
            push();
            tint(255, 255, 0);
            image(firstCursorImage, this.x, this.y, this.w, this.h);
            cursor('pointer');
            pop();
        } else { //default
            image(firstCursorImage, this.x, this.y, this.w, this.h);
        }
    }


    // clicking the cursor object
    pressed() {
        if (mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h) {
            this.clicked = true;
        }
    }

    // releasing the cursor object
    // released() {
    //     this.clicked = false;
    // }


}


class xeroxClass {

    constructor() {
        // appearance
        this.x = width - width / 2;
        this.y = height / 25;
        this.w = 424 / 8;
        this.h = 852 / 8;

        //states
        this.rollover = false; //mouse hovering the cursor object
        this.clicked = false; //mouse clicking the cursor object
    }

    // hover
    over() {
        if (mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }

    // draw cursor on canvas
    display() {

        if (this.clicked) { //when clicked on the cursor object
            push();
            tint(255, 255, 255);
            image(xeroxImage, this.x, this.y, this.w, this.h);//change color
            cursor('pointer');
            pop();
        } else if (this.rollover) { //if mouse is on the cursor object
            push();
            tint(255, 255, 0);
            image(xeroxImage, this.x, this.y, this.w, this.h);
            cursor('pointer');
            pop();
        } else { //default
            image(xeroxImage, this.x, this.y, this.w, this.h);
        }
    }


    // clicking the cursor object
    pressed() {
        if (mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h) {
            this.clicked = true;
            middleCircleExist = true;//summons the middle circle when clicked on this cursor object
        }
    }

    // releasing the cursor object
    // released() {
    //     this.clicked = false;
    // }


}

class windowsClass {

    constructor() {
        // appearance
        this.x = width - width / 5;
        this.y = height / 3.5;
        this.w = 404 / 2;
        this.h = 641 / 2;

        //states
        this.rollover = false; //mouse hovering the cursor object
        this.clicked = false; //mouse clicking the cursor object
    }

    // hover
    over() {
        if (mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }

    // draw cursor on canvas
    display() {

        if (this.clicked) { //when clicking the cursor object
            push();
            tint(255, 255, 255);
            image(windowsImage, this.x, this.y, this.w, this.h);//change color
            cursor('pointer');
            pop();

            //change background
            currentColor = bgColor;
            bgColor = random(windowsColors);

            while (bgColor == currentColor) {
                bgColor = random(windowsColors);
            }

            this.clicked = false; //prevent background from keep changing


        } else if (this.rollover) { //if mouse is on the cursor object
            push();
            tint(255, 255, 0);
            image(windowsImage, this.x, this.y, this.w, this.h);
            cursor('pointer');
            pop();
        } else { //default
            image(windowsImage, this.x, this.y, this.w, this.h);
        }
    }


    // clicking the cursor object
    pressed() {
        if (mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h) {
            this.clicked = true;
        }
    }

    // // releasing the cursor object
    // released() {
    //     this.clicked = false;
    // }

}

class appleOldClass {

    constructor() {
        // appearance
        this.x = width - width / 2;
        this.y = height / 25;
        this.w = 476 / 3;
        this.h = 686 / 3;

        //states
        this.rollover = false; //Is the mouse on the object (hover)?
        this.dragging = false; // Is the object being dragged?


    }


    // hover
    over() {
        if (mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h) {
            this.rollover = true;

        } else {
            this.rollover = false;
        }
    }

    // update location when user drags the cursor
    update() {
        if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }
    }


    // display on canvas, and hover states
    display() {

        if (this.dragging) { //when dragging the cursor object
            push();
            tint(255, 255, 255);
            image(appleOldImage, this.x, this.y, this.w, this.h);//change color
            cursor('move');
            pop();
        } else if (this.rollover) { //if mouse is on the cursor object
            push();
            tint(255, 255, 0);
            image(appleOldImage, this.x, this.y, this.w, this.h);
            cursor('move');
            pop();
        } else { //default
            image(appleOldImage, this.x, this.y, this.w, this.h);
        }

    }

    // clicking on the cursor object
    pressed() {
        if (mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h) {
            this.dragging = true;

            //this prevents the mouse from automatically snapping at the top left of the cursor object when dragging
            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
        }
    }

    // releasing the cursor object
    released() {
        this.dragging = false;
    }
}


class appleNewClass {

    constructor() {

        //appearance properties
        this.cursorImage = appleNewImage;
        this.x = -245 / 1.1;
        this.y = height / 3 - 270 / 1.1;
        this.w = 947 / 1.1;
        this.h = 1216 / 1.1;

        //hover area
        this.hitboxX = -245 / 1.1;
        this.hitboxY = (height / 3 - 270 / 1.1) + 300;
        this.hitboxW = (947 / 1.1) - 400;
        this.hitboxH = (1216 / 1.1) - 700;

        //states
        this.rollover = false; //mouse hovering the cursor object
        this.clicked = false; //mouse clicking the cursor object

    }

    // hover
    over() {
        if (mouseX > this.hitboxX && mouseX < this.hitboxX + this.hitboxW &&
            mouseY > this.hitboxY && mouseY < this.hitboxY + this.hitboxH) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }

    // draw cursor on canvas
    display() {

        if (this.clicked) { //when clicking the cursor object
            push();
            tint(255, 255, 255);
            image(appleNewImage, this.x, this.y, this.w, this.h);//change color
            cursor('pointer');
            pop();


            //change background
            currentColor = bgColor

            bgColor = random(appleColors);

            while (bgColor == currentColor) { //prevent random generating the current color
                bgColor = random(appleColors);
            }
            this.clicked = false; //prevent background from keep changing

        } else if (this.rollover) { //if mouse is on the cursor object
            push();
            tint(255, 255, 0);
            image(appleNewImage, this.x, this.y, this.w, this.h);
            cursor('pointer');
            pop();
        } else { //default
            image(appleNewImage, this.x, this.y, this.w, this.h);
        }
    }


    // clicking the cursor object
    pressed() {
        if (mouseX > this.hitboxX && mouseX < this.hitboxX + this.hitboxW &&
            mouseY > this.hitboxY && mouseY < this.hitboxY + this.hitboxH) {
            this.clicked = true;
        }
    }

    // // releasing the cursor object
    // released() {
    //     this.clicked = false;
    // }



}


class middleCircleClass {
    constructor() {
        // appearance
        this.diameter = middleCircleDiameter;
        this.x = width / 2;
        this.y = height / 2;

        //states
        this.rollover = false; //hover
    }


    // mouse is on the middle circle
    over() {
        if (mouseX > this.x - this.diameter / 2 && mouseX < this.x + this.diameter / 2 &&
            mouseY > this.y - this.diameter / 2 && mouseY < this.y + this.diameter / 2) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }

    // drawing the circle on the canvas
    display() {

        noFill();
        strokeWeight(3);

        if (this.rollover) { //if mouse is on the circle
            stroke(textColor);
        } else {
            stroke(textColor);
        }
        ellipse(this.x, this.y, this.diameter);

    }
}




//////////////// EFFECT FUNCTIONS  //////////////////////

//when user is spinning their cursor inside the middle circle
function falling() {
    i += speed
    print(i);

    if (i <= -729) {
        i = -729;
        print('STOP');
    }
}


//screen goes black when the cursors go away - alert then pops up
function blackout() {
    if (blackoutCalled == false) {
        bgColor = 'black';
        cursorState = allCursors[1];

        blackoutCalled = true;
        print('helllo')

        setTimeout(function () {
            if (alert('Where am I?')) { }
            else window.location.reload();
        }, 5000);
    }
}



