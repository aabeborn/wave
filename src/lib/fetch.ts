import { RESTMethod } from '@/types/fetch';

const request = (token: string, method: RESTMethod = 'GET') => {
	return fetch('https://api.spotify.com/v1', {
		method,
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
};

export default request;
