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
  // Added crayola.json and genres.json to data.json
  $.getJSON("assets/data/data.json")
    .done(dataLoaded)
    .fail(dataError);
}

// Data Loaded
//
function dataLoaded(data) {

  // Random condiments are chosen
  let randomCondiment = getRandomElement(data.condiments);

  // Random cat is chosen
  let randomCat = getRandomElement(data.cats);

  // Random room is chosen
  let randomRoom = getRandomElement(data.rooms);

  // Random color chosen
  // random element grabbed from colors
  let colors = getRandomElement(data.colors);
  // a color is chosen from colors
  let randomColor = colors.color;

  // Random music genre chosen
  let randomGenre = getRandomElement(data.genres);

  // Uses correct verb
  let verb = "is";
  if (randomCondiment.charAt(randomCondiment.lenght - 1) === "s") {
    verb = "are";
  }

  // Uses correct indefinite articles
  let article = "a"
  let vowels = ["A", "E", "I", "O", "U"];
  // create loop to search for vowels
  for (let i = 0; i < vowels.length; i++) {
    if (randomColor.charAt(randomColor[0]) === vowels[i]) {
      article = "an";
    }
  }

  // Creates the description
  let condimentDescription = `${randomCondiment} ${verb} like ${article} ${randomColor} ${randomCat} ${randomRoom} playing ${randomGenre} music`;
  // Adds it to the body
  $('body').append(condimentDescription);
}

// Data error
// Shows when there is an error with JSON
function dataError(request, text, error) {
  console.error(error);
}

// Get random element
//
function getRandomElement(array) {
  // chooses random element from the array chosen
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
