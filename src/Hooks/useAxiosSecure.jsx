import React from 'react';
import UseAuth from './UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});
const useAxiosSecure = () => {
  const { user, signOutUser } = UseAuth();
  // Request Interceptors
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  // Response Interceptors
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        Swal.fire({
          title: 'Error!',
          text: 'You are not authorized to access this page.Login To Conitue',
          icon: 'error',
          confirmButtonText: 'OK',
        }).then(() => {
          signOutUser();
        });
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxiosSecure;
