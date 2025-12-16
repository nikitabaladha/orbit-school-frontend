import { ArrowRight } from "lucide-react";

export default function Transformation() {
  const comparisons = [
    {
      metric: "Fee Collection Rate",
      before: "70%",
      after: "98%",
      color: "blue",
    },
    {
      metric: "Annual Admissions",
      before: "Stagnant / Decline",
      after: "+10-35%",
      color: "green",
    },
    {
      metric: "Teaching Quality",
      before: "Traditional",
      after: "World-Class",
      color: "purple",
    },
    {
      metric: "Student Engagement",
      before: "Low",
      after: "High",
      color: "orange",
    },
    {
      metric: "Digital Tools",
      before: "None",
      after: "Fully Digital",
      color: "yellow",
    },
    {
      metric: "Parent Satisfaction",
      before: "65%",
      after: "99%",
      color: "pink",
    },
  ];

  const getColorClasses = (color: string, type: "bg" | "text" | "border") => {
    const colors = {
      blue: {
        bg: "bg-blue-500",
        text: "text-blue-600",
        border: "border-blue-200",
      },
      green: {
        bg: "bg-green-500",
        text: "text-green-600",
        border: "border-green-200",
      },
      purple: {
        bg: "bg-purple-500",
        text: "text-purple-600",
        border: "border-purple-200",
      },
      orange: {
        bg: "bg-orange-500",
        text: "text-orange-600",
        border: "border-orange-200",
      },
      yellow: {
        bg: "bg-yellow-500",
        text: "text-yellow-600",
        border: "border-yellow-200",
      },
      pink: {
        bg: "bg-pink-500",
        text: "text-pink-600",
        border: "border-pink-200",
      },
    };
    return colors[color as keyof typeof colors][type];
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/2 blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-yellow-100 rounded-full -translate-x-1/2 blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full mb-4">
            <span className="font-semibold text-sm">
              Before / After Transformation
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600">
              Dramatic Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real schools. This is what digital transformation
            looks like.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-2 ${getColorClasses(item.color, "bg")}`}></div>

              <div className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                  {item.metric}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-2 font-medium uppercase">
                        Before
                      </div>
                      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                        <div className="text-2xl font-bold text-red-600">
                          {item.before}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4">
                    <ArrowRight
                      className={`w-8 h-8 ${getColorClasses(
                        item.color,
                        "text"
                      )} group-hover:translate-x-1 transition-transform`}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-2 font-medium uppercase">
                        After
                      </div>
                      <div
                        className={`bg-green-50 border-2 ${getColorClasses(
                          item.color,
                          "border"
                        )} rounded-xl p-4`}
                      >
                        <div
                          className={`text-2xl font-bold ${getColorClasses(
                            item.color,
                            "text"
                          )}`}
                        >
                          {item.after}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              These Results Can Be Yours Too
            </h3>
            <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
              Every school we work with sees measurable improvements in
              admissions, revenue, and educational quality.
            </p>
            <a
              href="https://edprowise.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-blue-900 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Schedule Your Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
