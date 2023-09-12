import { useEffect, useState } from "react";
import ReviewSection from "../components/Home/ReviewSection";
import { useDispatch, useSelector } from "react-redux";
import { courseActions } from "../store/courseSlice";
import { transformData } from "../utils/helperFunctions";
import CourseList from "../components/Courses/CourseList";
import Pagination from "../components/UI/Pagination";

let flag = true;

const CoursesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const courseDetails = useSelector((state) => state.course.courseDetails);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = courseDetails.slice(startIndex, endIndex);
 
  useEffect(() => {
    if (flag) {
      flag = false;
      const getCourses = async () => {
        const response = await fetch(
          "https://coursevista-default-rtdb.asia-southeast1.firebasedatabase.app/results.json"
          // "https://www.udemy.com/api-2.0/courses/",
          // {
          //   headers: {
          //     Accept: "application/json, text/plain, */*",
          //     Authorization:
          //       "Basic NFpWcFg5ZXA0dk56dnZ3N3NIcUhkcmVzOEowR2dxM0VTeTRZakNlczpIZmlKR25HeGRycVBybnZVdGY0dldHendmNVdkOHJKNFdmemZ3eHRkU1F2UXMxTWFFc0tJOFN2M0JTS0pwN1VaV2RmYUpUWnNiVlF0NmZiT1RNZE11TXQ4RUxMMXdhdkN6cHhFZkowYk1YemhFcFVSQU9EdktsbG83VlFqakg5MQ==",
          //     "Content-Type": "application/json",
          //   },
          // }
        );
        if (!response.ok) {
          console.log("error");
        }
        const data = await response.json();
        dispatch(courseActions.addCourses(transformData(data)));
        setIsLoading(false);
      };
      setIsLoading(true);
      getCourses();
    }
  }, []);

  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center bg-[#076FB3] text-white space-y-10 py-12 pb-36 mb-12 max-sm:pt-44">
        <h2 className="text-5xl font-bold">All Courses</h2>
        <p className="w-[80%] lg:w-1/2 mx-auto text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
      {/* Loading Animation */}
      {isLoading && (
        <div className="flex justify-center gap-3">
          <div className="w-8 h-8 border-4 rounded-full border-b-[#076FB3] animate-twSpin animate-infinite" />
          <span className="my-auto text-2xl font-bold text-gray-500/100 animate-twPulse animate-infinite">
            Loading...
          </span>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-5 md:gap-3 p-10 xl:mx-9 -mb-24">
        {currentData.map((course) => (
          <CourseList
            key={course.id}
            courseId={course.id}
            courseIcon={course.image.large}
            courseTitle={course.title}
            courseDescription={course.headline}
          />
        ))}
      </div>
      <Pagination
        data={courseDetails}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
      />
      <ReviewSection />
    </div>
  );
};

export default CoursesPage;
