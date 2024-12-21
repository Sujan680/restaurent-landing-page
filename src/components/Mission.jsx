import React from "react";
import missionImg from "../assets/mission.jpeg";
import missionVideo from "../assets/mission.mp4";
import { MISSION } from "../constants";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto text-center">
        <h2 className="mb-2 text-3xl lg:text-4xl">Our Mission</h2>
        <div className="mb-10 mx-auto h-2 w-[170px]  bg-rose-300 lg:-rotate-3"></div>
        <div className="relative flex items-center justify-center px-6">
          <motion.video
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-3xl lg:w-[90%]"
            poster={missionImg}
          >
            <source src={missionVideo} type="video/mp4" />
          </motion.video>
          <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once:true}}
          transition={{duration: 0.6, delay: 0.5}}
          className="absolute h-full w-full rounded-3xl bg-black/40"></motion.div>
          <motion.p
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once:true}}
          transition={{duration: 1, delay: 0.5}}
           className="absolute max-w-lg tracking-tighter lg:text-3xl">
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
