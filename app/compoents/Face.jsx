"use client"
import { useState } from "react";
import Popup from "./Popup";

const Face = () => {

     const [isPopupOpen, setIsPopupOpen] = useState(false);

  const products = [
    {
      name: "Customisable Face Tissues",
      image: "/customproduct.webp",
    },
    {
      name: "Facial Tissue Papyrus Silk",
      image: "/classic.webp",
    },
    {
      name: "Papyrus Popup",
      image: "/popup.webp",
    },
    {
      name: "Facial Tissue Papyrus 70 Pull",
      image: "/PRODUCT20-1.webp",
    },
    {
      name: "Luxury Black Face Tissue",
      image: "/product-1.jpg",
    },
    {
      name: "Papyrus Vintage 100 Pulls",
      image: "/ft3-4.webp",
    },
  ];

  return (
   <div className="bg-[#ffffff] w-full">
  <section className="mb-5 px-2 py-5 bg-[#ffffff] max-w-6xl mx-auto">

    {/* Heading */}
    <h2 className="font-medium b bebas text-[2.4rem] text-center mb-4">
       Our Face Tissue
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
  );
};

export default Face;
