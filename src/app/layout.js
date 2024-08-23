import Navbar from "./navbar";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "./footer";

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
export const neueplaktext_regular = localFont({
  src: [
    {
      path: "../../public/font/zau/neueplaktext_regular.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-neueplaktext_regular",
});
export const t1korium = localFont({
  src: [
    {
      path: "../../public/font/zau/t1korium.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-t1korium",
});
export const zau = localFont({
  src: [
    {
      path: "../../public/font/zau/zau.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-zau",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${creato_medium.variable} ${neueplaktext_regular.variable} ${t1korium.variable} ${zau.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
