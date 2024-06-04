import axios from 'axios';

export const validateToken = async (token) => {
  try {
    const response = await axios.post('http://localhost:8000/validateToken', {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.valid;
  } catch (error) {
    console.error('Token validation error:', error);
    return false;
  }
};
