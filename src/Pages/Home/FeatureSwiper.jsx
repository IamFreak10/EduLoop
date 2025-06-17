// Import Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import useIsMobile from '../../Hooks/isMobile';

const FeatureSwiper = () => {
  const features = [
    {
      title: 'Create & Share Assignments',
      desc: 'Easily create assignments with title, marks, due date, and difficulty level. All users can access and respond.',
      highlight: 'Boost collaboration and productivity.',
      image: 'https://i.postimg.cc/q721rXWd/1.png',
    },
    {
      title: 'Submit & Track Progress',
      desc: 'Submit your work via Google Docs link with notes. See real-time status, feedback, and obtained marks.',
      highlight: 'Stay on top of your learning goals.',
      image: 'https://i.postimg.cc/DZKY4Y1Z/2.webp',
    },
    {
      title: 'Peer Grading System',
      desc: 'Grade your friends’ assignments and give helpful feedback. Support and grow together as a team.',
      highlight: 'Learn through teaching and review.',
      image: 'https://i.postimg.cc/rw3HMpm5/3.webp',
    },
    {
      title: 'Secure Authentication',
      desc: 'Login with email/password or Google account. User info and access routes are securely managed.',
      highlight: 'Your data, safely protected.',
      image: 'https://i.postimg.cc/43cSdT7q/4.webp',
    },
  ];
  const isMobile = useIsMobile();
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    if (!isMobile) {
      setDuration(1000);
    }
  }, [isMobile]);
  return (
    <div className="py-10">
      <Fade triggerOnce={isMobile} direction="up" duration={duration}>
        <div className="bg-[#F6F0F0] dark:bg-[#213047] max-w-[100%] mx-auto mt-10 shadow-2xl rounded-2xl flex items-center  justify-center">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="rounded-xl"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className=" flex flex-col md:flex-row items-center justify-center rounded-xl shadow-xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="md:h-[500px] w-full md:w-1/2 object-cover"
                  />
                  <div className="p-8 md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2 text-primary dark:text-accent">
                      {feature.title}
                    </h2>
                    <p className=" mb-4">{feature.desc}</p>
                    <span className="text-[#658af1] inline-block bg-primary dark:bg-accent  px-4 py-2 rounded-full font-semibold text-sm">
                      🚀 {feature.highlight}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Fade>
    </div>
  );
};

export default FeatureSwiper;
