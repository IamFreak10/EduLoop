import React from 'react';
import CountUp from 'react-countup';
import { Fade } from 'react-awesome-reveal';
import { FaGithub, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const techStack = [
    'React', 'Node.js', 'Express', 'MongoDB',
    'Firebase', 'Tailwind CSS', 'DaisyUI',
    'Framer Motion', 'TanStack Query',
    'Stripe', 'JWT', 'HTML', 'CSS', 'JavaScript', 'C', 'C++', 'Git'
  ];

  return (
    <div className="min-h-screen py-10 rounded-2xl px-4 md:px-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-6xl mx-auto">
        <Fade direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-wide">👨‍💻 About The Developer</h2>
          <p className="text-center text-lg md:text-xl mb-10">
            Passionate, persistent, and always ready to learn — meet the developer behind this creation.
          </p>
        </Fade>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Developer Info */}
          <Fade direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-pink-400">M A H F U J</h3>
              <p className="text-lg leading-relaxed">
                A creative full-stack developer currently studying Computer Science & Engineering at the University of Barishal. Loves building interactive and dynamic web experiences using modern tech stacks. Also passionate about data structures and low-level programming.
              </p>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-cyan-300">
                    <CountUp end={20} duration={2.5} />
                  </h4>
                  <p className="text-sm mt-1">Total Projects</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-yellow-300">
                    <CountUp end={14} duration={2.5} />
                  </h4>
                  <p className="text-sm mt-1">React Projects</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 text-2xl mt-4">
                <a href="https://github.com/IamFreak10" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                  <FaGithub />
                </a>
                <a href="https://www.facebook.com/Onnoncringe.IamFreak/" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/outta_no_where/" target="_blank" rel="noreferrer" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
                <a href="mailto:mahfujabdulla9@gmail.com" className="hover:text-red-400">
                  <FaEnvelope />
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-6 text-sm text-gray-300">
                <p>Email:mahfujabdulla9@gmail.com</p>
                <p>Location: Barishal, Bangladesh</p>
              </div>
            </div>
          </Fade>

          {/* Right: Developer Image & Skills */}
          <Fade direction="right">
            <div className="flex flex-col items-center">
              <img
                src="https://i.postimg.cc/65GVfHTp/IMG-9844.jpg"
                alt="Developer"
                className="rounded-3xl w-72 h-72 object-cover shadow-2xl border-4 border-pink-400"
              />

              <h4 className="mt-8 mb-2 text-xl font-semibold text-purple-300">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 justify-center max-w-lg">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-white text-black shadow-md hover:scale-105 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About; ;
