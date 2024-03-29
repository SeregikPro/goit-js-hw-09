import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '5px',
  opacity: 1,
  borderRadius: '10px',
  rtl: true,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  closeButton: false,
});

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', btnCreatePromises);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function btnCreatePromises(e) {
  e.preventDefault();

  const data = new FormData(e.currentTarget);
  const amount = Number.parseInt(data.get('amount'));
  const delay = Number.parseInt(data.get('delay'));
  const step = Number.parseInt(data.get('step'));

  for (let i = 0; i < amount; i += 1) {
    createPromise(i, delay + i * step)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
