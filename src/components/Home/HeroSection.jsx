import { useNavigate } from "react-router-dom";
import Navbar from "../UI/NavBar/Navbar";
import HomeCards from "./HomeCards";

const HeroSection = () => {
  const navigate = useNavigate();
  const buttonNaviagate = () => {
    navigate("/coursevista/courses");
  };

  return (
    <section
      className="h-fit bg-no-repeat bg-cover bg-center transform -scale-x-100 "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div
        class="w-full h-fit  pb-60 flex flex-wrap justify-center 
             bg-[#0D68AE]/70 backdrop-brightness-75 transform -scale-x-100"
      >
        <div className="w-full animate-fadeIn animate-delay-300">
          <Navbar style="parent" />
          <div className="w-[90%] lg:w-[70%] xl:w-[60%] flex flex-col mx-auto mb-6">
            <h1 className="text-white text-2xl md:text-5xl font-bold mt-52 lg:mt-32 text-center">
              Learn from Industry Experts
            </h1>
            <h3 className="text-white text-base md:text-lg m-10 text-center leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              dolorem modi at repellat facilis nam quo optio laboriosam maxime,
              eos, quia sint?
            </h3>
            <button
              onClick={buttonNaviagate}
              className="bg-white text-blue-700 text-md font-medium my-3 p-3 rounded-full w-1/2 md:w-1/4 mx-auto hover:scale-110 duration-300"
            >
              View All Courses
            </button>
          </div>
          <HomeCards />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
