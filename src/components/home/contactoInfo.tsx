import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-black py-12 sm:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="text-[#dc2626]">Conversemos.</span> El primer paso
            a tu crecimiento.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Estamos listos para contribuir al futuro de tu empresa. Contáctanos
            para una consulta personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#1C1C1C] rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envíanos un Mensaje
            </h3>

            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="font-medium text-gray-200">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-medium text-gray-200">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition"
                  placeholder="tu@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-medium text-gray-200">
                  Mensaje *
                </label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  required
                  className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition resize-none"
                  placeholder="Cuéntanos sobre tu empresa y cómo podemos ayudarte."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#dc2626] hover:bg-red-700 text-white py-3 font-semibold rounded-lg transition-all duration-300 cursor-pointer"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1C1C1C] rounded-xl p-6 flex items-start gap-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Correo Electrónico
                </h4>
                <a
                  href="mailto:comunicacion@inward.com.mx"
                  className="text-gray-300 hover:text-red-500 transition"
                >
                  comunicacion@inward.com.mx
                </a>
              </div>
            </div>

            <div className="bg-[#1C1C1C] rounded-xl p-6 flex items-start gap-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Teléfono</h4>
                <a
                  href="tel:+523123235333"
                  className="text-gray-300 hover:text-red-500 transition"
                >
                  (312) 323 53 33
                </a>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded-xl p-6 flex items-start gap-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Dirección</h4>
                <p className="text-gray-300">
                  Olivo Negro 28-A, Col. Lomas de Circunvalación, Colima, Col.,
                  México. C.P. 28010
                </p>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-[#1C1C1C] rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-400">Google Maps va aquí</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
