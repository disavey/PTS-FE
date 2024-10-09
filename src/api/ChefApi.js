import axios from "axios";

const API_URL = "http://localhost:3000";

// GET all chef
export const getAllChef = async () => {
  try {
    const response = await axios.get(`${API_URL}/chef`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching chef:", error);
    throw error;
  }
};

// GET chef by ID
export const getChefById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/chef/find?id=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching chef:", error);
    throw error;
  }
};

export const addChef = async (chefData) => {
  try {
    const response = await axios.post(`${API_URL}/chef/post`, chefData); // Pastikan endpoint /create ada
    return response.data;
  } catch (error) {
    console.error("Error adding chef:", error);
    throw error;
  }
};

// PUT to update a chef by ID
export const updateChef = async (id, chefData) => {
  try {
    const response = await axios.put(`${API_URL}/chef/update/${id}`, chefData);
    return response.data;
  } catch (error) {
    console.error("Error updating chef:", error);
    throw error;
  }
};

// DELETE a chef by ID
export const deleteChef = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/chef/delete?id=${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting chef:", error);
    throw error;
  }
};
