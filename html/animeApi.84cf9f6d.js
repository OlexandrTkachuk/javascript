!function(){var e={form:document.querySelector(".js-form"),list:document.querySelector(".anime"),inputSearch:document.querySelector("#search-input"),searchBtn:document.querySelector(".search-btn")};e.form.addEventListener("submit",(function(t){t.preventDefault(),(n=t.currentTarget.elements.search.value,fetch("".concat("https://api.consumet.org/anime/animepahe","/").concat(n)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){return console.log(e)}))).then((function(t){var n,r;n=t.results,r=n.map((function(e){var t=e.title,n=e.image,r=e.releaseDate;return'\n      <li class="anime__item">\n        <img src="'.concat(n,'" alt="').concat(t,'" width="300" height="450">\n        <h3>').concat(t,"</h3>\n        <p>").concat(r,"</p>\n      </li>\n    ")})),e.list.innerHTML=r}));var n}))}();
//# sourceMappingURL=animeApi.84cf9f6d.js.map