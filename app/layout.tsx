import "@/styles/globals.css";
import { Providers } from "./components/providers";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Fifty-two Flavors",
  description: "One year of home ice cream recipes.",
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
