import intelegisLogo from '../../assets/intelegisLogo.png'

export default function AlianzasContent(){
  return(
    <>
      <div className="min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <img src={intelegisLogo} alt="" className='w-full max-w-md mx-auto lg:mx-0 h-auto rounded-2xl'/>
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl font-bold mb-6 text-[#0A2F5B]'>
                  Nuestras Alianzas Estratégicas
                </h1>

                <div className='space-y-6 text-lg'>
                  <p>
                    En INWARD creemos firmemente en el poder de las alianzas estratégicas para ofrecer 
                    soluciones más completas y de mayor valor a nuestros clientes. Por ello, hemos 
                    establecido una colaboración sólida con <strong className="text-foreground">Intelegis</strong>, 
                    una firma reconocida por su excelencia en servicios legales corporativos.
                  </p>
                  
                  <p>
                    Esta alianza nos permite combinar nuestra expertise en consultoría fiscal y gestión 
                    de activos con el profundo conocimiento legal de Intelegis, creando un ecosistema 
                    integral de servicios que abarca desde la estructuración jurídica hasta la 
                    optimización fiscal y patrimonial.
                  </p>
                  
                  <p>
                    Juntos, ofrecemos a nuestros clientes un acompañamiento completo en sus decisiones 
                    empresariales más importantes, asegurando que tanto los aspectos legales como fiscales 
                    estén perfectamente alineados para maximizar oportunidades y minimizar riesgos.
                  </p>
                  
                  <p>
                    La sinergia entre INWARD e Intelegis se traduce en soluciones más robustas, 
                    tiempos de respuesta más eficientes y un nivel de servicio que supera las 
                    expectativas de nuestros clientes, consolidando una propuesta de valor única en el mercado.
                  </p>
                </div>

                <div className="mt-8 p-6 rounded-md border border-gray-200">
                  <h3 className='text-xl font-semibold mb-3 text-[#0A2F5B]'>
                    Beneficios de nuestra alianza:
                  </h3>
                  <ul className='space-y-2'>
                    <li className='items-start flex'>
                      <span className="text-primary mr-2 text-[#D10046]">•</span>
                      Servicios legales y fiscales integrados
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 text-[#D10046]">•</span>
                      Coordinación perfecta entre equipos especializados
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 text-[#D10046]">•</span>
                      Soluciones más completas y eficientes
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 text-[#D10046]">•</span>
                      Un solo punto de contacto para múltiples necesidades
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