import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4 transform transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="text-2xl font-bold text-orange-400">Rakib Ahmed</h3>
            <p className="text-sm">
              Passionate Frontend Developer crafting beautiful and responsive
              web experiences. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 transform transition-all duration-300 hover:translate-y-[-4px]">
            <h4 className="text-xl font-semibold text-orange-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 transform transition-all duration-300 hover:translate-y-[-4px]">
            <h4 className="text-xl font-semibold text-orange-400">
              Connect With Me
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                className="hover:text-orange-400 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="hover:text-orange-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="hover:text-orange-400 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="hover:text-orange-400 transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Rakib Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
