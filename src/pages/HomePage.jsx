import HeroSection from "../components/Home/HeroSection";
import MainSection from "../components/Home/MainSection";
import ReviewSection from "../components/Home/ReviewSection";
import Footer from "../components/UI/Footer";

const HomePage = () => {
 

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
