import { categories } from "./../data/data";
const Category = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12 mx-auto">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* category item */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {categories.map((category, index) => (
          <div className="group bg-gray-100 cursor-pointer rounded-md gap-4 flex justify-center items-center ">
            <h1 className="font-bold text-sm sm:text-lg">{category.name}</h1>
            <img
              className="w-20 group-hover:scale-125 duration-300"
              alt={category.name}
              src={category.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
