import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const { user, signOutSystem } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutSystem()
      .then((result) => {
        // toast.success(`Successfully Sign Out ${user?.displayName}`);
      })
      .catch(() => {});
  };
  console.log(user);
    return (
        <div >
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-600 rounded-box w-52"
              >
                <li>
                  <Link to="">Blogs</Link>
                </li>
                <li>
                  <Link to="/sign-up">SignUp</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              Kids Truck
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/sign-up">SignUp</Link>
              </li>
            </ul>
          </div>

          {/* <div className="navbar-end">
              <>
              <div className="avatar p-4">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-4">
                  <img  />
                </div>
                
              </div>
              <button onClick={handleSignOut} className="btn btn-primary">
                  SignOut
                </button>
              </>
              <Link to={"/login"} className="btn btn-primary">
                LogIn
              </Link>
  
            
          </div> */}


          <div className="navbar-end">
            {user ? (
              <>
              <div data-tooltip-id="tooltip" data-tooltip-content={user?.displayName} className="avatar p-4">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-4">
                  <img src={user?.photoURL} />
                </div>
                
              </div>
              <button onClick={handleSignOut} className="btn btn-primary">
                  SignOut
                </button>
              </>
            ) : (
              <Link to={"/login"} className="btn btn-primary">
                LogIn
              </Link>
            )}
  
            
          </div>
        </div>
        <Tooltip id="tooltip" />
        <Toaster></Toaster>
      </div>
    );
};

export default Navbar;