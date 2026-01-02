import Header from "components/Header";
import Features from "components/Features";
import Footer from "components/Footer";
import Details from "components/Details";
import Main from "components/Main";
import Guestbook from "components/Guestbook";


export default function Page() {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Main />
        <Features />
        <Details />
        <Guestbook />
      </main>
      <Footer />
    </div>
    </>
  );
}
