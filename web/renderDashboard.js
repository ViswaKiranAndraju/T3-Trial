let timer;
let seconds = 0;

function updateTimer() {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('timer').innerText = `${hrs}:${mins}:${secs}`;
}

document.getElementById('startBtn').addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(() => { seconds++; updateTimer(); }, 1000);
});

document.getElementById('stopBtn').addEventListener('click', () => {
    clearInterval(timer);
    alert(`Time logged: ${document.getElementById('timer').innerText}`);
    seconds = 0;
    updateTimer();
});
