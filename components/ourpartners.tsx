import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import LOGO1 from "../public/logo1.png";
import LOGO2 from "../public/logo2.png";
import LOGO3 from "../public/logo3.png";
import LOGO4 from "../public/logo4.png";
import LOGO5 from "../public/logo5.png";
import LOGO6 from "../public/logo6.png";
import LOGO7 from "../public/logo7.png";
import LOGO8 from "../public/logo8.png";

const partnersLogo = [LOGO1, LOGO2, LOGO3, LOGO4, LOGO5, LOGO6, LOGO7, LOGO8];

const OurPartners = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-4xl font-semibold mb-8">Our Partners</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full px-4"
      >
        {partnersLogo.map((logo, i) => (
          <SwiperSlide key={i}>
            <Image
              className="w-[176px] h-[100px] md:w-[236px] md:h-[130px] lg:w-[276px] lg:h-[154px]"
              src={logo}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurPartners;
