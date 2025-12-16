import {
  GraduationCap,
  Cpu,
  Users,
  Building2,
  Palette,
  Sparkles,
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: GraduationCap,
      title: "Learning Solutions",
      color: "from-blue-500 to-blue-600",
      items: [
        "Smart Class",
        "Learning Management System",
        "AI Tool For Learning",
        "Self Learning Videos - 24/7",
        "Digital Library",
        "Game-based Learning",
        "Interactive Content",
      ],
    },
    {
      icon: Cpu,
      title: "Lab Infrastructure",
      color: "from-purple-500 to-purple-600",
      items: [
        "STEM Lab",
        "Robotics Lab",
        "AI, Coding & ML Lab",
        "VR/AR Lab",
        "Innovation Center",
        "Thinkering Lab",
      ],
    },
    {
      icon: Users,
      title: "Teacher Empowerment",
      color: "from-green-500 to-green-600",
      items: [
        "Tablet For Teacher",
        "Training Programs",
        "Workshops & Webinars",
        "AI Lesson Planner",
        "Resource Library",
        "Continuous Support",
        "Teacher Hiring Support",
      ],
    },
    {
      icon: Building2,
      title: "School ERP AI Powered",
      color: "from-orange-500 to-orange-600",
      items: [
        "Fee & Payroll Management",
        "Financial & Operational Management",
        "School Website & Application ",
        "Library & Entrance Management",
        "SMS & Payment Gateway Integration",
        "Exam Result Management",
        "Transport, Hostel & Visitor Management",
        "PF & ESI Support",
      ],
    },
    {
      icon: Palette,
      title: "Branding & Marketing",
      color: "from-pink-500 to-pink-600",
      items: [
        "School Website",
        "Marketing Campaigns",
        "Brand Identity Design",
        "Social Media",
        "Admission Strategy",
        "Brochure & Marketing Designs",
        "Annual Surveys",
      ],
    },
    {
      icon: Sparkles,
      title: "Extra Curriculum",
      color: "from-yellow-500 to-yellow-600",
      items: [
        "Career Guidance",
        "Yoga & Wellness",
        "Arts & Culture",
        "Vocational Training",
        "Life Skills",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200/30 rounded-full -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-yellow-200/30 rounded-full translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full mb-4">
            <span className="font-semibold text-sm">
              Comprehensive Solutions
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything Your School Needs in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
              One Platform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From smart classrooms to advanced labs, from teacher training to
            complete ERP systems - we've got it all covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              >
                <solution.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>

              <ul className="space-y-3">
                {solution.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              {/* <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-2 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div> */}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl px-8 py-6 shadow-xl">
            <p className="text-2xl font-bold mb-2">₹300/student/month</p>
            <p className="text-blue-100">
              Complete Digital Transformation Package
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
