import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          // Unauthorized - Clear token and redirect to login
          console.error("🔒 Unauthorized - Please login again");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login";
          break;

        case 403:
          // Forbidden
          console.error("🚫 Forbidden - You don't have permission");
          break;

        case 404:
          // Not found
          console.error("🔍 Resource not found");
          break;

        case 500:
          // Server error
          console.error("💥 Server error - Please try again later");
          break;

        default:
          console.error(
            `❌ Error ${status}:`,
            data?.message || "Something went wrong",
          );
      }

      return Promise.reject({
        status,
        message: data?.message || "An error occurred",
        data,
      });
    } else if (error.request) {
      console.error("📡 Network Error - No response from server");
      return Promise.reject({
        message: "Network error - Please check your connection",
      });
    } else {
      console.error("⚠️ Error:", error.message);
      return Promise.reject({
        message: error.message || "An unexpected error occurred",
      });
    }
  },
);

export default axiosInstance;
