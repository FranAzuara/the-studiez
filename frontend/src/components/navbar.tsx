import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/LTheStudiez.png" className="w-10 h-auto" alt="Logo" />
          <div className="text-white text-lg font-bold">THE STUDIEZ</div>
        </div>

        {/* Menu desktop */}
        <div className="hidden sm:flex space-x-4">
          <a className="a-navbar text-white hover:text-gray-300" href="#inicio">
            Inicio
          </a>
          <a
            className="a-navbar text-white hover:text-gray-300"
            href="#nosotros"
          >
            Nosotros
          </a>
          <a
            className="a-navbar text-white hover:text-gray-300"
            href="#disponibilidad"
          >
            Disponibilidad
          </a>
          <a
            className="a-navbar text-white hover:text-gray-300"
            href="#contacto"
          >
            Contacto
          </a>
        </div>

        {/* Hamburger menu button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-black flex flex-col space-y-2 mt-2 p-4">
          <a
            className="a-navbar text-white hover:text-gray-300"
            href="#inicio"
            onClick={toggleMenu}
          >
            Inicio
          </a>
          <a
            className="a-navbar text-white hover:text-gray-300"
            href="#nosotros"
            onClick={toggleMenu}
          >
            Nosotros
          </a>
          <a
            className="a-navbar text-white hover:text-gray-300"
            href="#disponibilidad"
            onClick={toggleMenu}
          >
            Disponibilidad
          </a>
          <a
            className="a-navbar text-white hover:text-gray-300"
            href="#contacto"
            onClick={toggleMenu}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
