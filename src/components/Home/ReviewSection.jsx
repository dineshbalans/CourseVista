import student1 from "../../assets/student1.jpg";
import student2 from "../../assets/student2.jpg";
import student3 from "../../assets/student3.jpg";
import student4 from "../../assets/student4.jpg";

const ReviewSection = ({head = 'What Our Students Have to Say'}) => {
  return (
    <>
      <section className="mt-40 text-[#2F3F50] bg-[#FAFAFA] mb-20 xl:mx-16">
        <div className="space-y-10">
          <h1 className="text-center text-2xl md:text-4xl font-bold">
            {head}
          </h1>
          <div className="flex flex-wrap md:mx-10 px-2">
            <div className="xl:w-1/2  p-4 md:p-6 ">
              <div className="bg-white p-8 space-y-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <p className="">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="flex flex-wrap  space-x-5">
                  <img
                    src={student1}
                    alt=""
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="my-auto ">
                    <h3 className="font-bold text-lg">Kelvin Black</h3>
                    <h4 className="text-md">From Dallas, USA</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/2  p-4 md:p-6 ">
              <div className="bg-white p-8 space-y-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <p className="">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="flex flex-wrap  space-x-5">
                  <img
                    src={student2}
                    alt=""
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="my-auto ">
                    <h3 className="font-bold text-lg">Zasha Swan</h3>
                    <h4 className="text-md">From Australia</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/2  p-4 md:p-6 ">
              <div className="bg-white p-8 space-y-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <p className="">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="flex flex-wrap  space-x-5">
                  <img
                    src={student3}
                    alt=""
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="my-auto ">
                    <h3 className="font-bold text-lg">Frank Jones</h3>
                    <h4 className="text-md">From Japan</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/2  p-4 md:p-6 ">
              <div className="bg-white p-8 space-y-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <p className="">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="flex flex-wrap  space-x-5">
                  <img
                    src={student4}
                    alt=""
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="my-auto ">
                    <h3 className="font-bold text-lg">Jack Brownn</h3>
                    <h4 className="text-md">From London, UK</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewSection;
