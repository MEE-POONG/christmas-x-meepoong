/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react";
import Par from "../pages/Par";

export default function Count() {
  useEffect(() => {
    const target = new Date("12/31/2021 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
      if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
        setParty(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const [partyTime, setParty] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div>
      <div className="time-wrapper">
        {partyTime ? (
          <div>
            <div className="  w-full  fixed top-0 left-0  flex items-center justify-center  bg-opacity-50 transform transition-transform duration-300 insert-0 text-right inline-block  px-4 py-2 leading-none  text-white  w-screen h-screen  ">
              <a
                href="#"
                className="z-40 text-7xl text-white z-50 close rounded-lg"
              >
                <span> Happy New Year ! </span>
              </a>

              <a
                href="/End"
                className="text-2xl text-white z-50 close rounded-lg"
              >
                <span> Close </span>
              </a>

              <div className="z-0">
                {" "}
                <Par />
              </div>
            </div>
          </div>
        ) : (
          <div className="timer-inner  ">
            <div className=" button timer-segment ">
              <span className="time text-white ">{days} Days</span>
            </div>

            <div className=" button timer-segment ">
              <span className="time text-white ">{hours} Hours</span>
            </div>

            <div className=" button timer-segment visible ">
              <span className="time text-white   ">{minutes} Mins</span>
            </div>

            <div className="button timer-segment">
              <div className="time text-white  ">{seconds} Secs</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
