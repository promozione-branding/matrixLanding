const Form = () => {
  return (
    <section className="bg-[#F7F7F7] md:py-6 py-2 px-3">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Product Image */}
          <div className="hidden md:flex justify-center md:justify-start">
            <img
              src="/product50.webp"
              alt="Product"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-contain"
            />
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-md md:p-6 p-2">
            <div className="bg-black text-white px-4 py-5 rounded-xl">

              <h3 className="text-white text-2xl font-bold text-center mb-5">
                Bulk &amp; Wholesale Order Only
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
    </section>
  );
};

export default Form;