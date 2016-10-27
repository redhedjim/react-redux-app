import axios from 'axios';

export const getAllUsers = (options) => {
    return dispatch => {
        return axios.get('/api/users', options)
    };
}
