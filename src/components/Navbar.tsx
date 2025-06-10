import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Logo size="sm" />

          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contacto
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="hidden md:flex"
            onClick={() => scrollToSection('contacto')}
          >
            Contacto
          </Button>
          <Button 
            className="hidden md:flex bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            onClick={() => scrollToSection('contacto')}
          >
            Cotizar
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 md:hidden">
          <nav className="flex flex-col gap-4 py-4">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              Contacto
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contacto')}
              >
                Contacto
              </Button>
              <Button
                className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                onClick={() => scrollToSection('contacto')}
              >
                Cotizar
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}