export const state = {
  books : [],
  schools : [],
  beasts : []
};

export const getters = { 
  getBooks(){
    return state.books;
  },
  getSchools(){
    return state.schools;
  },
  getBeasts(){
    return state.beasts;
  }
};
