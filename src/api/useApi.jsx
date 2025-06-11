import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useApi = () => {
    const axiosSecure = useAxiosSecure();
    const myApplicationsPromise = (email) => {
        return axiosSecure
            .get(`/applications?email=${email}`)
            .then((res) => res.data);
    }
    return {
        myApplicationsPromise,
    };
};

export default useApi;