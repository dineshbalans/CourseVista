import social_media_marketing from "../../assets/social-media-marketing.jpg";
import email_marketing_strategies from "../../assets/email-marketing-strategies.jpg";
import content_marketing from "../../assets/content-marketing.jpg";
import CourseList from "./CourseList";
import { useSelector } from "react-redux";

const MAIN_COURSES = [
  {
    id: "id_01",
    icon: social_media_marketing,
    title: "Social Media Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque porta. consectetur adipiscing elit pellentesque porta.",
  },
  {
    id: "id_02",
    icon: email_marketing_strategies,
    title: "Email Marketing Strategies",
    description:
      "In porttitor ipsum eu justo condimentum euismod ullamcorper viverra.",
  },
  {
    id: "id_03",
    icon: content_marketing,
    title: "Content Marketing",
    description:
      "Repellat perspiciatis cum! Doloremque ea viverra eu doloremque.",
  },
];

const PopularCourses = () => {
  const courseDetails = useSelector(state => state.course.courseDetails);
  console.log(courseDetails);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 md:gap-3">
        {MAIN_COURSES.map((course) => (
          <CourseList
            key={course.id}
            courseId = {course.id}
            courseIcon={course.icon}
            courseTitle={course.title}
            courseDescription={course.description}
          />
        ))}
      </div>
    </>
  );
};

export default PopularCourses;
