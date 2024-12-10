// src/services/api.js
import axios from 'axios';
import { API_BASE_URL, AUTH_TOKEN_KEY } from '@/config/constants';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const bikeService = {
  getBikes: () => api.get('/bikes'),
  getBikeDetails: (id) => api.get(`/bikes/${id}`),
  getComparison: (ids) => api.get(`/bikes/compare?ids=${ids.join(',')}`),
};

export const bookingService = {
  bookTestRide: (data) => api.post('/bookings/test-ride', data),
  getBookings: () => api.get('/bookings'),
};

export const userService = {
  updateProfile: (data) => api.put('/user/profile', data),
  getNotifications: () => api.get('/user/notifications'),
};

