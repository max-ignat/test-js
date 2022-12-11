import Notiflix from 'notiflix';
const axios = require('axios');
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '27870956-21998cd572eb995cd3177eee7';

export default class NewsApiService {
  constructor() {
    this.name = '';
    this.page = 1;
  }

  async searchRequest() {
    
      return fetch(
        `${BASE_URL}?key=${KEY}&q=${this.name}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=30`,
      )
      .then(response => response.json())
        .then(data => {
          this.page += 1;
          return data.hits
      })
     .catch (error => ( console.log(error)));
    
      
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get nameVal() {
    return this.name;
  }

  set nameVal(newName) {
    this.name = newName;
  }
}
