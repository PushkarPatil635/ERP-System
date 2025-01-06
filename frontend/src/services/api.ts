import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080';  // Adjust if necessary




// Get all students
export const getStudents = async () => {
    try {
        const response = await axios.get(`${API_URL}/students`);
        return response.data;
    } catch (error) {
        console.error("Error fetching students:", error);
        throw error;
    }
};

export const login = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      return response.data;
    } catch (error) {
      throw new Error("Login failed");
    }
  };

// Add more API functions for creating, updating, and deleting students as needed
