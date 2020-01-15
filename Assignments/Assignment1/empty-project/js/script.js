"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


// Window onload allows to set up a "canvas"
window.onload = setup;


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
  // function paint
  //
  function paint(e) {
    // e.target links variable pixel to addEventListener
    let pixel = e.target;
    // Pixels turn white when moving
    pixel.style.backgroundColor = 'white';
    // The pixels will disseappear after approx. 1000 milliseconds
    setTimeout(resetPixel, 1000, pixel);
  }
  // function resetPixel
  //
  function resetPixel(pixel) {
    // The reseted pixels will turn black
    pixel.style.backgroundColor = 'black';
  }
}
