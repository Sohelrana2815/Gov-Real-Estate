import { BiMenu } from "react-icons/bi";
import logo from "../../assets/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logout, loading } = useAuth();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Logout successfully!",
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-dots loading-lg text-[#1563DF]"></span>
      </div>
    );
  }

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="contactUs">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="404">404 Page</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className=" shadow-md bg-base-100">
        <div className="navbar max-w-screen-2xl mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="lg:hidden">
                <BiMenu className="text-xl" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/">
              <div className="flex items-center">
                <img src={logo} alt="" className="w-10 md:w-24" />
                <p className="md:text-xl font-bold text-sm">Gov Real Estate</p>
              </div>
            </Link>
          </div>
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end gap-2">
            {user ? (
              <>
                <div className="avatar cursor-pointer" title={user.displayName}>
                  <div className="w-8 md:w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn bg-[#1563DF] btn-sm md:btn-md text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn rounded-full  text-lg  btn-outline px-10 hover:bg-[#1563DF] hover:text-white border-[#1563DF] hover:border-none">
                    Sign in
                  </button>
                </Link>
                <Link to="/signUp">
                  <button className="btn bg-[#1563DF] text-white px-10 rounded-full text-lg">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
