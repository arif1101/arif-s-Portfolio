import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold text-blue-400">Get in Touch</h2>
          <p className="text-gray-300 text-[18px] mt-2">
            Have a question or want to work together? Drop us a message!
          </p>

          <div className="mt-8 space-y-6 text-[16px]">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-800/30 rounded-lg">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-gray-300">+880 1612767382</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-800/30 rounded-lg">
                <Mail className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-300">arifurrahmanarif223@Gmail.Com</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-800/30 rounded-lg">
                <Linkedin className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="text-white font-semibold">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/arifur-rahman223/" className="text-blue-400 hover:underline">
                  Connect With Me On LinkedIn
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-800/30 rounded-lg">
                <Github className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">GitHub</h4>
                <a href="https://github.com/arif1101" className="text-blue-400 hover:underline">
                  Check Out My GitHub
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-800/30 rounded-lg">
                <MapPin className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-300">Purbo Rajabazar, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-[#0f172a] p-6 rounded-xl shadow-lg">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#1a2234] rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-[#1a2234] rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Your Phone Number Or WhatsApp Number"
              className="w-full px-4 py-3 bg-[#1a2234] rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-[#1a2234] rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 bg-[#1a2234] rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
