import React from "react";

const Card = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Restaurants</h1>
      <div className="max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl relative hover:scale-105 duration-500 cursor-pointer">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className=" font-bold text-2xl px-2 pt-4">Tantra</p>
            <p className="px-2">OPEN NOW</p>
            <button className="border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md">Order Now</button>
          </div>
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80" alt="" />
        </div>
        <div className="rounded-xl relative hover:scale-105 duration-500 cursor-pointer">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className=" font-bold text-2xl px-2 pt-4">Vindya Canteen</p>
            <p className="px-2">OPEN NOW</p>
            <button className="border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md">Order Now</button>
          </div>
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1634818462211-aa45f43dafdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        <div className="rounded-xl relative hover:scale-105 duration-500 cursor-pointer">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className=" font-bold text-2xl px-2 pt-4">Juice Canteen</p>
            <p className="px-2">OPEN NOW</p>
            <button className="border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md">Order Now</button>
          </div>
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
        </div>
        <div className="rounded-xl relative hover:scale-105 duration-500 cursor-pointer">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className=" font-bold text-2xl px-2 pt-4">David's Cafe</p>
            <p className="px-2">OPEN NOW</p>
            <button className="border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md">Order Now</button>
          </div>
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
        </div>
        <div className="rounded-xl relative hover:scale-105 duration-500 cursor-pointer">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className=" font-bold text-2xl px-2 pt-4">BBC</p>
            <p className="px-2">OPEN NOW</p>
            <button className="border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md">Order Now</button>
          </div>
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
        </div>
        <div className="rounded-xl relative hover:scale-105 duration-500 cursor-pointer">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className=" font-bold text-2xl px-2 pt-4">CIE Canteen</p>
            <p className="px-2">OPEN NOW</p>
            <button className="border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md">Order Now</button>
          </div>
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
