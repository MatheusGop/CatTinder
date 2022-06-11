import api from '../services/api'

const resource = '/breeds'

async function getCatsByBreed(page) {
    const response = await api.get(`${resource}?limit=10&page=${page}`);

    return response.data
}

export { getCatsByBreed }