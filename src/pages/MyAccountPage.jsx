import PopularCourses from "../components/Courses/PopularCourses";
import LoginForm from "../components/My-Account/LoginForm";

const MyAccountPage = () => {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="text-center bg-[#076FB3] text-white space-y-10 py-12 pb-36 max-sm:pt-20">
          <h2 className="text-5xl font-bold"> My Account</h2>
          <p className="w-1/2 mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <LoginForm />
        <div className="space-y-5 text-[#2F3F50] mb-8">
          <div className="w-[80%] xl:w-1/2 mx-auto space-y-5 py-5">
            <h1 className="text-[27.6px] md:text-4xl font-bold text-center">
              Our Most Popular Courses
            </h1>
            <h3 className="text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              eros ut dui bibendum ultricies. Maecenas egestas fringilla semper.
            </h3>
          </div>
          <div className="p-8 xl:p-10 lg:mx-8 xl:mx-9">
            <PopularCourses />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccountPage;
