import Image from "next/image";
import PICTURE1 from "../public/picture1.png";
import PICTURE2 from "../public/picture2.png";

const Speakers = () => {
  return (
    <section className="px-3 py-10 overflow-hidden">
      <h2 className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[240px] xl:text-[240px] font-bold text-gray-200 text-center leading-none">
        SPEAKERS
      </h2>

      <div className="flex flex-col md:flex-row  items-center md:items-start mt-8 pl-10">
        <div className="w-full md:w-1/2 flex md:block relative">
          <div className="relative">
            <div className="w-[300px] sm:w-[300px] md:w-[350px] lg:w-[443px]">
              <Image
                className="rounded-xl"
                src={PICTURE1}
                alt="Speaker Image 1"
                layout="responsive"
              />
            </div>

            <div className="absolute mt-4 md:mt-0 md:relative top-20 left-60 md:-top-30 md:left-60 sm:top-20 sm:left-50 w-[200px] sm:w-[200px] md:w-[270px] lg:w-[270px]">
              <Image
                src={PICTURE2}
                className="rounded-xl"
                alt="Speaker Image 2"
                layout="responsive"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left px-4 mt-40 md:mt-0 lg:-ml-20 md:ml-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Learn from the Best
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Meet new people, be it elders or people younger than you or even the
            people of same age. Get to know those, who are already successful in
            the chosen field of business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
