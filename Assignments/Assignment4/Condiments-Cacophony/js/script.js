"use strict";

/********************************************************************

Condiments Cacophony
Lilia Isabel Aguirre Lugo

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

// Variables
let jsonData;

let randomCondiment;
let randomCat;
let randomRoom;
let randomColor;
let randomGenre;

$(document).ready(setup);

// Setup
//
function setup() {
  // JSON
  // Added crayola.json and genres.json to data.json
  $.getJSON("assets/data/data.json")
    .done(dataLoaded)
    .fail(dataError);

  // Add the button
  addButton();
}

// Add Button
//
function addButton() {
  // Creates a div in the HTML
  let $button = $('<div></div>');
  // Makes and adds a class
  $button.addClass("condiment");
  // Adds a text in the button
  $button.text("New Condiment");
  // Add style
  $button.css('top', '400px')
    .css('left', '530px')
    .css('position', 'absolute')
    .css('background-color', '#94f6ff')
  // Creates the button
  $button.button();
  // Adds it to the body
  $('body').append($button);

  // Click function
  $button.on('click', handleNewCondiment);
}

// Data Loaded
//
function dataLoaded(data) {

  jsonData = data;
  // Random condiments are chosen
  randomCondiment = getRandomElement(data.condiments);

  // Random cat is chosen
  randomCat = getRandomElement(data.cats);

  // Random room is chosen
  randomRoom = getRandomElement(data.rooms);

  // Random color chosen
  // random element grabbed from colors
  let colors = getRandomElement(data.colors);
  // a color is chosen from colors
  randomColor = colors.color;

  // Random music genre chosen
  randomGenre = getRandomElement(data.genres);

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

// Handle new condiment
//
function handleNewCondiment() {
  // Empty body and add a new button
  $('body').empty();
  addButton();

  // Add a new condiment description
  randomCondiment = getRandomElement(jsonData.condiments);
  randomCat = getRandomElement(jsonData.cats);
  randomRoom = getRandomElement(jsonData.rooms);
  let colors = getRandomElement(jsonData.colors);
  randomColor = colors.color;
  randomGenre = getRandomElement(jsonData.genres);
  // correct verb
  let verb = "is";
  if (randomCondiment.charAt(randomCondiment.lenght - 1) === "s") {
    verb = "are";
  }
  // correct article
  let article = "a"
  let vowels = ["A", "E", "I", "O", "U"];
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
