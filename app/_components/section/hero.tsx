import Link from "next/link";
import Image from "next/image";
import { IconArrow, IconGlobe, IconStarPlus } from "@/app/_icons";

const Hero = () => {
  return (
    <section className="relative px-4 py-16 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/12 z-[-1] rounded-full w-3/4 lg:w-[866px] h-[615px] ellipse_grad" />
      <h1 className="text-4xl md:text-5xl font-bold lg:leading-14">
        AI receipts. Simple crypto. <br /> Smart control.
      </h1>
      <div className="flex_center flex-col max-lg:flex-col-reverse overflow-hidden">
        <div className="flex_center flex-col max-lg:mt-30">
          <p className="max-lg:text-sm mt-4 max-w-xl">
            Klip is your all-in-one decentralized wallet <br />
            designed for security, flexibility, and full ownership.
          </p>
          <Link
            href="/"
            className="flex_center mt-6 py-[17px] lg:py-[18px] lg:px-[42px] px-6 btn_primary font-bold lg:font-normal text-sm uppercase"
          >
            <span>Get Started</span>
            <IconArrow className="translate-x-5" />
          </Link>
        </div>
        <div className="mt-5">
          <div className="relative max-w-[586px] max-h-[586px]">
            <Image
              src="/hero_bg_art.png" // Replace with your actual image
              unoptimized
              alt="Phone displaying wallet app"
              width={350}
              height={700}
              className="w-full z-10"
            />
            <Image
              src="/hero_phone.png" // Replace with your actual image
              unoptimized
              alt="Phone displaying wallet app"
              width={586}
              height={586}
              className="absolute top-[28%] -right-1 z-10 scale-180 rotate-[13.97deg]"
            />
            {/* Floating token tags */}
            <div className="flex items-center gap-2 absolute top-1/4 left-0 -translate-x-1/2 p-4 rounded-full glassEffect">
              <div>
                <p className="flex_between leading-13 gap-6 text-lg font-semibold text-white">
                  <span>$2,951.73</span>
                  <span>Apollo</span>
                </p>
                <p className="flex_between leading-13 mt-2 gap-6 text-lg">
                  <span>APL 17</span>
                  <span>APL</span>
                </p>
              </div>
              <div className="size-10 p-2 shrink-0 rounded-full bg-white">
                <IconGlobe className="size-full" />
              </div>
            </div>
            <div className="flex items-center gap-2 absolute bottom-1/4 right-0 translate-x-1/2 p-4 rounded-full glassEffect">
              <div className="size-10 p-2 shrink-0 rounded-full bg-white">
                <IconStarPlus className="size-full" />
              </div>
              <div>
                <p className="flex_between leading-13 gap-6 text-lg font-semibold text-white">
                  <span>Romulus</span>
                  <span>$3,271.20</span>
                </p>
                <p className="flex_between leading-13 mt-2 gap-6 text-lg">
                  <span>RLS</span>
                  <span>RLS 24</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
