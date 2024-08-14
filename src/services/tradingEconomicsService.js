import axios from 'axios';

const API_KEY = '6e0d27527c9946b:bhkguwey89xscnc';
const BASE_URL = 'https://api.tradingeconomics.com';

export const getIndicatorsByCountry = async (country) => {
  try {
    const response = await axios.get(`${BASE_URL}/country/${country}?c=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
