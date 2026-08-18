const MinimumOrder = () => {
  const points = [
    "Emphasizing Partnership and Growth",
    "Highlighting Accessibility and Empowerment",
    "Focusing on Understanding and Flexibility",
    "Emphasizing the Value of Every Business",
  ];

  return (
    <section className="bg-black px-5 py-5">
      {/* Heading */}
      <h3 className="text-white  text-3xl text-center font-medium">
        Why We Accept Minimum Order Of 1 Carton
      </h3>

      {/* Points */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
        {points.map((point, index) => (
          <div
            key={index}
            className="bg-gradient-to-t b from-white to-gray-400 text-[15px] font-bold px-3 py-3 rounded-sm"
          >
            {point}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinimumOrder;