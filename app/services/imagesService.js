import axios from 'axios';
import {CLIENT_ID} from 'react-native-dotenv';

export const getImages = async () => {
  const endpoint = `https://api.unsplash.com/photos/?client_id=${CLIENT_ID}`;
  try {
    const response = await axios.get(endpoint);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
