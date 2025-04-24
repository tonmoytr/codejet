import Banner from "./(main)/home/components/Banner";
import Gallery2 from "./(main)/home/components/Gallery2";
import Problem from "./(main)/home/components/Problem";
import Solution from "./(main)/home/components/Solution";
import Potential from "./(main)/home/components/Potential";
import Testimonials from "./(main)/home/components/Testimonials";
import Offer from "./(main)/home/components/Offer";
import StartToday from "./(main)/home/components/StartToday";
import Guarantee from "./(main)/home/components/Guarantee";

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
        {/* <Gallery /> */}
        <Gallery2 />
        <Problem />
        <Solution />
        <Potential />
        <Testimonials />
        <Offer />
        <StartToday />
        <Guarantee />
      </div>
    </div>
  );
}
