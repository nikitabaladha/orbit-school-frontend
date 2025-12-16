import { Target, Eye, Lightbulb } from "lucide-react";
import { HiBeaker } from "react-icons/hi";

export default function About() {
  const founders = [
    { name: "Kunal Shah", role: "Chief Executive Officer", initials: "KS" },
    { name: "Jai Gupta", role: "Chief Operating Officer", initials: "JG" },
    { name: "Dhiraj Zope", role: "Chief Technology Officer", initials: "DZ" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-blue-600 font-semibold text-sm">
              About Orbit School
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering Schools for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Digital Future
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Orbit School mission is to revolutionize education by providing
            schools with cutting-edge technology, proven methodologies, and
            comprehensive support to thrive in the digital age at affordable
            prices.
          </p>
        </div>

        <div className="grid md:grid-cols-6 gap-8 mb-20">
          <div className="col-span-4">
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Smart Learning
                </h3>
                <p className="text-dark leading-relaxed">
                  AI-powered smart classes, digital teaching tools, and
                  interactive content that make learning engaging, personalized,
                  and aligned with modern education standards.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <HiBeaker className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Lab Infrastructure
                </h3>
                <p className="text-dark leading-relaxed">
                  Well-equipped Science, Computer, AI, Coding, and Tinkering
                  Labs that provide hands-on learning, practical skills, and
                  future-ready technological exposure for students.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Efficient Operations & Branding
                </h3>
                <p className="text-dark leading-relaxed">
                  School ERP streamlines daily operations, automates workflows,
                  improves communication, and strengthens school branding
                  through consistent, professional visibility and engagement.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Empowered Teaching
                </h3>
                <p className="text-dark leading-relaxed">
                  Comprehensive training programs, AI lesson planners, and
                  continuous support to help educators excel in modern teaching
                  methodologies.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-span-2">
            <div className="grid md:grid-cols-1 gap-8 mb-20">
              <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Smart Learning & Lab Infrastructure
                </h3>
                <p className="text-dark leading-relaxed">
                  AI-enabled smart classes with digital teaching tools, and
                  modern Science, Computer, Coding, AI and Tinkering Labs for
                  interactive, future-ready learning.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Empowered Teaching
                </h3>
                <p className="text-dark leading-relaxed">
                  Comprehensive training programs, AI lesson planners, and
                  continuous support to help educators excel in modern teaching
                  methodologies.
                </p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Meet Our Leadership
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                      <span className="text-4xl font-bold text-blue-900">
                        {founder.initials}
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-blue-900"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {founder.name}
                  </h4>
                  <p className="text-blue-300 font-medium">{founder.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
