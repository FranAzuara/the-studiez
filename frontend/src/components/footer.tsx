import { useState, useEffect } from "react";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Comprobar token al montar el componente
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogoClick = () => {
    setModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setModalOpen(false);
    alert("Sesión cerrada");
    window.location.reload();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <footer className="bg-black text-white py-6 px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between">
        <img
          src="src/TheStudiezL.png"
          alt="Logo"
          className="w-10 h-auto mb-4 md:mb-0 cursor-pointer"
          onClick={handleLogoClick}
        />
        <p className="text-sm md:text-base italic text-center md:w-full md:text-center mb-4 md:mb-0">
          ¿Listo para crear algo único? Contáctanos y reserva tu espacio.
        </p>

        <p className="text-sm text-center md:text-right">
          the.studiez.bcn@gmail.com
        </p>
      </footer>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-3 text-gray-700 text-xl"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            {!isLoggedIn ? (
              // Aquí puedes reutilizar tu LoginModal o poner su contenido directamente
              <LoginForm
                onSuccess={() => {
                  setIsLoggedIn(true);
                  setModalOpen(false);
                }}
              />
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">Sesión iniciada</h2>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

interface LoginFormProps {
  onSuccess: () => void;
}

// Esta es una versión simplificada de tu formulario de login, que llama a onSuccess() cuando loguea
const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Credenciales inválidas");
      } else {
        localStorage.setItem("token", data.token);
        onSuccess();
        window.location.reload();
      }
    } catch {
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center">Iniciar Sesión</h2>
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-3 py-2"
          required
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded px-3 py-2"
          required
          autoComplete="current-password"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? "Iniciando..." : "Iniciar sesión"}
        </button>
      </form>
    </>
  );
};

export default Footer;
