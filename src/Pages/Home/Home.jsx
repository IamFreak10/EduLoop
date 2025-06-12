import React, { use, useEffect, useState } from 'react';
import Banner from './Banner';

import { Authcontext } from '../../Context/Authcontext';
import Faq from './Faq';
import Swal from 'sweetalert2';
import FeatureSwiper from './FeatureSwiper';


const Home = () => {
  const { user } = use(Authcontext);
  console.log(user);
 
  return (
    <div>
      <Banner></Banner>
     <FeatureSwiper></FeatureSwiper>
      <Faq></Faq>
      
    </div>
  );
};

export default Home;
