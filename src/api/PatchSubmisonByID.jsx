import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const PatchSubmisonByID = () => {
  const axiosSecure = useAxiosSecure();
  const updateSubmissionPromise = (id, data) => {
    return axiosSecure
      .patch(`/submissions/${id}`, data)
      .then((res) => res.data);
  };
  return { updateSubmissionPromise };
};

export default PatchSubmisonByID;
