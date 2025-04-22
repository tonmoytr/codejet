import React from "react";

export default function Banner() {
  return (
    <div className="flex justify-center items-center px-6 py-12 md:py-20 text-center">
      <div className="flex flex-col justify-between items-center gap-16">
        <h1 className="text-6xl font-bold text-black leading-tight">
          Create beautiful websites <br />
          <span className="text-orange-600">no tech skills needed!</span>
        </h1>
        <article className="text-lg font-medium text-gray-600">
          Create a website that brings in clients, saves you time and money, and
          boosts your ads— all with <br /> Codejet’s simple tools and expert
          help.
        </article>
        <button className="px-8 py-3 bg-orange-600 text-white text-lg font-bold rounded-lg hover:bg-orange-700">
          Get started
        </button>
      </div>
    </div>
  );
}
