"use client"
import { useState } from "react";
import Popup from "./Popup";

const Category = () => {

   const [isPopupOpen, setIsPopupOpen] = useState(false);

  const categories = [
    {
      name: "Face Tissue",
      image: "/New-Project-41-1.webp",
      color: "#F0344F",
    },
    {
      name: "Kitchen Towel",
      image: "/kt1-1.webp",
      color: "#9AB12E",
    },
    {
      name: "Paper Napkin",
      image: "/pt (1).webp",
      color: "#00BBAE",
    },
    {
      name: "Toilet Roll",
      image: "/tr3-1.webp",
      color: "#01729D",
    },
    {
      name: "Cling Film",
      image: "/New-Project-43-1.webp",
      color: "#F88E0F",
    },
    {
      name: "Butter Paper",
      image: "/bp (1).webp",
      color: "#FFD631",
    },
  ];

  return (
    <section className="bg-gray-100" id="product">
      {/* Heading */}
      <h2 className="font-medium b bebas text-[2.4rem] text-center pt-4 mb-4">
        Categories
      </h2>

      {/* Categories Grid */}
      <div onClick={()=>{setIsPopupOpen(true)}} className="grid grid-cols-2 md:grid-cols-3 gap-2 px-1 max-w-6xl mx-auto pb-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="rounded-lg py-3 flex flex-col items-center justify-center"
            style={{ backgroundColor: category.color }}
          >
            <img
              src={category.image}
              alt={category.name}
              width={200}
              height={200}
              loading="lazy"
              className="object-contain"
            />

            <p className="mt-2 text-center text-white font-bold text-lg md:text-xl px-2 leading-tight">
              {category.name}
            </p>
          </div>
        ))}
      </div>


      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

    </section>
  );
};

export default Category;