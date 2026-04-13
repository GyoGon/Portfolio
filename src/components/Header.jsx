import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../pages/img/logo.svg';

const Header = ({ scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { label: t('home'), action: scrollToHome },
    { label: t('about_me'), action: scrollToAbout },
    { label: t('projects'), action: scrollToProjects },
    { label: t('contact'), action: scrollToContact },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-indigo-800/30">
      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <button onClick={scrollToHome} className="flex-shrink-0">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 group"
            >
              {label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-violet-400 group-hover:w-4/5 transition-all duration-300 rounded-full" />
            </button>
          ))}
        </nav>

        {/* Right: language toggle + mobile hamburger */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-800 rounded-full p-0.5 border border-indigo-800/50">
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
                i18n.language === 'en' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('es')}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
                i18n.language === 'es' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              ES
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="sm:hidden border-t border-indigo-800/30 bg-slate-900/95 backdrop-blur-md">
          <ul className="flex flex-col py-2">
            {navLinks.map(({ label, action }) => (
              <li key={label}>
                <button
                  onClick={() => { action(); setIsOpen(false); }}
                  className="w-full text-left px-6 py-3 text-sm text-slate-300 hover:text-white hover:bg-indigo-950/60 transition-colors duration-200"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
