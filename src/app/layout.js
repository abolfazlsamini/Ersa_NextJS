// import { Inter } from "next/font/google";
import Navbar from "./navbar";
import "./globals.css";
import localFont from "next/font/local";
// const inter = Inter({ subsets: ["latin"] });
export const creato_medium = localFont({
  src: [
    {
      path: "../../public/font/home/creato_medium.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-creato_medium",
});
export const metadata = {
  title: "Ersa NextJs",
  description: "Ersa NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${creato_medium.variable} `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
