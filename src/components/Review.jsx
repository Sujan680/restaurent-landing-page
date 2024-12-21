import React from "react";
import { REVIEW } from "../constants";
import xaviourImg from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const ItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Review = () => {
  return (
    <section className="container mx-auto mb-8 mt-12" id="review">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <motion.p
          variants={ItemVariants}
          className="mb-10 px-6 text-center text-3xl font-light leading-normal tracking-tighter lg:mt-40 lg:text-[3.5rem]"
        >
          {REVIEW.content}
        </motion.p>
        <motion.div
          variants={ItemVariants}
          className="flex items-center justify-center gap-6"
        >
          <img
            src={xaviourImg}
            alt={REVIEW.name}
            width={80}
            height={80}
            className="rounded-full border"
          />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={ItemVariants}
        viewport={{ once: true }}
        className="mt-14 flex flex-wrap items-center justify-center gap-3 md:flex-row"
      >
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            variants={ItemVariants}
            key={index}
            src={customer}
            alt="customer image"
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover "
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Review;
