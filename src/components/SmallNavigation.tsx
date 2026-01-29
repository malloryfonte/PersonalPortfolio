import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../constants";

export const SmallNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="w-full font-judson h-[80px] bg-blue-mid px-4 fixed top-0 left-0 right-0 z-50 border-b-2 border-b-[#222222]">
        <div className="flex items-center justify-between h-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-blue-dark/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          <h1 className="text-2xl text-blue-light">
            <Link to="/">Mallory Fonte</Link>
          </h1>

          {/* Action Buttons */}
        </div>
      </nav>

      {/* Slide-out Menu - OPTION 2: Diagonal Split Design */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Base background */}
        <div className="absolute inset-0 bg-blue-dark"></div>

        {/* Diagonal overlay */}
        <div
          className="absolute inset-0 bg-blue-mid"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)" }}
        ></div>

        {/* Pink accent diagonal stripe */}
        <div
          className="absolute inset-0 bg-pink-1/20"
          style={{ clipPath: "polygon(0 65%, 100% 45%, 100% 50%, 0 70%)" }}
        ></div>

        <div className="pt-20 h-full relative z-10">
          <ul className="flex flex-col gap-4 px-6">
            {navigation.map((navItem) => {
              const isActive = location.pathname.startsWith(navItem.url);
              return (
                <li key={navItem.id}>
                  <Link
                    to={navItem.url}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-2 py-3 text-lg font-medium transition-all duration-200 rounded ${
                      isActive
                        ? "text-pink-1 bg-white/10 border-l-4 border-pink-1"
                        : "text-blue-light hover:text-white hover:bg-white/5 hover:translate-x-1"
                    }`}
                  >
                    {navItem.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Content padding to account for fixed nav */}
      <div className="pt-20">{/* Page content placeholder */}</div>
    </>
  );
};
