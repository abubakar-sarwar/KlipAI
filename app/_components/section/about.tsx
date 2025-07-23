import { SITE_NAME } from "@/constants";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-[72px]">
      {/* figma has padding-right 88 idk why but here is pixel perfect */}
      <div className="container">
        <div className="rounded-lg flex justify-between flex-wrap lg:gap-16 p-[80px] pr-[88px] text-left border border-brd-200">
          <div className="max-w-[668px]">
            <Image src="/about_us.png" alt="" width={668} height={471} className="" />
          </div>
          <div className="flex-1 flex justify-center flex-col">
            <h1 className="text-4xl md:text-5xl font-bold leading-14 mb-3">What is {SITE_NAME}</h1>
            <p>
              KlipAi is the all-in-one smart wallet layer for Web3. We turn every crypto transaction into a
              clean, AI-powered receipt. You can also send tokens using a simple username. No TX hashes. No
              wallet address mistakes. Just clarity, control, and convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
