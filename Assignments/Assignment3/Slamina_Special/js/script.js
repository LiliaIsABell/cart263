"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

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


let correctAnimal;
let answers = [];
const NUM_OPTIONS = 4;

$(document).ready(setup);

function setup() {

newRound();


}

function addButton(label){
  let $button = $('<div></div>');
  $button.addClass("guess");
  $button.text(label);
  $button.button();
  $('body').append($button);

  $button.on('click', handleGuess);
}

function sayBackwards(text){
  let backwardsText = text.split('').reverse().join('');
  let options = { rate: Math.random(),
                  pitch: Math.random(),
                };
responsiveVoice.speak(backwardsText,"UK English Male",options);
}

function newRound(){
  answers = [];

  for ( let i = 0; i < NUM_OPTIONS; i++) {
    let answer = animals[Math.floor(Math.random()*animals.length)];
    addButton(answer);
    answers.push(answer);
  }
  correctAnimal = answers[Math.floor(Math.random()*answers.length)];
  sayBackwards(correctAnimal);
}

function handleGuess() {
if ($(this).text() === correctAnimal) {
$(".guess").remove();
setTimeout(newRound,1000);
}
else {
  $(this).effect('shake');
  sayBackwards();
}
}
