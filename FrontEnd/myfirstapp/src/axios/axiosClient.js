import axios from 'axios';

export const userAxios = (port) => {

    const opts = {
        host: window.location.hostname === 'localhost' ? 'localhost' : '18.140.173.120',
        port: port === 'book' ? '8081' : '8080',
    }

    return axios.create({
        baseURL: 'http://' + opts.host + ':' + opts.port + '/bookeroo'
    });
}