import {
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  DollarSign,
  Shield,
  Globe,
} from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "One-Stop Solution",
      description:
        "Everything from infrastructure to software, all in one comprehensive package.",
    },
    {
      icon: TrendingUp,
      title: "Growth & Profitability",
      description:
        "Proven strategies to increase admissions by 10-35% and boost revenue.",
    },
    {
      icon: Users,
      title: "Increased Admissions",
      description:
        "Modern facilities and digital presence attract more parents and students.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "1000+ schools transformed with measurable improvements in all metrics.",
    },
    {
      icon: DollarSign,
      title: "Affordable & Scalable",
      description:
        "Flexible pricing models that grow with your school at just ₹300/student/month.",
    },
    {
      icon: Shield,
      title: "₹80+ Lakh Savings",
      description:
        "Save compared to building infrastructure independently with better outcomes.",
    },
    {
      icon: Globe,
      title: "Trusted Nationwide",
      description:
        "Successfully serving schools across India with 24/7 support and maintenance.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full mb-4">
            <span className="text-yellow-700 font-semibold text-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Schools Trust{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600">
              Orbit School
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just a vendor, we're your partner in educational
            excellence and institutional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-300 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Join 10+ Schools That Have Already Transformed
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't get left behind. Give your school the competitive edge it
              needs to thrive in the digital era.
            </p>
            <button
              className="px-10 py-4 bg-yellow-400 text-blue-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              onClick={() =>
                window.open("https://edprowise.com/contact-us", "_blank")
              }
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
