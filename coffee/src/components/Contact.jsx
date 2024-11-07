import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-white py-2 px-4 mb-10">
      <div className="max-w-[1240px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
          <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#dd2c2c] focus:border-[#dd2c2c] outline-none transition"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#dd2c2c] focus:border-[#dd2c2c] outline-none transition"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#dd2c2c] focus:border-[#dd2c2c] outline-none transition"
                placeholder="example@gmail.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#dd2c2c] focus:border-[#dd2c2c] outline-none transition"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#dd2c2c] focus:border-[#dd2c2c] outline-none transition"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-[#dd2c2c] text-white font-semibold rounded-lg hover:bg-[#b91c1c] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        
      </div>
    </div>
  );
}

export default Contact;
