import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Categories API
export const categoriesAPI = {
  getAll: () => api.get('/categories/'),
  getById: (id) => api.get(`/categories/${id}/`),
  create: (data) => api.post('/categories/', data),
  update: (id, data) => api.put(`/categories/${id}/`, data),
  delete: (id) => api.delete(`/categories/${id}/`),
};

// Products API
export const productsAPI = {
  getAll: (params) => api.get('/products/', { params }),
  getById: (id) => api.get(`/products/${id}/`),
  create: (data) => api.post('/products/', data),
  update: (id, data) => api.put(`/products/${id}/`, data),
  delete: (id) => api.delete(`/products/${id}/`),
};

// Contact API
export const contactAPI = {
  getAll: () => api.get('/contact/'),
  create: (data) => api.post('/contact/', data),
  delete: (id) => api.delete(`/contact/${id}/`),
};

// Shipment API
export const shipmentAPI = {
  getAll: () => api.get('/shipments/'),
  getById: (id) => api.get(`/shipments/${id}/`),
  create: (data) => api.post('/shipments/', data),
  update: (id, data) => api.put(`/shipments/${id}/`, data),
  delete: (id) => api.delete(`/shipments/${id}/`),
};

export default api;
