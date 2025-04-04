import axios from 'axios';

const API_KEY = '49649354-b54131589ae558e3bfeef2cb6';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            },
        });

        return response.data.hits;
    } catch (error) {
        throw new Error('Ошибка при загрузке изображений');
    }
}


