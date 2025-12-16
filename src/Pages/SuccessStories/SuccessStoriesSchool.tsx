import { Quote, TrendingUp, Users, Star, Award } from "lucide-react";

export default function SuccessStoriesSchool() {
  const stories = [
    {
      school: "Lotus Public Valley School",
      location: "Jaipur, Rajasthan",
      metrics: [
        { label: "Admission Growth", value: "+35%", icon: TrendingUp },
        { label: "New Students", value: "+200", icon: Users },
        { label: "Revenue Increase", value: "₹1 Cr", icon: Award },
        { label: "Parent Rating", value: "4.9/5", icon: Star },
        { label: "Teacher Satisfaction", value: "96%", icon: Star },
      ],
      quote:
        "Orbit School transformed our institution completely. We went from struggling with admissions to having a waiting list. The STEM labs and smart classrooms have made us the most sought-after school in the region.",
      person: "Dr. Meera Singh",
      role: "Principal",
      color: "from-blue-500 to-blue-600",
    },
    {
      school: "Green International School",
      location: "Indore, Madhya Pradesh",
      metrics: [
        { label: "Admission Growth", value: "+28%", icon: TrendingUp },
        { label: "New Students", value: "+550", icon: Users },
        { label: "Revenue Increase", value: "₹1.2 Cr", icon: Award },
        { label: "Parent Rating", value: "4.9/5", icon: Star },
        { label: "Teacher Satisfaction", value: "96%", icon: Star },
      ],
      quote:
        "The comprehensive ERP system saved us over ₹80 lakhs compared to setting up everything independently. Fee collection improved from 72% to 98%, and our teachers are more productive than ever.",
      person: "Rajesh Agarwal",
      role: "Chairman",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-semibold text-sm">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Schools,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how schools across India have achieved remarkable growth and
            transformation with Orbit School.
          </p>
        </div>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${story.color}`}></div>

              <div className="p-12">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {story.school}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {story.location}
                    </p>
                  </div>
                  <Quote className="w-16 h-16 text-gray-200" />
                </div>

                <div className="grid md:grid-cols-5 gap-6 mb-10">
                  {story.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex justify-center mb-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${story.color} rounded-xl flex items-center justify-center`}
                        >
                          <metric.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
                    "{story.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${story.color} rounded-full flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-xl">
                        {story.person.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {story.person}
                      </div>
                      <div className="text-gray-600">{story.role}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Smart Classrooms
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    STEM Lab
                  </span>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                    Complete ERP
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    Teacher Training
                  </span>
                  <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                    Branding
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl px-8 py-6 shadow-xl">
            <p className="text-white text-3xl font-bold mb-2">
              Your Success Story Starts Here
            </p>
            <button
              className="mt-4 px-8 py-3 bg-yellow-400 text-blue-900 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300"
              onClick={() =>
                window.open("https://edprowise.com/contact-us", "_blank")
              }
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
