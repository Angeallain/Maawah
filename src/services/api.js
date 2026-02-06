const API_BASE_URL = "http://localhost:3001/api";

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem("access_token");
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

// Authentication API
export const authAPI = {
  // Register a new user
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await handleResponse(response);

    // Store tokens in localStorage
    if (data.session) {
      localStorage.setItem("access_token", data.session.access_token);
      localStorage.setItem("refresh_token", data.session.refresh_token);
      localStorage.setItem("user", JSON.stringify(data.user));
    }

    return data;
  },

  // Login user
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await handleResponse(response);

    // Store tokens in localStorage
    if (data.session) {
      localStorage.setItem("access_token", data.session.access_token);
      localStorage.setItem("refresh_token", data.session.refresh_token);
      localStorage.setItem("user", JSON.stringify(data.user));
    }

    return data;
  },

  // Get current user
  getCurrentUser: async () => {
    const token = getAuthToken();

    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return handleResponse(response);
  },

  // Logout user
  logout: async () => {
    const token = getAuthToken();

    if (token) {
      try {
        await fetch(`${API_BASE_URL}/auth/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Logout error:", error);
      }
    }

    // Clear local storage regardless of API call success
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!getAuthToken();
  },

  // Get stored user data
  getUser: () => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },
};
