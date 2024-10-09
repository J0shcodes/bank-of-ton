import HeroImage from "@/public/assets/icons/HeroImage";

const Hero = () => {
  return (
    <div className="px-6 py-[1.875rem]">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">
          Mine Ton daily and enjoy up to 300% ROI, boosting financial growth.
        </h1>
        <p className="mt-4 text-[#CFCFD1]">
          maximize your investment potential with daily returns between 4% and
          20%.
        </p>
      </div>
      <div className="flex flex-col items-center my-[3.75rem]">
        <HeroImage />
      </div>
      <div className="space-y-4">
        <button className="w-full border border-solid border-[#fff] py-3.5 uppercase rounded-lg text-sm font-medium">
          Bank of SOL
        </button>
        <div className="w-full bg-[#fff] py-3.5 uppercase rounded-lg text-sm font-medium text-[#0098EA] text-center">
          Welcome to bank of ton
        </div>
      </div>
    </div>
  );
};

export default Hero;
