"use strict";

/********************************************************************

Something is Wrong on the Internet
Lilia Isabel Aguirre Lugo

This project is presented as an interactive story.
The short story is about a bored dog looking for something to do.
-There is a series of buttons that lead to different settings.
-But, they all lead to the same ending.

The reader then meets a mysterious voice.
-The voice reveals that the game is a setup.
-It asks the reader to move the cursor.
-The voice makes uncomfortable comments.
-At the end, the voice threatens  the reader.

*********************************************************************/

// Variables
// Choices throughout the story
let activities = ["go to the apple tree acre",
  "go to the lake"
];
let decisions = ["follow the butterfly",
  "take a nap",
  "follow the path"
];
let finalChoice = ["Through the Door",
  "Into the Hole"
];

// The options
let optionA;
let optionB;
let optionC;
let optionD;
let optionE;
let optionF;
let optionG;


// The text of the story that changes
let $storyText;

// Voice
let voice = 'UK English Male';
let voiceParameters = {
  pitch: 0.2,
  rate: 0.8,
  onstart: speechOn,
  onend: speechOff
};

let speaking = false;
let uncomfortableComments = ['that feels nice',
  "you're doing nicely",
  'oh yeah',
  'keep stroking, baby'
];


$(document).ready(setup);

// Set up
//
function setup() {
  // Spans allow for the text to change
  $storyText = $("#story");

  // These are the very first choices presented
  startingChoices();
}

// Add Button
//
function addButton(label) {
  // create div for button
  let $button = $("<div></div>");
  // add class for options
  $button.addClass("options");
  // add the options in text
  $button.text(label);
  // create button
  $button.button();
  // choose color for button
  $button.css("background-color", "#54d175")
  // append the button in the center
  $('center').append($button);
  // When a button is clicked,
  // the story moves on based on the choices
  $button.on('click', handleStoryChoices);

}

// Starting Choices
//
function startingChoices() {
  optionA = activities[0];
  optionB = activities[1];
  addButton(optionA);
  addButton(optionB);
}

// Handle Story Choices
//
function handleStoryChoices() {
  // Act 1
  // If option A is chosen,
  if ($(this).text() === optionA) {
    appleAcre();

    // Act 2
    // If option D is chosen,
  } else if ($(this).text() === optionD) {
    takesNap();
    // When the last button is pressed
  } else if ($(this).text() === optionF) {
    creepyInteraction();
  }

  // If option E is chosen,
  else if ($(this).text() === optionE) {
    followsPath();

    // When the last button is pressed
  } else if ($(this).text() === optionG) {
    creepyInteraction();
  }

  // Act 1
  // If option B is chosen,
  else if ($(this).text() === optionB) {
    lake();

    // Act 2
    // If option C is chosen,
  } else if ($(this).text() === optionC) {
    followsButterfly();

    // When the last button is pressed
  } else if ($(this).text() === optionG) {
    creepyInteraction();
  }

  // If option D is chosen,
  else if ($(this).text() === optionD) {
    takesNap();

    // When the last button is pressed
  } else if ($(this).text() === optionF) {
    creepyInteraction();
  }
}

// creepyInteraction
//
function creepyInteraction() {
  // Black background added
  $('body').addClass("blackbackground");
  // Remove text
  $storyText.remove();
  $('.storybox').removeClass();
  // Remove buttons
  $('.options').remove();
  // Creepy voice speaks
  responsiveVoice.speak("hello puppy. I'm glad to see you." +
    "Oh, sorry, this" +
    "story is just a way to bring you here." +
    "It's pointless just like you. I overheard from your parents and your"+
    "friends. They aren't wrong. You are pretty worthless and unimportant." +
    "Luckily for you, I can help you become valuable."+
     "Delicately draw small strokes with your cursor.", voice, voiceParameters);

  // Uncomfortable comments are said when mouse moves
  $(window).on('mousemove', handleMouseMove);

  // New monologue starts after around 1 minute
  window.setTimeout(newMonologue, 90 * 1000);

}

// New monologue
//
function newMonologue() {
  // This is the last thing that is said
  responsiveVoice.speak("That felt fantastic. Who knew that such a"+
  "precious little gem like you would end up here. And to think no one"+
  "else can see your value except me. You are so lucky to find me."+
  "I can't wait to see you again, my little puppy."+
  "Oh, and don't speak of this to anyone. Unless you want the blood of innocent"+
  "people on your hands. See you soon.", voice, voiceParameters);
  // the mousemove effect stops
  $(window).off('mousemove', handleMouseMove);
}

// Speech On and Off
//
function speechOn() {
  speaking = true;
}

function speechOff() {
  speaking = false;
}

// Handle Mouse Move
//
function handleMouseMove() {
  let comments;
  // A comment is chosen from the 4 options
  comments = uncomfortableComments[Math.floor(Math.random() * uncomfortableComments.length)];
  // the voice speaks only after the first monologue
  if (speaking === false) {
    responsiveVoice.speak(comments, voice, voiceParameters);
  }
}

function appleAcre() {
  // the dog goes to the apple tree acre,
  $storyText.text("The dog walks among the apple trees" +
    " enjoying the shade. He suddenly sees" +
    " a dirt path that he never noticed before" +
    " and wondered what was ahead, but he was" +
    " also very tired. He decides to... ");
  // the previous options are removed,
  $('.options').remove()
  // and the new ones are added
  optionD = decisions[1];
  optionE = decisions[2];
  addButton(optionD);
  addButton(optionE);
}

function lake() {
  // the dog goes to the lake,
  $storyText.text("The dog swims in the lake," +
    " enjoying his escape from the heat." +
    " All of that activity made him very" +
    " tired, but he suddenly sees a beautiful" +
    " butterfly and has the urge to chase" +
    " it. He decides to...");
  // the previous options are removed,
  $('.options').remove()
  // and the new ones are added
  optionC = decisions[0];
  optionD = decisions[1];
  addButton(optionC);
  addButton(optionD);
}

function takesNap() {
  // the dog takes a nap and wakes up
  $storyText.text("The dog wakes up from his nap," +
    " no longer in the acre. Cold" +
    " metal walls covered with stains" +
    " and viscous substances. Ahead" +
    " is, what seems to be a door." +
    " He cautiously approaches it.")
  // the previous options are removed,
  $('.options').remove()
  // and the last button is added
  optionF = finalChoice[0];
  addButton(optionF);
}

function followsPath() {
  // the dog reaches an open plain and falls in a hole
  $storyText.text("The path lead to an open plain." +
    " No trees, just grass going on as" +
    " far as the sky. Excited, the dog" +
    " starts to run around in his new" +
    " found play area. He can't wait" +
    " to come back here with his owners." +
    " Suddenly, the dog notices a big hole." +
    " When trying to stop, he trips and" +
    " roles towards the hole and falls in.");
  // the previous options are removed,
  $('.options').remove()
  // and the last button is added
  optionG = finalChoice[1];
  addButton(optionG);
}

function followsButterfly() {
  // the dog reaches an open plain and falls in a hole
  $storyText.text("The butterfly leads the dog to an open plain." +
    " No trees, just grass going on as" +
    " far as the sky. Excited, the dog" +
    " starts to run around in his new" +
    " found play area. He can't wait" +
    " to come back here with his owners." +
    " Suddenly, the dog notices a big hole." +
    " When trying to stop, he trips and" +
    " roles towards the hole and falls in.");
  // the previous options are removed,
  $('.options').remove()
  // and the last button is added
  optionG = finalChoice[1];
  addButton(optionG);
}
