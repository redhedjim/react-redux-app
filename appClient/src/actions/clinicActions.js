import axios from 'axios';

export function getAllClinics(options) {
  return dispatch => {
    return axios.get('/api/clinics', options);
  };
}

export function createClinic(options) {
  return dispatch => {
    return axios.post('/api/clinics', options);
  };
}