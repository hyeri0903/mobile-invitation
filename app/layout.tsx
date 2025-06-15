import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Montserrat, Playfair_Display_SC, DM_Serif_Display, Lora } from 'next/font/google'

import "styles/globals.css";

// font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

const playfairSC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400"], // SC는 일반적으로 400만 제공
  variable: "--font-playfair-sc",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400", // 이 폰트는 400만 지원돼
  variable: "--font-dm-serif-display",
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'], // 본문: 400, 제목용: 700
  variable: '--font-lora',
});

////////


export const metadata: Metadata = {
  title: "Welcome To Party🎉",
  description: "You're invited to our unforgettable celebration!",
  icons: {
    icon: 'invitation.png'
  },
  openGraph: {
    title: "Welcome To Amazing Party!!!",
    description: "You're invited to our unforgettable celebration!",
    url: "https://mobile-invitation-rouge.vercel.app/",
    siteName: "Mobile Invitation",
    images: [
      {
        url: "https://mobile-invitation-rouge.vercel.app/invitation.png",
        width: 1200,
        height: 630,
        alt: "Mobile Invitation Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome To Amazing Party!!!",
    description: "You're invited to our unforgettable celebration!",
    images: ["https://mobile-invitation-rouge.vercel.app/invitation.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${playfairSC.variable} ${dmSerifDisplay.variable} ${lora.variable}`}>
      <head>
        <link rel="icon" href="/invitation.png" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
