import inwardOnly from "../assets/inwardLogo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1C]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-x-3">
              <img src={inwardOnly} alt="Inward Logo" className="h-8 w-auto" />
              <span className="text-white font-semibold text-2xl">INWARD</span>
            </a>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Tu solución efectiva en consultoría fiscal, patrimonial y
              desarrollo de negocios. Más de 26 años construyendo el éxito de
              empresas como la tuya.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Navegación
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#about-us"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#why-inward"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Nuestro Valor
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/aviso-de-privacidad"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Aviso de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/terminos-y-condiciones"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-12 border-t border-white/10" />

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm text-gray-400">
            © {currentYear} Inward. Todos los derechos reservados.
          </span>
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-200">
            <div className="w-2 h-2 bg-[#dc2626] rounded-full animate-pulse"></div>
            <span>26+ años construyendo confianza y resultados</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
