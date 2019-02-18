import { fetchRequest } from 'resources/apiResource';

const BOOKS_DATA_URL = 'books.json';

export default {
  fetchBooks({ commit }) {
    fetchRequest(BOOKS_DATA_URL).then(res => {
      commit('setBooks', res);
    });
  }
};
