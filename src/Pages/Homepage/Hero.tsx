import { Calendar, Download } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-800/50 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-white text-sm font-medium">
                🚀 Transform Your School Today
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Upgrade, Grow &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Transform
              </span>{" "}
              Your School
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed">
              A complete digital transformation ecosystem for modern schools -
              Smart Learning, STEM Labs, AI Tools, ERP, Branding & more.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://edprowise.com/request-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-yellow-400 text-blue-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Demo</span>
              </a>

              <button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "./docs/Orbit School Proposal.pdf"; // 👉 replace with your file link
                  link.download = "Orbit School Proposal.pdf"; // 👉 name of downloaded file
                  link.click();
                }}
              >
                <Download className="w-5 h-5" />
                <span>Download Proposal</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">10+</div>
                <div className="text-sm text-blue-200">Schools Transformed</div>
              </div>
              <div className="w-px h-12 bg-blue-400/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">₹80L+</div>
                <div className="text-sm text-blue-200">Savings per School</div>
              </div>
              <div className="w-px h-12 bg-blue-400/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">35%</div>
                <div className="text-sm text-blue-200">Admission Growth</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-semibold">
                        Smart Classroom
                      </span>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/20 rounded-lg h-16"></div>
                      <div className="bg-white/20 rounded-lg h-16"></div>
                      <div className="bg-white/20 rounded-lg h-16"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30">
                      <div className="text-2xl font-bold text-yellow-400">
                        98%
                      </div>
                      <div className="text-xs text-white">Fee Collection</div>
                    </div>
                    <div className="bg-green-400/20 backdrop-blur-sm rounded-xl p-4 border border-green-400/30">
                      <div className="text-2xl font-bold text-green-400">
                        +1200
                      </div>
                      <div className="text-xs text-white">New Students</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="text-white text-sm font-medium mb-2">
                      STEM Lab Active
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-white/30 rounded-full h-8"
                          style={{ height: `${Math.random() * 40 + 20}px` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl animate-bounce">
              <span className="text-blue-900 font-bold text-md text-center">
                AI
                <br />
                Powered
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
