import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import Toggle from './Toggle';
import translations from '../translations/translation.json';


function Navbar({ onLanguageChange, language }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    onLanguageChange(newLanguage);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative h-min overflow-hidden font-mono bg-purple-100 dark:bg-gray-800">
      <div className="container flex items-center justify-between px-6 mx-auto">
        <a href="https://github.com/arianna9912" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center text-3xl font-black text-gray-800 uppercase dark:text-white">
            <FaGithub className="mr-2" />
            <span className="mt-1 ml-3 text-xs">arianna9912</span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center text-lg text-gray-800 uppercase font-sen dark:text-white">
          <Link to="/" className="px-6 py-2 hover:text-purple-500">
            {translations[language].home}
          </Link>
          <Link to="/about" className="px-6 py-2 hover:text-purple-500">
            {translations[language].about}
          </Link>
          <Link to="/skill" className="px-6 py-2 hover:text-purple-500">
            {translations[language].skills}
          </Link>
          <Link to="/experience" className="px-6 py-2 hover:text-purple-500">
            {translations[language].experience}
          </Link>
          <Link to="/contact" className="px-6 py-2 hover:text-purple-500">
            {translations[language].contact}
          </Link>
          <Toggle language={language} onLanguageChange={handleLanguageChange} />
        </nav>
        <div className="lg:hidden">
          <button
            className="px-3 py-2 text-gray-800 hover:text-purple-500"
            onClick={toggleMenu}
          >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container flex flex-col items-center justify-center px-6 mx-auto lg:flex-row">
          <nav className="flex flex-col items-center text-lg text-gray-800 uppercase font-sen dark:text-white">
            <Link to="/" className="px-6 py-2 hover:text-purple-500">
              {translations[language].home}
            </Link>
            <Link to="/about" className="px-6 py-2 hover:text-purple-500">
              {translations[language].about}
            </Link>
            <Link to="/skill" className="px-6 py-2 hover:text-purple-500">
              {translations[language].skills}
            </Link>
  
            <Link to="/experience" className="px-6 py-2 hover:text-purple-500">
              {translations[language].experience}
            </Link>
            <Link to="/contact" className="px-6 py-2 hover:text-purple-500">
              {translations[language].contact}
            </Link>
            <Toggle language={language} onLanguageChange={handleLanguageChange} />
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;