import axios from 'axios'

export default {
    post (url, data, config) {
        if (config) {
            return axios.post(url, data, config)
        }
        if (data) {
            return axios.post(url, querystring.stringify(data))
        }
        return axios.get(url)
    }
}