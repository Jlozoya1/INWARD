import edificiosIMG from '../../assets/skyHigh.jpg'
export default function HistorySection(){
  return(
    <>
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="mx-auto w-full max-w-3xl md:max-w-none">
              <span 
                className="inline-flex items-center rounded-full border px-3 py-1 text-sm"
                style={{borderColor: "#D10046", color: "#D10046"}}
                >
                Sobre nosotros
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Nuestro enfoque
              </h2>

              <div className="mt-6 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                <div
                  className="mb-5 border-l-4 pl-4 text-sm italic text-neutral-700"
                  style={{ borderLeftColor: "#D10046" }}
                >
                  Creamos valor al transformar el conocimiento en acciones concretas.
                </div>
                <div className="space-y-4 leading-relaxed text-neutral-700">
                  <p>
                    En INWARD, colaboramos con los líderes de negocio para convertir la visión estratégica en acciones concretas que crean valor. Como tu Socio Estratégico, te ayudamos a optimizar las áreas clave de tu empresa, trazamos rutas claras para proteger tu patrimonio y nos aseguramos de que cada iniciativa no solo alcance, sino que supere sus objetivos de rentabilidad y seguridad.
                  </p>
                  <p>
                    Más que consultores, en INWARD buscamos ser catalizadores de tu éxito, creando un impacto significativo que trascienda lo convencional, respaldados por nuestra experiencia y alianzas estratégicas
                  </p>
                </div>
              </div>


            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm  sm:mt-24">
                <img src={building} alt="" 
                  width={1200}
                  height={900}
                  className='h-64 w-full object-cover sm:h-80 md:h-[420px]'
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id='history' className='relative min-h-160' >
        {/* IMG Cover */}
        <div className='absolute inset-0 bg-cover bg-center grayscale' style={{backgroundImage: `url(${edificiosIMG})` }}></div>

        {/* Text Section */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='p-12 z-10'>
            <h1 className='text-5xl text-white'>Sobre Nosotros</h1>
            <p className='text-white pt-8'>
              Consultoría mexicana, especializada en Soluciones integrales de Eficiencia y 
              Efectividad a través de la consultoría y capacitación.
            </p>
          </div>
          <div className='flex flex-wrap gap-y-4 pt-15 md:pt-60 z-10 p-12 text-white' >
            <p>
              <span className='text-[#D10046]'>INWARD</span> es una reconocida firma de consultoría fiscal y gestión de activos con más de 20 años de experiencia, 
              dedicada a optimizar las operaciones de empresas de diversos sectores en México. Fundada bajo los principios 
              de excelencia, integridad y compromiso, se ha consolidado como un aliado estratégico, ayudando a sus clientes 
              a minimizar riesgos y maximizar oportunidades de crecimiento en un entorno fiscal y empresarial complejo.
            </p>
            <p>
              Nuestro equipo multidisciplinario, compuesto por especialistas en derecho fiscal, contabilidad, finanzas 
              corporativas y gestión de activos, diseña soluciones personalizadas que generan valor tangible. 
              En <span className='text-[#D10046]'>INWARD</span>, priorizamos las necesidades únicas de cada cliente, desarrollando estrategias a medida que 
              promueven resultados sostenibles y un crecimiento rentable a largo plazo.
            </p>
          </div>
        </div>
        <div className='absolute inset-0 bg-black/40'></div>
      </section>
    </>
  )
}