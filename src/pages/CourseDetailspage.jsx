import { useParams } from "react-router-dom";
import instructor from "../assets/instructor4.jpg";
import ReviewSection from "../components/Home/ReviewSection";
import CheckIcon from "../components/UI/CheckIcons";
import useContentVisibility from "../hooks/useContentVisibility";
import { useDispatch, useSelector } from "react-redux";

const CourseDetailsPage = () => {
  const OverAllCourseDetails = useSelector(
    (state) => state.course.courseDetails
  );
  const { courseId } = useParams();

  const courseDetails = OverAllCourseDetails.find(
    (course) => course.id === +courseId
  );

  const {
    contentVisibility: primaryBttnVisibility,
    changeVisibility: setprimaryBttn,
  } = useContentVisibility();

  const {
    contentVisibility: content1Visibility,
    changeVisibility: setContent1,
  } = useContentVisibility();

  const {
    contentVisibility: content2Visibility,
    changeVisibility: setContent2,
  } = useContentVisibility();

  const primaryButtonHandler = () => {
    setprimaryBttn();
    setContent1();
    setContent2();
  };
  return (
    <body className="bg-[#FAFAFA]">
      <section>
        <div className="bg-[#076FB3] p-2 text-white pb-[313px] max-sm:pt-48">
          <div className="md:w-[65%] text-center mx-auto">
            <h3 className="font-semibold text-lg p-4 tracking-widest">
              Unlock your Potential
            </h3>
            <hr className="w-20 mx-auto border" />
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-poppins p-5 leading-[50px] lg:leading-[55px] xl:leading-[60px]">
              {courseDetails.title}
            </h1>
          </div>
          <div className="flex flex-wrap px-4 max-sm:space-y-8 md:px-8 lg:px-16 xl:px-36 absolute pt-[70px]">
            <div className=" md:w-1/2 space-y-12">
              <div className="p-2 py-4 space-y-8 md:p-4 md:space-y-4">
                <p className="text-xl font-bold md:w-[75%] font-lato tracking-wider">
                  Key Concepts Covered in this Course
                </p>
                <ul className="space-y-3 md:space-y-2">
                  <li className="flex space-x-2">
                    <CheckIcon />
                    <span>Effective Writing</span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon />
                    <span>Promoting Your Content</span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon />
                    <span>Analyze & Improve Content</span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon />
                    <span>Writing Strategies</span>
                  </li>
                </ul>
              </div>
              <div className=" bg-[#FAFAFA] text-[#2F3F50] p-4 space-y-5 px-5">
                <div className="flex">
                  <img
                    src={courseDetails.instructor.image.large}
                    alt=""
                    className="w-[86px] h-24 rounded-lg"
                  />
                  <div className="text-center m-auto md:text-lg lg:text-xl font-lato tracking-wider">
                    <h3 className="font-bold">
                      {courseDetails.instructor.name}
                    </h3>
                    <h3>{courseDetails.instructor.job}</h3>
                  </div>
                </div>
                <p className="leading-7 w-[93%]">
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 shadow-2xl rounded-b-lg">
              <div className=" bg-white text-gray-700 p-4 rounded-t-lg px-10 text-center space-y-3 lg:space-y-6 border pb-[31px] max-[1137px]:pb-[56px]">
                <h1 className="text-xl font-bold font-lato tracking-wider">
                  Course Description
                </h1>
                <h3 className="leading-relaxed">{courseDetails.headline}</h3>
                <button
                  className="bg-[#076FB3] lg:w-1/2 p-2 rounded-full text-white px-5 hover:bg-[#076FB3]/80"
                  onClick={() => alert("Please Login to Continue")}
                >
                  Take this Course
                </button>
              </div>
              <div className=" bg-white text-gray-700 p-4 text-center px-[56px] space-y-5 pb-9 rounded-b-lg">
                <div class="flex items-center space-x-1 justify-center">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <h1 className="text-xl font-bold font-lato tracking-wider">
                  Amazing Course
                </h1>
                <p className="leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <h2 className="font-semibold font-lato tracking-wider">
                  George Roman
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-sm:pt-96 max-sm:mt-[125%] mt-96 mb-16">
        <div className="max-sm:pt-48 text-gray-700 w-[90%] lg:w-[80%] xl:w-[70%] mx-auto space-y-8">
          <h1 className="text-center text-4xl font-bold">Course Details</h1>
          <div className="text-center text-red-500 flex flex-wrap justify-center space-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 fill-red-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
              />
            </svg>
            <span className="max-sm:w-full">
              OOPS! , You are not yet enrolled in this course
            </span>
          </div>
          <div className="flex flex-wrap bg-white max-sm:space-y-6 rounded-lg shadow-xl p-5">
            <div className="w-full md:w-1/3 text-center max-sm:pb-5 max-sm:border-b md:border-r space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#076FB3] mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 className="font-semibold">Course Duration</h1>
              <h1>Approx. 2 months</h1>
            </div>
            <div className="w-full md:w-1/3 text-center max-sm:pb-5 max-sm:border-b md:border-r space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#076FB3] mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 className="font-semibold">Course Price</h1>
              <h1>
                {courseDetails.is_paid
                  ? `$ ${courseDetails.price}`
                  : courseDetails.price}
              </h1>
            </div>
            <div className="w-full md:w-1/3 text-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#076FB3] mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
              <h1 className="font-semibold">Course Level</h1>
              <h1>Beginner</h1>
            </div>
          </div>
          <div className="flex flex-wrap space-y-6 lg:space-y-0 lg:space-x-20 xl:space-x-32">
            <div className="lg:w-[48%] space-y-5">
              <h2 className="font-semibold text-xl max-sm:text-center">
                Course Description
              </h2>
              <p className="leading-7 pb-5 max-sm:text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <div className="flex max-sm:justify-center">
                <button className="bg-[#0571BA] p-2 w-1/2 rounded-full text-white hover:bg-[#0571BA]/80"
                  onClick={() => alert("Please Login to Continue")}
                  >
                  Take This Course
                </button>
              </div>
            </div>
            <div className="w-[90%] lg:w-[40%] xl:w-[35%] space-y-5 lg:mx-auto py-8 pl-5">
              <p className="text-xl font-bold md:w-[75%] font-lato tracking-wider">
                Key Features
              </p>
              <ul className="space-y-3 md:space-y-5">
                <li className="flex space-x-2">
                  <CheckIcon className="text-[#0571BA]" />
                  <span>Effective Writing</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="text-[#0571BA]" />
                  <span>Promoting Your Content</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="text-[#0571BA]" />
                  <span>Analyze & Improve Content</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="text-[#0571BA]" />
                  <span>Writing Strategies</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="text-[#0571BA]" />
                  <span>Writing Strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[95%] lg:w-[85%] xl:w-[80%] mx-auto xl:px-16">
        {/* Course Content Section */}
        <div className="flex flex-wrap p-4 justify-center max-sm:space-y-3">
          <h1 className="my-auto font-bold text-2xl md:text-xl">
            Course Content
          </h1>
          <button
            className="bg-[#0984E3] text-white px-3 py-[6px] rounded-full ml-auto flex gap-2 max-sm:w-[90%] max-sm:mx-auto"
            onClick={primaryButtonHandler}
          >
            {primaryBttnVisibility ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-[18px] my-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-[18px] my-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
            <span className="flex justify-center max-sm:w-full">
              {primaryBttnVisibility ? "Collapse All" : "Expand All"}
            </span>
          </button>
        </div>
        <div className="space-y-3">
          <div className="border-2 rounded-lg mx-5">
            <div className="flex p-3 md:p-4">
              <div className="w-7 h-7 border-4 rounded-full mx-3 md:mx-5 my-auto" />
              <div className="space-y-1">
                <h3 className="text-lg">Developing Stratagy</h3>
                <h5 className="text-sm font-semibold">3 Topics</h5>
              </div>
              <button
                className=" text-[#0571BA]  ml-auto flex gap-2 items-center"
                onClick={() => setContent1()}
              >
                {content1Visibility ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="ipSUpC0">
                      <g fill="none" stroke-width="4">
                        <path
                          stroke="#fff"
                          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill="#fff"
                          stroke="#fff"
                          stroke-linejoin="round"
                          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                        />
                        <path
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m33 27l-9-9l-9 9"
                        />
                      </g>
                    </mask>
                    <path
                      fill="#0984e3"
                      d="M0 0h48v48H0z"
                      mask="url(#ipSUpC0)"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="ipSDownC0">
                      <g fill="none" stroke-linejoin="round" stroke-width="4">
                        <path
                          fill="#fff"
                          stroke="#fff"
                          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                        />
                        <path
                          stroke="#000"
                          stroke-linecap="round"
                          d="m33 21l-9 9l-9-9"
                        />
                      </g>
                    </mask>
                    <path
                      fill="#0984e3"
                      d="M0 0h48v48H0z"
                      mask="url(#ipSDownC0)"
                    />
                  </svg>
                )}
                <span>{content1Visibility ? "Collapse" : "Expand"}</span>
              </button>
            </div>
            {content1Visibility && (
              <div>
                <div className="flex flex-wrap bg-[#0984E3] p-6 px-16 text-white max-sm:space-y-2">
                  <div className="flex w-full md:w-1/2 space-x-3 max-sm:justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                    <span className="text-sm font-bold my-auto">
                      Lesson Content
                    </span>
                  </div>
                  <div className="space-x-3 w-full md:w-1/2 flex justify-end max-sm:justify-center">
                    <span className="px-3 border-r text-sm font-bold my-auto">
                      0% COMPLETE
                    </span>
                    <span className="text-sm my-auto">0/3 Steps</span>
                  </div>
                </div>
                <LessonContent content="This is the First Topic" />
                <LessonContent content="Monitoring & Advertising" />
                <LessonContent content="Basic Investment & Social Media Influencing" />
              </div>
            )}
          </div>
          <div className="border-2 rounded-lg mx-5">
            <div className="flex p-3 md:p-4">
              <div className="w-7 h-7 border-4 rounded-full mx-3 md:mx-5 my-auto" />
              <div className="space-y-1">
                <h3 className="text-lg">Monitarting & Digital Advertising</h3>
                <h5 className="text-sm font-semibold">2 Topics</h5>
              </div>
              <button
                className=" text-[#0571BA]  ml-auto flex gap-2 items-center"
                onClick={() => setContent2()}
              >
                {content2Visibility ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="ipSUpC0">
                      <g fill="none" stroke-width="4">
                        <path
                          stroke="#fff"
                          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill="#fff"
                          stroke="#fff"
                          stroke-linejoin="round"
                          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                        />
                        <path
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m33 27l-9-9l-9 9"
                        />
                      </g>
                    </mask>
                    <path
                      fill="#0984e3"
                      d="M0 0h48v48H0z"
                      mask="url(#ipSUpC0)"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="ipSDownC0">
                      <g fill="none" stroke-linejoin="round" stroke-width="4">
                        <path
                          fill="#fff"
                          stroke="#fff"
                          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                        />
                        <path
                          stroke="#000"
                          stroke-linecap="round"
                          d="m33 21l-9 9l-9-9"
                        />
                      </g>
                    </mask>
                    <path
                      fill="#0984e3"
                      d="M0 0h48v48H0z"
                      mask="url(#ipSDownC0)"
                    />
                  </svg>
                )}
                <span>{content2Visibility ? "Collapse" : "Expand"}</span>
              </button>
            </div>
            {content2Visibility && (
              <div>
                <div className="flex flex-wrap bg-[#0984E3] p-6 px-16 text-white max-sm:space-y-2">
                  <div className="flex w-full md:w-1/2 space-x-3 max-sm:justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                    <span className="text-sm font-bold my-auto">
                      Lesson Content
                    </span>
                  </div>
                  <div className="space-x-3 w-full md:w-1/2 flex justify-end max-sm:justify-center">
                    <span className="px-3 border-r text-sm font-bold my-auto">
                      0% COMPLETE
                    </span>
                    <span className="text-sm my-auto">0/2 Steps</span>
                  </div>
                </div>
                <LessonContent content="Success with Advert" />
                <LessonContent content="Relationships" />
              </div>
            )}
          </div>
        </div>
      </section>
      <ReviewSection head="Student Reviews about This Course" />
    </body>
  );
};

export default CourseDetailsPage;

const LessonContent = ({ content }) => {
  return (
    <div className="p-6 mx-6 md:mx-[38px]  border-b flex space-x-3">
      <div className="w-7 h-7 border-4 rounded-full my-auto" />
      <h5>{content}</h5>
    </div>
  );
};
