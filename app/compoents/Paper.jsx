const Paper = () => {
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
      <h2 className="font-medium b text-[2.4rem] text-center mb-4">
        Our Paper Napkins
      </h2>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* First 3 Products */}
        <div className="grid grid-cols-3 gap-4">
          {products.slice(0, 3).map((product, index) => (
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

              <p className="text-sm b font-medium mt-2 px-2">
                {product.name}
              </p>
            </div>
          ))}
        </div>

        {/* Last 3 Products */}
        <div className="grid grid-cols-3 gap-4">
          {products.slice(3, 6).map((product, index) => (
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

              <p className="text-[13px] b font-medium mt-1">
                {product.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    </div>
  );
};

export default Paper;