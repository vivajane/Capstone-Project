import axios from 'axios';
export const consumerResponse = async (payloadData) => {
    try {
      const response = await axios.post('https://agrolink.onrender.com/consData/', 
      payloadData,
      );
      console.log('Response:', response.data);
      // Handle successful response here
    } catch (error) {
      console.error('Error:', error);
      // Handle error here
    }
  };
  
