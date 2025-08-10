
import Banner from './Banner';

import { Authcontext } from '../../Context/Authcontext';
import Faq from './Faq';
import Swal from 'sweetalert2';
import FeatureSwiper from './FeatureSwiper';
import StatsCounter from './StatsCounter';




const Home = () => {
 
 
  return (
    <div>
      <Banner></Banner>
     <FeatureSwiper></FeatureSwiper>
      <Faq></Faq>
      <StatsCounter></StatsCounter>
      
    </div>
  );
};

export default Home;
