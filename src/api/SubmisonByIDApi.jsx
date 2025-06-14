import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const SubmisonByIDApi = () => {
    const axiosSecure=useAxiosSecure();
    const SubmisonByIDPromise=(id)=>{
        return axiosSecure.get(`/submissions/${id}`).then(res=>res.data);
    };
   return {SubmisonByIDPromise};
};

export default SubmisonByIDApi;