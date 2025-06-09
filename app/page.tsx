"use client";

import Image from "next/image";
import SITTINGPEOPLE from "../public/sitting_people.png";
import FOOTERIMAGE from "../public/footerimage.png";
import REALEZI from "../public/Realezi.png";
import QRCODE from "../public/qrcode.png";
import CountdownTimer from "@/components/countdownTimer";
import Ourpartners from "@/components/ourpartners";
import Speakers from "@/components/speakers";
import Network from "@/components/network";
import Community from "@/components/community";
import Innovation from "@/components/innovation";
import Extravaganza from "@/components/extravaganza";

export default function Home() {
  return (
    <main>
      <section className="relative h-[626px] bg-black">
        <Image
          src={SITTINGPEOPLE}
          alt="sittingpeople"
          fill
          className="object-cover md:block hidden"
          priority
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-white h-full text-center px-4">
          <p className="hidden md:block text-3xl mb-2">
            Get ready to be inspired by
          </p>
          <Image
            className="hidden md:block"
            src={REALEZI}
            alt="realezi"
          ></Image>
          <p className="hidden md:block text-2xl mt-2">
            Click. Connect. Close.
          </p>
          <p className="mt-4 font-semibold text-2xl md:text-3xl">
            Going Live In
          </p>
          <CountdownTimer targetDate="2025-06-30T00:00:00" />
          <h2 className="hidden md:block mt-6 text-6xl font-bold">
            The Realezi LAUNCHPAD
          </h2>
          <h2 className="md:hidden mt-6 text-4xl font-bold">
            The
            <Image className="block md:hidden" src={REALEZI} alt="realezi" />
            LAUNCHPAD
          </h2>

          <a
            href="https://allevents.in/vadodara/the-realezi-launchpad/80001126128702"
            target="_blank"
            rel="noopener noreferrer"
            className="block md:hidden my-2 bg-white text-black font-semibold px-6 py-2 rounded-2xl"
          >
            Book Your Seats
          </a>
          <p className="block md:hidden">Entry Free</p>

          <p className="my-3 text-sm md:text-4xl font-bold">
            📍 Pandit Deen Dayal Auditorium Vadodara - Gujarat <br />
            📅 19th - 20th October 24
          </p>
          <a
            href="https://allevents.in/vadodara/the-realezi-launchpad/80001126128702"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block my-2 bg-white text-black font-semibold px-6 py-2 rounded-2xl"
          >
            Book Your Seats
          </a>
          <p className="hidden md:block">Entry Free</p>
        </div>
      </section>

      <Ourpartners />
      <Speakers />
      <Network />
      <Community />
      <Innovation />
      <Extravaganza />

      <section className="relative h-[526px]">
        <Image
          src={FOOTERIMAGE}
          alt="footerimage"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-10 flex items-end justify-between text-white h-full p-8">
          <div>
            <p className="mt-6 text-2xl">Our Location</p>
            <p className="my-3 text-4xl font-bold">
              Pandit Deen Dayal Auditorium <br />
              Vadodara - Gujarat
            </p>
            <p className="text-sm font-semibold md:hidden ">
              📅 19th October 24
            </p>
            <a
              href="https://allevents.in/vadodara/the-realezi-launchpad/80001126128702"
              target="_blank"
              className="mt-4 bg-white text-black font-semibold px-6 py-2 rounded-2xl shadow inline-block"
            >
              Register Now
            </a>
          </div>
          <div className="flex flex-col items-end">
            <p className="my-3 text-5xl font-bold lg:block md:block hidden ">
              📅 19th October 24
            </p>
            <a
              href="https://maps.app.goo.gl/KS33noUWWhV1daDR6"
              target="_blank"
              className="mt-4 text-4xl text-white font-semibold underline lg:block md:block hidden"
            >
              See direction
            </a>
          </div>
        </div>
      </section>

      <div className="flex flex-col-reverse md:flex-row md:justify-center items-center gap-5 md:gap-28 p-5 md:p-20">
        <div>
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center">
            Partner With Us
          </p>
          <p className="text-2xl font-semibold md:hidden mb-8 text-center">
            Promote your business by joining Realezi at the Launchpad today! Get
            your company involved with industry leaders, get the word out and be
            affiliated with a meaningful cause. Get in touch with us for
            possible partnership deals
          </p>
          <div className="flex justify-center md:justify-start cursor-pointer">
            <a
              href="https://allevents.in/vadodara/the-realezi-launchpad/80001126128702"
              target="_blank"
              className="mt-4 bg-[#111F3C] text-white text-2xl font-semibold px-6 py-2 rounded-2xl "
            >
              Partner With Us
            </a>
          </div>
        </div>
        <Image className="w-[350px] h-[350px]" src={QRCODE} alt="qr"></Image>
      </div>
    </main>
  );
}
