const BASE_URL = 'http://localhost:8080/src/assets/data/';
const HEADERS = {
  'Content-Type': 'application/json'
};

export const fetchRequest = (url, method = 'GET', data = {}) => {
  return fetch(BASE_URL + url, {
    method: method,
    headers: HEADERS,
    body: method == 'GET' || method == 'DELETE' ? undefined : JSON.stringify(data)
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};
