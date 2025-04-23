import { FiLayout } from "react-icons/fi";
import { AiFillMessage } from "react-icons/ai";
import { FiRadio } from "react-icons/fi";

export default function Problem() {
  return (
    <div>
      <div className="flex justify-center items-center px-6 py-12 text-center">
        <div className="flex flex-col justify-between items-center gap-8">
          <h3 className="text-4xl font-bold text-black leading-[48px] text-center">
            <span className="text-orange-600">
              Unlock Your Online Potential
            </span>
            <br />
            with Codejet s Website Builder and <br /> Marketing Tools
          </h3>
          <article className="text-lg font-medium text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros <br /> elementum tristique.
          </article>
        </div>
      </div>
      <div className="container mx-auto py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col justify-start items-center gap-6 text-center">
            <figure className="p-2 bg-black rounded-full w-[50px] h-[50px] flex justify-center items-center">
              <span className="text-2xl text-orange-600">
                <FiLayout />
              </span>
            </figure>
            <article>
              <h3 className="text-black text-2xl font-bold my-5">
                Effortless Website Creation and <br /> Marketing Automation for
                Your <br /> Business
              </h3>
              <p className="text-md font-medium text-gray-600">
                Create a stunning website in minutes with our easy- <br />{" "}
                to-use templates and tools.
              </p>
            </article>
          </div>
          <div className="flex flex-col justify-start items-center gap-6 text-center">
            <figure className="p-2 bg-black rounded-full w-[50px] h-[50px] flex justify-center items-center">
              <span className="text-2xl text-orange-600">
                <AiFillMessage />
              </span>
            </figure>
            <article>
              <h3 className="text-black text-2xl font-bold my-5">
                24/7 Expert Support to Help You <br /> Succeed Online
              </h3>
              <p className="text-md font-medium text-gray-600">
                Our dedicated team is here to assist you whenever <br /> you
                need it.
              </p>
            </article>
          </div>
          <div className="flex flex-col justify-start items-center gap-6 text-center">
            <figure className="p-2 bg-black rounded-full w-[50px] h-[50px] flex justify-center items-center">
              <span className="text-2xl text-orange-600">
                <FiRadio />
              </span>
            </figure>
            <article>
              <h3 className="text-black text-2xl font-bold my-5">
                AI-Driven Marketing Plans for <br /> Maximum Reach and <br />{" "}
                Engagement
              </h3>
              <p className="text-md font-medium text-gray-600">
                Let our AI optimize your ads so you can focus on <br /> your
                business.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
