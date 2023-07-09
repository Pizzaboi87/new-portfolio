import { vader } from "../assets";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-blue text-tertiaryLight">
      <img src={vader} alt="vader" className="-mt-24" />
      <p className="text-[40px] font-bold -mt-16">Loading...</p>
    </div>
  );
};

export default Loading;
