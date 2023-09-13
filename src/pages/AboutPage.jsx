import ReviewSection from "../components/Home/ReviewSection";

import StorySection from "../components/About/StorySection";
import Instructors from "../components/About/Instructors";

const AboutPage = () => {
  return (
    <div className="bg-[#FAFAFA] text-[#2F3F50]">
      <div className="text-center bg-[#076FB3] text-white space-y-10 py-12 pb-36 mb-12 max-sm:pt-48">
        <h2 className="text-5xl font-bold">About Us</h2>
        <p className="w-[70%] lg:w-1/2 mx-auto text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
      <StorySection />
      <Instructors />
      <ReviewSection />
    </div>
  );
};

export default AboutPage;
