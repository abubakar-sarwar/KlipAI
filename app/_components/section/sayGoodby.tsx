import { IconPlus, IconUserStar } from "@/app/_icons";
import Image from "next/image";

const SayGoodbye = () => {
  return (
    <section className="pb-[72px]">
      <div className="container">
        <div className="mb-12 flex flex-col gap-3">
          <span className="inline-block px-[15px] py-2.5 font-bold uppercase rounded-full w-fit border bg-primary/20 border-primary">
            Benefit
          </span>
          <div className="flex_between items-end mt-8">
            <h2 className="text-3xl md:text-5xl font-bold max-w-xl">
              Say goodbye to <br className="hidden md:block" /> Wallet Addresses.
            </h2>
            <p className="text-gray-500 max-w-md text-sm md:text-base leading-[1.5]">
              Just enter the handle, select your token, and confirm. No copy-paste. No errors. No friction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="relative row-span-2 rounded-20 flex flex-col gap-4 bg-black text-white">
            <IconPlus className="absolute top-6 right-6 size-[35px]" />
            <div className="p-9">
              <div className="size-[55px] p-3 rounded-15 border bg-primary/20 border-primary">
                <IconUserStar className="size-full" />
              </div>
              <h3 className="text-4xl mt-2">
                Token <br /> Support
              </h3>
            </div>
            <Image
              src="/1.png"
              alt="Token Support"
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              src="/1_bg.png"
              alt="Token Support"
              width={500}
              height={105}
              className="absolute bottom-0 w-full left-0"
            />
          </div>
          <div className="rounded-20 flex flex-col gap-4 bg-black text-white">
            <h3 className="text-4xl p-9">Secure Transfers</h3>
            <Image src="/2.png" alt="Secure Transfers" width={500} height={500} className="w-full" />
          </div>
          <div className="relative p-9 rounded-20 flex flex-col gap-4 bg-black text-white">
            <IconPlus className="absolute top-6 right-6 size-[35px]" />
            <Image
              src="/2.png"
              alt="Performance"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div className="relative p-6 rounded-20 flex flex-col gap-4 bg-black text-white">
            <IconPlus className="absolute top-6 right-6 size-[35px]" />
            <Image
              src="/2.png"
              alt="Fast Send"
              width={500}
              height={500}
              className="rounded-xl object-contain"
            />
          </div>
          <div className="relative p-9 rounded-20 flex flex-col gap-4 bg-black text-white">
            <IconPlus className="absolute top-6 right-6 size-[35px]" />
            <h3 className="text-4xl text-center mt-5">Unique Identity</h3>
            <Image
              src="/5.png"
              alt="Unique Identity"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SayGoodbye;
