import { useReducer } from "react";
import founder_img from "../../assets/founder-img.png";

const initaialState = { dispBtn_1: false, dispBtn_2: false, dispBtn_3: false };

const reducer = (prevState, action) => {
  if (action.type === "btn1") {
    return { ...initaialState, dispBtn_1: !prevState.dispBtn_1 };
  }
  if (action.type === "btn2") {
    return { ...initaialState, dispBtn_2: !prevState.dispBtn_2 };
  }
  if (action.type === "btn3") {
    return { ...initaialState, dispBtn_3: !prevState.dispBtn_3 };
  }
  return initaialState;
};

const FAQSection = () => {
  const [textDisplay, dispatch] = useReducer(reducer, {
    ...initaialState,
    dispBtn_1: !initaialState.dispBtn_1,
  });

  return (
    <section className="-mt-16 xl:mt-auto text-[#2F3F50]">
      <div className="w-[95%] p-2 mx-auto">
        <div className="text-center space-y-5 py-10">
          <h1 className="w-[90%] mx-auto text-3xl lg:text-4xl font-bold">
            Be in Demand with Our Professional Training
          </h1>
          <h3 className="text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            eros ut dui.
          </h3>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="xl:w-1/2 p-12 space-y-3">
            <img src={founder_img} alt="" className="" />
            <h2 className="text-center text-lg font-bold">
              Dr. John Smith — Founder & CEO.
            </h2>
          </div>
          <div className="md:mx-10 my-auto xl:w-1/2 xl:pl-5 xl:mx-auto  py-12 ">
            <div className="border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white">
              <div className="w-full">
                <button
                  className="border py-7 px-10 w-full"
                  onClick={() => {
                    dispatch({ type: "btn1" });
                  }}
                >
                  <span className="flex space-x-6">
                    {textDisplay.dispBtn_1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6  fill-[#2563EB]"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    )}
                    <span
                      className={
                        textDisplay.dispBtn_1
                          ? "font-semibold text-lg text-[#2563EB]"
                          : "font-semibold text-lg"
                      }
                    >
                      Build Relevant Skills
                    </span>
                  </span>
                </button>
                <div
                  className={
                    textDisplay.dispBtn_1
                      ? "w-full bg-[#f6f6f6] border p-5 animate-fadeIn animate-slow"
                      : "hidden"
                  }
                >
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </div>
              </div>
              <div className="w-full ">
                <button
                  className="border py-7 px-10 w-full"
                  onClick={() => {
                    dispatch({ type: "btn2" });
                  }}
                >
                  <span className="flex space-x-6">
                    {textDisplay.dispBtn_2 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-[38px] md:w-6  fill-[#2563EB]"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-[39px] md:w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    )}
                    <span
                      className={
                        textDisplay.dispBtn_2
                          ? "font-semibold text-lg text-[#2563EB]"
                          : "font-semibold text-lg"
                      }
                    >
                      Get The Right Path From The Best Learning Platform
                    </span>
                  </span>
                </button>
                {textDisplay.dispBtn_2 && (
                  <div className="w-full bg-[#f6f6f6] border p-5 animate-fadeIn animate-slow">
                    Click edit button to change this text. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Ut elit tellus, luctus
                    nec ullamcorper mattis, pulvinar dapibus leo.
                  </div>
                )}
              </div>
              <div className="w-full ">
                <button
                  className="border py-7 px-10 w-full"
                  onClick={() => {
                    dispatch({ type: "btn3" });
                  }}
                >
                  <span className="flex space-x-6">
                    {textDisplay.dispBtn_3 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6  fill-[#2563EB]"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    )}
                    <span
                      className={
                        textDisplay.dispBtn_3
                          ? "font-semibold text-lg text-[#2563EB]"
                          : "font-semibold text-lg"
                      }
                    >
                      Learn From The Professionals
                    </span>
                  </span>
                </button>
                {textDisplay.dispBtn_3 && (
                  <div className="w-full bg-[#f6f6f6] border p-5 animate-fadeIn animate-slow">
                    Click edit button to change this text. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Ut elit tellus, luctus
                    nec ullamcorper mattis, pulvinar dapibus leo.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
