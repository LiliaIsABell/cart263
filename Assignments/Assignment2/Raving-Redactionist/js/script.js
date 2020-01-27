"use strict";

/********************************************************************

Raving Redactionist Redux
Lilia Isabel Aguirre Lugo

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
// Start the program
$(document).ready(setup);


// Constants
const INTERVAL_LENGHT = 500;
const PERCENTAGE = 0.1;
// Spans
let $redacted;
let $secret;
let $found = 0;
// Secrets Status
let secretsFound;
let secretsTotal;

// Setup
//
function setup() {
  // Variables
  $redacted = $('.redacted');
  $secret = $('.secret');
  // This displays the secrets found
  secretsFound = $('#secretsFound')
  // .length allows to determine the
  // total amount of secrets present
  secretsTotal = $secret.length;

  // .text() allows to collect all the
  // information and put it in $secret
  $secret.text();

  // Set time interval that updates the spans
  setInterval(update, INTERVAL_LENGHT);

  // Set .on() function to make the
  // clicking effect function
  $redacted.on('click', spanClicked);

  // Set .on() function to make the
  // mouseover effect function
  $secret.on('mouseover', mouseOver)
}

// Update
//
function update() {
  // The class 'redacted' will be updated
  $redacted.each(updateSpan);
  // Each time a secret is found,
  // the score will update
  secretsFound.text($found);
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

// mouseOver
//
function mouseOver() {
  // When the mouse hovers over the
  // secret words, the words will be
  // highlighted
  if ($(this).addClass("found").off()) {
    // They are counted for the score
    $found += 1;
  }
}
