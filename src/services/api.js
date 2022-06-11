import axios from 'axios'

const api = axios.create({
     baseURL: 'https://api.thecatapi.com/v1'
})

api.interceptors.request.use(
    async (config) => {
        const apiKey = "ad555aee-9157-4bf8-bf6c-62b1c6a82b54"
        if (apiKey) {
            config.headers["x-api-key"] = `${apiKey}`;
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;