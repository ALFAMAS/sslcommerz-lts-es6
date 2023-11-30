import axios from 'axios';

const httpCall = async ({ url, method = 'POST', data = {} }) => {
    try {
        const response = await axios({
            url,
            method,
            data,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrer: 'no-referrer',
        });
        return response.data;
    } catch (err) {
        return err;
    }
}

export default httpCall;