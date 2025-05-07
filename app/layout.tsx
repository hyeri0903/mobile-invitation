import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "styles/globals.css";

export const metadata: Metadata = {
  title: "Welcome To Our Amazing Party🎉",
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
    <html lang="en" suppressHydrationWarning>
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
