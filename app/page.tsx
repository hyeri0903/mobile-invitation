import Header from "components/Header";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Image from "next/image";
import Details from "components/Details";
import Download from "components/Download";
import Main from "components/Main";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Main />
        <Features />
        <Details />
        {/* <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
