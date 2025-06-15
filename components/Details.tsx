"use client";

import { motion } from 'framer-motion';

export default function Details() {
  return (
    <section className="w-full min-h-screen mx-auto flex flex-col bg-gray-50 dark:bg-gray-900">
        <div className="flex justify-center items-center mt-10">
          <h2 className="font-dmserif text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 text-gray-900 dark:text-white">
            Details
            <div className="mt-4 w-20 h-0.5 bg-gray-200 dark:bg-gray-700 mx-auto mb-3 rounded" />
          </h2>
        </div>
        {/* 1부 - 오른쪽 배치 */}
        <div className="flex flex-col md:flex-row">
          <motion.img 
            src="/heartcake.jpg" 
            alt="1부 이미지" 
            className="w-full md:w-[790px] h-[600px] object-cover"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-0">
            <div className="text-center mb-5">
              <div className="text-xl font-bold text-gray-600 dark:text-white">Session 1</div>
              <div className="mt-3 w-16 h-0.5 bg-gray-600 dark:bg-white rounded mx-auto"></div>
            </div>
            <div>
              <div className="space-y-1 text-gray-700 dark:text-gray-200 text-center md:text-left">
                <div>17:00 - 17:30&nbsp;&nbsp;Table Setting</div>
                <div>17:30 - 18:00&nbsp;&nbsp;Self Introduction</div>
                <div>18:00 - 19:00&nbsp;&nbsp;Play Games</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 2부 - 왼쪽 배치 */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-0 order-2 md:order-1">
            <div className="text-center mb-5">
              <div className="text-xl font-bold text-gray-600 dark:text-white">Session 2</div>
              <div className="mt-3 w-16 h-0.5 bg-gray-600 dark:bg-white rounded mx-auto"></div>
            </div>
            <div>
              <div className="space-y-1 text-gray-700 dark:text-gray-200 text-center md:text-left">
                <div>19:00 - 19:30 &nbsp;&nbsp;Break Time</div>
                <div>19:30 - 20:30 &nbsp;&nbsp;Watch Movies</div>
                <div>20:30 - 21:30 &nbsp;&nbsp;Enjoy Party!</div>
                <div>21:30 - 22:00 &nbsp;&nbsp;Wrap Up</div>
              </div>
            </div>
          </div>
          <motion.img 
            src="/flower.jpg" 
            alt="2부 이미지" 
            className="w-full md:w-[790px] h-[600px] object-cover order-1 md:order-2"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
        
        {/* <div className="text-center mt-10 text-gray-900 dark:text-white">
        <div className="w-20 h-0.5 bg-gray-200 dark:bg-gray-700 mx-auto mb-3 rounded" />
          Come and Join us!
        </div> */}

    </section>
  );
}
