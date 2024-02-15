const CardFood = (props) => {
  return (
    <div className="border rounded-md hover:cursor-pointer hover:scale-105 duration-300 shadow-lg">
      <img
        className="w-full h-[200px] object-cover rounded-md"
        src={props.food.image}
        alt={props.food.name}
      />
      <div className="flex px-2 py-4 justify-between">
        <p className="font-bold">{props.food.name}</p>
        <p>
          <span className="bg-orange-600 rounded-full px-2 text-white">
            {props.food.price}
          </span>
        </p>
      </div>
    </div>
  );
};
export default CardFood;
