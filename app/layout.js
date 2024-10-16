import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "The Freedom Foundry",
  description: "The Freedom Foundry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5728506428158157"
     crossorigin="anonymous"></script>
     <meta name="google-site-verification" content="zlPL1-vGtEemOYWKv6hHsVhb_EfhcQVWE5DHYcjiK8E" />
     <meta name='impact-site-verification' value='39fce37e-93b9-422f-83bc-147842009243'></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
