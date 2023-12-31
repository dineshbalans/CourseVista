import { NavLink } from "react-router-dom";
import { uiActions } from "../../../store/uiSlice";
import { useDispatch } from "react-redux";

const MenuBar = () => {
  const dispatch = useDispatch();
  const menuClickHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <>
      

      <div className="lg:hidden rounded -mt-[70px] h-screen w-full absolute">
        <div className=" flex-col  h-screen w-full ml-auto py-3 lg:space-x-7 text-white text-md font-semibold animate-fadeInDown">
          <div className="flex px-5">
            <button
              className="ml-auto"
              onClick={() => dispatch(uiActions.toggle())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 bg-white text-neutral-500 p-1 rounded"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="h-full mx-2 pr-1">
            <div className="p-2 w-full flex justify-end">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  const style = "my-2  hover:scale-110 duration-300 ";
                  return isActive
                    ? style + " underline animate-flipInX"
                    : style;
                }}
                onClick={menuClickHandler}
              >
                Home
              </NavLink>
            </div>
            <div className="p-2 w-full flex justify-end">
              <NavLink
                to="/coursevista/courses"
                className={({ isActive }) => {
                  const style = "hover:scale-110 duration-300 ";
                  return isActive
                    ? style + " underline animate-flipInX"
                    : style;
                }}
                onClick={menuClickHandler}
              >
                All Courses
              </NavLink>
            </div>
            <div className="p-2 w-full flex justify-end">
              <NavLink
                to="/coursevista/about"
                className={({ isActive }) => {
                  const style = " hover:scale-110 duration-300";
                  return isActive
                    ? style + " underline animate-flipInX"
                    : style;
                }}
                onClick={menuClickHandler}
              >
                About
              </NavLink>
            </div>
            <div className="p-2 w-full flex justify-end">
              <NavLink
                to="/coursevista/contact"
                className={({ isActive }) => {
                  const style = " hover:scale-110 duration-300";
                  return isActive
                    ? style + " underline animate-flipInX"
                    : style;
                }}
                onClick={menuClickHandler}
              >
                Contact
              </NavLink>
            </div>
            <div className="p-2 w-full flex justify-end">
              <NavLink
                to="/coursevista/my-account"
                className={({ isActive }) => {
                  const style = " hover:scale-110 duration-300";
                  return isActive
                    ? style + " underline animate-flipInX"
                    : style;
                }}
                onClick={menuClickHandler}
              >
                My Account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
