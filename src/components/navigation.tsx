import Link from "next/link";
import { MovingBorder } from "./ui/aceternity/moving-border";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "CV", path: "/cv" },
  { name: "Projet", path: "/projet" },
  { name: "Compétences", path: "/competences" },
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
              className="px-8 py-3 font-medium bg-gradient-to-r from-slate-900 to-slate-800 text-center"
              borderRadius="0.5rem"
              duration={3000}
              borderColor="from-purple-600 via-blue-400 to-emerald-500"
            >
              <span className="text-white font-semibold">Contact</span>
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