import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";

const Dishes = () => {
  const [items, setItems] = useState([]); // State to store fetched items
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log(result);
        
        setItems(result.meals); // Store fetched meals in state
      } catch (error) {
        setError(error.message); // Handle errors
      }
    };
    fetchItems();
  }, []);

  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="mb-2 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <div className="mb-8 mx-auto h-1 md:h-2 w-36 bg-rose-300 lg:-rotate-3"></div>
      {error ? ( // Show error message if an error occurs
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5 md:px-8">
          {items.map(({ idMeal, strMeal, strMealThumb }) => (
            <DishCard
              key={idMeal} // Use a unique key (idMeal)
              idMeal={idMeal}
              strMeal={strMeal}
              strMealThumb={strMealThumb}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Dishes;
