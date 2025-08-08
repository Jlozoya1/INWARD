import inwardLogo from '../assets/inwardL.png'

export default function Footer(){
  const currentYear = new Date().getFullYear();
  return(
    <>
      <footer className="bg-[#0A2F5B] text-white pt-16 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <img src={inwardLogo} alt="" className="h-10 w-auto mb-4 filter brightness-0 invert"/>
                <p className="text-white/80 leading-relaxed max-w-md">
                  Tu solución efectiva en consultoría fiscal, patrimonial y desarrollo de negocios. 
                  Más de 12 años construyendo el éxito de empresas como la tuya.
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-white/80">
                  <span className="font-semibold">Email:</span> comunicacion@inward.com.mx
                </p>
                <p className="text-white/80">
                  <span className="font-semibold">Teléfono:</span> +52 (312) 323 53 33
                </p>
                <p className="text-white/80">
                  <span className="font-semibold">Dirección:</span> Olivo Negro 28-A, Col. Lomas de Circunvalación, Colima, Col., México. C.P. 28010
                </p>
              </div>
            </div>
            
            <div className="space-y-4 md:col-start-2 lg:col-start-4">
              <h3 className="text-lg font-bold text-white">Nuestros Servicios</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-white/80">Gestión Fiscal y Contable</li>
                <li className="text-white/80">Estrategia y Crecimiento</li>
                <li className="text-white/80">Defensa y Cumplimiento</li>
                <li className="text-white/80">Sectores Especializados</li>
                <li className="text-white/80">Consultoría Integral</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mb-0.5 mt-3">
            <div className="h-px bg-gray-300 w-full"></div>
          </div>

          <div className="flex justify-between py-5">
            <span className="text-white/80">© {currentYear} Inward. Todos los derechos reservados.</span>

            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/80">
              <div className="w-2 h-2 bg-[#D10046] rounded-full animate-pulse"></div>
              <span>12+ años construyendo confianza y resultados</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 