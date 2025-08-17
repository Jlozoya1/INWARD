import { Calculator, TrendingUp, Shield,Building } from "lucide-react";

const services = [
  {
    title: 'Gestion Fiscal y Contable',
    description: 'El día a día, resuelto.',
    icon: <Calculator/>
  },
  {
    title: 'Impulso Estratégico y Patrimonial',
    description: 'Mirando hacia el futuro.',
    icon: <TrendingUp/>
  },
  {
    title: 'Defensa y Cumplimiento',
    description: 'Tu tranquilidad asegurada.',
    icon: <Shield/>
  },
  {
    title: 'Experiencia en Sectores Clave',
    description: 'Entendemos tu industria.',
    icon: <Building/>
  },
];

export default function ServicesSection(){
  return(
    <>
      <section id="services" className="min-h-120 p-20 md:text-center text-left">
        <h1 className="text-5xl text-white pb-10 font-semibold">Explora nuestros servicios:</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div className=" p-8 group h-full rounded-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-[#313132]">
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-[#D10046] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-white">
                  {service.icon}
                </div>
                <div className="text-lg  font-bold text-white/90 group-hover:text-inward-red transition-colors duration-300">
                  {service.title}
                </div>
                <div className="text-gray-100 font-semibold  text-sm">
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <button className="rounded-lg bg-[#D10046] px-6 py-3 cursor-pointer hover:bg-[#cb1551] text-white/90">Explora nuestros servicios</button>
        </div>
      </section>
    </>
  )
}