"use strict";

/********************************************************************

Raving Redactionist Redux
Lilia Isabel Aguirre Lugo

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
// Start the program
$(document).ready(setup);

// Variables
const INTERVAL_LENGHT = 500;
const PERCENTAGE = 0.1;
let $spans;

// Setup
//
function setup() {
  // Variable
  $spans = $('span');
  // Set time interval that updates the spans
  setInterval(update, INTERVAL_LENGHT);
  // Set .on() function to make the
  // clicking effect function
  $spans.on('click', spanClicked);

}
// Update
//
function update() {
  // All the spans will be updated
  $spans.each(updateSpan);
}

// Update Span
//
function updateSpan() {
  // Variable for random number
  let num = Math.random();
  // If the probability is less than 10%
  // then the redacted text will be revealed
  if (num < PERCENTAGE) {
    $(this).removeClass("redacted");
    $(this).addClass("revealed");
  }
}

// Span Clicked
//
function spanClicked() {
  // When the spans are clicked
  // the text gets redacted
  $(this).addClass("redacted");
  $(this).removeClass("revealed");
}
