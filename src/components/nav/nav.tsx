import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";
import { AiFillCaretDown } from "react-icons/ai";

export default function Nav(): JSX.Element {
  const [active, setActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (active) {
      setActive(false);
    }

    if (dropdownActive) {
      setDropdownActive(false);
    }
  }, [router]);

  const handleClick = () => {
    setActive(!active);
  };

  const handleMobileClick = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black py-4 shadow-lg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between">
          <div className="flex w-full">
            <div>
              <Link href="/">
                <a>
                  <Image src="/badge.png" width="100px" height="77px" />
                </a>
              </Link>
            </div>
            <div className="ml-auto hidden items-center space-x-7 text-xl md:flex">
              <Link href="/">
                <a className="border-b-4 border-red-500 py-4 px-2 font-semibold text-red-500">
                  Home
                </a>
              </Link>
              <Link href="/#about" scroll={false} replace>
                <a className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                  About
                </a>
              </Link>
              <div className="dropdown group inline-block overflow-hidden">
                <div className="flex items-center">
                  <p className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                    Services
                  </p>
                  <span className="mt-1 text-white">
                    <AiFillCaretDown />
                  </span>
                </div>
                {/* Dropdown Menu */}

                <div className="dropdown-content top-30 invisible absolute z-10 flex w-80 flex-col bg-neutral-900 p-7 group-hover:visible">
                  <div className="py-4">
                    <span className="mr-3">💥</span>
                    <Link href="/services/detailing">
                      <a className="detailing peer py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                        Detailing
                      </a>
                    </Link>
                  </div>
                  <div className="py-4">
                    <span className="mr-3">🔸</span>
                    <Link href="/services/paint-correction">
                      <a className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                        Paint Correction
                      </a>
                    </Link>
                  </div>
                  <div className="py-4">
                    <span className="mr-3">💎</span>
                    <Link href="/services/paint-protection">
                      <a className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                        Paint Protection
                      </a>
                    </Link>
                  </div>
                  <div className="py-4">
                    <span className="mr-3">🕶️</span>
                    <Link href="/services/window-tinting">
                      <a className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                        Window Tinting
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="#contact" scroll={false}>
                <a className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                  Contact
                </a>
              </Link>
            </div>
            <IconContext.Provider value={{ size: "2em" }}>
              <div className="social-links ml-auto mr-7 flex items-center space-x-2 text-lg text-white">
                <AiOutlineFacebook />
                <AiFillInstagram />
              </div>
            </IconContext.Provider>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
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
                <Link href="#about" scroll={false} replace>
                  <a className="block py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                    About
                  </a>
                </Link>
              </li>
              <li onClick={handleMobileClick}>
                <div className="dropdown group inline-block overflow-hidden">
                  <div className="flex items-center">
                    <p className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                      Services
                    </p>
                    <span className="mt-1 text-white">
                      <AiFillCaretDown />
                    </span>
                  </div>
                  {/* Mobile Dropdown Menu */}
                  {dropdownActive && (
                    <div className="dropdown-content group-hover:block">
                      <div className="py-4">
                        <span className="mr-3">💥</span>
                        <Link href="/services/detailing">
                          <a className="detailing peer py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                            Detailing
                          </a>
                        </Link>
                      </div>
                      <div className="py-4">
                        <span className="mr-3">🔸</span>
                        <Link href="/services/paint-correction">
                          <a className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                            Paint Correction
                          </a>
                        </Link>
                      </div>
                      <div className="py-4">
                        <span className="mr-3">💎</span>
                        <Link href="/services/paint-protection">
                          <a className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                            Paint Protection
                          </a>
                        </Link>
                      </div>
                      <div className="py-4">
                        <span className="mr-3">🕶️</span>
                        <Link href="/services/window-tinting">
                          <a className="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-red-500">
                            Window Tinting
                          </a>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
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
    </nav>
  );
}

const navLinks = ["Services", "About", "Contact"];
