import { useNavigate } from "react-router-dom";

const CourseList = (props) => {
  const { courseId, courseIcon, courseTitle, courseDescription } = props;
  const navigate = useNavigate();

  const enrollButtonClickHandler = () => {
    navigate(`/coursevista/courses/${courseId}`);
  };
  return (
    <div class="md:w-[31%] lg:w-[31.5%] xl:w-[29%] bg-white space-y-1 m-1 xl:m-5 flex flex-col border pb-3 rounded-md hover:shadow-2xl hover:scale-110 duration-300">
      <img src={courseIcon} alt="" className="rounded" />
      <h2 className="p-4 font-bold text-xl">{courseTitle}</h2>
      <div className="px-3 pb-2 flex-1">{courseDescription}</div>
      <button
        className="bg-blue-600 text-white rounded py-1 w-[93%] mx-auto"
        onClick={enrollButtonClickHandler}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseList;

// <div class="w-1/3 p-6 flex flex-col border bg-white">
//   <img src={courseIcon} alt="" />
//   <h2 className="font-bold text-xl">{courseTitle}</h2>
//   <h4 className="py-3">{courseDescription}</h4>
//   <button className="bg-blue-600 text-white rounded py-1 w-full">
//     Buy Now
//   </button>
// </div>

// <div className=" p-3 ">
//   <div className="border bg-white h-full">
//     <img src={courseIcon} alt="" />
//     <div className="px-5 pt-3 pb-7">
//       <h2 className="font-bold text-xl">{courseTitle}</h2>
//       <p className="py-3">{courseDescription}</p>
//       <button className="bg-blue-600 text-white rounded py-1 w-full ">
//         Buy Now
//       </button>
//     </div>
//   </div>
// </div>
