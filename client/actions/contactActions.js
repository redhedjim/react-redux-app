import axios from 'axios';

export function getAllContacts(options) {
  return dispatch => {
    return axios.get('/api/contacts', options);
  };
}

export function getContact(id) {
  return dispatch => {
    return axios.get('/api/contacts/'+ id);
  };
}
