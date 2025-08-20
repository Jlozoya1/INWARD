import genteIMG from "../../assets/gente.jpg";

export default function aboutUs() {
  return (
    <>
      <section
        id="about-us"
        className="
        bg-black 
        flex items-center justify-center 
        w-full
        py-12 px-4 sm:px-6 lg:px-8 lg:py-24
      "
      >
        <div
          className="
          bg-[#1C1C1C] text-white rounded-3xl 
          p-8 md:p-12 
          w-full max-w-7xl 
        "
        >
          <div
            className="
            grid grid-cols-1 md:grid-cols-2 
            gap-x-12 gap-y-8 
            items-center
          "
          >
            <div className="flex flex-col justify-center gap-6 text-center md:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
                Tu Socio Estratégico <br className="hidden md:block" />
                en <span className="text-[#dc2626]">Crecimiento</span>{" "}
                <br className="hidden md:block" />
                Financiero
              </h2>

              <p className="text-base text-gray-300 max-w-lg mx-auto md:hidden">
                Con más de 26 años de experiencia, diseñamos soluciones
                integrales que garantizan resultados tangibles para tu negocio.
              </p>

              <p className="hidden md:block text-base lg:text-lg text-gray-300 max-w-lg">
                Con más de 26 años de experiencia, en{" "}
                <span className="text-[#dc2626]">INWARD</span> diseñamos
                soluciones integrales que optimizan tus finanzas y garantizan
                resultados tangibles para tu negocio.
              </p>

              <div className="flex flex-col md:flex-row items-center gap-6 mt-4 justify-center md:justify-start">
                <a
                  href="#contacto"
                  className="
                  w-full md:w-auto
                  bg-[#dc2626] hover:bg-red-700 
                  text-white font-semibold 
                  px-6 py-3 rounded-lg 
                  transition-colors duration-300
                "
                >
                  Agendar una Asesoría
                </a>

                <a
                  href="#services"
                  className="font-semibold hover:underline hidden md:block"
                >
                  Conoce Nuestros Servicios
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center h-full">
              <img
                src={genteIMG}
                alt="Equipo de consultores en una reunión de trabajo"
                className="w-full h-auto max-h-[500px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
