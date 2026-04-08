import axiosInstance from "./axios";

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};

export const refreshToken = async (refreshToken) => {
  const response = await axiosInstance.post("/auth/refresh", { refreshToken });
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};

export const logoutUser = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  return { success: true, message: "Logged out successfully" };
};
