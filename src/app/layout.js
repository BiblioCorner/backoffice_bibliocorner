import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/partials/Header";
import Sidebar from "@/components/partials/Sidebar";
import { icons } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "BiblioCorner Back Office",
  description: "Back Office de BiblioCorner",
  lang: "fr",
  icons:{
    icon: "/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`w-screen h-screen ${inter.className}`}>
        <Header />
        <main className="flex w-full">
          <Sidebar />
          <section className="flex-1 p-6">{children}</section>
        </main>
      </body>
    </html>
  );
}
