import React, { useContext } from 'react';
import bg from '../../public/samd_gjmu_231017.jpg';
import dark from '../../public/des37.jpg';
import { Authcontext } from '../Context/Authcontext';

const RootBG = () => {
  const { dmode } = useContext(Authcontext);

  if (dmode) {
    return (
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img
          src={dark}
          alt="Dark Background"
          className="w-full h-full object-cover  "
        />
      </div>
    );
  } else {
    return (
      <div className="fixed top-0 left-0 w-full h-full -z-10 brightness-90">
        <img
          src={bg}
          alt="Light Background"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
};

export default RootBG;
