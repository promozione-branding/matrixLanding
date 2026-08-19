"use client"

import { useState } from "react";
import Popup from "./Popup";

const Toilet = () => {

     const [isPopupOpen, setIsPopupOpen] = useState(false);

  const products = [
    {
      name: "Papyrus Toilet Roll Essentia",
      image: "/product4-3.webp",
    },
    {
      name: "Papyrus Toilet Roll Classic Set",
      image: "/product3-1-1.webp",
    },
    {
      name: "Papyrus Toilet Roll Grand Set",
      image: "/grandset.webp",
    },
    {
      name: "Papyrus Toilet Roll Jumbo",
      image: "/tr3 (1).webp",
    },
    {
      name: "Papyrus Toilet Roll Silk",
      image: "/product5-4.webp",
    },
    {
      name: "Papyrus Toilet Roll Vintage Set",
      image: "/product3-1.webp",
    },
  ];

  return (
    <div className=" bg-[#ffffff] w-full">
    <section className="mb-10 bg-[#ffffff] px-2 max-w-6xl mx-auto">
      {/* Heading */}
      <h3 className="font-medium b text-[2.4rem] bebas text-center pt-4 mb-4">
        OUR TOILET ROLLS
      </h3>

      {/* Products */}
      <div  className="grid grid-cols-3 md:grid-cols-6 gap-5 px-2">
        {products.map((product, index) => (
          <div
          onClick={()=>{setIsPopupOpen(true)}}
            key={index}
            className="flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              loading="lazy"
              className="object-contain"
            />

            <p className="text-[13px] b font-bold mt-2 px-1 leading-tight">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </section>

    <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default Toilet;