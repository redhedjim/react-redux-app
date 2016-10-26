import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/signup', userData);
  };
}

export function isUserExists(id) {
  return dispatch => {
    return axios.get(`/api/signup/${ id }`);
  };
}