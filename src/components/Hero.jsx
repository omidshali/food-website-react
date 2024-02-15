const Hero = () => {
    return (
      <div className="max-w-[1640px] mx-auto max-h-[500px] p-4">
        <div className="relative max-h-[500px]">
          {/* OverLay */}
          <div className="absolute px-4 text-gray-200 w-full h-full max-h-[500px] bg-black/40 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              The <span className="text-orange-500">Best</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Deliverd <span className="text-orange-500">Foods</span>
            </h1>
          </div>
          <img
            className="w-full max-h-[500px] object-cover"
            src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="food"
          />
        </div>
      </div>
    );
  };
  
  export default Hero;