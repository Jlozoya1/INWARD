import { FileText, TrendingUp, Briefcase, Shield, Globe, PieChart, Calculator, Building, Users, CheckCircle, Target, Award } from 'lucide-react';
import AgroIMG from '../../assets/agronomia.jpg'
import GubernamentalIMG from '../../assets/gubernamental.jpg'
import CasaIMG from '../../assets/casa.jpg'
import MecanicoIMG from '../../assets/mecanico.jpg'

export default function ContentServicios(){
  return(
    <>
      <div className="min-h-screen">
        <section className="relative py-20 min-h-120 bg-cover bg-[center_top_30%]" style={{ backgroundImage: `url(${MecanicoIMG})` }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white/90 leading-tight drop-shadow-md">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-tight drop-shadow-md">
              Ofrecemos un ecosistema integral de soluciones empresariales diseñadas para impulsar 
              el crecimiento, optimizar la eficiencia y asegurar el cumplimiento normativo de tu organización.
            </p>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 w-full h-16 bg-[#D10046] shadow-lg"></div>

        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#D10046]">
                Consultoría Fiscal y Tributaria
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-700">
                Maximiza tu eficiencia fiscal y asegura el cumplimiento normativo con nuestras estrategias especializadas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-lg">
              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <Calculator className='w-8 h-8 text-[#D10046] mx-auto mb-3'/>
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Planeacion Fiscal</h3>
                <p className='text-sm'>Estrategias legales para optimizar la carga tributaria</p>
              </div>
              
              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <FileText className='w-8 h-8 text-[#D10046] mx-auto mb-3'/>
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Cumplimiento Fiscal</h3>
                <p className='text-sm'>Aseguramiento del cumplimiento de obligaciones fiscales</p>
              </div>
              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <Shield className='w-8 h-8 text-[#D10046] mx-auto mb-3'/>
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Defensa Fiscal</h3>
                <p className='text-sm'>Representación ante autoridades fiscales</p>
              </div>
              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <Building className='w-8 h-8 text-[#D10046] mx-auto mb-3'/>
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Restructuración Fiscal</h3>
                <p className='text-sm'>Reorganización empresarial con enfoque fiscal</p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4 text-[#D10046]'>
                Gestión de Activos y Patrimonial
              </h2>
              <p className='text-lg max-w-2xl mx-auto text-gray-700'>
                Protege y haz crecer tu patrimonio con estrategias de inversión inteligentes y gestión profesional.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3 text-[#D10046]" />
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Estrategias de Inversión</h3>
                <p className='text-sm'>Portafolios diversificados y optimizados</p>
              </div>

              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <PieChart className="w-8 h-8 text-primary mx-auto mb-3 text-[#D10046]" />
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Análisis de Riesgo</h3>
                <p className='text-sm'>Evaluación y mitigación de riesgos patrimoniales</p>
              </div>

              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <Target className="w-8 h-8 text-primary mx-auto mb-3 text-[#D10046]" />
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Planificación Patrimonial</h3>
                <p className='text-sm'>Estructuración eficiente del patrimonio familiar</p>
              </div>

              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <Award className="w-8 h-8 text-primary mx-auto mb-3 text-[#D10046]" />
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Administración de Activos</h3>
                <p className='text-sm'>Gestión profesional de carteras de inversión</p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4 text-[#D10046]'>
                Consultoría Estratégica y de Negocios
              </h2>
              <p className='text-lg max-w-2xl mx-auto text-gray-700'>
                Impulsa el crecimiento de tu empresa con estrategias de negocio innovadoras y planes de desarrollo integral.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-3 text-[#D10046]" />
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Planes de Negocio</h3>
                <p className='text-sm'>Desarrollo de estrategias de crecimiento sostenible</p>
              </div>

              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <Users className="w-8 h-8 text-primary mx-auto mb-3 text-[#D10046]" />
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Gobierno Corporativo</h3>
                <p className='text-sm'>Implementación de mejores prácticas empresariales</p>
              </div>

              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3 text-[#D10046]" />
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Expansión Internacional</h3>
                <p className='text-sm'>Estrategias para mercados globales</p>
              </div>

              <div className="p-4 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 transition-all">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3 text-[#D10046]" />
                <h3 className='font-semibold mb-2 text-[#0A2F5B]'>Due Diligence</h3>
                <p className='text-sm'>Evaluación integral de oportunidades de inversión</p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20'>
          <div className="container mx-auto px-4">
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold mb-6 text-[#D10046]'>
                Experiencia en sectores clave
              </h2>
              <p className='text-lg max-w-3xl mx-auto text-gray-700'>
                Nuestra vasta experiencia abarca múltiples industrias, permitiéndonos ofrecer 
                soluciones especializadas que comprenden las particularidades de cada sector.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
              <div className="text-center">
                <img src={AgroIMG} alt="" className='w-full h-64 object-cover rounded-2xl shadow-lg mb-6'/>
                <h3 className='text-2xl font-bold mb-4 text-[#0A2F5B]'>Agronegocios</h3>
                <p className=''>
                  Ofrecemos soluciones especializadas para el sector agrícola, incluyendo optimización 
                fiscal para actividades primarias, estructuración de esquemas de financiamiento rural, 
                y asesoría en regulaciones específicas del campo mexicano. Nuestro conocimiento profundo 
                de los incentivos fiscales agrícolas y las particularidades del sector nos permite 
                maximizar los beneficios disponibles para nuestros clientes del agro.
                </p>
              </div>

              <div className="text-center">
                <img src={GubernamentalIMG} alt="" className='w-full h-64 object-cover rounded-2xl shadow-lg mb-6'/>
                <h3 className='text-2xl font-bold mb-4 text-[#0A2F5B]'>Sector gubernamental</h3>
                <p className=''>
                  Proveemos servicios especializados para entidades gubernamentales y organismos públicos, 
                incluyendo asesoría en cumplimiento normativo, optimización de procesos administrativos, 
                y estructuración de proyectos de inversión pública. Nuestro equipo comprende las 
                complejidades del marco regulatorio gubernamental y ofrece soluciones que aseguran 
                transparencia, eficiencia y cumplimiento total.
                </p>
              </div>

              <div className="text-center">
                <img src={CasaIMG} alt="" className='w-full h-64 object-cover rounded-2xl shadow-lg mb-6'/>
                <h3 className='text-2xl font-bold mb-4 text-[#0A2F5B]'>Inmobiliario patrimonial</h3>
                <p className=''>
                  Especializamos en la gestión integral de patrimonios inmobiliarios, ofreciendo servicios 
                de estructuración fiscal para inversiones inmobiliarias, optimización de portafolios 
                de propiedades, y estrategias de sucesión patrimonial. Nuestro enfoque combina el 
                conocimiento del mercado inmobiliario con expertise fiscal para maximizar el valor 
                y minimizar la carga tributaria de activos inmobiliarios.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}