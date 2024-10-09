// import Image from "next/image";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Referrals from "@/components/Referrals";
import Investments from "@/components/Investments";

export default function Home() {
  return (
    <>
      <Hero />
      <Investments/>
      <Referrals />
      <Offers />
    </>
  );
}
