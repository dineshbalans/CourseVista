import { useLoaderData } from "react-router-dom";
import HeroSection from "../components/Home/HeroSection";
import MainSection from "../components/Home/MainSection";
import ReviewSection from "../components/Home/ReviewSection";
import Footer from "../components/UI/Footer";
import { courseActions } from "../store/courseSlice";
import { transformData } from "../utils/helperFunctions";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const data = useLoaderData();
  const dispatch = useDispatch();
  dispatch(courseActions.addCourses(transformData(data)));

 

  return (
    <section className=" bg-[#FAFAFA]">
      <HeroSection />
      <MainSection />
      <ReviewSection />
      <Footer />
    </section>
  );
};

export default HomePage;
