import Header from "components/Header";
import Features from "components/Features";
import Footer from "components/Footer";
import Details from "components/Details";
import Main from "components/Main";
import Head from 'next/head';


export default function Page() {
  return (
    <>
     <Head>
        <title>Mobile Invitation</title>
        {/* open graph */}
        <meta name="description" content="Mobile Invitation - description" />
        <meta property="og:title" content="Mobile Invitation"/>
        <meta property="og:description" content="Mobile Invitation - description"/>
        <meta property="og:image" content="https://mobile-invitation-rouge.vercel.app/invitation.png" />
        <meta property="og:url" content="https://mobile-invitation-rouge.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Mobile Invitation Template"/>
        {/* twitter card */}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="Mobile Invitation"/>
        <meta name="twitter:description" content="Mobile Invitation - description"/>
        <meta name="twitter:image" content="https://mobile-invitation-rouge.vercel.app/invitation.png"/>
    </Head>
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
    </>
  );
}
