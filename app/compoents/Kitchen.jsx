const Kitchen = () => {
  const products = [
    {
      name: "Papyrus Kitchen Towel",
      image: "/kt4-2.webp",
    },
    {
      name: "Kitchen Towel Essentia",
      image: "/product8-4.webp",
    },
    {
      name: "Papyrus Kitchen Towel Grand",
      image: "/product8.webp",
    },
    {
      name: "Papyrus Kitchen Towel Washable",
      image: "/kt1 (1).webp",
    },
  ];

  return (
    <div className="w-full bg-[#ffffff]">
    <section className="mb-10 bg-[#ffffff] px-2 max-w-6xl mx-auto">
      {/* Heading */}
      <h3 className="font-medium b text-[2.4rem] text-center pt-4 mb-4">
        OUR KITCHEN TOWEL
      </h3>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-2">
        {products.map((product, index) => (
          <div
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

            <p className="text-sm md:text-[13px] b font-medium mt-2 px-2 leading-tight">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Kitchen;