'use client';

import React, { useEffect } from "react";
import MapInfo from "./MapInfo";
import { aosProps } from "utils/aosConfig";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Features () {
  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <section className="w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <h2 className="font-dmserif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black dark:text-white mb-4 text-center w-full">
          You're invited to Birthday Party
          </h2>
          <div {...aosProps} className="mt-8 text-xl text-black dark:text-white text-center w-full">
            <div className="font-lora font-bold">WHEN</div>
            <p className="text-xl text-gray-700 dark:text-white mt-2">
              2025.09.03 17:00 - 22:00
            </p>
          </div>
          <div {...aosProps} className="mt-8 text-xl text-black dark:text-white text-center w-full">
            <div className="font-lora font-bold">WHERE</div>
            <div className="text-large font-bold text-gray-700 dark:text-white mt-2">
              <MapInfo />
            </div>
          </div>
          <div {...aosProps} className="mt-8 text-xl text-black dark:text-white text-center w-full">
            <div className="font-lora font-bold">CONTACT</div>
            <p className="text-large text-gray-700 dark:text-white mt-2">
              010.1234.5678
            </p>
          </div>
        </div>
        <div className="mb-20"></div>
        {/* <div className="mt-8 text-xl text-black dark:text-gray-300 text-center w-full">
          <div className="font-lora font-bold">참석 여부 확인</div>
      
        </div> */}
      </div>
    </section>
  );
};

