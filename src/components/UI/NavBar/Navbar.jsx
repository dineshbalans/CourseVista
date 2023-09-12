import { NavLink } from "react-router-dom";
import childLogo from "../../../assets/logo-bg-blue.png";
import parentLogo from "../../../assets/logo.png";
import MenuBar from "./MenuBar";
import { useDispatch, useSelector } from "react-redux";
import { menuBarActions } from "../../../store/menuBarSlice";

const Navbar = ({ style }) => {
  const navStyle =
    style === "children" ? "p-2 bg-[#076FB3]" : "p-2 bg-transparent";
  const courseVistaLogo = style === "parent" ? parentLogo : childLogo;

  const dispatch = useDispatch();
  const menuIsVisible = useSelector((state) => state.ui.menuVisibility);

  return (
    <>
      <section className={navStyle}>
        <div className="w-[95%] xl:w-[85%] mx-auto my-2 ">
          <div className="flex ">
            <div className="w-1/2 animate-fadeInLeft ">
              <img
                src={courseVistaLogo}
                alt=""
                className="w-[75%] md:w-[50%] lg:w-[40%] "
              />
            </div>

            <div className="flex w-1/2 my-auto animate-fadeInRight">
              {!menuIsVisible && (
                <button
                  className="ml-auto lg:hidden mx-5 animate-fadeInRight"
                  onClick={() => dispatch(menuBarActions.toggle())}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 h-10 border p-[6px] bg-white text-neutral-500 rounded"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              )}
              <div className="hidden lg:flex space-x-7 text-white text-md font-semibold ml-auto">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    const style = "hover:scale-110 duration-300 ";
                    return isActive
                      ? style + " underline animate-flipInX"
                      : style;
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/coursevista/courses"
                  className={({ isActive }) => {
                    const style = "hover:scale-110 duration-300 ";
                    return isActive
                      ? style + " underline animate-flipInX"
                      : style;
                  }}
                >
                  All Courses
                </NavLink>
                <NavLink
                  to="/coursevista/about"
                  className={({ isActive }) => {
                    const style = "hover:scale-110 duration-300";
                    return isActive
                      ? style + " underline animate-flipInX"
                      : style;
                  }}
                >
                  About
                </NavLink>
                <NavLink
                  to="/coursevista/contact"
                  className={({ isActive }) => {
                    const style = "hover:scale-110 duration-300";
                    return isActive
                      ? style + " underline animate-flipInX"
                      : style;
                  }}
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/coursevista/my-account"
                  className={({ isActive }) => {
                    const style = "hover:scale-110 duration-300";
                    return isActive
                      ? style + " underline animate-flipInX"
                      : style;
                  }}
                >
                  My Account
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      {menuIsVisible && <MenuBar />}
    </>
  );
};

export default Navbar;
