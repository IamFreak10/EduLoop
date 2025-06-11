import React, { use } from 'react';
import { Authcontext } from '../Context/Authcontext';

const UseAuth = () => {
  const authInfo = use(Authcontext);
  return authInfo;
};

export default UseAuth;
