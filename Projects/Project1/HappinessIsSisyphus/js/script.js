"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
// Variables
let $ghost;
let $square;


// Start program
$(document).ready(setup);

// Setup
//
function setup(){
$ghost = $('#ghost');
$square = $('.square');

// Ghost is draggable
$ghost.draggable();
// The squares are dropable
$square.droppable({
  drop: ghostCollected
});

}

// Ghost Collected
//
function ghostCollected(event,ui){
// When the ghost is dropped,
// the color of the squares change
$(this).addClass('collected');
ui.draggable.remove();
}
