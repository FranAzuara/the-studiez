const Footer = () => (
  <footer className="bg-black text-white py-6 px-4 grid grid-cols-1 md:grid-cols-3 items-center text-center">
    <div className="mb-4 md:mb-0 flex justify-center md:justify-start">
      <img src="src/TheStudiezL.png" alt="Logo" className="w-10 h-auto" />
    </div>

    <p className="text-sm md:text-base italic">
      ¿Listo para crear algo único? Contáctanos y reserva tu espacio.
    </p>

    <p className="text-sm mt-4 md:mt-0 flex justify-center md:justify-end">
      the.studiez.bcn@gmail.com
    </p>
  </footer>
);

export default Footer;
