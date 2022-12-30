const refs = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.anime'),
  inputSearch: document.querySelector('#search-input'),
  searchBtn: document.querySelector('.search-btn'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const anime = event.currentTarget.elements.search.value.trim();

  if (anime) {
    console.log('ad');

    fecthAnime(anime).then(data => {
      createMarkup(data.results);
    });
  } else {
    console.log('sry try to type');
  }
}

function fecthAnime(name) {
  const BASE_URL = 'https://api.consumet.org/anime/animepahe';

  return fetch(`${BASE_URL}/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .catch(error => console.log(error));
}

function createMarkup(arr) {
  const markup = arr.map(({ title, image, releaseDate }) => {
    return `
      <li class="anime__item">
        <img src="${image}" alt="${title}" width="300" height="450">
        <h3>${title}</h3>
        <p>${releaseDate}</p>
      </li>
    `;
  });

  refs.list.innerHTML = markup;
}
