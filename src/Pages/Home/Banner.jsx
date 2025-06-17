import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';
import { TypeAnimation } from 'react-type-animation';
import BannerLottie from '../../assets/Lotties/BanneLottie.json';
import Lottie from 'lottie-react';
const Banner = () => {
  const [xMotion, setXMotion] = useState([]);
  const [yMotion, setYMotion] = useState([]);

  useEffect(() => {
    const updateAnimation = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        // md and above
        setXMotion([100, 150, 100]);
        setYMotion([]);
      } else {
        // below md
        setXMotion([]);
        setYMotion([0, 20, 0]);
      }
    };

    updateAnimation();
    window.addEventListener('resize', updateAnimation);
    return () => window.removeEventListener('resize', updateAnimation);
  }, []);
  return (
    <div className="hero bg-[#FADA7A40] dark:bg-[#213047]/80 md:min-h-screen shadow-2xl rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="max-w-[200px]  md:max-w-sm rounded-t-4xl border-s-8 border-b-8 border-blue-500 rounded-br-4xl shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: xMotion, y: yMotion }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="max-w-[200px] md:max-w-sm rounded-t-4xl border-s-8 border-b-8 border-blue-500 rounded-br-4xl shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <div className="text-center lg:text-left top-58 md:top-5 absolute  -z-10">
            <Lottie
            className='max-w-[300px] md:max-w-[600px] max-h-[400px] md:max-h-[600px]'
              style={{ width: '600px', height: '600px' }}
              animationData={BannerLottie}
              loop={true}
            ></Lottie>
          </div>
          <div className="relative">
            <div className="flex gap-x-2 mt-39">
              <motion.h1
                initial={{ scale: 8 }}
                animate={{ scale: 1, transition: { duration: 1 } }}
                className=" text-xl md:text-5xl font-bold"
              >
                <motion.span
                  initial={{ scale: 2 }}
                  animate={{
                    color: ['#ff5733', '#33c1ff', '#8e44ad', '#ff5733'],
                    scale: 5,
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className=""
                >
                  Study
                </motion.span>
              </motion.h1>
              <motion.h1
                initial={{ scale: 6 }}
                animate={{ scale: 1, transition: { duration: 2 } }}
                className="text-xl md:text-5xl font-bold"
              >
                <motion.span
                  initial={{ scale: 2 }}
                  animate={{
                    color: ['#ff5733', '#33c1ff', '#8e44ad', '#ff5733'],
                    scale: 5,
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className=""
                >
                  Smarter,
                </motion.span>
              </motion.h1>
              <motion.h1
                initial={{ scale: 4 }}
                animate={{ scale: 1, transition: { duration: 3 } }}
                className="text-xl md:text-5xl font-bold"
              >
                <motion.span
                  initial={{ scale: 2 }}
                  animate={{
                    color: ['#ff5733', '#33c1ff', '#8e44ad', '#ff5733'],
                    scale: 5,
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className=""
                >
                  Together.
                </motion.span>
              </motion.h1>
            </div>
            <p>
              <TypeAnimation
                className=" md:text-2xl"
                sequence={[
                  3000,
                  'Create, complete, and grade assignments with your study group — anytime, anywhere.',
                  3000,
                ]}
                speed={40}
                wrapper="span"
                repeat={1}
              />
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
