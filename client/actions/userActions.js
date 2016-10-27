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

export function updateUser(id, userData) {
  return dispatch => {
    return axios.patch(`/api/users/${ id }`, userData);
  };
}

export function deleteUser(id, userData) {
  return dispatch => {
    return axios.delete(`/api/users/${ id }`, userData);
  };
}