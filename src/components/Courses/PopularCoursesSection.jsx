import PopularCourses from "./PopularCourses";

const PopularCoursesSection = () => {
  return (
    <section className="mt-[175%] md:mt-36 xl:mt-48 text-[#2F3F50] ">
      <div className=" lg:w-[90%] mx-auto p-2 py-24">
        <div className="space-y-5">
          <div className="w-[70%]  lg:w-1/2 mx-auto space-y-5 py-5">
            <h1 className="text-4xl font-bold text-center">
              Our Most Popular Courses
            </h1>
            <h3 className="text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              eros ut dui bibendum ultricies. Maecenas egestas fringilla semper.
            </h3>
          </div>
          <PopularCourses />
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
