import api from '../services/api'

const resource = '/votes'

async function voteImage(data) {
    const response = await api.post(`${resource}`, data);

    return response.data
}

export { voteImage }