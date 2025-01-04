import React from "react";
import { Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';


export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-300 via-base-200 to-base-300 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-8 text-left">
            {/* Social Icons */}
            <div className="flex space-x-4 animate-fade-in">
              <a href="#" className="p-3 bg-base-100/50 backdrop-blur-sm rounded-full 
                hover:bg-primary/20 transition-all duration-300 text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="p-3 bg-base-100/50 backdrop-blur-sm rounded-full 
                hover:bg-primary/20 transition-all duration-300 text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="p-3 bg-base-100/50 backdrop-blur-sm rounded-full 
                hover:bg-primary/20 transition-all duration-300 text-primary">
                <Mail className="h-6 w-6" />
              </a>
            </div>

            {/* Text Content */}
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-secondary animate-slide-up">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-primary animate-slide-up-delay-1">
                Rakid Ahmed
              </h1>
              <div className="relative h-20 overflow-hidden">
                <div className="animate-slide-loop absolute">
                  <p className="text-2xl md:text-3xl font-semibold text-accent py-2">Frontend Developer</p>
                  <p className="text-2xl md:text-3xl font-semibold text-accent py-2">React Specialist</p>
                  <p className="text-2xl md:text-3xl font-semibold text-accent py-2">UI/UX Enthusiast</p>
                </div>
              </div>
              <p className="text-lg text-secondary/90 max-w-lg animate-fade-in-delay-2">
                Crafting beautiful and functional web experiences with modern technologies.
                Let's build something amazing together!
              </p>
              <div className="flex space-x-4 pt-4 animate-fade-in-delay-3">
                <button className="btn btn-primary">
                  View Projects <ExternalLink className="h-4 w-4 ml-2" />
                </button>
                <button className="btn btn-outline btn-secondary">
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <img 
                src="/api/placeholder/500/500"
                alt="Rakid Ahmed"
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full object-cover mx-auto 
                  border-4 border-primary/30 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-content rounded-full p-4 shadow-lg animate-bounce">
                <span className="text-lg font-bold">5+</span>
                <span className="block text-sm">Years Exp.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-loop {
          0% { transform: translateY(0); }
          33% { transform: translateY(-40px); }
          66% { transform: translateY(-80px); }
          100% { transform: translateY(0); }
        }
        .animate-slide-loop {
          animation: slide-loop 6s infinite;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-up-delay-1 {
          animation: slideUp 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-3 {
          animation: fadeIn 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
