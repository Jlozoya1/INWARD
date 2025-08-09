import { ArrowRight } from "lucide-react";
// import colImg from '../../assets/building.jpg';
import mexican from '../../assets/mexican.jpg'
export default function HeroSection(){
  return(
    <>
      <section className="relative min-h-200 flex items-center justify-center bg-no-repeat 
             lg:bg-[length:130%] bg-cover md:bg-cover 
             bg-[center_top_10%] overflow-hidden" style={{ backgroundImage: `url(${mexican})` }}>
         <div className="absolute inset-0 bg-black/50"></div> {/* Capa oscura */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-6xl">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 leading-tight drop-shadow-md">
              Potenciamos el crecimiento y la seguridad en tu negocio
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Somos <strong>INWARD®</strong>, tu solución efectiva en consultoría fiscal, patrimonial y desarrollo de negocios. 
              <br className="hidden md:block" />
              Más de <strong>12 años de experiencia</strong> nos respaldan.
            </p>

            <div className="pt-8">
              <button className="inline-flex items-center bg-[#D10046] hover:bg-[#D10046]/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
                Descubre Nuestras Soluciones <ArrowRight className="ml-2 h-5 w-5"/>
              </button>
            </div>

            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white/90">12+</div>
                <div className="text-white">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white/90">360°</div>
                <div className="text-white">Soluciones Integrales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white/90">100%</div>
                <div className="text-white">Comprometidos</div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full h-16 bg-[#D10046] shadow-lg"></div>
      </section>
      <div className="min-h-screen flex">
          <h2>hola</h2>
        </div>
    </>
  )
}