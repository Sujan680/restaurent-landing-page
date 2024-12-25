import React from "react";

const DishCard = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <div>
      <img
        src={strMealThumb}
        alt={strMeal}
        width={300}
        className="rounded-3xl p-2"
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl md:text-2xl font-bold tracking-tighter">
            {strMeal}
        </h3>
        <p className="text-sm text-neutral-300">  codeNo: #{idMeal} </p>
      </div>
    </div>
  );
};

export default DishCard;
