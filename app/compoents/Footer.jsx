import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#A70C07] text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-5 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        {/* Company Details */}
        <div className="text-center md:text-left">
          <p className="font-bold text-base mb-2">Matrix Tissues</p>

          <p className="leading-6">
            Address:
            <br />
            I-237, Sec-3, Bawana Industrial Area,
            <br />
            Delhi – 110039
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end md:text-right text-center">
          <p className="font-bold mb-3">Follow Us</p>

          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/Matrix.Tissues/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebookF size={20} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/papyrusbymatrixtissues/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram size={22} />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@papyrusbymatrixtissues"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:scale-110 transition-transform"
            >
              <FaYoutube size={22} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedinIn size={21} />
            </a>

            {/* Twitter */}
            <a
              href="#"
              aria-label="Twitter"
              className="hover:scale-110 transition-transform"
            >
              <FaTwitter size={20} />
            </a>
          </div>

          {/* Phone */}
          <p className="mt-2">
            Phone:{" "}
            <a href="tel:+918810540823" className="underline">
              +91 88105 40823
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 text-center text-xs px-4 py-3">
        Website Designed by <a target="_blank" href="https://www.inquirybazaar.com/" className="underline">Inquiry Bazaar Pvt Ltd</a>
      </div>
    </footer>
  );
};

export default Footer;
