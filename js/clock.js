const clock = document.querySelector(".status-bar__time");

function showCurrentTime() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    clock.innerText = `${hour}:${min}`;
}
showCurrentTime()
setInterval(showCurrentTime, 1000);