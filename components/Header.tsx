"use client";

import ThemeSwitch from "./ThemeSwitch";
import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 아래로 스크롤하고 100px 이상 스크롤했을 때 헤더 숨김
        setIsVisible(false);
      } else {
        // 위로 스크롤하거나 상단 근처일 때 헤더 표시
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* <div className="flex items-center">
          <span className="text-xl dark:text-gray-100">Next JS Starter Template</span>
        </div> */}
        <nav className="flex items-center w-full justify-between">
          {/* <ul className="flex space-x-2 mr-2">
            <li>
              <Link
                href="/"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul> */}
          <div className="flex-grow"></div>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
