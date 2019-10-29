import axios from 'axios';

export const fetchTeam = (): Promise<any> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/beers`)
		.then(res => res.data);
};