import Link from "next/link";
import "@/styles/globals.css";

export const metadata = {
  title: "Fifty-two Flavors",
  description: "One year of home ice cream recipes.",
};

const header = (
  <header className="text-center bg-slate-800 p-4 my-4 rounded-md">
    <h1 className="text-3xl font-bold text-slate-200">
      <Link href="/">Fifty-two Flavors</Link>
    </h1>
    <p className="text-slate-300">One year of ice cream experiments</p>
  </header>
);

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
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
