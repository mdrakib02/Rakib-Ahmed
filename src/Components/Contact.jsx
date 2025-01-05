import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-orange-400 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-400 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <p className="text-gray-200">+880 1642216514</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-400 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="text-gray-200">mdrakibahmed515@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-400 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-gray-200">Kunjerhat, Bhola</p>
                      <p className="text-gray-200">Barisal, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered bg-gray-800 text-gray-200"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered bg-gray-800 text-gray-200"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32 bg-gray-800 text-gray-200"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button className="btn btn-primary w-full group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
