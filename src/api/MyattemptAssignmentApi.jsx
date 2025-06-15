import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyattemptAssignmentApi = () => {
  const axiosSecure = useAxiosSecure();
  const myAttemptAssignmenPromise = (email) => {
    return axiosSecure
      // .get(`/submissions?email=${email}`)
      .get('/submissions?email=mahfuj.cse10.bu@gmail.com')
      .then((res) => res.data);
  };
  return { myAttemptAssignmenPromise };
};

export default MyattemptAssignmentApi;
