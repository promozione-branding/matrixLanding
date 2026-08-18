const Cta = () => {
  return (
    <section className="bg-[#F5F1DC] px-5 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-bold b text-center md:text-left text-sm md:text-base">
          Soft and handy, wipe with cheer, Paper napkins, always near!
        </p>

        <a
          href="https://wa.me/918810540823"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto"
        >
          <button
            type="button"
            className="bg-[#CF1919] text-white w-full md:w-auto px-6 py-2 rounded-lg font-medium whitespace-nowrap hover:bg-red-700 transition-colors"
          >
            Get Wholesale Price
          </button>
        </a>
      </div>
    </section>
  );
};

export default Cta;
