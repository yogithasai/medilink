
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoginDropdown from "./LoginDropdown";
import LanguageSelector from "./LanguageSelector";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
    { label: t("faqs"), href: "/faqs" }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">MediLink</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Selector */}
            <LanguageSelector />

            {/* Login Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIsLoginDropdownOpen(true)}
              onMouseLeave={() => setIsLoginDropdownOpen(false)}
            >
              <Button 
                variant="link" 
                className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t("signin")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isLoginDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
              {isLoginDropdownOpen && <LoginDropdown />}
            </div>
          </nav>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">{t("getStarted")}</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            {t("signin")}
          </a>
          
          {/* Mobile Language Selector */}
          <div className="px-3 py-2">
            <LanguageSelector />
          </div>
          
          <div className="px-3 py-2">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">{t("getStarted")}</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
