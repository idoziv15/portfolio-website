"use client";

import Link from "next/link";
import React, { useState } from "react";
import { playfair } from "../../../utils/fonts";
import { Link as ScrollLink } from "react-scroll";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

const NavBar = () => {
  const [isSelected, setIsSelected] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="sticky navbar top-0 w-screen md:w-full flex justify-between items-center py-4 px-8 bg-base-100 z-50">
      <Link href="/" className={playfair.className}>
        Print(Console.log( IDO ZIV ));
      </Link>
      <div className="hidden md:flex gap-4">
        {links.map(({ href, label }) => (
          <ScrollLink
            key={label}
            to={href}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className={`text-gray-500 hover:text-gray-600 cursor-pointer ${
              label === isSelected && "text-primary font-bold"
            }`}
            onSetActive={() => setIsSelected(label)}>
            {label}
          </ScrollLink>
        ))}
      </div>
      <div className="md:hidden z-50">
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}>
              <CgClose
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}>
              <CgMenuRight
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`md:hidden fixed inset-0 bg-base-100 flex flex-col gap-6 items-center justify-center z-40 ${playfair.className}`}>
          {links.map(({ href, label }) => (
            <ScrollLink
              key={label}
              to={href}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className={`text-5xl ${
                label === isSelected
                  ? "font-bold text-primary"
                  : "text-primary-content"
              }`}
              onSetActive={() => setIsSelected(label)}
              onClick={toggleMenu}>
              {label}
            </ScrollLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
