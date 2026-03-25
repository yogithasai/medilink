
import { Globe } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [language, setLanguage] = useState("English");

  const footerNavigation = {
    solutions: [
      { name: 'Patient Portal', href: '#' },
      { name: 'Provider Access', href: '#' },
      { name: 'Healthcare API', href: '#' },
      { name: 'Telehealth', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Resources', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'HIPAA Compliance', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: (
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
    languages: ["English", "Español", "Français"]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
            <div className="col-span-2 md:col-span-3">
              <div className="text-xl font-bold mb-4 text-blue-400">MediLink</div>
              <p className="text-gray-300 mb-4 max-w-md">
                Simplifying healthcare management for patients and providers through innovative technology.
              </p>
              <div className="flex space-x-4">
                {footerNavigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Solutions</h3>
              <ul className="space-y-3">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Support</h3>
              <ul className="space-y-3">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Company</h3>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Language</h3>
                <div className="flex items-center space-x-2">
                  <Globe size={16} className="text-gray-400" />
                  <select
                    className="bg-gray-800 text-gray-300 border-gray-700 rounded px-2 py-1 text-sm"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    {footerNavigation.languages.map((lang) => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} MediLink Healthcare Solutions. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-xs mt-2">
            MediLink is HIPAA compliant and committed to protecting your privacy and medical information.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
