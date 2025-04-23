import Image from "next/image";

const row1 = ["1.png", "2.png", "3.png", "4.png"];
const row2 = ["5.png", "6.png", "7.png", "8.png"];

export default function Gallery() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-orange-100 py-22 space-y-10 flex justify-center items-center overflow-hidden">
      {/* Row 1 */}
      <div className=" ">
        <div className="relative w-full overflow-hidden">
          <div className="flex translate-x-[100px] space-x-4">
            {row1.map((img, i) => (
              <div
                key={i}
                className="relative w-[450px] h-[250px] md:w-[630px] md:h-[350px] shrink-0 mr-6"
              >
                <Image
                  src={`/assets/gallery/${img}`}
                  alt={`Gallery 1 - ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 – Different spacing & image width */}
        <div className="relative w-full overflow-hidden mt-6">
          <div className="flex translate-x-[-50px] space-x-6">
            {row2.map((img, i) => (
              <div
                key={i}
                className="relative w-[450px] h-[250px] md:w-[630px] md:h-[350px] shrink-0"
              >
                <Image
                  src={`/assets/gallery/${img}`}
                  alt={`Gallery 2 - ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
