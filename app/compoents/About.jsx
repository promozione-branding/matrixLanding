const About = () => {
  return (
    <section
      className="bg-[#FAB969] px-5 md:py-12 py-5"
      id="about"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 items-center">

        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/img-flower2-3.webp"
            alt="Matrix Tissues Logo"
            width={220}
            height={220}
            loading="lazy"
            className="mb-5 object-contain"
          />

          <p className="text-lg b font-medium text-center">
            About Our Company
          </p>
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">

          <p className="text-xl b md:text-2xl font-medium md:mb-5 mb-2 leading-snug">
            Matrix Tissues offers paper napkins, kitchen towels, and toilet
            paper—soft, strong, and perfect for home, office, travel, and car
            use.
          </p>

          <p className="text-[16px] b mb-6">
            Our premium kitchen towel tissue paper, made from 100% natural
            virgin paper, offers superior absorbency, durability, and
            hygiene—ideal for food, hospitality, and promotional use.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="https://wa.me/918810540823"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CF1919] text-white px-6 py-2 font-medium rounded-md text-center hover:bg-red-700 transition-colors"
            >
              Unlock Exclusive Offers
            </a>

            <button
              type="button"
              className="bg-[#CF1919] text-white px-6 py-2 font-medium rounded-md hover:bg-red-700 transition-colors"
            >
              Explore Premium Range
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;