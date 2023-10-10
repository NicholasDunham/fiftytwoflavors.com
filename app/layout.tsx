import "@/styles/globals.css";
import { Providers } from "./components/providers";
import ThemeButton from "@/app/components/ThemeButton";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";

export const metadata = {
  title: "Fifty-two Flavors",
  description: "One year of home ice cream recipes.",
};

const Branding = () => {
  return (
    <>
      <Link href="/" className="flex space-x-2">
        <Image src={Logo} alt="Fifty-two Flavors" width={20} height={20} />
        <h1 className="text-2xl font-medium">Fifty-two Flavors</h1>
      </Link>
    </>
  );
};

const Header = () => {
  return (
    <nav className="max-w-5xl mx-auto">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Branding />
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="mt-4 border-t border-slate-800 py-4 text-slate-500">
      <p>Created by Nicholas Dunham.</p>
    </footer>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-white selection:bg-gray-50 text-black
                   dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white"
      >
        <Providers>
          <Header />
          <main className="max-w-5xl mx-auto border-2">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
