import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const GAME_LANGUAGE = "game_language";

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const storedValue = localStorage.getItem(GAME_LANGUAGE);

      return storedValue ?? "en";
    } catch {
      return "en";
    }
  });

  const changeLanguage = () => {
    const newLanguage = language === "en" ? "ua" : "en";
    setLanguage(newLanguage);

    localStorage.setItem(GAME_LANGUAGE, newLanguage);
  };

  const isUAVersion = language === "ua";

  return (
    <LanguageContext.Provider value={{ changeLanguage, language, isUAVersion }}>
      {children}
    </LanguageContext.Provider>
  );
};
