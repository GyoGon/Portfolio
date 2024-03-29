import React from 'react';
import '../pages/css/style.css';
import { useTranslation } from 'react-i18next';

const Header = ({ scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950 bg-gradient-to-r from-indigo-950 via-purple-500 to-indigo-600 ">
      <div className="container mx-auto flex items-center ">
        <button onClick={scrollToHome} className="text-2xl font-bold text-red-300">GG Portfolio</button>
        <nav>
          <ul className="flex mx-auto">
            <li className="ml-4 border-r border-white pr-10 flex items-center justify-center">
              <button onClick={scrollToHome} className="text-white hover:bg-violet-600 px-4 py-2 rounded">Home</button>
            </li>
            <li className="ml-4 border-r border-white pr-10 flex items-center justify-center">
              <button onClick={scrollToAbout} className="text-white hover:bg-violet-600 px-4 py-2 rounded">About</button>
            </li>
            <li className="ml-4 border-r border-white pr-10 flex items-center justify-center">
              <button onClick={scrollToProjects} className="text-white hover:bg-violet-600 px-4 py-2 rounded">Projects</button>
            </li>
            <li className="ml-4 pr-10 flex items-center justify-center">
              <button onClick={scrollToContact} className="text-white hover:bg-violet-600 px-4 py-2 rounded">Contact</button>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex">
          <button onClick={() => changeLanguage('en')} className="text-white hover:bg-violet-600 px-3 py-2 rounded">ENG</button>
          <p className="text-white px-0 py-2">|</p>
          <button onClick={() => changeLanguage('es')} className="text-white hover:bg-violet-600 px-1 py-1 rounded ml-2">ESP</button>
        </div>
      </div>
    </header>
  );
};

export default Header;