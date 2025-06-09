import Image from "next/image";
import PICTURE3 from "../public/picture3.png";
import PICTURE4 from "../public/picture4.png";

const Network = () => {
  return (
    <section className="px-3 overflow-hidden">
      <h2 className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[240px] xl:text-[240px] font-bold text-gray-200 text-center leading-none">
        NETWORK
      </h2>

      <div className="flex flex-col md:flex-row-reverse md:justify-between items-center md:items-start gap-8 mt-8">
        <div className="w-full md:w-1/2 flex justify-center md:block relative">
          <div className="relative w-full max-w-[500px] mx-auto md:mx-0">
            <div className="relative md:-top-20 md:-left-5 lg:-top-24 lg:left-0  md:w-[450px] lg:w-[520px]">
              <Image
                className="rounded-xl"
                src={PICTURE3}
                alt="Network Image 1"
                layout="responsive"
              />
            </div>

            <div className="mt-4 md:mt-0 md:relative absolute top-20 left-80 lg:-top-22 lg:left-35 md:-top-20 md:left-20 sm:top-20 sm:left-80 w-[240px] sm:w-[240px] md:w-[240px] lg:w-[260px]">
              <Image
                src={PICTURE4}
                className="rounded-xl"
                alt="Network Image 2"
                layout="responsive"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left px-4 mt-20 md:mt-0 pl-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Build Connections
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Find people who could become your next business partner, teacher or
            even a friend. Someone with whom you meet while waiting for a cup of
            coffee or a stranger with whom you share your thoughts for hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Network;
