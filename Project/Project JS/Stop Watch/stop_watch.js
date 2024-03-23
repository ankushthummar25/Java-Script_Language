let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.querySelector('.display');
const startStopButton = document.querySelector('.startStop');
const resetButton = document.querySelector('.reset');

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    startStopButton.textContent = 'Start';
  } else {
    timer = setInterval(runTimer, 1000);
    startStopButton.textContent = 'Stop';
  }
  isRunning = !isRunning;
}

function runTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.textContent = '00:00:00';
  startStopButton.textContent = 'Start';
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
