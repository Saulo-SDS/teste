import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr';

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function postPostUser(body, token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/posts`, body, config);
    return promise;
}

export {
    postSignUp,
    postPostUser,
};