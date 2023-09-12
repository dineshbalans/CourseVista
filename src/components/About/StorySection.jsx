import CEO from "../../assets/ceo.jpg";
import CMO from "../../assets/cmo.jpg";

const StorySection = () => {
  return (
    <div className="flex flex-wrap p-5 mt-24 justify-center">
      <div className="xl:w-1/2 ">
        <div className="flex max-sm:flex-col max-sm:gap-5 md:space-x-16 lg:space-x-48 xl:space-x-0 md:space-y-52 text-gray-500">
          <div className="md:p-5 space-y-5">
            <img
              src={CMO}
              alt=""
              className="rounded-md max-sm:w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            />
            <h2 className="w-1/2 mx-auto font-medium  my-3">
              Lisa Green - CMO
            </h2>
          </div>
          <div className="md:p-5 space-y-5">
            <img
              src={CEO}
              alt=""
              className="rounded-md max-sm:w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            />
            <h2 className="w-[75%] mx-auto font-medium text-center my-3">
              Dr. John Smith — Founder & CEO.
            </h2>
          </div>
        </div>
      </div>
      <div className="xl:w-1/2 px-1 md:px-10 text-lg max-sm:mt-10">
        <div className="bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-full py-20 md:p-20 space-y-5">
          <h1 className="text-4xl font-bold max-sm:text-center">Our Story</h1>
          <p className="text-justify max-sm:text-center max-sm:p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            placerat, neque nec posuere tincidunt, dolor libero pharetra ex, nec
            iaculis metus nibh a libero. Suspendisse laoreet neque et commodo
            viverra. Nullam vestibulum urna sed turpis fringilla, ac
            sollicitudin augue interdum.
            <br /><br />
            Proin congue enim imperdiet tincidunt vulputate. Donec hendrerit,
            neque nec condimentum posuere, metus ipsum lacinia quam, eget porta
            nibh purus vel risus.u00a0
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
