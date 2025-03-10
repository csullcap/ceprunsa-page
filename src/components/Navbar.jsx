"use client";

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-2" : "shadow-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/349615752_199607626324527_8076311446864506776_n-removebg-preview%20%281%29-hqIaNIG9FNBZl5ioEBHuhcAUQYZ9SU.png"
              alt="CEPRUNSA Logo"
              className="h-14 md:h-16"
            />
          </Link>

          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9a1b1f] font-medium border-b-2 border-[#9a1b1f] pb-1"
                  : "text-gray-700 hover:text-[#9a1b1f] hover:border-b-2 hover:border-[#9a1b1f] pb-1 transition-all"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9a1b1f] font-medium border-b-2 border-[#9a1b1f] pb-1"
                  : "text-gray-700 hover:text-[#9a1b1f] hover:border-b-2 hover:border-[#9a1b1f] pb-1 transition-all"
              }
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/procesos"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9a1b1f] font-medium border-b-2 border-[#9a1b1f] pb-1"
                  : "text-gray-700 hover:text-[#9a1b1f] hover:border-b-2 hover:border-[#9a1b1f] pb-1 transition-all"
              }
            >
              Procesos
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9a1b1f] font-medium border-b-2 border-[#9a1b1f] pb-1"
                  : "text-gray-700 hover:text-[#9a1b1f] hover:border-b-2 hover:border-[#9a1b1f] pb-1 transition-all"
              }
            >
              Contacto
            </NavLink>
            <NavLink
              to="/trabaja-con-nosotros"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9a1b1f] font-medium border-b-2 border-[#9a1b1f] pb-1"
                  : "text-gray-700 hover:text-[#9a1b1f] hover:border-b-2 hover:border-[#9a1b1f] pb-1 transition-all"
              }
            >
              Trabaja con Nosotros
            </NavLink>
          </nav>

          <div className="hidden md:block">
            <a
              href="https://apps.unsa.edu.pe/sisadmision/public/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Inscríbete
            </a>
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9a1b1f] font-medium py-2 border-l-3 pl-2"
                  : "text-gray-700 hover:text-[#9a1b1f] py-2"
              }
              onClick={closeMenu}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9a1b1f] font-medium py-2 border-l-3 pl-2"
                  : "text-gray-700 hover:text-[#9a1b1f] py-2 "
              }
              onClick={closeMenu}
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/procesos"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9a1b1f] font-medium py-2 border-l-3 pl-2"
                  : "text-gray-700 hover:text-[#9a1b1f] py-2 "
              }
              onClick={closeMenu}
            >
              Procesos
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9a1b1f] font-medium py-2 border-l-3 pl-2"
                  : "text-gray-700 hover:text-[#9a1b1f] py-2 "
              }
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
            <NavLink
              to="/trabaja-con-nosotros"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9a1b1f] font-medium py-2 border-l-3 pl-2"
                  : "text-gray-700 hover:text-[#9a1b1f] py-2 "
              }
              onClick={closeMenu}
            >
              Trabaja con Nosotros
            </NavLink>
            <a
              href="https://apps.unsa.edu.pe/sisadmision/public/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
              onClick={closeMenu}
            >
              Inscríbete
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
