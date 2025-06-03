import React from "react";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";
import MapInfo from "./MapInfo";

const Features = () => {

  return (
    <section className="w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-black dark:bg-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white dark:text-black mb-4 text-center w-full">
          You're invited to our Retreat Party
          </h2>
          <div className="mt-8 text-xl text-white dark:text-black font-light text-center w-full">
            WHEN
            <p className="text-xl font-bold text-gray-300 dark:text-black mt-2">
              2025.09.03 17:00 - 22:00
            </p>
          </div>
          <div className="mt-8 text-xl text-white dark:text-gray-700 font-light text-center w-full">
            WHERE
            <div className="text-large font-bold text-gray-300 dark:text-black mt-2">
              <MapInfo />
            </div>
          </div>
          <div className="mt-8 text-xl text-white dark:text-gray-700 font-light text-center w-full">
            CONTACT
            <p className="text-xl font-bold text-gray-300 dark:text-black mt-2">
              010.1234.5678
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
