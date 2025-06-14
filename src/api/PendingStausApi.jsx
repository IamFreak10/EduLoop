import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const PendingStausApi = () => {
    const axiosSecure=useAxiosSecure();
    const PendingAssignmentsPromise=()=>{
        return axiosSecure.get('/submissions?status=Pending').then(res=>res.data);
    };

   return {PendingAssignmentsPromise};
};

export default PendingStausApi;