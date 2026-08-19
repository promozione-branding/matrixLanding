"use client"
import { useState } from "react";
import Popup from "./Popup";

const Paper = () => {
     const [isPopupOpen, setIsPopupOpen] = useState(false);

  const products = [
    {
      name: "Papyrus Colour Napkin",
      image: "/color.webp",
    },
    {
      name: "Silk Paper Napkin",
      image: "/paper1.webp",
    },
    {
      name: "Papyrus Party Pack",
      image: "/party.webp",
    },
    {
      name: "Classic Color Napkin",
      image: "/products16-1.webp",
    },
    {
      name: "Essentia Paper Napkin",
      image: "/PRODUCT48.webp",
    },
    {
      name: "Name Print Napkin",
      image: "/products32-1.webp",
    },
  ];

  return (
    <div className="bg-[#ffffff] w-full">
  <section className="mb-5 px-2 bg-[#ffffff] max-w-6xl mx-auto">

    {/* Heading */}
    <h2 className="font-medium b bebas text-[2.4rem] text-center mb-4">
      Our Paper Napkins
    </h2>

    {/* Products */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      {products.slice(0, 6).map((product, index) => (
        <div
          key={index}
          onClick={() => setIsPopupOpen(true)}
          className="flex flex-col items-center text-center cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            loading="lazy"
            className="object-contain"
          />

          <p className="text-sm b font-bold mt-2 px-2">
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
  );<div className="bg-[#ffffff] w-full">
  <section className="mb-5 px-2 bg-[#ffffff] max-w-6xl mx-auto">

    {/* Heading */}
    <h2 className="font-medium b bebas text-[2.4rem] text-center mb-4">
      Our Paper Napkins
    </h2>

    {/* Products */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      {products.slice(0, 6).map((product, index) => (
        <div
          key={index}
          onClick={() => setIsPopupOpen(true)}
          className="flex flex-col items-center text-center cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            loading="lazy"
            className="object-contain"
          />

          <p className="text-sm b font-bold mt-2 px-2">
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
};

export default Paper;