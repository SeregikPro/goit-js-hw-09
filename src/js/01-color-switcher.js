const PROMT_DELAY = 1000;
let timeoutId = null;

const startClick = document.querySelector('[data-start]');
const stopClick = document.querySelector('[data-stop]');

startClick.addEventListener('click', onClick);
stopClick.addEventListener('click', offClick);
stopClick.disabled = true;

function onClick() {
    if (startClick) {
        stopClick.disabled = true;
    }
    timeoutId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, PROMT_DELAY)
}

function offClick() {
    if (stopClick) {
        startClick.disabled = false;
    }
    clearInterval(timeoutId); 
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}