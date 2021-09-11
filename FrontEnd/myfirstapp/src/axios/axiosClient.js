import axios from 'axios';

export const userAxios = (port) => {

    const opts = {
        host: window.location.hostname === 'localhost' ? 'localhost' : port === 'book' ? 'AWS_EC2_HOST_BACK_BOOK' : 'AWS_EC2_HOST_BACK_USER',
        port: port === 'book' ? '8081' : '8080',
    }

    return axios.create({
        baseURL: 'http://' + opts.host + ':' + opts.port + '/bookeroo'
    });
}