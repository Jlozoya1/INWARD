import { Eye, BadgeCheck, Handshake, Globe } from "lucide-react";
import edificiosIMG from "../../assets/skyHigh.jpg";

const featuresData = [
  {
    icon: Eye,
    title: "Visión integral",
    description:
      "No solo vemos números; comprendemos tu negocio en su totalidad, identificando oportunidades holísticas.",
  },
  {
    icon: BadgeCheck,
    title: "Experiencia comprobada",
    description:
      "Más de 26 años logrando resultados exitosos y tangibles para empresas como la tuya.",
  },
  {
    icon: Handshake,
    title: "Modelo basado en éxito",
    description:
      "Nuestro interés está intrínsecamente alineado con el tuyo; tu éxito es nuestro éxito.",
  },
  {
    icon: Globe,
    title: "Red de expertos",
    description:
      "El poder de nuestras alianzas estratégicas a nivel local y global a tu completo servicio.",
  },
];

export default function WhyInwardSection() {
  return (
    <section id="why-inward" className="bg-black py-12 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#1C1C1C] rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16">
          <img
            src={edificiosIMG}
            alt="Fondo de edificio corporativo"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div className="text-center lg:text-left lg:flex lg:flex-col lg:h-full">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  ¿Por qué <span className="text-[#dc2626]">INWARD</span>?
                  <br className="hidden lg:block" /> Nuestro valor diferencial
                </h2>
                <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
                  Elegirnos significa optar por la excelencia, el compromiso y
                  resultados tangibles.
                </p>
              </div>

              <div className="hidden lg:block lg:mt-auto lg:pt-8">
                <p className="text-gray-400">
                  Cada uno de estos pilares es la base de nuestra promesa:
                  ofrecerte una alianza estratégica que impulse resultados
                  tangibles y un crecimiento sostenible para tu negocio.
                </p>
                <div className="mt-8">
                  <a
                    href="#contacto"
                    className="
                      inline-block
                      border-2 border-[#dc2626]
                      text-white font-semibold bg-[#dc2626]
                      px-6 py-3 rounded-lg 
                      hover:bg-red-700
                      transition-colors duration-300
                    "
                  >
                    Conversemos sobre tu proyecto
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-10 mt-12 lg:mt-0">
              {featuresData.map((feature) => (
                <div key={feature.title} className="flex items-start gap-x-5">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                    <feature.icon
                      className="h-6 w-6 text-[#dc2626]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-base text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
