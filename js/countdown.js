function createCountdown(date, id, endText="DONE"){
    if (typeof date == "string"){
        date = new Date(date)
    }
    let interval = setInterval(update, 1000);

    function update() {
        const now = new Date().getTime();
        const distance = date - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timer.innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
        if (distance < 0) {
            clearInterval(interval);
            timer.textContent = endText;
        }
    }

    update()
}