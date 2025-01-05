import React, { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Link } from "lucide-react";

const NavLink = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      className={`relative text-gray-100 hover:text-white px-4 py-2 group transition-all duration-300 ${className}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
    </a>
  );
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FF6B6B]/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Sun className="h-8 w-8 text-amber-400 animate-spin-slow" />
            <span className="ml-2 text-xl font-bold text-white">Rakib Ahmed</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink href="#">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a href="https://docs.google.com/document/d/16-IgEVycvKVwI-HRMSUMMQ1D_E4m07pJ2q3AlkueV60/edit?usp=sharing" className="px-6 py-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-full font-medium transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-100 hover:text-white p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-[#FF6B6B]/95 backdrop-blur-sm`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink href="#home" className="block">
            Home
          </NavLink>
          <NavLink href="#about" className="block">
            About
          </NavLink>
          <NavLink href="#skills" className="block">
            Skills
          </NavLink>
          <NavLink href="#projects" className="block">
            Projects
          </NavLink>
          <a href="https://docs.google.com/document/d/16-IgEVycvKVwI-HRMSUMMQ1D_E4m07pJ2q3AlkueV60/edit?usp=sharing"  className="w-full mt-4 px-6 py-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-full font-medium transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
