"use client";

import axios from "axios";
import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSubmitted(false);

      const formData = {
        supplierToken: "6a2d285424a9b17a4dde0fb6",
        platform: "Matrix Tissue Landing Page",
        platformEmail: "matrixtissues@gmail.com",
        name,
        phone,
        email,
        place,
        product: "N/A",
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (data?.success) {
        // Reset form
        setName("");
        setPhone("");
        setEmail("");
        setPlace("");
        setMessage("");

        // Show success message
        setSubmitted(true);

        console.log("Form submitted successfully");
      }
    } catch (err) {
      console.error("Form submission error:", err);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F7F7F7] py-6 px-3" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-md md:p-6 p-2">
            <div className="bg-black text-white px-4 py-5 rounded-xl">
              <h3 className="text-white text-2xl font-bold text-center mb-5">
                Bulk &amp; Wholesale Order Only
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Email */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);

                    setPhone(value);
                  }}
                  required
                  className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Location */}
                <input
                  type="text"
                  id="place"
                  name="place"
                  placeholder="Place / Location"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  required
                  className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Message */}
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full border border-red-600 p-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </button>

                {/* Success Message */}
                {submitted && (
                  <p className="text-green-400 text-center font-semibold text-sm">
                    Your inquiry has been submitted successfully!
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Product Image */}
          <div className="hidden md:flex justify-center md:justify-start">
            <img
              src="/product8-4.webp"
              alt="Product"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
