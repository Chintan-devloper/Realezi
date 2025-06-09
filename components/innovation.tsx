import Image from "next/image";
import PICTURE7 from "../public/picture7.png";
import PICTURE8 from "../public/picture8.png";

const Innovation = () => {
  return (
    <section className="px-3 py-10 overflow-hidden">
      <h2 className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[240px] xl:text-[240px] font-bold text-gray-200 text-center leading-none">
        INNOVATION
      </h2>

      <div className="flex flex-col md:flex-row-reverse md:justify-between items-center md:items-start gap-8 mt-8">
        <div className="w-full md:w-1/2 flex justify-center md:block relative">
          <div className="relative w-full max-w-[500px] mx-auto md:mx-0">
            <div className="relative md:-top-20 md:left-40 lg:-top-24 lg:left-80 w-[70%] sm:w-[60%] md:w-[250px] lg:w-[270px]">
              <Image
                className="rounded-xl"
                src={PICTURE7}
                alt="Speaker Image 1"
                layout="responsive"
              />
            </div>

            <div className="absolute top-20 left-60 mt-4 md:mt-0 md:absolute md:top-10 md:left-0 sm:top-20 sm:left-60 w-[110%] sm:w-[90%] md:w-[350px] lg:w-[440px]">
              <Image
                className="rounded-xl"
                src={PICTURE8}
                alt="Speaker Image 2"
                layout="responsive"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left px-4 mt-20 md:mt-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experience Innovation
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Prepare to be motivated. Here you will discover new concepts and
            trends that are already on the horizon. It’s about encouraging
            people to think differently and outside the norms for a change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
