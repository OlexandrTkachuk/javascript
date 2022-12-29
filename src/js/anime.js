import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  input: document.querySelector('#search-input'),
  list: document.querySelector('.anime-list'),
  box: document.querySelector('.anime-box'),
};
const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  const value = event.target.value;

  if (value) {
    fetchAnime(value).then(anime => createMarkup(anime));
  } else {
    Notify.warning('Please start typing');
    clearMarkup();
  }
}

function fetchAnime(num) {
  const BASE_URL = 'https://kitsu.io/api/edge/characters';
  return fetch(`${BASE_URL}/${num}`).then(response => {
    if (!response.ok) {
      throw new Error('Oooops, we have some issue...');
    }

    return response.json();
  });
}

function createMarkup({ data: { attributes } }) {
  const name = attributes.name;
  const img = attributes.image.original;
  const description = attributes.description;

  const markup = `
      <img src="${img}" alt="${name}" />
      <h1>name: ${name}</h1>
      <h2>charname ${name}</h2>
      <p>${description}</p> 
  `;

  refs.box.innerHTML = markup;
}

function clearMarkup() {
  refs.box.innerHTML = '';
}
