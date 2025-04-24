import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { FiLayout, FiRadio } from "react-icons/fi";

export default function Guarantee() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-start items-center gap-3 text-center">
            <figure className="p-2 bg-black rounded-xl w-[50px] h-[50px] flex justify-center items-center">
              <span className="text-2xl text-orange-600">
                <FiLayout />
              </span>
            </figure>
            <article>
              <h3 className="text-black text-2xl font-bold my-3">Guarantee</h3>
              <p className="text-md font-medium text-gray-600">
                Codejet comes with a 14-day money- back guarantee.
              </p>
            </article>
          </div>
          <div className="flex flex-col justify-start items-center gap-3 text-center">
            <figure className="p-2 bg-black rounded-xl w-[50px] h-[50px] flex justify-center items-center">
              <span className="text-2xl text-orange-600">
                <AiFillMessage />
              </span>
            </figure>
            <article>
              <h3 className="text-black text-2xl font-bold my-3">Support</h3>
              <p className="text-md font-medium text-gray-600">
                Our team works 24/7 and can answer any question you have about
                Codejet.
              </p>
            </article>
          </div>
          <div className="flex flex-col justify-start items-center gap-3 text-center">
            <figure className="p-2 bg-black rounded-xl w-[50px] h-[50px] flex justify-center items-center">
              <span className="text-2xl text-orange-600">
                <FiRadio />
              </span>
            </figure>
            <article>
              <h3 className="text-black text-2xl font-bold my-3">Privacy</h3>
              <p className="text-md font-medium text-gray-600">
                We take your privacy seriously. Learn more about our privacy
                policy.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
