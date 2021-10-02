import axios from 'axios';

export const userAxios = (port) => {

    const opts = {
        host: window.location.hostname === 'localhost' ? 'localhost' : port === 'book' ? 'book-1214193269.ap-southeast-1.elb.amazonaws.com' : 'login-706458750.ap-southeast-1.elb.amazonaws.com',
        port: port === 'book' ? '8081' : '8080',
    }

    return axios.create({
        baseURL: 'http://' + opts.host + ':' + opts.port + '/bookeroo'
    });
}