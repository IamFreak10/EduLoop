import React, { Children, use } from 'react';
import { Authcontext } from '../Context/Authcontext';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(Authcontext);
 
  if (loading) {
    return (
      <div className="flex justify-center text-5xl">
        <span className="loading text-center loading-bars  loading-xl"></span>
      </div>
    );
  }

  if(user){
    return children;
  }

  return <Navigate to="/signIn" state={location.pathname} replace></Navigate>;

 
};

export default PrivateRoute;
