const API_BASE_URL = "http://localhost:3001/api";

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem("access_token");
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  let data;

  try {
    data = await response.json();
  } catch (e) {
    // If response is not JSON, throw a generic error
    throw new Error("Invalid response from server");
  }

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

// Materials API
export const materialsAPI = {
  // Get all materials
  getAll: async (search = "") => {
    const token = getAuthToken();

    if (!token) {
      throw new Error("Please login to view materials");
    }

    const url = search
      ? `${API_BASE_URL}/materiel?search=${encodeURIComponent(search)}`
      : `${API_BASE_URL}/materiel`;

    console.log("Materials GET URL:", url);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return handleResponse(response);
    } catch (err) {
      if (err.message.includes("fetch")) {
        throw new Error(
          "Cannot connect to server. Please check if the backend is running on port 3001",
        );
      }
      throw err;
    }
  },

  // Create material with photo upload
  create: async (materialData) => {
    const token = getAuthToken();

    if (!token) {
      throw new Error("No authentication token found");
    }

    const formData = new FormData();
    formData.append("nom", materialData.nom);
    formData.append("location", materialData.location);
    if (materialData.photo) {
      formData.append("photo", materialData.photo);
    }

    const url = `${API_BASE_URL}/materiel`;
    console.log("Materials POST URL:", url);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      return handleResponse(response);
    } catch (err) {
      if (err.message.includes("fetch")) {
        throw new Error(
          "Cannot connect to server. Please check if the backend is running on port 3001",
        );
      }
      throw err;
    }
  },
};

// Transport API
export const transportAPI = {
  // Get all transports
  getAll: async (search = "") => {
    const token = getAuthToken();

    if (!token) {
      throw new Error("Please login to view transports");
    }

    const url = search
      ? `${API_BASE_URL}/transport?search=${encodeURIComponent(search)}`
      : `${API_BASE_URL}/transport`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return handleResponse(response);
    } catch (err) {
      if (err.message.includes("fetch")) {
        throw new Error(
          "Cannot connect to server. Please check if the backend is running on port 3001",
        );
      }
      throw err;
    }
  },

  // Create transport with photo upload
  create: async (transportData) => {
    const token = getAuthToken();

    if (!token) {
      throw new Error("No authentication token found");
    }

    const formData = new FormData();
    formData.append("nom", transportData.nom);
    formData.append("numero", transportData.numero);
    formData.append("location", transportData.location);
    formData.append("dureeMax", transportData.dureeMax);
    if (transportData.photo) {
      formData.append("photo", transportData.photo);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/transport`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      return handleResponse(response);
    } catch (err) {
      if (err.message.includes("fetch")) {
        throw new Error(
          "Cannot connect to server. Please check if the backend is running on port 3001",
        );
      }
      throw err;
    }
  },
};
