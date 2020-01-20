"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

// Global variable for rotation
let rotation = 0;

// Window onload allows to set up a "canvas"
window.onload = setup;

// document.addEventListener() makes it that
// "keydown" actually works and is related
// to function rotate()
document.addEventListener("keydown", rotate);


// function set up
//
function setup() {

  // loop allows to create a black background
  // made of pixels
  for (let i = 0; i < 1000; i++) {

    // Create variable for pixels
    let pixel = document.createElement('div');
    // setAttribute links the pixel variable to
    // the class in the HTML
    pixel.setAttribute("class", "pixel");
    // Adds as a child
    document.body.appendChild(pixel);
    // addEventListener allows for something to happen
    // when the mouse hovers
    pixel.addEventListener("mouseover", paint);

  }
}


// function paint
//
function paint(e) {
  // e.target links variable pixel to addEventListener
  let pixel = e.target;
  // Pixels turn muticolor
  // Math.random() * 255 chooses a
  // random number between 0 and 255
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  // Apply random colors
  pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  // The pixels will disseappear after approx. 1000 milliseconds
  setTimeout(resetPixel, 1000, pixel);
}


// function resetPixel
//
function resetPixel(pixel) {
  // The reseted pixels will turn black
  pixel.style.backgroundColor = 'black';
}


// function rotate
//
function rotate(e) {
  // document.getElementsByClassName() takes all
  // of the pixel divs and apply them to the if
  // statement
  let pixels = document.getElementsByClassName("pixel");
  // When the right arrow is pressed
  if (e.keyCode === 39) {
    // all the pixels
    for (let i = 0; i < 1000; i++) {
      let pixel = pixels[i];
      // Will rotate 1 degre towards the right
      pixel.style.transform = `rotate(${rotation}deg`;
    }
    rotation += 1;
  }
  // When the left arrow is pressed
  else if (e.keyCode === 37) {
    // all the pixels
    for (let i = 0; i < 1000; i++) {
      let pixel = pixels[i];
      // Will rotate 1 degre towards the left
      pixel.style.transform = `rotate(${rotation}deg)`;
    }
    rotation -= 1;
  }
}
