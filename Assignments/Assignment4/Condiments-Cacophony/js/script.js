"use strict";

/********************************************************************

Condiments Cacophony
Lilia Isabel Aguirre Lugo

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

// Setup
//
function setup() {
// JSON
$.getJSON("assets/data/data.json")
.done(dataLoaded)
.fail(dataError);
}

// Data Loaded
//
function dataLoaded(data){

// Random condiments are chosen
let randomCondiment = getRandomElement(data.condiments);

// Uses correct verb
let verb = "is";
if (randomCondiment.charAt(randomCondiment.lenght - 1) === "s"){
  verb = "are"
}

// Random cat is chosen
let randomCat = getRandomElement(data.cats);

// Random room is chosen
let randomRoom = getRandomElement(data.rooms);

// Creates the description
let condimentDescription = `${randomCondiment} ${verb} like a ${randomCat} ${randomRoom}`;
// Adds it to the body
$('body').append(condimentDescription);
}

// Data error
// Shows when there is an error with JSON
function dataError(request, text, error){
console.error(error);
}

// Get random element
//
function getRandomElement(array){
// chooses random element from the array chosen
let element = array[Math.floor(Math.random()*array.length)];
return element;
}
