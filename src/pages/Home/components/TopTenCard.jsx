import React from 'react'

export default function TopTen() {
  return (
    <div>
      <a
        href="#"
        className="flex flex-col items-center bg-gray-700 rounded-lg shadow md:flex-row md:max-w-xl">
        <img
          className="object-cover items-center ms-3 w-24 rounded-lg h-24"
          src="https://images.unsplash.com/photo-1668286832509-7c9c373fbfd5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="flex flex-col justify-between p-5 leading-normal">
          <h5 className="mb-2 text-md font-bold tracking-tight text-white">
            Action
          </h5>
          <p className="mb-3 font-normal text-white">
            The Soviet Soldier
          </p>
          <p className='-mt-4 font-extralight text-gray-300'>Episode 1</p>
        </div>
      </a>
    </div>
  );
}
