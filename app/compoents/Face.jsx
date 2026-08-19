const Face = () => {
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
    <div className="bg-[#ffffff] ">
      <section className="mb-5 px-2 bg-[#ffffff]   max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="font-medium b bebas text-[2.4rem] text-center pt-4 mb-4">
          Our Face Tissue
        </h2>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* First Row */}
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

                <p className="text-sm b font-bold mt-2 px-2">
                  {product.name}
                </p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 gap-3">
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

                <p className="text-[13px] b font-bold mt-1">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Face;
