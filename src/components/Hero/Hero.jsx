import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#phone-text", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);
  return (
    <section className=" w-full nav-height bg-black relative">
      <div className=" h-5/6 w-full flex-center flex-col">
        <p id="phone-text" className="text-sm hero-title">
          iPhone 16Pro Max
        </p>

        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="poninter-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className=" flex flex-col items-center opacity-0 translate-y-20"
      >
        <a
          href="#highlights"
          className=" bg-purple-600 px-4 font-semibold py-1 mt-16 rounded-md"
        >
          Buy
        </a>
        <p className=" font-normal text-sm mt-2"> From $559/month or $1099</p>
      </div>
    </section>
  );
};

export default Hero;
