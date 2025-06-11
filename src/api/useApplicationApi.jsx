import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';


const useApplicationApi = () => {
  const axiosSecure = useAxiosSecure();
  const myApplicationsPromise = (email) => {
    return axiosSecure
      .get(`/applications?email=${email}`)
      .then((res) => res.data);
  };
  return {
    myApplicationsPromise,
  };
};

export default useApplicationApi;
