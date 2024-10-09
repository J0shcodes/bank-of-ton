// import Image from "next/image";
import BOTLogo from "@/public/assets/icons/BOTLogo";

const Header = () => {
  return (
    <div className="flex justify-between py-[1.5625rem] px-[1.1875rem] bg-black">
      <div>
        <BOTLogo/>
      </div>
      <div className="w-7 h-7 border border-solid border-[#87888B] rounded-md flex flex-col justify-center items-center space-y-1 self-center">
        <div className="h-[1px] w-4 bg-white"></div>
        <div className="h-[1px] w-4 bg-white flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};

export default Header;
