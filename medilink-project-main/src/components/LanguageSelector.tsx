
import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  
  const languages = Object.keys(translations);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className="flex items-center space-x-1 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
        onClick={toggleDropdown}
      >
        <Globe size={18} />
        <span>{language}</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${
                language === lang ? 'text-blue-600 font-medium' : 'text-gray-700'
              }`}
              onClick={() => handleLanguageChange(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
