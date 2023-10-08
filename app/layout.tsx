import Link from "next/link";
import "@/styles/globals.css";
import { Providers } from "./components/providers";
import { ThemeButton } from "./components/ThemeButton";

export const metadata = {
  title: "Fifty-two Flavors",
  description: "One year of home ice cream recipes.",
};

const Navbar = () => {
  return (
    <nav className="max-w-5xl mx-auto">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="text-2xl font-medium">Fifty-two Flavors</h1>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

const footer = (
  <footer className="mt-4 border-t border-slate-800 py-4 text-slate-500">
    <>
      <p>Created by Nicholas Dunham.</p>
    </>
  </footer>
);

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
          <Navbar />
          <main className="max-w-5xl mx-auto border-2">{children}</main>
          {footer}
        </Providers>
      </body>
    </html>
  );
}
