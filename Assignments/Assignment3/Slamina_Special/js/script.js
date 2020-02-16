"use strict";

/********************************************************************

Slamina Special
Lilia Isabel Aguirre Lugo

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
// Variables and Constants

// correct answer
let correctAnimal;
// possible answers
let answers = [];
// score
let $correctAnimals = 0;
let animalsGuessed;
// number of options
const NUM_OPTIONS = 4;


let commands = {
  'i give up': quit
}

// Animal options
let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];


// Start program
$(document).ready(setup);

// Setup
//
function setup() {

  if (annyang) {

    annyang.addCommands(commands);

    annyang.start();
  }
  // Shows new animal buttons
  newRound();

  // Allows the span to change
  animalsGuessed = $('#score');
}

// Add Button
//
function addButton(label) {
  // Creates a div in the HTML
  let $button = $('<div></div>');
  // Makes and adds a class
  $button.addClass("guess");
  // Adds a text in the button
  $button.text(label);
  // Creates the button
  $button.button();
  // Adds it to the body
  $('body').append($button);

  // Click function
  $button.on('click', handleGuess);
}

// Say Backwards
//
function sayBackwards(text) {
  // Turns the text backwards
  let backwardsText = text.split('').reverse().join('');
  // changes the rate and pitch of the
  // responsive voice randomly
  let options = {
    rate: Math.random(),
    pitch: Math.random(),
  };
  // The voice speaks
  responsiveVoice.speak(backwardsText, "UK English Male", options);
}

// newRound
//
function newRound() {
  // Answers array is empty
  answers = [];
  // A loop is made to choose 4 random animals
  // to be displayed
  for (let i = 0; i < NUM_OPTIONS; i++) {
    // creates potential answers and
    let answer = animals[Math.floor(Math.random() * animals.length)];
    // turns them into buttons
    addButton(answer);
    // The potential answers are
    // pushed into the answers array
    answers.push(answer);
  }
  // Out of the 4, one is chosen to be the correct answer
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
  // That is the animal that the voice says
  sayBackwards(correctAnimal);
}

// Handle Guess
//
function handleGuess() {
  // If the correct animal is clicked
  if ($(this).text() === correctAnimal) {
    // all the options are removed
    $(".guess").remove();
    // the score increases
    $correctAnimals += 1;
    // the span for the score changes numbers
    // to display the score
    animalsGuessed.text($correctAnimals);

    // and news ones are set up after
    // an interval of time
    setTimeout(newRound, 1000);
  }
  // if the wrong one is clicked
  else {
    // the score returns to 0
    $correctAnimals = 0;
    // the box shakes
    $(this).effect('shake');
    // the span for the score changes back
    // to zero
    animalsGuessed.text($correctAnimals);

    // the voice repeats itself
    sayBackwards();
  }
}

function quit() {

  let correctAnswer = $('correctAnimal');

  // When the words "i give up" are spoken
  if (correctAnswer.addClass('highlight')) {
    // the score returns to 0
    $correctAnimals = 0;
    // the span for the score changes back
    // to zero
    animalsGuessed.text($correctAnimals);
  };
  console.log('working');
}
