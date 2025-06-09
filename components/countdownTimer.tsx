"use client";

import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState(["00", "00", "00", "00"]);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(targetDate).getTime() - new Date().getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft(["00", "00", "00", "00"]);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft([
        String(d).padStart(2, "0"),
        String(h).padStart(2, "0"),
        String(m).padStart(2, "0"),
        String(s).padStart(2, "0"),
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const labels = ["Days", "Hours", "Minutes", "Seconds"];

  return (
    <div className="flex gap-4 mt-2 text-black">
      {timeLeft.map((val, i) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center bg-[#111F3C] px-4 py-2 rounded-lg shadow w-[80px] h-[60px] md:w-[122px] md:h-[91px]"
        >
          <p className="text-2xl md:text-4xl text-white font-bold">{val}</p>
          <span className="text-sm md:text-lg text-white">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
