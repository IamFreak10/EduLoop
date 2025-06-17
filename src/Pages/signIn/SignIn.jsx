import React, { use, useState } from 'react';
import { Authcontext } from '../../Context/Authcontext';
import LoginLottie from '../../assets/Lotties/LoginAn.json';
import Lottie from 'lottie-react';
import SocialLogin from '../Shared/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';
import { Fade } from 'react-awesome-reveal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { signInUser, setLoading } = use(Authcontext);
  const location = useLocation();
  const from = location.state || '/';
  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    // SignIn Register

    signInUser(email, password)
      .then(() => {
       Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'SignIn Successfully',
         showConfirmButton: false,
         timer: 1500,
       })
        navigate(from);
        // setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Fade triggerOnce={true} direction="up" duration={1000}>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              style={{ width: '100%', height: '100%' }}
              animationData={LoginLottie}
              loop={true}
            ></Lottie>
          </div>
          <div className="card   dark:bg-[#213047] w-full max-w-sm   shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignIn}>
                <fieldset className="fieldset">
                  <h1 className="text-5xl text-amber-600  dark:text-accent font-bold text-center">
                    Login Now!!
                  </h1>
                  <label className="text-amber-900 dark:text-accent  label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="input bg-amber-100 dark:bg-gray-200"
                    placeholder="Email"
                  />
                  <div className="relative">
                    <label className="label text-amber-900 dark:text-accent text-sm font-bold">
                      Password
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="input bg-amber-100 dark:bg-gray-200"
                      placeholder="Password"
                      name="password"
                    />
                    <span
                      onClick={handleShowPassword}
                      className="absolute top-8 right-8 cursor-pointer"
                    >
                      {showPassword ? (
                        <FaEye className="text-xl"></FaEye>
                      ) : (
                        <FaEyeSlash className="text-xl"></FaEyeSlash>
                      )}
                    </span>
                  </div>
                  <div>
                    <h1 className="label font-bold text-primary dark:text-green-500">
                      Don't have an account?
                    </h1>
                    <Link
                      className="label font-bold text-primary dark:text-green-500 link"
                      to="/register"
                    >
                      Register Now!!
                    </Link>
                  </div>
                  <button className="btn max-w-[98%] btn-warning  dark:btn-accent mt-4">
                    Log In
                  </button>
                </fieldset>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default SignIn;
