import Link from "next/link";
import ThemeButton from "@/app/components/ThemeButton";

const Header = () => {
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

export default Header;
