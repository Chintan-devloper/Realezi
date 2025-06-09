import Image from "next/image";
import PICTURE5 from "../public/picture5.png";
import PICTURE6 from "../public/picture6.png";

const Community = () => {
  return (
    <section className="px-3 py-10 overflow-hidden">
      <h2 className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[240px] xl:text-[240px] font-bold text-gray-200 text-center leading-none">
        COMMUNITY
      </h2>

      <div className="flex flex-col md:flex-row  items-center md:items-start mt-8 pl-10">
        <div className="w-full md:w-1/2 flex md:block relative">
          <div className="relative">
            <div className="w-[200px] sm:w-[200px] md:w-[250px] lg:w-[270px]">
              <Image
                className="rounded-xl"
                src={PICTURE5}
                alt="Community Image 1"
                layout="responsive"
              />
            </div>

            <div className="absolute mt-4 md:mt-0 md:relative top-20 left-20 md:-top-30 md:left-30 sm:top-20 sm:left-20 w-[350px] sm:w-[350px] md:w-[444px] lg:w-[444px]">
              <Image
                src={PICTURE6}
                className="rounded-xl"
                alt="Community Image 2"
                layout="responsive"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left px-4 mt-40 md:mt-0 lg:-ml-20 md:ml-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Join Our Community
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            It’s not just another event you are going to, but it is a community,
            a family. Engage with people who are interested in development in
            whatever field, may you be an entrepreneur, a student, or a worker.
            It’s a team effort. If we do it together, it will work out well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
