import axios from 'axios';

const API_URL = 'http://localhost:3000';

// GET all cake
export const getAllChef = async () => {
    try {
        const response = await axios.get(`${API_URL}/cake`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching cake:', error);
        throw error;
    }
};

// GET cake by ID
export const getCakeById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/cake/find?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cake:', error);
        throw error;
    }
};


export const addCake = async (cakeData) => {
    try {
      const response = await axios.post(`${API_URL}/cake/post`, cakeData); // Pastikan endpoint /create ada
      return response.data;
    } catch (error) {
      console.error("Error adding cake:", error);
      throw error;
    }
  };

// PUT to update a cake by ID
export const updateCake = async (id, cakeData) => {
    try {
        const response = await axios.put(`${API_URL}/cake/update/${id}`, cakeData);
        return response.data;
    } catch (error) {
        console.error('Error updating cake:', error);
        throw error;
    }
};

// DELETE a cake by ID
export const deleteCake = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/cake/delete?id=${id}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error deleting cake:', error);
        throw error;
    }
};