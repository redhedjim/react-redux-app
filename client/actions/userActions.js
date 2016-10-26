import axios from 'axios';

export function getUser(id = '', options = '') {
  return dispatch => {
    console.log(id, options);
    if (id === '') {
      return axios.get('/api/users', options);
    } else {
      console.log(`/api/users/${ id }`);
      return axios.get(`/api/users/${ id }`, options);
    }
  };
}

export function updateUser(options) {
  return dispatch => {
    return axios.post('/api/users', options);
  };
}

export function deleteUser(options) {
  return dispatch => {
    return axios.post('/api/users', options);
  };
}