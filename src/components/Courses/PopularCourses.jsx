import CourseList from "./CourseList";
import { useSelector } from "react-redux";

const PopularCourses = () => {
  const courseDetails = useSelector((state) => state.course.courseDetails);
  const MAIN_COURSES = courseDetails.slice(0, 3);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 md:gap-3">
        {MAIN_COURSES.map((course) => (
          <CourseList
            key={course.id}
            courseId={course.id}
            courseIcon={course.image.large}
            courseTitle={course.title}
            courseDescription={course.headline}
          />
        ))}
      </div>
    </>
  );
};

export default PopularCourses;
