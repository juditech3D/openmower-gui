import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 justify-end">
      <button
        onClick={() => changeLanguage('fr')}
        className="px-2 py-1 border rounded hover:bg-gray-200"
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className="px-2 py-1 border rounded hover:bg-gray-200"
      >
        EN
      </button>
    </div>
  );
};
