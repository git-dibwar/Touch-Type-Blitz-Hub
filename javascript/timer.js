//Time variables
let startTime = 0;
let timerInterval;
let wordsPerMinute = 0;


function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    }
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
    // document.getElementById("wpm").textContent = elapsedSeconds;
    document.getElementById("wpm").textContent= Math.round(words) * 60 / elapsedSeconds+" wpm";
}