import { useState } from "react";
import { data } from "../data/data";
import CardFood from "./CardFood";

const Food = () => {
  const [foods, setFoods] = useState(data);

  // Filter by price
  const filterByPrice = (price) => {
    setFoods(data.filter((food) => food.price === price));
  };
  // Filter by category

  const filterbyType = (type) => {
    setFoods(data.filter((food) => food.category === type));
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* filters */}
      <div className="flex flex-col lg:flex-row gap-2 justify-between">
        {/* Filter type */}
        <div>
          <p className="text-gray-700 font-bold"> Filter Type</p>
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => setFoods(data)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterbyType("burger")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterbyType("pizza")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterbyType("salad")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterbyType("chicken")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter price */}
        <div>
          <p className="text-gray-700 font-bold">Filter Price</p>
          <div className="flex gap-1">
            <button
              onClick={() => filterByPrice("$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterByPrice("$$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterByPrice("$$$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterByPrice("$$$$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {foods.map((food, index) => (
          <CardFood key={index} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Food;
