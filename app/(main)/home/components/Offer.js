import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Offer() {
  return (
    <div className="flex justify-center items-center px-6 py-12 md:py-20 text-center">
      <div className="flex flex-col justify-between items-center gap-8">
        <h1 className="text-4xl px-3 font-bold text-black leading-tight">
          Already have a Figma design?
        </h1>
        <article className="text-lg font-medium text-gray-600">
          Codejet Plugin seamlessly converts auto layout frames natively in
          Figma to websites that you <br /> can edit in Visual Editor.
        </article>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-8">
          <button className="px-8 py-3 bg-orange-600 text-white text-lg font-bold rounded-xl hover:bg-orange-700">
            Get Figma Plugin
          </button>
          <button className="px-8 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-lg font-bold hover:text-orange-500 flex items-center justify-between gap-4">
            <span>Get Figma Library</span>
            <RiArrowRightSLine className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
