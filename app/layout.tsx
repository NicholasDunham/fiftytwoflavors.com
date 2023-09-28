import Link from "next/link";

export const metadata = {
  title: "Fifty-two Flavors",
  description: "One year of home ice cream recipes.",
};

const header = (
  <header>
    <>
      <h1>
        <Link href="/">Fifty-two Flavors</Link>
      </h1>
    </>
  </header>
);

const footer = (
  <footer>
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
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
