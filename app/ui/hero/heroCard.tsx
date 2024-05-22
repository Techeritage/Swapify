import Image from "next/image";
import { Bricolage } from "../fonts";

export default function HeroCard() {
  return (
    <div className="w-full h-[95vh] bg-myBkGreen px-[10%] pt-[20px]">
      <div className="h-[50px] border"></div>
      <div className="mt-5 flex flex-col lg:flex-row">
        <div>
          <div className="lg:w-[636px] lg:h-[174px] mb-5">
            <h1
              className={`${Bricolage.className} text-3xl lg:text-[48px] lg:leading-[60px] tracking-wide text-white font-semibold`}
            >
              Swap Your Devices Effortlessly and Upgrade to the Latest Tech
            </h1>
          </div>
          <div className="lg:w-[590px] lg:h-[105px] mb-9">
            <p className="lg:text-[18px] text-white/90 tracking-wide lg:leading-[35px]">
              Easily swap your old gadgets for new ones with our trusted and
              seamless process. Stay updated on the progress with real-time
              notifications.
            </p>
          </div>
          <div className="lg:w-[386px] flex justify-between">
            <button className="rounded-full w-[150px] h-[50px] lg:w-[180px] lg:h-[60px] bg-myOrange text-white btn-text">
              Swap Now
            </button>
            <button className="rounded-full w-[150px] h-[50px] lg:w-[180px] lg:h-[60px] border-2 border-white text-white btn-text">
              Learn Now
            </button>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[500px] lg:w-[530.66px] lg:h-[675px]">
            <Image
              src="/arrow1.svg"
              width={120}
              height={250}
              className="rotate-[-26.69deg] opacity-70 absolute left-[70px] top-[100px]"
              alt="arrow-left"
            />
            <Image
              src="/arrow2.svg"
              width={122}
              height={251.06}
              className="rotate-[-30.85deg] opacity-70 absolute right-[60px] top-[120px]"
              alt="arrow-right"
            />
            <Image
              src="/phone1.png"
              width={45}
              height={100.03}
              className="opacity-80 absolute left-[140px] top-[40px]"
              alt="arrow-right"
            />
            <Image
              src="/phone2.png"
              width={60}
              height={101.58}
              className="opacity-80 absolute right-[125px] top-[55px]"
              alt="arrow-right"
            />
            <Image
              src="/arrow3.svg"
              width={100}
              height={50}
              className="rotate-[5deg] opacity-70 absolute top-[30px] left-[200px]"
              alt="arrow-left"
            />
            <Image
              src="/two.png"
              width={368}
              height={519}
              className="absolute z-10 bottom-0 right-[10px]"
              alt="two persons"
            />
          </div>
        </div>
      </div>
      <Image
        src="/clouds.png"
        width={1440}
        height={114}
        alt="cloud"
        className="absolute right-0 left-0 bottom-0"
      />
    </div>
  );
}
