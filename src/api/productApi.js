import axiosInstance from "./axios";

export const getProducts = async (params = {}) => {
  const response = await axiosInstance.get("/products", { params });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};

export const searchProducts = async (query) => {
  const response = await axiosInstance.get(`/products/search?q=${query}`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axiosInstance.post("/products/add", product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axiosInstance.put(`/products/${id}`, product);
  return response.data;
};

export const patchProduct = async (id, updates) => {
  const response = await axiosInstance.patch(`/products/${id}`, updates);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axiosInstance.delete(`/products/${id}`);
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await axiosInstance.get(`/products/category/${category}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await axiosInstance.get("/products/categories");
  return response.data;
};
