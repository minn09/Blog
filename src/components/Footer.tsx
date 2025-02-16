import { Link } from "@/components/ui/link";
export const Footer = () => {
  return (
    <>
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="#" className="hover:text-[#63B3ED] transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-[#63B3ED] transition-colors">
              Github
            </Link>
            <Link href="#" className="hover:text-[#63B3ED] transition-colors">
              Linkedin
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Minimal Blog. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
