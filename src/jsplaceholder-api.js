

import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "38721058-dcc1021070edf740dd0c7c82a";

export default class JSONPlaceholderAPI {
    #BASE_URL = "https://pixabay.com/api/";
    #API_KEY = "38721058-dcc1021070edf740dd0c7c82a";
    
    constructor() {
        this.searchQuery = '';
        this.page = 1;

    }
    
    async getPhoto() {
  const BASE_URL = "https://pixabay.com/api/";
   const API_KEY = "x-api-key";
        const resp = await fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40page=${this.page}`);
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return resp.json();
        
         
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQwery) {
        this.searchQuery = newQwery;
    }
    
}

