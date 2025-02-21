import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "@/components/ui/link";

export const Header = () => {
  return (
    <>
      <header className="border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-[#63B3ED]">
            Minimal Blog
          </Link>

          <div className="flex gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#63B3ED] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="text-gray-600 hover:text-[#63B3ED] transition-colors"
            >
              Article
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#63B3ED] transition-colors"
            >
              About
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
