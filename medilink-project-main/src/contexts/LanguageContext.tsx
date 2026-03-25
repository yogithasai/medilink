
import React, { createContext, useState, useContext, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
};

// Simple translations
const translations = {
  English: {
    "home": "Home",
    "about": "About",
    "contact": "Contact",
    "faqs": "FAQs",
    "signin": "Sign In",
    "getStarted": "Get Started",
    // Add more translations as needed
  },
  Español: {
    "home": "Inicio",
    "about": "Acerca de",
    "contact": "Contacto",
    "faqs": "Preguntas Frecuentes",
    "signin": "Iniciar Sesión",
    "getStarted": "Comenzar",
    // Add more translations as needed
  },
  Français: {
    "home": "Accueil",
    "about": "À propos",
    "contact": "Contact",
    "faqs": "FAQ",
    "signin": "Connexion",
    "getStarted": "Commencer",
    // Add more translations as needed
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "English",
  setLanguage: () => {},
  translations,
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("English");

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.English[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
