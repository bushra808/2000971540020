import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.johndoerailways.com', // Replace with the actual API URL
});

const fetchTrains = async () => {
  try {
    const response = await api.get('/trains'); // Adjust the API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching trains:', error);
    throw error;
  }
};

const fetchSingleTrain = async (trainId) => {
  try {
    const response = await api.get(`/trains/${trainId}`); // Adjust the API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching train details:', error);
    throw error;
  }
};

// Axios interceptor to cache responses and avoid duplicate API calls
const cache = {};
api.interceptors.request.use((config) => {
  if (cache[config.url]) {
    return Promise.reject(new Error('Duplicate request'));
  }
  cache[config.url] = true;
  return config;
});

export { fetchTrains, fetchSingleTrain };
export default api;
