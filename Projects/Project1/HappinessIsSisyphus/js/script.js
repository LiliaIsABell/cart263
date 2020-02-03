"use strict";

/********************************************************************

Happiness Is Sisyphus
Lilia Isabel Aguirre Lugo

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
// Variables
// Ghosts
let $ghost1;
let $ghost2;
let $ghost3;
let $ghost4;
let $ghost5;
let $ghost6;
let $ghost7;
// Squares for the meter
let $square1;
let $square2;
let $square3;
let $square4;
let $square5;
let $square6;
let $square7;
// Current square
let currentSquare = 1;



// Start program
$(document).ready(setup);

// Setup
//
function setup() {
  // Values for variables
  $ghost1 = $('#ghost1');
  $ghost2 = $('#ghost2');
  $ghost3 = $('#ghost3');
  $ghost4 = $('#ghost4');
  $ghost5 = $('#ghost5');
  $ghost6 = $('#ghost6');
  $ghost7 = $('#ghost7');
  $square1 = $('.square1');
  $square2 = $('.square2');
  $square3 = $('.square3');
  $square4 = $('.square4');
  $square5 = $('.square5');
  $square6 = $('.square6');
  $square7 = $('.square7');


  // Ghosts are draggable
  $ghost1.draggable();
  $ghost2.draggable();
  $ghost3.draggable();
  $ghost4.draggable();
  $ghost5.draggable();
  $ghost6.draggable();
  $ghost7.draggable();

  // The squares are dropable
  $square1.droppable({
    drop: ghostCollected
  });
  $square2.droppable({
    drop: ghostCollected
  });
  $square3.droppable({
    drop: ghostCollected
  });
  $square4.droppable({
    drop: ghostCollected
  });
  $square5.droppable({
    drop: ghostCollected
  });
  $square6.droppable({
    drop: ghostCollected
  });
  $square7.droppable({
    drop: ghostCollected
  });

}

// Ghost Collected
//
function ghostCollected(event, ui) {
  // This variable allows the
  // squares to be counted
  let meter = ".square" + currentSquare;
  // When a ghost is dropped, the bottom
  // square will be colored and with
  // each ghost it will go upward
  $(meter).addClass('collected');
  currentSquare += 1;
  // The ghost will be removed
  ui.draggable.remove();
}
