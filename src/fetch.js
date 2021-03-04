import axios from "axios";

const server = "https://api.tvmaze.com";

export default function httpMethod(method, url, data) {
    return axios({
        method,
        url: server + url,
        data,
    })
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return error;
        });
}
