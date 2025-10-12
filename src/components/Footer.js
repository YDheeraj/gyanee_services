import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-yellow-200 text-black py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo */}
        <div className="flex flex-col justify-center">
          <img
            src="/images/logo_dark.png"
            alt="Gyanee Services Logo"
            className="h-50 mb-6 md:mb-0"
          />
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">Services and Sales</Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:underline">Get In Touch</Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services/kitchen-appliances" className="hover:underline">
                Kitchen Appliances
              </Link>
            </li>
            <li>
              <Link href="/services/power-electronics" className="hover:underline">
                Power Electronics
              </Link>
            </li>
            <li>
              <Link href="/services/electrical-appliances" className="hover:underline">
                Electrical Appliances
              </Link>
            </li>
            <li>
              <Link href="/services/plumbing-home" className="hover:underline">
                Plumbing & Home
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                Lohia Talab WardNo.2, H.No.1349, Putlighar, Mirzapur, Uttar Pradesh, 231001
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone />
              <a href="tel:78971 25865" className="hover:underline">
                78971 25865
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:support@gyaneeservices.com" className="hover:underline">
                support@gyaneeservices.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
