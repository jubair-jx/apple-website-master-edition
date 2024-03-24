import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../../utils";
import VideoCarousal from "../VideoCarousal/VideoCarousal";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, delay: 1 });
    gsap.to(".link", { opacity: 1, y: 0, delay: 1, stagger: 0.25 });
  }, []);
  return (
    <section
      id="highlights"
      className=" w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className=" screen-max-width">
        <div className=" mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Show the highlights.
          </h1>
          <div className=" flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the movie
              <img src={watchImg} alt="Watch" className="ml-2" />
            </p>
            <p className="link">
              See the events
              <img src={rightImg} alt="Right Image" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousal />
      </div>
    </section>
  );
};

export default Highlights;
