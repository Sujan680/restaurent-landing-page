import React from "react";
import { DISHES } from "../constants";
import DishCard from "./DishCard";

const Dishes = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="mb-2 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <div className="mb-8 mx-auto h-2 w-36  bg-rose-300 lg:-rotate-3"></div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 ">
        {DISHES.map((project, index) => (
          <DishCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Dishes;
