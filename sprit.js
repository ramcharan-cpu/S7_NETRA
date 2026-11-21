// Updates the dashboard clock
function updateClock() {
    const clock = document.getElementById("clock");

    if (clock) {
        clock.textContent = new Date().toLocaleTimeString();
    }
}

// Run once now, then repeat every 1000ms
updateClock();
setInterval(updateClock, 1000);