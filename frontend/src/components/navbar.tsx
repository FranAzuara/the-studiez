const Navbar = () => {
  return (
    <nav className="bg-black p-4 fixed top-0 right-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">THE STUDIEZ</div>
        <div className="space-x-4">
          <a href="/">Inicio</a>
          <a href="/about">Nosotros</a>
          <a href="/event">Eventos</a>
          <a href="/contact">Contacto</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
