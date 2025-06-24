const Navbar = () => {
  return (
    <nav className="bg-black p-4 fixed top-0 right-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="src/TheStudiezL.png" className="w-10 h-auto" />
          <div className="text-white text-lg font-bold">THE STUDIEZ</div>
        </div>
        <div className="space-x-4">
          <a className="a-navbar" href="#inicio">
            Inicio
          </a>
          <a className="a-navbar" href="#nosotros">
            Nosotros
          </a>
          <a className="a-navbar" href="#eventos">
            Eventos
          </a>
          <a className="a-navbar" href="#contacto">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
