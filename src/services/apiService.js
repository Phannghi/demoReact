import axios from '../utils/axiosCustomize';
const postCreateNewUser = (email, password, username, role, image) => {
    const FormData = require('form-data');

    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data)
}

const putUpdateUser = (id, email, username, role, image) => {
    const FormData = require('form-data');

    const data = new FormData();
    data.append('id', id);
    data.append('email', email);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data)
}

const getAllUsers = () => {
    return axios.get('api/v1/participant/all')
}

const getAllUsersWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

const deleteUsers = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } })
}

const postLogin = (userEmail, userPassword) => {
    return axios.post(`api/v1/login`, {
        email: userEmail,
        password: userPassword
    })
}
// const postLogin1 = (email, password) => {
//     return axios.post(`api/v1/login`, { email, password })
//     // {a, b} = {a: a, b: b}
// }
export {
    postCreateNewUser, getAllUsers, putUpdateUser,
    deleteUsers, getAllUsersWithPaginate, postLogin
}
