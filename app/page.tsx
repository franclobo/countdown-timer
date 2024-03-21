'use client';
import { useState, useEffect } from "react";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function formatTimeValue(value: number): string {
  return value.toString().padStart(2, '0');
}

export default function Home() {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2024-03-31") - +new Date();
    let timeLeft: TimeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: formatTimeValue(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: formatTimeValue(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: formatTimeValue(Math.floor((difference / 1000 / 60) % 60)),
        seconds: formatTimeValue(Math.floor((difference / 1000) % 60)),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="clock flex flex-col justify-center items-center h-screen text-xl leading-8">
      <h1 className="text-white uppercase font-bold mb-10 tracking-wide-2 text-base">We&apos;re launching soon</h1>
      <div className="flex space-x-2 tracking-wide-2">
        <div className="flex flex-col items-center">
          <div className="container">
            <div className="rectangle_dark"></div>
            <span className="text text-red text-4xl font-bold">{timeLeft.days}</span>
            <div className="rectangle_blue"></div>
          </div>
          <span className="text-gray text-bold uppercase text-xs mt-3">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="container">
            <div className="rectangle_dark"></div>
            <span className="text text-red text-4xl font-bold">{timeLeft.hours}</span>
            <div className="rectangle_blue"></div>
          </div>
          <span className="text-gray text-bold uppercase text-xs mt-3">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="container">
            <div className="rectangle_dark"></div>
            <span className="text text-red text-4xl font-bold">{timeLeft.minutes}</span>
            <div className="rectangle_blue"></div>
          </div>
          <span className="text-gray text-bold uppercase text-xs mt-3">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="container">
            <div className="rectangle_dark"></div>
            <span className="text text-red text-4xl font-bold">{timeLeft.seconds}</span>
            <div className="rectangle_blue"></div>
          </div>
          <span className="text-gray text-bold uppercase text-xs mt-3">Seconds</span>
        </div>
      </div>
    </div>
  );
}
