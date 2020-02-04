"use strict";

/********************************************************************

Happiness Is Sisyphus
Lilia Isabel Aguirre Lugo

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
// Variables

let $ghosts;
// Squares for the ghost meter
let $square1;
let $square2;
let $square3;
let $square4;
let $square5;
let $square6;
let $square7;
let $square8;
// Current square
let currentSquare = 0;
// Sounds
const eerieSound = new Audio("assets/sounds/errie_sound.wav");
const captured = new Audio("assets/sounds/captured.wav");

// Start program
$(document).ready(setup);

// Setup
//
function setup() {
  // Values
  $ghosts = $(".ghost");
  $square1 = $('.square1');
  $square2 = $('.square2');
  $square3 = $('.square3');
  $square4 = $('.square4');
  $square5 = $('.square5');
  $square6 = $('.square6');
  $square7 = $('.square7');
  $square8 = $('.square8');

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
  $square8.droppable({
    drop: ghostCollected
  });

  // This allows the ghost to reset
  $ghosts.each(resetGhost);

  // This is the message that is presented
  // in the begining
  startMessage();

}

// Start message
//
function startMessage() {
  $("#dialog1").dialog({
    modal: true,
    buttons: {
      Ok: function() {
        $(this).dialog("close");
        // Sound starts when OK is pressed
        eerieSound.loop = true;
        eerieSound.play();
      }
    }
  });
}

// Escaped ghost dialog
//
function escapedGhostDialog() {
  $("#dialog2").dialog({
    modal: true,
    buttons: {
      Ok: function() {
        $(this).dialog("close");
      }
    }
  });
}

// Ghost Collected
//
function ghostCollected(event, ui) {
  // This variable allows the
  // squares to be counted
  currentSquare += 1;
  let meter = ".square" + currentSquare;
  // When a ghost is dropped, the bottom
  // square will be colored and with
  // each ghost it will go upward
  $(meter).addClass('collected');
  console.log(currentSquare);
  // The ghost will be removed
  ui.draggable.remove();
  // Sound plays when a ghost is captured
  captured.play();
  // When 7 ghosts are collected,
  // everything will reset
  if (currentSquare === 7) {
    reset();
    // This dialogue box will appear
    // each time everything resets
    escapedGhostDialog();

  }
}

// Reset
//
function reset() {
  // Meter returns to zero
  currentSquare = 0;
  $(".square").removeClass('collected');
  // Loop to bring back the ghosts
  for (let i = 1; i < 9; i++) {
    let ghostNum = "ghost" + i;
    // Bring back the ghost at the begining of the body
    $("body").prepend('<img class="' + ghostNum + ' ghost" src="assets/images/ghost_green.png" alt="ghost" height="120"></img>');
  }
  // Random ghost positioning
  $(".ghost").each(function(index, singleGhost) {
    $(singleGhost).draggable();
    $(singleGhost).css("position", "absolute");
    let leftPos = Math.random() * 1000 + 100;
    let topPos = Math.random() * 500 + 20;
    $(singleGhost).css("left", leftPos + "px");
    $(singleGhost).css("top", topPos + "px");
  })
}

// Reset Ghost
//
function resetGhost(index, singleGhost) {
  $(singleGhost).css("position", "absolute");
  let leftPos = Math.random() * 1000 + 100;
  let topPos = Math.random() * 500 + 20;
  $(singleGhost).css("left", leftPos + "px");
  $(singleGhost).css("top", topPos + "px");
  $(singleGhost).draggable();
}
