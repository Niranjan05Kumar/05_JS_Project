const Display = document.querySelector(".timedisplay");
const StartButton = document.querySelector("#startBtn");
const StopButton = document.querySelector("#stopBtn");
const ResetButton = document.querySelector("#resetBtn");

let msec = 0;
let sec = 0;
let min = 0;
let hours = 0;
let timerId = null;

StartButton.addEventListener("click", function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(StartTimer, 10);
});

StopButton.addEventListener("click", function(){
    clearInterval(timerId);
    // timerId = null;
});

ResetButton.addEventListener("click", function(){
    clearInterval(timerId);
    // timerId = null;
    Display.innerHTML = "00:00:00:00";
    msec = sec = min = hours = 0;
    // StartButton.disabled = false;
});

function StartTimer(){
    msec++;
    if(msec >= 100){
        sec++;
        msec = 0;
    }
    if(sec >= 60){
        sec = 0;
        min++;
    }
    if(min >= 60){
        min = 0;
        hours++;
    }
    
    let msecStr = msec < 10 ? `0${msec}` : msec;
    let secStr = sec < 10 ? "0" + sec : sec;
    let minStr = min < 10 ? `0${min}` : min;
    let hoursStr = hours < 10 ? `0${hours}` : hours;

    Display.innerHTML = `${hoursStr}:${minStr}:${secStr}:${msecStr}`;
}













// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval = null;
// let isRunning = false;

// function startTimer() {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     timerInterval = setInterval(updateDisplay, 10);
//     isRunning = true;
//   }
// }
// function stopTimer() {
//   if (isRunning) {
//     clearInterval(timerInterval);
//     isRunning = false;
//   }
// }
// function resetTimer() {
//   clearInterval(timerInterval);
//   isRunning = false;
//   elapsedTime = 0;
//   Display.innerHTML = "00:00:00.000";
// }
// function updateDisplay() {
//   elapsedTime = Date.now() - startTime;
//   const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   const seconds = Math.floor((elapsedTime / 1000) % 60);
//   const milliseconds = Math.floor((elapsedTime % 1000) / 10);

//   Display.innerHTML =
//     (hours < 10 ? "0" : "") +
//     hours +
//     ":" +
//     (minutes < 10 ? "0" : "") +
//     minutes +
//     ":" +
//     (seconds < 10 ? "0" : "") +
//     seconds +
//     "." +
//     (milliseconds < 10 ? "00" : milliseconds < 100 ? "0" : "") +
//     milliseconds;
// }
