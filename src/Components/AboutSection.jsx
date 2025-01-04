import React from "react";
import {
  BookOpen,
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  User,
} from "lucide-react";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div
            className="animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-2xl animate-pulse"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-primary/20">
                <img
                  src="/api/placeholder/600/600"
                  alt="Rakib Ahmed"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-base-100 p-4 rounded-xl shadow-xl border border-base-300">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary">
                    0+
                  </span>
                  <span className="text-sm text-base-content/70">
                    Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className="space-y-8 animate-slide-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
              <p className="text-base-content/80 leading-relaxed">
                Hello! I'm Rakib Ahmed, a fresh graduate with a passion for web
                development. Although I'm new to the professional world, I bring
                fresh perspectives and a strong desire to learn and grow in the
                tech industry.
              </p>
            </div>

            {/* Education & Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-base-300 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-base-content/60">Name</span>
                    <p className="font-medium">Rakib Ahmed</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-base-300 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-base-content/60">Major</span>
                    <p className="font-medium">Social Work</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-base-300 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-base-content/60">
                      Location
                    </span>
                    <p className="font-medium">Bhola, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Education Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-base-300 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-base-content/60">
                      Education
                    </span>
                    <p className="font-medium">Bachelor's in Social Work</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-base-300 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-base-content/60">
                      University
                    </span>
                    <p className="font-medium">
                      Bangladesh National University
                    </p>
                    <p className="text-sm text-base-content/60">
                      Bhola Government College
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-base-300 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-base-content/60">
                      Duration
                    </span>
                    <p className="font-medium">2018 - 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-base-100 p-6 rounded-xl border border-base-300">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Career Objective
              </h3>
              <p className="text-base-content/80 leading-relaxed">
                Fresh graduate seeking to launch a career in web development.
                Passionate about creating user-friendly applications and eager
                to contribute to innovative projects. Committed to continuous
                learning and professional growth in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutSection;
