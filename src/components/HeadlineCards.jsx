import Card from "./Card";
import { foods } from "../data/data";
const HeadlineCards = () => {
  return (
    <div className="w-full max-w-[1640px] mx-auto grid md:grid-cols-3 gap-6 p-4 py-12">
      {/* card */}
      {foods.map((food) => {
        return (
          <Card title={food.title} describe={food.describe} img={food.img} />
        );
      })}
    </div>
  );
};

export default HeadlineCards;