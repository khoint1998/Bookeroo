import axios from 'axios';

export const userAxios = (port) => {

    const opts = {
        host: window.location.hostname === 'localhost' ? 'localhost' : port === 'book' ? 'CONTAINER_BACKEND_BOOK' : 'CONTAINER_BACKEND_USER',
        port: port === 'book' ? '8081' : '8080',
    }

    return axios.create({
        baseURL: 'http://' + opts.host + ':' + opts.port + '/bookeroo'
    });
}