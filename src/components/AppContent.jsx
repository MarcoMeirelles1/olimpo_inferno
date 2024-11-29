// AppContent.jsx
import React, { useState } from 'react';
import Home from '../pages/home';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme', isDarkMode);
    document.body.classList.toggle('light-theme', !isDarkMode);
  };

  return (
    <div className="App">
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? 'Tema Claro' : 'Tema Escuro'}
      </button>

      {/* Renderiza a página com base no estado currentPage */}
      {currentPage === 'home' && <Home navigateTo={navigateTo} />}
    </div>
  );
}

export default AppContent;