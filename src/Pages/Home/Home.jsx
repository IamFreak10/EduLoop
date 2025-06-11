import React, { use, useEffect, useState } from 'react';
import Banner from './Banner';

import { Authcontext } from '../../Context/Authcontext';
import Faq from './Faq';
import Swal from 'sweetalert2';

const Home = () => {
  const { user } = use(Authcontext);
  console.log(user);
 
  return (
    <div>
      <Banner></Banner>
      <Faq></Faq>
      
    </div>
  );
};

export default Home;
