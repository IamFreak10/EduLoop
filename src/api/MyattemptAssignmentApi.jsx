import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyattemptAssignmentApi = () => {
  const axiosSecure = useAxiosSecure();
  const myAttemptAssignmenPromise = (email) => {
    return axiosSecure
      .get(`/myattemptassignments?email=${email}`)
      .then((res) => res.data);
  };
  return { myAttemptAssignmenPromise };
};

export default MyattemptAssignmentApi;
