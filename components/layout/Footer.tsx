import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Map, Phone, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-600 px-4 py-12 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-white font-bold text-2xl mb-4">
              United Kingdom
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/uk/london"
                  className="text-white hover:text-primary-200 transition-colors"
                >
                  London
                </Link>
              </li>
              <li>
                <Link
                  href="/uk/birmingham"
                  className="text-white hover:text-primary-200 transition-colors"
                >
                  Birmingham
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-bold text-2xl mb-4">Bangladesh</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/bangladesh/dhaka"
                  className="text-white hover:text-primary-200 transition-colors"
                >
                  Dhaka
                </Link>
              </li>
              <li>
                <Link
                  href="/bangladesh/sylhet"
                  className="text-white hover:text-primary-200 transition-colors"
                >
                  Sylhet
                </Link>
              </li>
              <li>
                <Link
                  href="/bangladesh/moulvibazar"
                  className="text-white hover:text-primary-200 transition-colors"
                >
                  Moulvibazar
                </Link>
              </li>
              <li>
                <Link
                  href="/bangladesh/chattogram"
                  className="text-white hover:text-primary-200 transition-colors"
                >
                  Chattogram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-white font-bold text-2xl mb-4">Nigeria</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/nigeria/lagos"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Lagos
              </Link>
            </li>
            <li>
              <Link
                href="/nigeria/kaduna"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Kaduna
              </Link>
            </li>
            <li>
              <Link
                href="/nigeria/ikeja"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Ikeja
              </Link>
            </li>
            <li>
              <Link
                href="/nigeria/abuja"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Abuja
              </Link>
            </li>
            <li>
              <Link
                href="/nigeria/portharcourt"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Portharcourt
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold text-2xl mb-4">Pakistan</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/pakistan/karachi"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Karachi
              </Link>
            </li>
            <li>
              <Link
                href="/pakistan/lahore"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Lahore
              </Link>
            </li>
            <li>
              <Link
                href="/pakistan/islamabad"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Islamabad
              </Link>
            </li>
            <li>
              <Link
                href="/pakistan/peshawar"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Peshawar
              </Link>
            </li>
            <li>
              <Link
                href="/pakistan/quetta"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Quetta
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold text-2xl mb-4">Contacts</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="text-white" size={24} />
              <a
                href="tel:+442034881195"
                className="text-white hover:text-primary-200 transition-colors"
              >
                +44 (0)203 488 1195
              </a>
            </div>
            <div className="flex items-start gap-4">
              <Map className="text-white mt-1" size={24} />
              <address className="text-white not-italic">
                Unit 1, Sky View Tower, London E15 GR, United Kingdom
              </address>
            </div>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-950 w-12 h-12 rounded-md flex items-center justify-center group"
              >
                <div className="bg-white rounded-full w-8 h-8 flex justify-center items-center group-hover:bg-primary-200 transition-colors">
                  <Facebook className="text-primary-600" size={20} />
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-950 w-12 h-12 rounded-md flex items-center justify-center group"
              >
                <div className="bg-white rounded-full w-8 h-8 flex justify-center items-center group-hover:bg-primary-200 transition-colors">
                  <Youtube className="text-primary-600" size={20} />
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-950 w-12 h-12 rounded-md flex items-center justify-center group"
              >
                <div className="bg-white rounded-full w-8 h-8 flex justify-center items-center group-hover:bg-primary-200 transition-colors">
                  <Linkedin className="text-primary-600" size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
