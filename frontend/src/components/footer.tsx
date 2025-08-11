interface FooterProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onLogout: () => void;
}

const Footer = ({ isLoggedIn, onLoginClick, onLogout }: FooterProps) => {
  return (
    <>
      <footer className="bg-black text-white py-6 px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between">
        <img
          src="src/TheStudiezL.png"
          alt="Logo"
          className="w-10 h-auto mb-4 md:mb-0 cursor-pointer"
          onClick={onLoginClick}
        />
        <p className="text-sm md:text-base italic text-center md:w-full md:text-center mb-4 md:mb-0">
          ¿Listo para crear algo único? Contáctanos y reserva tu espacio.
        </p>
        <p className="text-sm text-center md:text-right">
          the.studiez.bcn@gmail.com
        </p>
      </footer>

      {isLoggedIn && (
        <div className="text-center mt-4">
          <button
            onClick={onLogout}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </>
  );
};

export default Footer;
