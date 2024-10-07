import axios from 'axios';

const API_URL = 'YOUR_API_ENDPOINT_HERE'; // Replace with your actual API endpoint

export const analyzeImage = async (image) => {
    const formData = new FormData();
    formData.append('file', image); // Assuming the API accepts 'file' as the key

    try {
        const response = await axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Adjust based on your API response structure
    } catch (error) {
        console.error("Error analyzing the image:", error);
        throw error;
    }
};
