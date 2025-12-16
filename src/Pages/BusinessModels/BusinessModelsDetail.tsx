import { Building, Handshake, CheckCircle2 } from "lucide-react";

export default function BusinessModelsDetail() {
  const models = [
    {
      icon: Building,
      title: "Lease / Rent & Operate Model",
      color: "from-blue-500 to-blue-600",
      description:
        "EdProwise takes your school on lease/operation and runs academics, operations and growth under the Orbit School model while you earn assured returns.",
      features: [
        "You lease your school to EdProwise, and we operate it completely on your behalf.",
        "Fixed monthly rent or minimum guarantee to the school owner",
        "Full Orbit setup: smart classrooms, LMS, labs, ERP, branding and marketing",
        "EdProwise team manages day-to-day academics, operations and admissions",
        "Infra upgrades and technology investments handled by EdProwise",
        // "Transparent monthly MIS and performance reporting to owners/trustees",
        "Ideal for owners who want stable income with minimal daily involvement",
      ],
      ideal:
        "Ideal for under-utilised or under-performing schools where owners prefer assured income and professional operations",
    },
    {
      icon: Handshake,
      title: "Partnership Model",
      color: "from-yellow-500 to-yellow-600",
      description:
        "You continue to run the school, and EdProwise deploys the full Orbit ecosystem with shared growth, admissions and revenue upside.",
      features: [
        "School owner/management retains day-to-day academic and operational control",
        "Orbit suite (smart learning, STEM labs, ERP, branding) deployed with low upfront cost",
        "Pricing typically starts from ₹300/student/month for the digital transformation stack",
        "Joint admissions and branding strategy to grow enrolments and reputation",
        // "Performance-linked incentives and agreed revenue-sharing slabs",
        "Priority access to new Orbit features, pilots and improvement projects",
        "Dedicated transformation manager aligned with your leadership team",
      ],
      ideal:
        "Ideal for established schools that want aggressive growth but prefer to retain operational control with a strong tech partner",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-yellow-600 text-white rounded-full mb-4">
            <span className="font-semibold text-sm">Business Models</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600">
              Perfect Model
            </span>{" "}
            for Your School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible engagement options where EdProwise can either take your
            school on lease and operate it, or partner with you while you retain
            full management control.
          </p>
        </div>

        {/* Model Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {models.map((model, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`h-3 bg-gradient-to-r ${model.color}`}></div>

              <div className="p-10">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${model.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <model.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {model.title}
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {model.description}
                </p>

                <div className="space-y-4 mb-8">
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-6 mb-6">
                  <div className="flex items-start space-x-2">
                    <span className="text-2xl">💡</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Best For:
                      </p>
                      <p className="text-gray-700">{model.ideal}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-side Comparison */}
        <div className="my-16">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-yellow-600 text-white rounded-full mb-4">
              <span className="font-semibold text-sm">Comparison</span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Side-by-Side{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600">
                Comparison
              </span>
            </h3>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understand how the Lease / Rent &amp; Operate model differs from
              the Partnership Model in ownership, risk, returns and day-to-day
              involvement.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="grid sm:grid-cols-3 gap-6 bg-white rounded-3xl shadow-lg border border-gray-200 p-6 lg:p-8">
              {/* Column titles */}
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Key Aspect
                </p>
                <p className="font-semibold text-gray-900">Upfront Cost</p>
                <p className="font-semibold text-gray-900">
                  Ownership & Control
                </p>
                <p className="font-semibold text-gray-900">Risk & Investment</p>
                <p className="font-semibold text-gray-900">Branding</p>
                <p className="font-semibold text-gray-900">Ideal For</p>
              </div>

              {/* Lease / Rent & Operate */}
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Lease / Rent &amp; Operate
                </p>
                <p className="text-gray-700">
                  Low / no upfront investment by owner; EdProwise invests in
                  infra and operations, pays you fixed rent or minimum
                  guarantee.
                </p>
                <p className="text-gray-700">
                  School assets remain with owner; day-to-day academic and
                  operational control handled by EdProwise under Orbit School
                  framework.
                </p>
                <p className="text-gray-700">
                  Higher investment risk taken by EdProwise; owner enjoys stable
                  income with limited operational risk.
                </p>
                <p className="text-gray-700">
                  School positioned as an Orbit School operated by EdProwise,
                  with strong, premium branding.
                </p>
                <p className="text-gray-700">
                  Owners wanting turnaround or exit from daily operations but
                  still earning consistent returns.
                </p>
              </div>

              {/* Partnership Model */}
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-yellow-600">
                  Partnership Model
                </p>
                <p className="text-gray-700">
                  Low upfront tech setup; Orbit typically charged from around
                  ₹300/student/month plus performance-linked components as
                  agreed.
                </p>
                <p className="text-gray-700">
                  Owner retains full academic and operational control; Orbit
                  acts as a strategic transformation partner.
                </p>
                <p className="text-gray-700">
                  Shared risk and upside with clear revenue/benefit sharing
                  model aligned to growth targets.
                </p>
                <p className="text-gray-700">
                  Strong co-branding – your school name first, “powered by Orbit
                  School by EdProwise”.
                </p>
                <p className="text-gray-700">
                  Established schools focused on scaling admissions, fees and
                  reputation while staying actively involved.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full -translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Not Sure Which Model is Right for You?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team will study your school’s current situation and suggest
              whether a Lease / Operate model or a Partnership model will
              maximise your growth and returns.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="px-10 py-4 bg-yellow-400 text-blue-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                onClick={() =>
                  window.open("https://edprowise.com/request-demo", "_blank")
                }
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
