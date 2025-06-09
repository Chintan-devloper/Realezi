import Image from "next/image";
import PICTURE1 from "../public/kakashowticket.png";
import PICTURE2 from "../public/ticketgottalent.png";

const Extravaganza = () => {
  return (
    <section className="px-3 py-10 overflow-hidden">
      <h2 className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[240px] xl:text-[240px] font-bold text-gray-200 text-center leading-none">
        EXTRAVAGANZA
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-8">
        <div className="w-full md:w-1/2 flex md:block relative">
          <div className="relative">
            <Image
              className="relative top-0 left-20 rounded-xl z-10"
              src={PICTURE1}
              alt="Speaker Image 1"
              width={561}
              height={200}
            />
            <Image
              src={PICTURE2}
              className="relative -top-5 left-10 rounded-xl z-0"
              alt="Speaker Image 2"
              width={561}
              height={200}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left px-4  lg:-ml-20 md:ml-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Cultural Showcase
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            It’s not just an event, it is a celebration. Live musical bands
            performances that will bring the zest of life, Garba and other
            exciting performances that will make the evening special. We have
            many treats prepared for you so that you enjoy yourself while
            educating and networking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Extravaganza;
