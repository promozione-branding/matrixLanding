"use client";

import Image from "next/image";
import Popup from "./Popup";
import { useState } from "react";

const products = [
  {
    name: "FACE TISSUE",
    image: "/New-Project-41-1.webp",
  },
  {
    name: "PAPER NAPKIN",
    image: "/pt (1).webp",
  },
  {
    name: "KITCHEN TOWEL",
    image: "/kt1-1.webp",
  },
  {
    name: "BUTTER PAPER",
    image: "/New-Project-43-1.webp",
  },
  {
    name: "CLING FILM",
    image: "/bp (1).webp",
  },
  {
    name: "TOILET ROLL",
    image: "/tr3-1.webp",
  },
];

export default function Hero2() {


       const [isPopupOpen, setIsPopupOpen] = useState(false);


  return (
    <section className="w-full bg-[#e9f0df]  px-5 py-12 sm:px-8 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:gap-10 xl:gap-16">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col justify-center">
            
            {/* Brand */}
            <h3 className="text-[22px] font-bold tracking-wide text-black sm:text-[24px]">
              MATRIX TISSUES
            </h3>

            {/* Manufacturing */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.12em] text-black sm:text-[13px]">
              <span>MANUFACTURING SINCE 2008</span>

              <span className="text-black">•</span>

              <span>BAWANA, DELHI</span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-12 max-w-[500px] bebas text-[40px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#cf1919] sm:text-[48px] lg:text-[42px] xl:text-[48px]">
              Soft on customers.
              <br />
              Tough on wholesale.
            </h1>

            {/* Description */}
            <div className="mt-6 space-y-2  text-[16px] italic leading-relaxed text-black sm:text-[17px]">
              <p>100% virgin pulp · custom branding</p>
              <p>1 carton minimum · pan-India supply</p>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <button
               onClick={()=>{setIsPopupOpen(true)}}
                className="inline-flex items-center justify-center rounded-full bg-[#cf1919] px-6 py-4 text-[15px] font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#ff0000] hover:shadow-lg"
              >
                Get a wholesale quote
              </button>

              <a
                href="tel:+918810540823"
                className="font-mono text-[13px] tracking-wide text-black transition hover:text-[#cf1919]"
              >
                or call +91 88105 40823
              </a>
            </div>
          </div>

          {/* ================= PRODUCT GRID ================= */}
          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 xl:gap-x-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="group flex flex-col items-center"
              >
                {/* Product Image Box */}
                <div className="relative flex h-[180px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-white shadow-[0_15px_25px_rgba(50,65,50,0.14)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_30px_rgba(50,65,50,0.20)] sm:h-[165px] lg:h-[170px] xl:h-[180px]">
                  
                  <div className="relative h-[125px] w-[85%]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 90vw, 30vw"
                    />
                  </div>
                </div>

                {/* Product Name */}
                <p className="mt-4 text-center text-[11px] font-bold tracking-[0.08em] text-black">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


       <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}