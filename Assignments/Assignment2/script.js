// CLASS - https://www.youtube.com/watch?v=JN0u2oW3RA0&ab_channel=xinxin


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


// STORE CLASS OBJECTS

/*
1. create a class 
2. declare a global variable to store the instance
3. create a new instance in setup

*/
let appleNew1;


// LOAD CURSOR IMAGES INTO THE VARIABLES
function preload() {
    firstCursorImage = loadImage('assets/firstCursor.png');
    xeroxImage = loadImage('assets/xerox.png');
    windowsImage = loadImage('assets/windows.png');
    appleOldImage = loadImage('assets/appleOld.png');
    appleNewImage = loadImage('assets/appleNewNoShadow.png');
    appleNewHover = loadImage('assets/appleNewHover.png');
    appleNewClicked = loadImage('assets/appleNewClicked.png');

    reference = loadImage('reference.png');
}



function setup() {
    createCanvas(windowWidth, windowHeight);



    /*
    -create the new instance in the setup
    -"new" creates a instance of the object (sort of like an instance of the components (which is the class)?)
    */
    appleNew1 = new appleNewClass();




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

    // appleNew = {
    //     cursorImage: appleNewImage,
    //     cursorWidth: -245 / 1.1,
    //     cursorHeight: height / 3 - 245 / 1.1,
    //     cursorX: 947 / 1.1,
    //     cursorY: 1216 / 1.1
    // }


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
    // image(appleNew.cursorImage, appleNew.cursorWidth, appleNew.cursorHeight, appleNew.cursorX, appleNew.cursorY);


    appleNew1.mouseHover();
    appleNew1.display();




    pop();

    //MIDDLE CIRCLE
    noFill();
    strokeWeight(11);
    stroke(middleCircle.color);
    ellipse(width / 2, height / 2, middleCircle.diameter);


}

function mousePressed(){
    appleNew1.pressed();
}

function mousePressed(){
    appleNew1.released();
}


function mouseMoved() {

    // if the cursor is moving inside the middle circle
    if (mouseX < middleCircle.boundaryEndX &&
        mouseX > middleCircle.boundaryStartX &&
        mouseY < middleCircle.boundaryEndY &&
        mouseY > middleCircle.boundaryStartY) {

        i += speed
        print(i);

        if (i <= -729) {
            i = -729;
            print('STOP');
        }


    }

}





/*
P5.JS CLASS

class Name {

    constructor(){

        -every class has a constructor
        -this gives a class to create the object later on
        -format is similiar to a function

        -declare all the variables you want the class template to have


    }



}



*/



class appleNewClass { //class is like a template that generates objects

    //DECLARE PROPERTIES OF THE OBJECT ("this" refers to this class)
    constructor() {

        //appearance properties
        this.cursorImage = appleNewImage;
        this.x = -245 / 1.1;
        this.y = height / 3 - 270 / 1.1;
        this.w = 947 / 1.1;
        this.h = 1216 / 1.1;


        //hover 
        this.hover = false;
        this.hitboxX = -245 / 1.1;;
        this.hitboxY = (height / 3 - 270 / 1.1) + 300;
        this.hitboxW = (947 / 1.1) - 400;
        this.hitboxH = (1216 / 1.1) - 700;

        //click
        this.clicked = false;

    }

    // DRAWS THE CURSOR ON THE CANVAS
    display() {

        // image(this.cursorImage, this.w, this.h, this.x, this.y);

        noFill();
        rect(this.hitboxX, this.hitboxY, this.hitboxW, this.hitboxH);



        if (this.hover == true) {
            image(appleNewHover, this.x, this.y, this.w, this.h);
        }else if (this.clicked == true){
            image(appleNewClicked, this.x, this.y, this.w, this.h);
        }
         else {
            image(this.cursorImage, this.x, this.y, this.w, this.h);
        } 

    }


    //HOVER 
    mouseHover() {
        if (mouseX > this.hitboxX && mouseX < this.hitboxX + this.hitboxW &&
            mouseY > this.hitboxY && mouseY < this.hitboxY + this.hitboxH) {
            this.hover = true;
        } else {
            this.hover = false;
        }
    }

    //CLICK
    pressed(){
        if (mouseX > this.hitboxX && mouseX < this.hitboxX + this.hitboxW &&
            mouseY > this.hitboxY && mouseY < this.hitboxY + this.hitboxH) {
            this.clicked = true;
        } else {
            this.clicked = false;
        }
    }

    released(){
        this.clicked = false;
    }



}

function test(){
    print('INSERT');
}



