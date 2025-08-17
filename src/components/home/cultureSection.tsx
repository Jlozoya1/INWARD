import genteIMG from '../../assets/gente.jpg'

export default function OurCulture(){
  return(
    <>
      <section className="bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 p-12 space-x-13">
          {/* IMG */}
          <div className="flex items-center justify-center align-middle m-0">
            <img src={genteIMG} alt=""  width={400} height={400} className="rounded-sm"/>
          </div>

          {/* Texto */}
          <div className="py-10">
            <h1 className="text-5xl">Nuestra Cultura</h1>
            <div className="flex flex-wrap gap-y-4 pt-8">
              <span>
                En <span className='text-[#D10046]'>INWARD</span>, colaboramos con los líderes de negocio para convertir la visión estratégica en acciones concretas que crean valor. 
                Como tu Socio Estratégico, te ayudamos a optimizar las áreas clave de tu empresa, trazamos rutas claras para proteger tu patrimonio 
                y nos aseguramos de que cada iniciativa no solo alcance, sino que supere sus objetivos de rentabilidad y seguridad.
              </span>
              <span>
                Más que consultores, buscamos ser catalizadores de tu éxito, 
                creando un impacto significativo que trascienda lo convencional, 
                respaldados por nuestra experiencia y alianzas estratégicas
              </span>
              <span>
                Más de 12 años de experiencia nos respaldan.
              </span>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}