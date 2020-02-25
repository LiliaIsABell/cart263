"use strict";

/********************************************************************

Something is Wrong on the Internet
Lilia Isabel Aguirre Lugo

DO NOT FORGET YOUR DESCRIPTION

*********************************************************************/

// Variables
// Choices throught the story
let activities = ["go to the apple tree acre",
  "go to the lake"
];
let decisions = ["follow the butterfly",
  "take a nap",
  "follow the path"
];

// The two options
// (these will change throughout the story)
let optionA;
let optionB;

// The text of the story that changes
let $storyText;


$(document).ready(setup);

// Set up
//
function setup() {
  // Spans allow for the text to change
  $storyText = $("#story");

  // Application of the choices
  activityChoice();
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
  // the next act starts
  $button.on('click', handleAct1);

}

// Choice of activities
//
function activityChoice() {
  optionA = activities[0];
  optionB = activities[1];
  addButton(optionA);
  addButton(optionB);
}

// Handle Act 1
//
function handleAct1() {
  // If option A is chosen,
  if ($(this).text() === optionA) {
    // the story continues based on the choice,
    $storyText.text("The dog walks among the apple trees" +
      " enjoying the shade. He suddenly sees" +
      " a dirt path that he never noticed before" +
      " and wondered what was ahead, but he was" +
      " also very tired. He decides to... ");
    // the previous options are removed,
    $('.options').remove()
    // and the new ones are added
    optionA = act2Choices[1];
    optionB = act2Choices[2];
    addButton(optionA);
    addButton(optionB);
    // If option B is chosen,
  } else if ($(this).text() === optionB) {
    // the story continues based on the choice,
    $storyText.text("The dog plays in the lake," +
      " enjoying his escape from the heat." +
      " All of that activity made him very" +
      " tired, but he suddenly sees a beautiful" +
      " butterfly and has the urge to chase" +
      " it. He decides to...");
    // the previous options are removed,
    $('.options').remove()
    // and the new ones are added
    optionA = act2Choices[0];
    optionB = act2Choices[1];
    addButton(optionA);
    addButton(optionB);
  }
}
