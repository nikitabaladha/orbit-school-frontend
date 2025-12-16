import { TrendingUp, DollarSign, Calculator, PiggyBank } from "lucide-react";

export default function FinancialImpactDetail() {
  const savings = [
    {
      item: "Smart Class Infrastructure",
      traditional: "₹50L",
      orbit: "₹0",
      savings: "₹50L",
    },
    {
      item: "Lab Infrastructure",
      traditional: "₹35L",
      orbit: "₹0",
      savings: "₹35L",
    },
    {
      item: "ERP Software & Setup",
      traditional: "₹15L",
      orbit: "₹0",
      savings: "₹15L",
    },
    {
      item: "Teacher Training Programs",
      traditional: "₹10L",
      orbit: "₹0",
      savings: "₹10L",
    },
    {
      item: "Marketing & Branding",
      traditional: "₹8L",
      orbit: "₹0",
      savings: "₹8L",
    },
    {
      item: "Maintenance & Updates",
      traditional: "₹12L/year",
      orbit: "Included",
      savings: "₹12L",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-400 text-blue-900 rounded-full mb-4">
            <span className="font-semibold text-sm">Financial Impact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Spend{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              ₹1+ Crore
            </span>{" "}
            When You Don't Have To?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get everything for just ₹300/student/month and save over ₹80 lakhs
            in setup costs alone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Traditional Approach
              </h3>
            </div>

            <div className="space-y-4">
              {savings.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <span className="text-white font-semibold">{item.item}</span>
                  <span className="text-white font-bold">
                    {item.traditional}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">
                  Total Investment
                </span>
                <span className="text-3xl font-bold text-white">
                  ₹1.3+ Crore
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                <PiggyBank className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">
                Orbit School Way
              </h3>
            </div>

            <div className="space-y-4">
              {savings.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-white/30 rounded-xl"
                >
                  <span className="text-blue-900">{item.item}</span>
                  <span className="text-green-700 font-bold">{item.orbit}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-blue-900/20">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-900">
                    Monthly Cost
                  </span>
                  <span className="text-3xl font-bold text-blue-900">
                    ₹300/student
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-900">
                    You Save
                  </span>
                  <span className="text-3xl font-bold text-white">
                    ₹80+ Lakh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-blue-900" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">
              Revenue Growth
            </h4>
            <p className="text-blue-100 mb-4">
              Average ₹50 Lakh - ₹1 Crore increase in annual revenue from higher
              admissions and better fee collection
            </p>
            <div className="text-3xl font-bold text-yellow-400">+250%</div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">ROI Timeline</h4>
            <p className="text-blue-100 mb-4">
              Break-even in first year, with exponential returns in subsequent
              years
            </p>
            <div className="text-3xl font-bold text-yellow-400">1 Year</div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">
              Cost Efficiency
            </h4>
            <p className="text-blue-100 mb-4">
              All infrastructure, software, training, and maintenance included
              in one package
            </p>
            <div className="text-3xl font-bold text-yellow-400">100%</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Calculate Your School's Savings
            </h3>
            <p className="text-gray-600 mb-6">
              See exactly how much you can save with Orbit School
            </p>
            <button
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() =>
                window.open("https://edprowise.com/request-demo", "_blank")
              }
            >
              Get Custom ROI Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
