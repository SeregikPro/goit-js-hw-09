const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')
}

let timeoutId = 0;
refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', onColorSwitcher);
refs.btnStop.addEventListener('click', offColorSwitcher);

function onColorSwitcher() {
    timeoutId = setInterval(changeBackgroundColor, 1000);
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
}

function offColorSwitcher() {
    clearInterval(timeoutId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}