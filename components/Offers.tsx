import FileIcon from "@/public/assets/icons/FileIcon";
import HouseIcon from "@/public/assets/icons/HouseIcon";
import VideoIcon from "@/public/assets/icons/VideoIcon";

const Offers = () => {
  return (
    <section className="bg-[#100a55] py-12 px-[3.25rem]">
      <h2 className="text-[2rem] font-bold text-center">
        We make it easy for <span className="text-[#7065F0]">Investments.</span>
      </h2>

      <div className="mt-[3.625rem] space-y-6">
        <div className="bg-[#403b77] p-6 rounded-lg">
          <div>
            <VideoIcon />
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold">Safe and reliable project</h3>
            <div className="mt-4 opacity-70">
              You can communicate directly with landlords and we provide you
              with virtual tour before you buy or rent the property.
            </div>
          </div>
        </div>

        <div className="bg-[#fff] p-6 rounded-lg">
          <div>
            <HouseIcon />
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-[#000929]">
              Dividend distribute
            </h3>
            <div className="mt-4 opacity-70 text-[#000929]">
              Browse thousands of properties, save your favorites and set up
              search alerts so you don’t miss the best home deal!
            </div>
          </div>
        </div>

        <div className="bg-[#7065f0] p-6 rounded-lg">
          <div>
            <FileIcon />
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold">
              Referral program
            </h3>
            <div className="mt-4 opacity-70">
              Find your dream house? You just need to do a little to no effort
              and you can start move in to your new dream home!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
