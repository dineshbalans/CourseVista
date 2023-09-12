import { useReducer } from "react";
import ContactForm from "../components/Contact/ContactForm";

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

const ContactPage = () => {
  const [textDisplay, dispatch] = useReducer(reducer, {...initaialState,dispBtn_1:!initaialState.dispBtn_1});

  return (
    <div className="bg-[#FAFAFA] text-[#2F3F50]">
      <div className="text-center bg-[#076FB3] text-white space-y-10 py-12 pb-36 mb-12 max-sm:pt-24">
        <h2 className="text-5xl font-bold">Need Help?</h2>
        <p className="w-[85%] md:w-[70%] lg:w-1/2 mx-auto text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
      <section className="w-full my-20 pt-6 ">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-wrap justify-center text-lg text-[#2F3F50]">
            <div className="w-full p-6 lg:w-1/3">
              <div className="bg-white rounded-lg border shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-12 h-12 text-[#0D68AE] mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <h2 className="pt-5 pb-3 font-bold text-xl text-center">
                  Call Us 24x7
                </h2>
                <h3 className=" font-bold text-xl text-center">
                  +1234-456-789
                </h3>
              </div>
            </div>
            <div className="w-full p-6 lg:w-1/3">
              <div className="bg-white rounded-lg border shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-12 h-12 text-[#0D68AE] mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <h2 className="pt-5 pb-3 font-bold text-xl text-center">
                  Write Us
                </h2>
                <h3 className=" font-bold text-xl text-center">
                  email@example.com
                </h3>
              </div>
            </div>
            <div className="w-full p-6 lg:w-1/3 ">
              <div className="bg-white rounded-lg border shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-12 h-12 text-[#0D68AE] mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h2 className="pt-5 pb-3 font-bold text-xl text-center">
                  Main Office
                </h2>
                <h3 className="font-bold text-xl text-center">
                  New York, NY 10160
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
      <div className="pt-28 pb-20">
        <h1 class="text-4xl font-bold text-center mb-5">
          Frequently Asked Questions
        </h1>
        <div className="md:mx-10 my-auto xl:w-[70%] max-sm:px-5 xl:mx-auto  py-12 ">
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
  );
};

export default ContactPage;
