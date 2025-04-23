import Banner from "./(main)/home/components/Banner";
import Gallery2 from "./(main)/home/components/Gallery2";
import Problem from "./(main)/home/components/Problem";
import Solution from "./(main)/home/components/Solution";
import Potential from "./(main)/home/components/Potential";

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
        {/* <Gallery /> */}
        <Gallery2/>
        <Problem />
        <Solution/>
        <Potential/>
      </div>
    </div>
  );
}
