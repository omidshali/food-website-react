const Card = (props) => {
  return (
    <div className="relative rounded-xl">
      {/* Overlay  */}
      <div className="absolute w-full h-full bg-black/50 hover:bg-white/5 duration-300 rounded-lg text-white">
        <p className="text-2xl font-bold px-2 pt-4 ">{props.title}</p>
        <p className="px-2">{props.describe}</p>
        <button className="bg-white font-bold border-white hover:bg-black hover:border-black hover:text-white duration-300 text-black absolute bottom-4 mx-2">
          Order Now
        </button>
      </div>
      <img
        className="object-cover w-full h-full max-h-[160px] md:max-h-[200px] rounded-lg"
        src={props.img}
        alt="/"
      />
    </div>
  );
};

export default Card;
