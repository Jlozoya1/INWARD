import { Calculator, TrendingUp, Shield, Building } from "lucide-react";

const servicesData = [
  {
    title: "Gestión Fiscal y Contable",
    description: "El día a día, resuelto.",
    icon: <Calculator size={32} />,
    details: [
      "Outsourcing contable",
      "Nómina",
      "Administración eficiente",
      "Consultoría continua",
    ],
  },
  {
    title: "Estrategia y Crecimiento",
    description: "Mirando hacia el futuro.",
    icon: <TrendingUp size={32} />,
    details: [
      "Planeación estratégica",
      "Inversiones y M&A",
      "Financiamiento y capital",
      "Empresa familiar",
    ],
  },
  {
    title: "Defensa y Cumplimiento",
    description: "Tu tranquilidad asegurada.",
    icon: <Shield size={32} />,
    details: [
      "Defensa fiscal estratégica",
      "Recuperación de saldos",
      "Auditorías y dictámenes",
      "Calidad fiscal",
    ],
  },
  {
    title: "Sectores Especializados",
    description: "Entendemos tu industria.",
    icon: <Building size={32} />,
    details: [
      "Agronegocios",
      "Sector Gubernamental",
      "Inmobiliario Patrimonial",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black py-12 sm:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Nuestro ecosistema de{" "}
            <span className="text-[#dc2626]">soluciones 360°</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Una visión integral para el{" "}
            <span className="text-[#dc2626]">éxito</span> y la tranquilidad de
            tu empresa.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="group h-full rounded-2xl bg-[#1C1C1C] p-8 text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#dc2626] text-white transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-gray-300">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex-grow space-y-2">
                  {service.details.map((item, idx) => (
                    <div key={idx} className="text-sm text-gray-400">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
