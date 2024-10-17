let timer;
let timeLeft = 0;
let timerRunning = false;

function startTimer() {
    if (timerRunning) return;

    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    timeLeft = (hours * 3600) + (minutes * 60) + seconds;
    
    if (timeLeft <= 0) {
        alert("Please set a valid time.");
        return;
    }

    timerRunning = true;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerRunning = false;
            alert("Time's up!");
        } else {
            timeLeft--;
            updateTimerDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    if (!timerRunning) return;
    clearInterval(timer);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 0;
    timerRunning = false;
    updateTimerDisplay();
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}

function updateTimerDisplay() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    document.querySelector('.timer-display').textContent = 
       ` ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}