export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_GEO_RAPID_API_KEY,
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";