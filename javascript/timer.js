//Time variables
let startTime = 0;
let timerInterval;

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
    document.getElementById("timer").textContent = elapsedSeconds + " seconds";
}

// Export functions if needed
// module.exports = { startTimer, stopTimer, updateTimer };
