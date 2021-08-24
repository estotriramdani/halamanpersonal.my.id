import React, { useEffect } from 'react';

function DarkModeSwitcher() {
  const switchTheme = (theme) => {
    const html = document.querySelector('html');
    html.classList.add(theme);
    if (theme === 'dark') {
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.removeItem('theme');
  }, []);
  return (
    <div>
      <button
        onClick={() => switchTheme('light')}
        className="h-8 w-8 bg-gray-200 rounded-full focus:outline-none mr-3"
      ></button>
      <button
        onClick={() => switchTheme('dark')}
        className="h-8 w-8 bg-gray-900 rounded-full focus:outline-none"
      ></button>
    </div>
  );
}

export default DarkModeSwitcher;
