let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");


function timer(seconds) {
    // clear existing timers
    clearInterval(countdown);

    const now = Date.now();
    const targetTime = now + (seconds * 1000);

    displayTimeLeft(seconds);
    displayEndTime(targetTime);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((targetTime - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);

    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    const display = `${minutes}:${remainderSeconds < 10 ? "0":""}${remainderSeconds}`;
    timerDisplay.textContent = display;

    document.title = display; // Change tab text
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();

    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? "0":""}${minutes}`;
}

function startTimer(){
    timer(parseInt(this.dataset.time));
}

buttons.forEach(button => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function(e){
    e.preventDefault(); // stop page refresh

    const mins = this.minutes.value; 
    
    this.reset() // reset form

    timer(mins * 60);
});