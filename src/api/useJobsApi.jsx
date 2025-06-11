import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useJobsApi = () => {
  const axiosSecure = useAxiosSecure();
  const myJobsPromise = (email) => {
    return axiosSecure.get(`/jobs?email=${email}`).then((res) => res.data);
  };
  return { myJobsPromise };
};

export default useJobsApi;
