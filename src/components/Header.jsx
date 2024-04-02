import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950 bg-gradient-to-r from-indigo-950 via-purple-500 to-indigo-600 ">
      <div className="container mx-auto flex items-center justify-center flex-col sm:flex-row">
      <button onClick={() => {}} className="text-xs sm:text-2xl font-bold text-red-300">GG Portfolio</button>
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-white">
          ☰
        </button>
        <nav className={`flex flex-col items-center sm:flex-row ${isOpen ? 'block' : 'hidden'} sm:block`}>
          <ul className="flex flex-col sm:flex-row">
            <li className="mt-2 sm:mt-0 ml-4 border-r border-white pr-10 flex items-center justify-center">
              <button onClick={() => {}} className="text-xs sm:text-base text-white hover:bg-violet-600 px-2 sm:px-4 py-1 sm:py-2 rounded">
                {t('home')}
              </button>
            </li>
            <li className="mt-2 sm:mt-0 ml-4 border-r border-white pr-10 flex items-center justify-center">
              <button onClick={() => {}} className="text-xs sm:text-base text-white hover:bg-violet-600 px-2 sm:px-4 py-1 sm:py-2 rounded">
                {t('about_me')}
              </button>
            </li>
            <li className="mt-2 sm:mt-0 ml-4 border-r border-white pr-10 flex items-center justify-center">
              <button onClick={() => {}} className="text-xs sm:text-base text-white hover:bg-violet-600 px-2 sm:px-4 py-1 sm:py-2 rounded">
                {t('projects')}
              </button>
            </li>
            <li className="mt-2 sm:mt-0 ml-4 pr-10 flex items-center justify-center">
              <button onClick={() => {}} className="text-xs sm:text-base text-white hover:bg-violet-600 px-2 sm:px-4 py-1 sm:py-2 rounded">
                {t('contact')}
              </button>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex">
          <button onClick={() => changeLanguage('en')} className="text-xs sm:text-base text-white hover:bg-violet-600 px-2 sm:px-4 py-1 sm:py-2 rounded">
            {t('english')}
          </button>
          <p className="text-white px-0 py-2">|</p>
          <button onClick={() => changeLanguage('es')} className="text-xs sm:text-base text-white hover:bg-violet-600 px-2 sm:px-4 py-1 sm:py-2 rounded ml-2">
            {t('spanish')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;