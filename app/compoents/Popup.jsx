"use client";

import axios from "axios";
import { X } from "lucide-react";
import { useState } from "react";

const Popup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
        setName("");
        setPhone("");
        setEmail("");
        setPlace("");
        setMessage("");

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
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      {/* Popup */}
      <div
        className="bg-white rounded-md shadow-lg w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-black transition-colors"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 b bebas text-center">Get a Quote</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Email */}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Phone */}
          <input
            id="contact"
            name="contact"
            type="tel"
            placeholder="Phone (10 digits)"
            minLength={10}
            maxLength={10}
            pattern="[0-9]{10}"
            inputMode="numeric"
            value={phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 10);

              setPhone(value);
            }}
            required
            className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Location */}
          <input
            id="place"
            name="place"
            type="text"
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

          {/* Success */}
          {submitted && (
            <p className="text-green-600 text-center font-semibold text-sm">
              Your inquiry has been submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Popup;
