const e={form:document.querySelector(".js-form"),list:document.querySelector(".anime"),inputSearch:document.querySelector("#search-input"),searchBtn:document.querySelector(".search-btn")};e.form.addEventListener("submit",(function(t){t.preventDefault();(n=t.currentTarget.elements.search.value,fetch(`https://api.consumet.org/anime/animepahe/${n}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((e=>console.log(e)))).then((t=>{!function(t){const n=t.map((({title:e,image:t,releaseDate:n})=>`\n      <li class="anime__item">\n        <img src="${t}" alt="${e}" width="300" height="450">\n        <h3>${e}</h3>\n        <p>${n}</p>\n      </li>\n    `));e.list.innerHTML=n}(t.results)}));var n}));
//# sourceMappingURL=animeApi.34a43364.js.map
