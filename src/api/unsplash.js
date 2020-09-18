import axios from 'axios';

export default axios.create({ // Creates instance of the axios client that we can customise
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ffKRV_WZElmmHVLOsYXxN3zqcfGMCtA8kKgNUz-v9Yg'
    }
});
