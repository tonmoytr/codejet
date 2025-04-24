import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

export default function StartToday() {
  return (
    <div className="flex justify-center items-center px-6 py-12 md:py-32 text-center ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-24 ">
        <article className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-xl font-bold text-orange-600">Start Today</h3>
          <h2 className="text-4xl font-bold text-left text-black leading-tight">
            Build your website and start <br /> attracting clients today!
          </h2>
        </article>
        <div className="flex flex-col justify-start md:justify-center items-start gap-3">
          <p className="text-lg font-medium text-gray-600 text-left">
            Start with a template or get assistance from our support team!
          </p>
          <div className="flex flex-row items-start gap-4 mt-5">
            <button className="px-8 py-3 bg-orange-600 text-white text-md md:text-lg font-bold rounded-xl hover:bg-orange-700">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-md md:text-lg font-bold hover:text-orange-500 flex items-center justify-between gap-4">
              <span>Book demo</span>
              <RiArrowRightSLine className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
