'use strict';

const TOTAL_SEC = 10 * 60; // Initial value: 600 sec = 10 minutes

const timer       = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton  = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const pauseButton = document.getElementById('pause');

let remainingSec; // Use to store the remaining seconds
let interval;     // Use to hold a reference to the interval

// Helper function to transform this: '100' (seconds) to this '01:40'
function toMinAndSec(sec) {
  console.log(sec);

  let m = (Math.floor(sec / 60) + '').padStart(2, '0');
  let s = (sec % 60 + '').padStart(2, '0');

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
    // * Stop (clear) the interval
    clearInterval(interval);
  }
  show();
}

/*
 * Start button
 * -------------------- */

startButton.addEventListener('click', () => {
  // * If the global 'interval' variable has a value, use it ot stop (clear) the existing interval.
  if (interval) clearInterval(interval);

  // * Set an interval to 1 sec, that calls the 'tick' function. Store the interval reference to the global 'interval' variable, so that you can clear it afterwards.
  interval = setInterval(tick, 1 * 1000);
});

/*
 * Stop button
 * -------------------- */

stopButton.addEventListener('click', () => {
  // * Reset the remaining seconds to their initial value
  remainingSec = TOTAL_SEC;

  // * Stop (clear) the interval
  clearInterval(interval);

  // * Use the appopriate (existing) function to show the remaining time on the page
  show();
});

/*
 * Reset button
 * -------------------- */

resetButton.addEventListener('click', () => {
  // * Reset the remaining seconds to their initial value
  remainingSec = TOTAL_SEC;

  // * Use the appopriate function to show the remaining time on the page
  show();
});

/*
 * Pause button
 * -------------------- */

pauseButton.addEventListener('click', () => {
  // * Stop (clear) the interval
  clearInterval(interval);
});

/*
 * Initialization
 * -------------------- */

document.addEventListener('DOMContentLoaded', () => {
  remainingSec = TOTAL_SEC;
  show();
});
