import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');

startBtn.disabled = true;

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); 
  console.log(convertMs(140000));
  console.log(convertMs(24140000));

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentTime = options.defaultDate.getTime();
        const selectedTime = selectedDates[0].getTime();
        if (selectedTime > currentTime) {
            startBtn.disabled = false;
        } else {
            startBtn.disabled = true;
            window.alert("Please choose a date in the future");
        }
    },
};
  
inputEl.addEventListener('click', onInputClick);

function onInputClick() {
    flatpickr("#datetime-picker", options);
}

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
    const differenceMs = options.onClose.selectedTime - options.onClose.currentTime;
    convertMs(differenceMs);
    console.log(convertMs(differenceMs));
    console.log(options.onClose.selectedTime);
}