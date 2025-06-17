import Lottie from 'lottie-react';
import React, { use, useState } from 'react';
import registerLottie from '../../assets/Lotties/RegisterAn.json';
import { Authcontext } from '../../Context/Authcontext';
import SocialLogin from '../Shared/SocialLogin';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
import { Fade } from 'react-awesome-reveal';
import { FaEye, FaEyeSlash, FaSlash } from 'react-icons/fa';
const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, signOutUser, updateUserProfile } = use(Authcontext);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
const handleRegister = (event) => {
  event.preventDefault();
  const form = event.target;

  const email = form.email.value.trim();
  const password = form.password.value.trim();
  const photo = form.photo.value.trim();
  const name = form.name.value.trim();
  const userData = { displayName: name, photoURL: photo };

  // Password validations
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const isLongEnough = password.length >= 6;

  // Optional: log validation results for debugging
  console.log({ hasLowercase, hasUppercase, isLongEnough, hasSpecialChar });

  if (hasLowercase && hasUppercase && isLongEnough && hasSpecialChar) {
    createUser(email, password)
      .then(() => {
        return updateUserProfile(userData);
      })
      .then(() => {
        return signOutUser();
      })
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registered Successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate('/signIn');
        });
        form.reset(); 
      })
      .catch((error) => {
        console.error('Registration error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message,
        });
      });
  } else {
    const errorMessages = [];
    if (!hasLowercase)
      errorMessages.push('Password must contain at least one lowercase letter.');
    if (!hasUppercase)
      errorMessages.push('Password must contain at least one uppercase letter.');
    if (!isLongEnough)
      errorMessages.push('Password must be at least 6 characters long.');
    if (!hasSpecialChar)
      errorMessages.push('Password must contain at least one special character.');

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: errorMessages.join('<br>'), 
    });
  }
};

  return (
    <Fade triggerOnce={true} direction="up" duration={1000}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '1000px',
                maxHeight: '1280px',
              }}
              animationData={registerLottie}
              loop={true}
            ></Lottie>
          </div>
          <div className="card dark:bg-[#213047] w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <h1 className="text-5xl  text-amber-600  dark:text-accent font-bold text-center">
                    Register Now
                  </h1>
                  <label className="label text-amber-900 dark:text-accent text-sm font-bold">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="input bg-amber-100 dark:bg-gray-200 "
                    placeholder="Email"
                  />
                  <label className="label text-amber-900 dark:text-accent text-sm font-bold">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="input bg-amber-100 dark:bg-gray-200 "
                    placeholder="Name"
                  />

                  <label className="label text-amber-900 dark:text-accent text-sm font-bold">
                    Photo
                  </label>
                  <input
                    type="url"
                    className="input bg-amber-100 dark:bg-gray-200 "
                    placeholder="Photo"
                    name="photo"
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
                      Already have an account?
                    </h1>
                    <Link
                      className="label font-bold text-primary dark:text-green-500 link"
                      to="/signIn"
                    >
                      Login
                    </Link>
                  </div>
                  <button className="btn max-w-[95%] btn-warning  dark:btn-accent mt-4">
                    Register
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

export default Register;
