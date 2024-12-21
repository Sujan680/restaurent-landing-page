import React from "react";
import missionImg from "../assets/mission.jpeg";
import missionVideo from "../assets/mission.mp4";
import { MISSION } from "../constants";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto text-center">
        <h2 className="mb-2 text-3xl lg:text-4xl">Our Mission</h2>
        <div className="mb-10 mx-auto h-2 w-[170px]  bg-rose-300 lg:-rotate-3"></div>
        <div className="relative flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-3xl"
            poster={missionImg}
          >
            <source src={missionVideo} type="video/mp4" />
          </video>
          <div className="absolute h-full w-full rounded-3xl bg-black/40"></div>
          <p className="absolute max-w-lg tracking-tighter lg:text-3xl">
            {MISSION}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
