import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const buttonNaviagate = () => {
    navigate("/coursevista/courses");
  };
  return (
    <section className="bg-[#076FB3] pt-5 text-white">
      <div className="text-center space-y-12 py-14">
        <h1 className="text-4xl font-bold ">
          Join Our 7452 Happy Students Today!
        </h1>
        <h5 className="w-[90%] md:w-[60%] xl:w-[50%] mx-auto">
          Enter description text here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo.
        </h5>
        <button
          onClick={buttonNaviagate}
          className="bg-white text-blue-700 text-md font-medium my-3 p-3 rounded-full w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 mx-auto hover:scale-110 duration-300"
        >
          Start Learning
        </button>
      </div>
      <h2 className="text-center border-t py-8 text-lg">
        Copyright © 2023 CourseVista
      </h2>
    </section>
  );
};

export default Footer;
