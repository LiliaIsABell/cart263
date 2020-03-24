"use strict";
/********************************************************************

This Time it's Personal
Lilia Isabel Aguirre Lugo

DON'T FORGET YOUR DESCRIPTION!!!!!!

*********************************************************************/

// The variables for the PONG GAME
//
// Game start
let playing = false;

// Game colors
let fgColor = 255;
// variables to change background color
let turnYellow = 0;
let turnBlue = 0;

// BALL
let ball = {
  x: 0,
  y: 0,
  size: 40,
  vx: 0,
  vy: 0,
  speed: 5
}

// PADDLES
let leftPaddle = {
  x: 0,
  y: 0,
  w: 40,
  h: 150,
  vy: 0,
  speed: 5,
  upKey: 87,
  downKey: 83,
  leftScore: 0
}
let rightPaddle = {
  x: 0,
  y: 0,
  w: 40,
  h: 150,
  vy: 0,
  speed: 5,
  upKey: 38,
  downKey: 40,
  rightScore: 0
}
// Sound
let beepSFX;
let scorePoint;

$(document).ready(setup)

// Preload
//
function preload() {
  // Loads the beep audio for the sound of bouncing
  beepSFX = new Audio("assets/sounds/beep.wav");
  // Load the chime audio for the points sound
  scorePoint = new Audio("assets/sounds/Chime.wav");
}

// Setup
//
function setup() {
  // Create canvas and set drawing modes
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  fill(fgColor);
  setupPaddles();
  resetBall();
}

// Setup Paddles
//
function setupPaddles() {
  // Initialise the left paddle position
  leftPaddle.x = 0 + leftPaddle.w;
  leftPaddle.y = height / 2;

  // Initialise the right paddle position
  rightPaddle.x = width - rightPaddle.w;
  rightPaddle.y = height / 2;
}

// Draw
function draw() {
  // The background is green
  // The color variables are placed here to allow the
  // colors to change
  background(turnYellow, 255, turnBlue);

  if (playing) {
    // If the game is in play,
    // the paddles can be controled and
    // the ball updates
    handleInput(leftPaddle);
    handleInput(rightPaddle);
    updatePaddle(leftPaddle);
    updatePaddle(rightPaddle);
    updateBall();
    // Check for collision
    checkBallWallCollision();
    checkBallPaddleCollision(leftPaddle);
    checkBallPaddleCollision(rightPaddle);

    // Check if the ball went out of bounds
    if (ballIsOutOfBounds()) {
      // Points are given
      scoreKeeper();
      // If it went off either side, reset it
      resetBall();
    }

  } else {
    // message to start the game
    displayStartMessage();
  }

  // Display the paddles and ball
  displayPaddle(leftPaddle);
  displayPaddle(rightPaddle);
  displayBall();
}

// Handle Input
//
function handleInput(paddle) {
  // Paddle moves based on its up and down keys
  // If the up key is being pressed
  if (keyIsDown(paddle.upKey)) {
    // Move up
    paddle.vy = -paddle.speed;
  }
  // if the down key is being pressed
  else if (keyIsDown(paddle.downKey)) {
    // Move down
    paddle.vy = paddle.speed;
  } else {
    // if neither, stop moving
    paddle.vy = 0;
  }
}

// Update Positions
//
function updatePaddle(paddle) {
  // Update the paddle position based on its velocity
  paddle.y += paddle.vy;
}

// Update Ball
//
function updateBall() {
  // Update the ball's position based on velocity
  ball.x += ball.vx;
  ball.y += ball.vy;
}

// Ball Is Out Of Bounds
//
function ballIsOutOfBounds() {
  // Check for ball going off the sides
  if (ball.x < 0 || ball.x > width) {
    return true;
  } else {
    return false;
  }
}

// Score Keeper
//
function scoreKeeper() {
  // When ball crosses the left border,
  // rightPaddle gets a point
  if (ball.x < 0) {
    rightPaddle.rightScore = rightPaddle.rightScore + 1;

    // To show that rightPaddle is scoring,
    // The background returns to green
    turnBlue = 0;
    // The background increasingly turns yellow
    turnYellow += 50;
    // constrain makes sure that 255 is the color's maximum
    turnYellow = constrain(turnYellow, 0, 255);
    // Sound plays whenever rightPaddle scores
    scorePoint.currentTime = 0;
    scorePoint.play();
  }
  // When ball crosses the right border,
  // leftPaddle gets a point
  else if (ball.x > width) {
    leftPaddle.leftScore = leftPaddle.leftScore + 1;

    // To show that rightPaddle is scoring,
    // The background returns to green
    turnYellow = 0;
    // The background increasingly turns blue
    turnBlue += 50;
    // constrain makes sure that 255 is the color's maximum
    turnBlue = constrain(turnBlue, 0, 255);
    // Sound plays whenever leftPaddle scores
    scorePoint.currentTime = 0;
    scorePoint.play();
  }
  // console.log allows to see how much each side scored in Console
  console.log(leftPaddle.leftScore + "POINT LEFT");
  console.log(rightPaddle.rightScore + "POINT RIGHT");
}
// Check Bal lWall Collision
//
function checkBallWallCollision() {
  // Check for collisions with top or bottom...
  if (ball.y < 0 || ball.y > height) {
    // It hit so reverse velocity
    ball.vy = -ball.vy;
    // Play our bouncing sound effect by rewinding and then playing
    beepSFX.currentTime = 0;
    beepSFX.play();
  }
}

// Check Ball Paddle Collision
//
function checkBallPaddleCollision(paddle) {
  // VARIABLES FOR CHECKING COLLISIONS
  let ballTop = ball.y - ball.size / 2;
  let ballBottom = ball.y + ball.size / 2;
  let ballLeft = ball.x - ball.size / 2;
  let ballRight = ball.x + ball.size / 2;

  let paddleTop = paddle.y - paddle.h / 2;
  let paddleBottom = paddle.y + paddle.h / 2;
  let paddleLeft = paddle.x - leftPaddle.w / 2;
  let paddleRight = paddle.x + paddle.w / 2;

  // First check the ball is in the vertical range of the paddle
  if (ballBottom > paddleTop && ballTop < paddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballLeft < paddleRight && ballRight > paddleLeft) {
      // Then the ball is touching the paddle
      // Reverse its vx so it starts travelling in the opposite direction
      ball.vx = -ball.vx;
      // Play our bouncing sound effect by rewinding and then playing
      beepSFX.currentTime = 0;
      beepSFX.play();
    }
  }
}

// Display Paddle
//
function displayPaddle(paddle) {
  // Draw the paddles
  rect(paddle.x, paddle.y, paddle.w, paddle.h);
}

// Display Ball
function displayBall() {
  // Draw the ball
  rect(ball.x, ball.y, ball.size, ball.size);
}

// Reset Ball
//
function resetBall() {
  // Initialise the ball's position and velocity
  ball.x = width / 2;
  ball.y = height / 2;
  ball.vx = ball.speed;
  // ball.vy has a random velocity
  // to make the ball start in a more unpredictable way.
  ball.vy = random(ball.speed, 10);
}

// Display Start Message
//
function displayStartMessage() {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  text("CLICK TO START", width / 2, height / 2);
  pop();
}

// Mouse Pressed
//
function mousePressed() {
  playing = true;
}
