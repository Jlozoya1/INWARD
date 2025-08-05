import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowUp
} from "lucide-react";
import inwardLogo from '../assets/inwardLogo.svg'

export default function Footer(){
  return(
    <>
      <div className="bg-blue-950 justify-center block">
        
        <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                {/* <span className="text-white font-bold text-lg">CA</span> */}
                <img src={inwardLogo} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-200">Inward</h3>
                <p className="text-sm text-white/70">Consultoria Fiscal y Patrimonial</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Más de 15 años brindando servicios contables de excelencia. 
              Tu socio estratégico para el éxito financiero de tu empresa.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-gray-200" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-gray-200" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-gray-200" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-gray-200" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-200">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contabilidad General</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Asesoría Fiscal</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Consultoría Financiera</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Auditoría Externa</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Nóminas y RRHH</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Constitución de Empresas</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-200">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#nosotros" className="text-white/80 hover:text-white transition-colors">Acerca de Nosotros</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Nuestro Equipo</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-200">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 text-gray-200" />
                <div>
                  <p className="text-white/80">+52 55 1234 5678</p>
                  <p className="text-white/80">+52 55 8765 4321</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 text-gray-200" />
                <div>
                  <p className="text-white/80">contacto@contamax.com</p>
                  <p className="text-white/80">info@contamax.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1 text-gray-200" />
                <div>
                  <p className="text-white/80">Av. Reforma 123, Piso 15</p>
                  <p className="text-white/80">CDMX, México 06600</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="flex justify-center mb-0.5">
          <div className="h-px bg-gray-300 w-250"></div>
        </div>
        
        <div className="flex justify-center">
          <p className="text-gray-300 mb-2">© 2025 Inward. Todos los derechos reservados.</p>
        </div>
        
      </div>
    </>
  )
} 