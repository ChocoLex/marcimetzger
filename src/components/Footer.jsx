import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="mb-3 text-sm">
        123 Main Street, City, State | (123) 456-7890 | info@marcimetzger.com
      </p>

      <div className="flex justify-center space-x-4 text-xl mb-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
          <FaLinkedin />
        </a>
        <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
          <FaYelp />
        </a>
      </div>

      <p className="text-gray-500 text-xs">
        © {new Date().getFullYear()} Marci Metzger. All rights reserved.
      </p>
    </footer>
  );
}
