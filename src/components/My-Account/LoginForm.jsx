import { Link } from "react-router-dom";
import login from "../../assets/login.svg";
import logging from "../../assets/logging.svg";

const LoginForm = () => {
  return (
    <section class="border-red-500 bg-[#FAFAFA] min-h-screen flex items-center justify-center">
      <div class="bg-white p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div class="w-1/2 md:block hidden ">
          <img
          src={logging}
            class="rounded-2xl"
            alt="page img"
            className="w-full h-full"
          />
        </div>
        <div class="md:w-1/2 px-5">
          <h2 class="text-2xl font-bold text-[#002D74]">Login</h2>
          <p class="text-sm mt-4 text-[#002D74]">
            If you have an account, please login
          </p>
          <form class="mt-6" action="#" method="POST">
            <div>
              <label class="block text-gray-700" htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>

            <div class="mt-4">
              <label class="block text-gray-700" htmlFor="pswd">Password</label>
              <input
                type="password"
                name="pswd"
                id="pswd"
                placeholder="Enter Password"
                minlength="6"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div class="text-right mt-2">
              <Link
                to="forgot-password"
                class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>

          <div class="mt-7 grid grid-cols-3 items-center text-gray-500">
            <hr class="border-gray-500" />
            <p class="text-center text-sm">OR</p>
            <hr class="border-gray-500" />
          </div>

          <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span class="ml-4">Login with Google</span>
          </button>

          <div class="text-sm flex justify-between items-center mt-3">
            <p>If you don't have an account...</p>
            <button class="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">
              Register
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
};
export default LoginForm;
