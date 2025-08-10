import Inward from '../../assets/inwardddd.jpg'

export default function ContentNosotros(){
  return(
    <>
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Columna Izquierda */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A2F5B]">
                  Quiénes Somos
                </h1>
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    INWARD es una firma líder en consultoría fiscal y gestión de activos, con más de dos décadas 
                    de experiencia ayudando a empresas de diversos sectores a optimizar sus operaciones, minimizar 
                    riesgos y maximizar oportunidades de crecimiento.
                  </p>
                  <p>
                    Fundada sobre los principios de excelencia, integridad y compromiso con el cliente, nuestra 
                    empresa se ha consolidado como un socio estratégico confiable para organizaciones que buscan 
                    navegar el complejo panorama fiscal y empresarial de México.
                  </p>
                  <p>
                    Nuestro equipo multidisciplinario está compuesto por expertos en derecho fiscal, contabilidad, 
                    finanzas corporativas y gestión de activos, quienes trabajan de manera colaborativa para 
                    ofrecer soluciones integrales y personalizadas que generan valor real para nuestros clientes.
                  </p>
                  <p>
                    En INWARD, entendemos que cada empresa es única, por lo que desarrollamos estrategias 
                    a medida que se alinean con los objetivos específicos de cada organización, asegurando 
                    resultados sostenibles y un crecimiento rentable a largo plazo.
                  </p>
                </div>
              </div>
              {/* Columna Derecha */}
              <div className="lg:order-last">
                <img src={Inward} alt="" className='w-full h-96 object-cover rounded-lg shadow-lg'/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}