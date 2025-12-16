import { Building, Handshake, CheckCircle2 } from 'lucide-react';

export default function BusinessModels() {
  const models = [
    {
      icon: Building,
      title: 'Lease / Rent & Operate Model',
      color: 'from-blue-500 to-blue-600',
      description: 'Perfect for schools looking for a complete turnkey solution with minimal upfront investment.',
      features: [
        'Zero upfront infrastructure cost',
        'All equipment on lease/rent basis',
        'Complete setup and maintenance included',
        'Flexible monthly payment of ₹300/student',
        'Upgrade to latest technology every 2 years',
        'Full technical support and training',
        '30-day money-back guarantee',
      ],
      ideal: 'Ideal for schools with 500+ students wanting immediate transformation',
    },
    {
      icon: Handshake,
      title: 'Partnership Model',
      color: 'from-yellow-500 to-yellow-600',
      description: 'A collaborative approach where we invest together and share the growth and success.',
      features: [
        'Shared investment and revenue model',
        'Co-branding opportunities',
        'Joint marketing campaigns',
        'Profit sharing based on agreement',
        'Long-term growth partnership',
        'Priority access to new features',
        'Dedicated account manager',
      ],
      ideal: 'Ideal for established schools seeking strategic growth partners',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-yellow-600 text-white rounded-full mb-4">
            <span className="font-semibold text-sm">Business Models</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600">Perfect Model</span> for Your School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible engagement options designed to suit different school sizes, budgets, and growth aspirations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {models.map((model, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`h-3 bg-gradient-to-r ${model.color}`}></div>

              <div className="p-10">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${model.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <model.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">{model.title}</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{model.description}</p>

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
                      <p className="font-semibold text-gray-900 mb-1">Best For:</p>
                      <p className="text-gray-700">{model.ideal}</p>
                    </div>
                  </div>
                </div>

                <button className={`w-full py-4 bg-gradient-to-r ${model.color} text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  Explore This Model
                </button>
              </div>
            </div>
          ))}
        </div>

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
              Our experts will help you choose the perfect model based on your school's unique needs and goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-yellow-400 text-blue-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300">
                Compare Models
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
