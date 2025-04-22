import { LuCodeXml } from "react-icons/lu";

export default function Problem() {
  return (
    <div>
      <div className="flex justify-center items-center px-6 py-12 md:py-20 text-center">
        <div className="flex flex-col justify-between items-center gap-10">
          <h6 className="text-xl text-red-600 font-semibold">Problem</h6>
          <h3 className="text-5xl font-bold text-black">
            Struggling to Build Your Online <br /> Presence?
          </h3>
          <article className="text-lg font-medium text-gray-600">
            Many small business owners find it daunting to create a professional
            website and manage <br /> marketing effectively. Without technical
            skills, they often feel overwhelmed and miss out on <br /> valuable
            online opportunities.
          </article>
        </div>
      </div>
      <div className="container mx-auto py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col justify-between items-center gap-6 text-center">
            <figure className="p-2 bg-orange-600 rounded-full w-[50px] h-[50px] flex justify-center items-center">
              <span className="text-2xl text-white">
                <LuCodeXml />
              </span>
            </figure>
            <article>
              <h3 className="text-black text-2xl font-bold my-5">
                The Complexity of Website <br /> Creation
              </h3>
              <p className="text-md font-medium text-gray-600">
                Building a website can be very time-consuming and <br />{" "}
                confusing without technical knowledge
              </p>
            </article>
          </div>
          <div className="flex flex-col justify-between items-center gap-6 text-center">
            <figure className="p-2 bg-orange-600 rounded-full w-[50px] h-[50px] flex justify-center items-center">
              <span className="text-2xl text-white">
                <LuCodeXml />
              </span>
            </figure>
            <article>
              <h3 className="text-black text-2xl font-bold my-5">
                Marketing Without Expertise is <br /> Challenging
              </h3>
              <p className="text-md font-medium text-gray-600">
                Navigating digital marketing without guidance can <br /> lead to
                wasted resources
              </p>
            </article>
          </div>
          <div className="flex flex-col justify-between items-center gap-6 text-center">
            <figure className="p-2 bg-orange-600 rounded-full w-[50px] h-[50px] flex justify-center items-center">
              <span className="text-2xl text-white">
                <LuCodeXml />
              </span>
            </figure>
            <article>
              <h3 className="text-black text-2xl font-bold my-5">
                Lack of Support Can Hinder <br /> Growth
              </h3>
              <p className="text-md font-medium text-gray-600">
                Without expert help, businesses struggle to thrive <br /> online
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
