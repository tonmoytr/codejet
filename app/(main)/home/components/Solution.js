import React from "react";
import EffortLess from "./EffortLess";
import Smart from "./Smart";
import Support from "./Support";

export default function Solution() {
  return (
    <div className="bg-orange-50 my-12">
      <div className="px-4">
        <div className="flex justify-center items-center px-6 py-12 md:py-20 text-center">
          <div className="flex flex-col justify-between items-center gap-10">
            <h6 className="text-xl text-orange-600 font-semibold md:mt-14">
              Solution
            </h6>
            <h3 className="text-4xl leading-12 md:text-5xl font-bold text-black md:leading-tight">
              Your Website, Your Way
            </h3>
            <article className="text-lg font-medium text-gray-600">
              <p>
                Save time and money while staying in control—whether you manage
                your site yourself or <br /> get support from our expert Codejet
                team 24/7.
              </p>
            </article>
          </div>
        </div>
        {/* Effortless */}
        <EffortLess />
        <Smart />
        <Support />
      </div>
    </div>
  );
}
