import React from "react";
import TopTenCard from "./TopTenCard";

export default function Hero() {
  return (
    <div>
      <div className="relative h-screen w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1695963279977-f20918e05dbf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover w-full h-full absolute inset-0 z-0"
        />
        <div className="z-20 relative p-4 rounded-lg max-w-screen-xl text-start text-white">
          <p>Trend's Now</p>
          <p className="mb-4">Action 2017 | England | 1h21min</p>
          <h1 className="text-3xl font-bold">Soviet Soldier</h1>
          <h2 className="mt-4 w-1/2 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            beatae ipsam aperiam ipsa accusamus quam debitis ut? Neque repellat
            provident, voluptates quidem, accusamus eligendi distinctio
            repellendus sint, placeat laborum alias?
          </h2>
          <div className="flex flex-row mt-5 justify-start space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              See Details
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-xl relative z-20 -mt-36">
        <p className="text-white">TopTen</p>
        <div className="grid grid-cols-4 gap-6 ">
          <TopTenCard />
          <TopTenCard />
          <TopTenCard />
          <TopTenCard />
        </div>
      </div>
    </div>
  );
}
