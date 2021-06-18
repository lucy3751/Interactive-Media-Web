
/* 
KALEIDOSCOPE - https://p5js.org/examples/interaction-kaleidoscope.html#:~:text=A%20kaleidoscope%20is%20an%20optical,the%20help%20of%20the%20slider.

*/


// CURSORS
var firstCursor;
var xerox;
var windows;
var appleOld;
var appleNew;
var ipad;


// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
let symmetry = 4;   

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;


function preload() {
  firstCursor = loadImage('../assets/firstCursor.png');
  xerox = loadImage('../assets/xerox.png');
  windows = loadImage('../assets/windows.png');
  appleOld = loadImage('../assets/appleOld.png');
  appleNew = loadImage('../assets/appleNew.png');
  ipad = loadImage('../assets/ipad.png');

}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background('white');

  // Creating the save button for the file
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);

  // Creating the button for Full Screen
  fullscreenButton = createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);
}


function mousePressed(){
  clearScreen();
}


// Save File Function
function saveFile() {
  save('design.jpg');
}

// Clear Screen function
function clearScreen() {
  background('white');
}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 1.5;
    let pmy = pmouseY - height /1.5;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        image(appleNew, mx, my, pmx, pmy);
        push();
        scale(1, 1);
        image(appleNew, mx, my, pmx, pmy);
        pop();
      }
    }
  }
}


