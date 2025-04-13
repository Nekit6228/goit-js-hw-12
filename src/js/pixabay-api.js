import axios from 'axios';

const API_KEY = '49649354-b54131589ae558e3bfeef2cb6';
const BASE_URL = 'https://pixabay.com/api/';
const perPage = 15;

export async function getImagesByQuery(query, page = 1) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page,
                per_page: perPage
            },
        });

        return response.data;
    } catch (error) {
        throw new Error('Ошибка при загрузке изображений');
    }
}
