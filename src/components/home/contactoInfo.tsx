import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo(){
  return(
    <>
      <section className="py-20 lg:py:32 bg-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2F5B] mb-6">
              Contacto
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Estamos aquí para ayudarte. Contáctanos y comencemos a trabajar juntos en el crecimiento de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-[#F8F9FA] rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#0A2F5B] mb-6">
                Envíanos un Mensaje
              </h3>

              <form action="" className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-medium ">Nombre Completo *</label>
                  <input 
                    type="text" 
                    name="name"
                    id="name"
                    required
                    className="mt-2 border-gray-200 focus:border-[#0A2F5B] focus:ring-[#0A2F5B] flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-medium ">Correo Electronico *</label>
                  <input 
                    type="text" 
                    name="email"
                    id="email"
                    required
                    className="mt-2 border-gray-200 focus:border-[#0A2F5B] focus:ring-[#0A2F5B] flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-medium ">Teléfono</label>
                  <input 
                    type="text" 
                    name="phone"
                    id="phone"
                    className="mt-2 border-gray-200 focus:border-[#0A2F5B] focus:ring-[#0A2F5B] flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="312-123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="messaje" className="font-medium ">Mensaje *</label>
                  <textarea 
                    rows={4}
                    name="message"
                    id="messaje"
                    required
                    className="mt-2 border-gray-300 focus:border-[#0A2F5B] focus:ring-[#0A2F5B] resize-none flex min-h-[80px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                    placeholder="Cuéntanos sobre tu empresa y como podemos ayudarte"
                  />
                </div>

                <button type="submit" className="w-full bg-[#D10046] hover:bg-[#D10046]/90 text-white py-2 font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-[#0A2F5B]/30 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#D10046] rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white"/>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2F5B] mb-1">
                      Correo Electrónico
                    </h4>
                    <a href="mailto:comunicacion@inward.com.mx" className="text-inward-gray hover:text-gray-700 transition-colors duration-200">
                      comunicacion@inward.com.mx
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-[#0A2F5B]/30 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#D10046] rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white"/>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2F5B] mb-1">
                      Teléfono
                    </h4>
                    <a href="tel:+523123235333" className="text-inward-gray hover:text-gray-700 transition-colors duration-200">
                      (312) 323 5333
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-[#0A2F5B]/30 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#D10046] rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white"/>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2F5B] mb-1">
                      Dirección
                    </h4>
                    <p className="text-gray-700">
                      Olivo Negro 28-A<br />
                      Col. Lomas de Circunvalación<br />
                      Colima, Col., México<br />
                      C.P. 28010
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-[#0A2F5B]/30 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#D10046] rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white"/>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2F5B] mb-1">
                      Horarios de Atención
                    </h4>
                    <p className="text-gray-700">
                      Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                      Sábados: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-gray-300 rounded-xl h-64 flex items-center justify-center">
                <p className="text-inward-gray">
                  Mapa de ubicación
                  <br />
                  <span className="text-sm">(Google Maps se integraría aquí)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}