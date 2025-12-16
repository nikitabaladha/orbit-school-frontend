import {
  CheckCircle2,
  Clipboard,
  Wrench,
  Rocket,
  Users,
  BarChart,
} from "lucide-react";

export default function ImplementationDetail() {
  const steps = [
    {
      icon: Clipboard,
      title: "Initial Assessment & Survey",
      description:
        "Comprehensive evaluation of your school needs, infrastructure, and goals",
      duration: "Week 1",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Customization & Planning",
      description:
        "Tailored solution design based on your budget, student count, and requirements",
      duration: "Week 2",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Wrench,
      title: "Infrastructure Setup",
      description:
        "Installation of smart classes, labs, hardware, and software systems",
      duration: "Week 3-4",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Users,
      title: "Teacher Training",
      description:
        "Comprehensive training programs for staff on all new systems and technologies",
      duration: "Week 5",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Rocket,
      title: "Go Live",
      description:
        "Official launch with full support, monitoring, and troubleshooting",
      duration: "Week 6",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: BarChart,
      title: "Ongoing Support",
      description:
        "24/7 support, regular updates, maintenance, and performance optimization",
      duration: "Ongoing",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full -translate-y-1/2 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full mb-4">
            <span className="font-semibold text-sm">
              Implementation Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600">
              Vision to Reality
            </span>{" "}
            in 6 Weeks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven implementation process ensures a smooth, hassle-free
            transformation with minimal disruption.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-yellow-200 to-green-200 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div className="inline-block">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl mb-6`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
                        <span className="text-blue-700 font-semibold text-sm">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center w-16 flex-shrink-0 relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                  >
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full -translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <CheckCircle2 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">
                  Zero Downtime
                </h4>
                <p className="text-blue-100">
                  Implementation happens alongside regular school operations
                </p>
              </div>
              <div>
                <CheckCircle2 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">
                  Full Training
                </h4>
                <p className="text-blue-100">
                  Every staff member fully trained and confident before launch
                </p>
              </div>
              <div>
                <CheckCircle2 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">
                  24/7 Support
                </h4>
                <p className="text-blue-100">
                  Dedicated support team available round the clock
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your School?
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss your implementation timeline
              </p>
              <button
                className="px-10 py-4 bg-yellow-400 text-blue-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                onClick={() =>
                  window.open("https://edprowise.com/contact-us", "_blank")
                }
              >
                Schedule Implementation Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
