import axios from 'axios';

export function getContacts(options) {
  return dispatch => {
    return axios.get('/api/contacts', options);
  };
}

export function getSingleContact(id) {
  return dispatch => {
    return axios.post('/api/contacts/:id', id);
  };
}
