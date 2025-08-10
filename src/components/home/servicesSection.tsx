import { Calculator, TrendingUp, Shield, Building } from "lucide-react";

export default function Services(){
  const services = [
    {
      icon: Calculator,
      title: "Gestión Fiscal y Contable",
      description: "El día a día, resuelto.",
      route: "/gestion-fiscal",
      services: [
        "Outsourcing contable",
        "Nómina",
        "Administración eficiente",
        "Consultoría continua"
      ]
    },
    {
      icon: TrendingUp,
      title: "Impulso Estratégico y Patrimonial",
      description: "Mirando hacia el futuro.",
      route: "/impulso-estrategico",
      services: [
        "Planeación estratégica",
        "Inversiones y M&A",
        "Financiamiento",
        "Empresa familiar"
      ]
    },
    {
      icon: Shield,
      title: "Defensa y Cumplimiento",
      description: "Tu tranquilidad asegurada.",
      route: "/defensa-cumplimiento",
      services: [
        "Defensa fiscal estratégica",
        "Recuperación de saldos",
        "Auditorías y dictámenes",
        "Cumplimiento normativo"
      ]
    },
    {
      icon: Building,
      title: "Experiencia en Sectores Clave",
      description: "Entendemos tu industria.",
      route: "/sectores-clave",
      services: [
        "Agronegocios",
        "Sector Gubernamental",
        "Inmobiliario Patrimonial",
        "Consultoría especializada"
      ]
    }
  ]
  return(
    <>
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2F5B] mb-6">
              Nuestro Ecosistema de{" "}
              <span className="text-[#D10046]">Soluciones 360°</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Una visión integral para el éxito y la tranquilidad de tu empresa.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return(
                <div 
                  className="group p-8 h-full bg-white hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-gray-100 hover:border-inward-blue/20 cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm"
                  key={index}
                  >
                  <div className="text-center space-y-6">
                    <div className="mx-auto w-16 h-16 bg-[#D10046] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h5 className="text-lg font-bold text-[#0A2F5B] group-hover:text-inward-red transition-colors duration-300">
                      {service.title}
                    </h5>

                    <p className="text-[#0A2F5B] font-semibold  text-md">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.services.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="text-gray-700 group-hover:text-inward-blue transition-colors duration-200 text-sm"
                        >
                          • {item}
                        </div>
                      ))}
                    </div>

                    <div className="text-[#D10046] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver detalles →
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* Separator */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-16 bg-[#0A2F5B] shadow-lg"></div>

      </section>
    </>
  )
}