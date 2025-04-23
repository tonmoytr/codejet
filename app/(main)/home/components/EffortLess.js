import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

export default function EffortLess() {
  return (
    <div className="mb-12">
      <section className="max-w-7xl mx-auto bg-white rounded-[30px] md:rounded-[50px] p-6 md:py-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="px-[48px] py-[30px] mt-10 md:mt-0">
            <article className="grid grid-cols-1 gap-4 md:gap-3">
              <h3 className="text-xl text-orange-600 font-semibold md:mt-0">
                Effortless
              </h3>
              <h2 className="text-3xl font-bold text-black leading-tight">
                Step-by-Step Website Creation Process
              </h2>
              <p className="text-lg font-medium text-gray-600">
                Choose a template that suits your business needs. Customize it
                easily with our intuitive tools and launch your site in no time.
              </p>
            </article>
            <div className="flex flex-col md:flex-row items-start gap-4 mt-8">
              <button className="px-8 py-3 bg-orange-600 text-white text-lg font-bold rounded-xl hover:bg-orange-700">
                Get started
              </button>
              <button className="px-8 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-lg font-bold hover:text-orange-500 flex items-center justify-between gap-4">
                <span>Explore templates</span>
                <RiArrowRightSLine className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div
              className="bg-cover bg-center w-[320px] h-[360px] md:h-[530px] md:w-[602px] rounded-[30px] my-4"
              style={{ backgroundImage: "url('/assets/backgrounds/1.png')" }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
