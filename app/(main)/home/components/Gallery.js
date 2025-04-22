import Image from "next/image";

const ImageGallery = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
];

export default function Gallery() {
  return (
    <section className="w-full bg-white py-4">
      <div className=" grid grid-cols-4 grid-rows-2 gap-4 px-4">
        {ImageGallery.map((name, i) => (
          <div key={i} className="overflow-hidden h-[250px] relative">
            <Image
              src={`/assets/gallery/${name}`}
              alt={`Gallery Image ${i + 1}`}
              fill
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
