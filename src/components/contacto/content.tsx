import { Phone, Mail, MapPin } from 'lucide-react';
import BusinessMan from '../../assets/businessMan.jpg'
export default function ContactoContent(){
  return(
    <>
      <div className="min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A2F5B]">
                Contáctanos
              </h1>
              <p className="text-lg max-w-3xl mx-auto text-gray-700">
                Estamos listos para ayudarte a transformar tu negocio. Contáctanos hoy mismo 
                y descubre cómo INWARD puede impulsar el crecimiento de tu empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Columna Izquierda */}
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 text-center bg-card border border-gray-200 rounded-xl">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-3 text-[#D10046]" />
                    <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Teléfono</h3>
                    <p className='text-gray-700'>+52 (312) 323 5333</p>
                  </div>

                  <div className="p-6 text-center bg-card border border-gray-200 rounded-xl">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-3 text-[#D10046]" />
                    <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Email</h3>
                    <p className='text-gray-700'>comunicacion
                      @inward.com.mx
                    </p>
                  </div>

                  <div className="p-6 text-center bg-card border border-gray-200 rounded-xl">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3 text-[#D10046]" />
                    <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Teléfono</h3>
                    <p className='text-gray-700'>Olivo Negro 28 - A 28017 Colima, Mexico</p>
                  </div>
                </div>

                {/* Formulario */}
                <div className='p-8 bg-white border border-gray-200 rounded-xl'></div>
              </div>

              {/* Columna Derecha */}
              <div className="lg:sticky lg:top-8">
                <img src={BusinessMan} alt="" className='w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-lg'/>

                <div className='mt-6 p-6 bg-white border border-gray-200 rounded-lg'>
                  <h3 className='text-xl font-semibold mb-4 text-[#0A2F5B]'>
                    ¿Por qué elegir INWARD?
                  </h3>
                  <ul className='space-y-3 text-muted-foreground'>
                    <li className='flex items-start text-gray-700'>
                      <span className="text-primary mr-2 mt-1 text-[#D10046]">✓</span>
                      Más de 20 años de experiencia comprobada
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary mr-2 mt-1 text-[#D10046]">✓</span>
                      Equipo multidisciplinario de expertos
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary mr-2 mt-1 text-[#D10046]">✓</span>
                      Soluciones personalizadas para cada cliente
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary mr-2 mt-1 text-[#D10046]">✓</span>
                      Compromiso total con la confidencialidad
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary mr-2 mt-1 text-[#D10046]">✓</span>
                      Resultados medibles y sostenibles
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}