import React, { use } from 'react';
import { Authcontext } from '../../Context/Authcontext';
import LoginLottie from '../../assets/Lotties/LoginAn.json';
import Lottie from 'lottie-react';
import SocialLogin from '../Shared/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';
const SignIn = () => {
  const { signInUser, setLoading } = use(Authcontext);
  const location = useLocation();
  const from = location.state || '/';
  const navigate = useNavigate();
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // SignIn Register

    signInUser(email, password)
      .then(() => {
        alert('SignIn Successfully');
        navigate(from);
        // setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: '100%', height: '100%' }}
            animationData={LoginLottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="card dark:bg-[#213047] w-full max-w-sm   shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <h1 className="text-5xl font-bold text-center">SignIn now!</h1>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input bg-[#ede7f6]"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input bg-[#ede7f6]"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <h1 className="label font-bold text-primary dark:text-green-500">
                    Don't have an account?
                  </h1>
                  <Link
                    className="label font-bold text-primary dark:text-green-500"
                    to="/register"
                  >
                    Register Now!!
                  </Link>
                </div>
                <button className="btn max-w-[98%] btn-primary  dark:btn-accent mt-4">
                  Log In
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

export default SignIn;
