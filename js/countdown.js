const timer = document.getElementById("timer")
const countDownDate = new Date("Feb 16, 2025 8:00:00").getTime();

let countdown = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    timer.innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(countdown);
        timer.textContent = "IT'S HERE!";
    }
}

updateCountdown()
