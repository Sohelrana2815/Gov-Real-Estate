import { BiMenu } from "react-icons/bi";
import logo from "../../assets/logo/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="border bg-base-100">
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
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <img src={logo} alt="" className="w-10 md:w-24" />
              <p className="md:text-xl font-bold text-sm">Gov Real Estate</p>
            </div>
          </div>
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <a className="btn rounded-full  text-lg  btn-outline px-10 hover:bg-[#1563DF] hover:text-white border-[#1563DF] hover:border-none">
              Sign in
            </a>
            <a className="btn bg-[#1563DF] text-white px-10 rounded-full text-lg">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
