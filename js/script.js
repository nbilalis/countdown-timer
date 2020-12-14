'use strict';

const TOTAL_SEC = 10 * 60; // Initial value: 600 sec = 10 minutes

const timer = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const pauseButton = document.getElementById('pause');

let remainingSec; // Use to store the remaining seconds
let interval; // Use to hold a reference to the interval

// Helper function to transform this: '100' (seconds) to this '01:40'
function toMinAndSec(sec) {
  console.log(sec);

  let m = Math.floor(sec / 60);
  let s = sec % 60;

  if (m < 10) { m = '0' + m; }

  if (s < 10) { s = '0' + s; }

  return `${m}:${s}`;
}

// Show remaining time to the 'timer' element
function show() {
  timer.innerHTML = toMinAndSec(remainingSec);
}

// Decrease remaining time and show the result
// If there is no remaining time, stop the timer
function tick() {
  if (remainingSec > 0) {
    remainingSec -= 1;
  } else {
    // TODO: Stop/Clear the interval
  }
  show();
}

/*
 * Start button
 * -------------------- */

startButton.addEventListener('click', () => {
  // TODO: Set an interval to 1 sec, that calls the 'tick' function. Store the interval reference to the global 'interval' variable, so that you can clear it afterwards.
});

/*
 * Stop button
 * -------------------- */

stopButton.addEventListener('click', () => {
  // TODO: Reset the remaining seconds to their initial value
  // TODO: Stop/Clear the interval
  // TODO: Use the appopriate (existing) function to show the remaining time on the page
});

/*
 * Reset button
 * -------------------- */

resetButton.addEventListener('click', () => {
  // TODO: Reset the remaining seconds to their initial value
  // TODO: Use the appopriate function to show the remaining time on the page
});

/*
 * Pause button
 * -------------------- */

pauseButton.addEventListener('click', () => {
  // TODO: Clear the interval
});

/*
 * Initialization
 * -------------------- */

document.addEventListener('DOMContentLoaded', () => {
  remainingSec = TOTAL_SEC;
  show();
});
