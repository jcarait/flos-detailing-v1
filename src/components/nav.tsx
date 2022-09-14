import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav(): JSX.Element {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="py-4 shadow-lg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/">
                <a>
                  <Image src="/badge.png" width="100px" height="77px" />
                </a>
              </Link>
            </div>
            <div className="hidden items-center space-x-3 md:flex">
              <Link href="/">
                <a className="border-b-4 border-red-500 py-4 px-2 font-semibold text-red-500">
                  Home
                </a>
              </Link>
              <Link href="/#about" scroll={false}>
                <a className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                  About
                </a>
              </Link>
              <Link href="/services">
                <a className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                  Services
                </a>
              </Link>
              <Link href="#contact" scroll={false}>
                <a className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                  Contact
                </a>
              </Link>
            </div>
          </div>
          <div className="ml-auto flex items-center md:hidden">
            <button
              className="mobile-menu-button outline-none"
              onClick={handleClick}
            >
              <svg
                className="h-6 w-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          {active && (
            <div className="mobile-menu">
              <ul className="">
                <li className="active">
                  <Link href="/">
                    <a className="block bg-green-500 px-2 py-4 text-sm font-semibold text-white">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#about" scroll={false}>
                    <a className="block py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="block py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact" scroll={false}>
                    <a className="block py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

const navLinks = ["Services", "About", "Contact"];
