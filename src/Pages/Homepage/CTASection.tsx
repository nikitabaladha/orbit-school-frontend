import { Calendar, MessageCircle, Download, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your School{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              Today
            </span>
          </h2>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            Join 1000+ schools that have already revolutionized their education
            delivery and witnessed exponential growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Book a Demo</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              See Orbit School in action with a personalized demo tailored to
              your school's needs.
            </p>
            <button className="w-full py-3 bg-yellow-400 text-blue-900 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
              <span>Schedule Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Talk to Our Team
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Speak with our education transformation experts and get all your
              questions answered.
            </p>
            <button className="w-full py-3 bg-white text-blue-900 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Download Proposal
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Get a detailed proposal with pricing, features, and implementation
              timeline.
            </p>
            <button className="w-full py-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
              <span>Get Proposal</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-block px-6 py-3 bg-blue-900 text-yellow-400 rounded-full mb-6 font-bold">
              ⚡ Limited Time Offer
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              First 50 Schools Get 20% Off First Year
            </h3>
            <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
              Plus free branding package worth ₹5 lakhs. Don't miss this
              exclusive opportunity!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="px-10 py-4 bg-blue-900 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
                onClick={() =>
                  window.open("https://edprowise.com/contact-us", "_blank")
                }
              >
                <Calendar className="w-5 h-5" />
                <span>Claim Your Spot Now</span>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-8 text-blue-900">
              <div className="text-center">
                <div className="text-3xl font-bold">42</div>
                <div className="text-sm">Spots Left</div>
              </div>
              <div className="w-px h-12 bg-blue-900/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">15</div>
                <div className="text-sm">Days Left</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
