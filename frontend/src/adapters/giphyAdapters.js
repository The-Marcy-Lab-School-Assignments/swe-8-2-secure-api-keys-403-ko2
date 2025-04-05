import { handleFetch } from './handleFetch.js';
// import { API_KEY } from '../../secrets.js';

// Send a fetch request to the /trending endpoint and return the top 3 results
export const getTrendingGifs = async () => {
	// return await handleFetch(
	// 	`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`
	const url = '/api/gifs';
	const [data, error] = await handleFetch(url);

	return [data, error];
};

export const getGifsBySearch = async (searchTerm) => {};
