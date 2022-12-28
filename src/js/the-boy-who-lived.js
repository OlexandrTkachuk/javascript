import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  searchBtn: document.querySelector('.search-btn'),
  card: document.querySelector('.card-box'),
};

refs.searchBtn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  event.preventDefault();

  fetchPromise()
    .then(data => {
      refs.card.innerHTML = createMarkup(data);
    })
    .catch(error => console.log(error))
    .finally(console.log('perfecto'));
}

function fetchPromise() {
  const BASE_URL = 'https://animechan.vercel.app/api';

  return fetch(`${BASE_URL}/random/anime?title=naruto`).then(response => {
    if (!response.ok) {
      throw new Error('Oooops we have an error');
    }

    return response.json();
  });
}

function createMarkup({ anime, character, quote }) {
  return `
        <h2>Anime: ${anime}</h2>
        <h3>Character name: ${character}</h3>
        <p>Quote: ${quote}</p>
        `;
}
