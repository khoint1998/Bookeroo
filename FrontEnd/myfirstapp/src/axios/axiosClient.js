import axios from 'axios';

export const userAxios = (port) => {

    //Apply different host on different env
    const opts = {
        host: window.location.hostname === 'localhost' ? 'localhost' : port === 'book' ? 'book-463991676.ap-southeast-1.elb.amazonaws.com' : port === 'order' ? 'order-1668467516.ap-southeast-1.elb.amazonaws.com' : 'login-429861067.ap-southeast-1.elb.amazonaws.com',
        port: port === 'book' ? '8081' : port === 'order' ? '8082' : '8080',
    }

    //return an appropriate url 
    return axios.create({
        baseURL: 'http://' + opts.host + ':' + opts.port + '/bookeroo'
    });
}