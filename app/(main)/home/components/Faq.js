import React from "react";
import FAQSection from "./FAQSection";

export default function Faq() {
  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="flex justify-center items-center px-6  ">
        <div className="flex flex-col justify-between items-center gap-6 mb-8">
          <article className="text-center">
            <h6 className="text-md font-semibold text-orange-600 mb-4">FAQ</h6>
            <h2 className="text-4xl px-3 font-bold text-black leading-tight">
              Frequently Asked Questions
            </h2>
          </article>
          <article className="text-lg font-medium text-gray-600">
            <p>
              Here are some common questions about building your website with
              Codejet.
            </p>
          </article>
        </div>
      </div>
      {/* questins */}
      <div>
        <FAQSection />
      </div>
    </div>
  );
}
