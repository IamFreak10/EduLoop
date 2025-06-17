import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { Authcontext } from '../../Context/Authcontext';
import { FaUserCircle } from 'react-icons/fa'; // 👈 FontAwesome user icon

const Navbar = () => {
  const { user, signOutUser } = useContext(Authcontext);

  const handleSignOut = () => {
    signOutUser().then(() => {
      console.log('Signed out');
    });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-amber-600 dark:text-accent' : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/assigments"
          className={({ isActive }) =>
            isActive ? 'text-amber-600 dark:text-accent' : ''
          }
        >
          Assignments
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/PendingAssignments"
            className={({ isActive }) =>
              isActive ? 'text-amber-600 dark:text-accent' : ''
            }
          >
            Pending Assignments
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-10 navbar rounded-b-sm bg-[#F6F0F0]  dark:bg-[#1e293b] shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#ede7f6] rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="hidden btn btn-ghost md:flex  items-center  ">
          <img
            className="relative -ml-[10px]  w-[100px] mb-[10px]"
            src="/logo.png"
            alt="Logo"
          />
          <NavLink
            to="/"
            className="absolute   normal-case  text-sm md:text-3xl  "
          >
            <span className="text-[#21618c]">Edu</span>
            <span className="text-[#641e16]  font-extrabold">L</span>
            <span className="text-[#21618c]">oop</span>
          </NavLink>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[15px]">{links}</ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          <div
            className="tooltip tooltip-left dropdown dropdown-end "
            data-tip={user.displayName}
          >
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mr-2"
            >
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                {/* If user has a photoURL, use that */}
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="rounded-full"
                  />
                ) : (
                  <FaUserCircle className="text-xl text-gray-600" />
                )}
              </div>
            </button>
            <button
              onClick={handleSignOut}
              className="btn btn-sm btn-primary dark:btn-accent"
            >
              Sign Out
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/CreateAssignment">Create Assignment</NavLink>
              </li>
              <li>
                <NavLink to="/MyAttemptAssignments">
                  My Attempt Assignments
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <NavLink className=" btn  px-4 py-2 btn-warning dark:btn-accent btn-outline" to="/register">
              Register
            </NavLink>
            <NavLink
              className="btn px-4 py-2 btn-warning  dark:btn-accent"
              to="/signIn"
            >
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
