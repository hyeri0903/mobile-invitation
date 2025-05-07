import Link from "next/link";

export default function Main() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 bg-white dark:bg-black">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
        Welcome To Amazing Party!🎉
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light">
        Saturday, September 3rd, 2025
      </p>
      {/* 아래 방향 화살표 설정) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
       <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-600 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
