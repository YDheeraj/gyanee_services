import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-yellow-950 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo */}
        <div className="flex flex-col justify-center">
          <img
            src="/path-to-your-logo.png"
            alt="Gyanee Services Logo"
            className="h-16 mb-6 md:mb-0"
          />
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-500">Home</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-500">Services</Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-yellow-500">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="hover:text-yellow-500">
                Air Conditioner Repair
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-500">
                Refrigerator Repair
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-500">
                Washing Repair
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-500">
                Microwave Repair
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-black" />
              <span>Pillar no. 58, Badshahpur Sohna Rd Hwy, near Vatika chowk, Sector 69, Gurugram, Haryana 122102</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-black" />
              <a href="tel:09211745950" className="hover:text-black">96162 18451</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-black" />
              <a href="mailto:info@Gyaneeservices.in" className="hover:text-black">info@Gyaneeservices.in</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
