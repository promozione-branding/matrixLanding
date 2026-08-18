import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section
      role="img"
      aria-label="Hero background"
      className="relative w-full md:h-full h-[45vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg-1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

          {/* Left Content */}
          <div className="text-white flex flex-col justify-center">
            <h1 className="md:text-7xl text-4xl font-bold leading-tight">
              Premium{" "}
              <span className="text-[#DE1E26]">
                Paper Napkins
              </span>{" "}
              Manufacturers
            </h1>

            <p className="mt-4 md:text-lg text-base leading-6">
              We deliver unmatched quality and tailored designs that elevate
              your brand, all at a price that fits your business.
            </p>

            {/* Call Button */}
            <a
              href="tel:+918810540823"
              className="mt-6 w-fit"
            >
              <button
                type="button"
                className="capitalize bg-[#DE1E26] text-white px-4 py-2 text-lg flex items-center gap-3 rounded-md hover:bg-red-700 transition-colors"
              >
                <Phone size={18} fill="white" />
                Call for Best Deal
              </button>
            </a>
          </div>

          {/* Right Form */}
          <div className="hidden md:flex items-center justify-end">
            <div className="my-6 w-full max-w-md">
              <div className="bg-black text-white px-4 py-5 rounded-xl">

                <h3 className="text-white text-2xl font-bold text-center mb-5">
                  Bulk & Wholesale Order Only
                </h3>

                <form className="space-y-4">

                  {/* Name */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  {/* Phone */}
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    placeholder="Phone (10 digits)"
                    minLength={10}
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required
                    className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  {/* Location */}
                  <input
                    type="text"
                    id="place"
                    name="place"
                    placeholder="Place / Location"
                    required
                    className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  {/* Message */}
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                    required
                    className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full border border-red-600 p-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
                  >
                    Submit Inquiry
                  </button>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;