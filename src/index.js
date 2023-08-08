import Notiflix from 'notiflix';

import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "38721058-dcc1021070edf740dd0c7c82a";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "38721058-dcc1021070edf740dd0c7c82a";

const form = document.querySelector('#search-form');
const list = document.querySelector('.js-list');

form.addEventListener('submit', hendlerSubmit);


function hendlerSubmit(evt) {
    evt.preventDefault();

    const {searchQuery} = evt.currentTarget.elements;

    
    getPhoto(searchQuery.value).then(data => (list.innerHTML = createMarkup(data.hits))).catch(err => console.log(err))
    
    

   
}






// https://pixabay.com/api/?key=38721058-dcc1021070edf740dd0c7c82a&q=yellow+flower&image_type=photo&orientation=horizontal&safesearch=true&per_page=40

async function getPhoto(params) {
     const resp = await fetch(`${BASE_URL}?key=${API_KEY}&q=${params}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`);
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return resp.json();
}

function createMarkup(arr) {
    return arr.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `<li><div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes:${likes}</b>
      </p>
      <p class="info-item">
        <b>Views:${views}</b>
      </p>
      <p class="info-item">
        <b>Comments:${comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads:${downloads}</b>
      </p>
    </div>
  </div></li>`).join("");
}