import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../../assets/Lotties/RegisterAn.json';
import { Authcontext } from '../../Context/Authcontext';
import SocialLogin from '../Shared/SocialLogin';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
const Register = () => {
  const { createUser, signOutUser, updateUserProfile } = use(Authcontext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    const userData = { displayName: name, photoURL: photo };
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;
    if (hasLowercase && hasUppercase && isLongEnough) {
      // register user
      createUser(email, password)
        .then(() => {
          // console.log(userData);
          updateUserProfile(userData).then((res) => {
            signOutUser().then(() => {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Register Successfully',
                showConfirmButton: false,
                timer: 1500,
              });
            });
          });
        })

        .catch((error) => {
          console.error(error);
        });
    } else {
      let error = [];
      if (!hasLowercase) {
        error.push('Password must contain at least one lowercase letter.');
      }
      if (!hasUppercase) {
        error.push('Password must contain at least one uppercase letter.');
      }
      if (!isLongEnough) {
        error.push('Password must be at least 6 characters long.');
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.join('\n'),
      });
    }
  };
  return (
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
                <h1 className="text-5xl font-bold text-center">Register Now</h1>
                <label className="label text-sm font-bold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input bg-[#ede7f6] "
                  placeholder="Email"
                />
                <label className="label text-sm font-bold">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input bg-[#ede7f6] "
                  placeholder="Name"
                />

                <label className="label text-sm font-bold">Photo</label>
                <input
                  type="url"
                  className="input bg-[#ede7f6] "
                  placeholder="Photo"
                  name="photo"
                />
                <label className="label text-sm font-bold">Password</label>
                <input
                  type="password"
                  className="input bg-[#ede7f6] "
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <h1 className="label font-bold text-primary dark:text-green-500">
                    Already have an account?
                  </h1>
                  <Link
                    className="label font-bold text-primary dark:text-green-500"
                    to="/signIn"
                  >
                    Login
                  </Link>
                </div>
                <button className="btn max-w-[95%] btn-primary  dark:btn-accent mt-4">
                  Register
                </button>
              </fieldset>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
