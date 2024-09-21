import localFont from "next/font/local";
import { Albert_Sans } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getNav } from "@/hooks/getNav";

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Asanka",
  description: "asanker.com",
};

export default async function RootLayout({ children }) {

  const content = await getNav();

  // console.log(content)
  
  return (
    <html lang="en">
      <body
        className={albertSans.className + ' bg-background'} >
        <Navbar navItems={content} />
        <div className="container w-full mx-auto px-3 pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
