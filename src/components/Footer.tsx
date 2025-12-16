import {
  Rocket,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const solutions = [
    { label: "Smart Classrooms", href: "/solutions/smart-classrooms" },
    { label: "STEM Labs", href: "/solutions/stem-labs" },
    { label: "Learning Management System", href: "/solutions/lms" },
    { label: "ERP Systems", href: "/solutions/erp" },
    { label: "Teacher Training", href: "/solutions/teacher-training" },
    { label: "Branding & Marketing", href: "/solutions/branding-marketing" },
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Press Kit", href: "/press" },
  ];

  const resources = [
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Documentation", href: "/resources/docs" },
    { label: "Implementation Guide", href: "/resources/implementation-guide" },
    { label: "ROI Calculator", href: "/resources/roi-calculator" },
    { label: "Webinars", href: "/resources/webinars" },
    { label: "Support Center", href: "/support" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand + Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              {/* <Rocket className="w-10 h-10 text-yellow-400" /> */}
              <div className="w-64">
                <img src="./images/ORBIT SCHOOL White.png" alt="Orbit School by EdProwise" />
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed mb-6">
              Transforming education through cutting-edge technology, proven methodologies,
              and comprehensive support. Helping schools achieve excellence and exponential growth.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-100">+91 99585 28306</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-100">info@edprowise.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-blue-100">
                  EdProwise Tech Private Limited
                  <br />
                  Delhi
                </span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-blue-100 hover:text-yellow-300 text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-blue-100 hover:text-yellow-300 text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-blue-100 hover:text-yellow-300 text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Legal links */}
            <div className="flex flex-wrap gap-6 text-sm text-blue-100">
              <a
                href="/privacy-policy"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Policy
              </a>
              <a
                href="/terms"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="/cookie-policy"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Cookie Policy
              </a>
              <a
                href="/sitemap"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Sitemap
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com/edprowise"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a
                href="https://twitter.com/edprowise"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Twitter className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a
                href="https://linkedin.com/company/edprowise"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a
                href="https://instagram.com/edprowise"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a
                href="https://youtube.com/@edprowise"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Youtube className="w-5 h-5 text-white group-hover:text-black" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-blue-200">
            <p>
              © {new Date().getFullYear()} EdProwise Tech Private Limited. All Rights Reserved.
            </p>
            <p className="mt-2">Transforming 1000+ Schools Across India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
