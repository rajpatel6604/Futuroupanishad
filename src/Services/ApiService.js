import axios from "axios";

// Whether to send credentials (cookies, auth) with requests. Set to 'true' in .env if needed.
const USE_CREDENTIALS = process.env.NEXT_PUBLIC_API_WITH_CREDENTIALS === "true";

// Create a reusable axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || " ",
});

// Response interceptor to return parsed data
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error);
    throw error?.response?.data || error;
  }
);

// Generic API service function
const ApiService = async ({ method, endpoint, data = {}, headers = {} }) => {
  const isFormData = typeof FormData !== 'undefined' && data instanceof FormData;

  const config = {
    method,
    url: endpoint,
    headers: { ...headers },
  };

  // Attach credentials only when explicitly enabled to avoid CORS issues
  if (USE_CREDENTIALS) config.withCredentials = true;

  if (method.toUpperCase() === "GET") {
    config.params = data; // query params for GET
  } else {
    // For FormData let the browser/axios set Content-Type including boundary
    if (isFormData) {
      config.data = data;
      // ensure we don't set Content-Type header here
      if (config.headers["Content-Type"]) delete config.headers["Content-Type"];
    } else {
      config.data = data; // body for POST/PUT
      config.headers["Content-Type"] = config.headers["Content-Type"] || "application/json";
    }
  }

  return api(config);
};

export default ApiService;
