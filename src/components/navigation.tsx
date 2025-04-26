import Link from "next/link";
import { MovingBorder } from "./ui/aceternity/moving-border";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "CV", path: "/cv" },
  { name: "Projet", path: "/projet" },
  { name: "Compétences", path: "/competences" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  return (
    <header className="w-full py-6 border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-gray-800">
          Portfolio
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <MovingBorder
              className="px-4 py-2 font-medium text-sm text-white"
              borderRadius="0.5rem"
            >
              Contact
            </MovingBorder>
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button here if needed */}
        </div>
      </div>
    </header>
  );
} 