import Banner from "./(main)/home/components/Banner";
import Gallery from "./(main)/home/components/Gallery";
import Gallery2 from "./(main)/home/components/Gallery2";
import Problem from "./(main)/home/components/Problem";

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
        {/* <Gallery /> */}
        <Gallery2/>
        <Problem />
      </div>
    </div>
  );
}
