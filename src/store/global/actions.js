import { fetchRequest } from 'resources/apiResource';

const BOOKS_DATA_URL = 'books.json';
const SCHOOLS_DATA_URL = 'schools.json';
const BEASTS_DATA_URL = 'beasts.json';

export default {
  fetchBooks({ commit }) {
    fetchRequest(BOOKS_DATA_URL).then(res => {
      commit('setBooks', res);
    });
  },
  fetchSchools({commit}){
    fetchRequest(SCHOOLS_DATA_URL).then(res => {
      commit('setSchools', res);
    })
  },
  fetchBeasts({commit}){
    fetchRequest(BEASTS_DATA_URL).then(res => {
      commit('setBeasts', res);
    })
  }
};
