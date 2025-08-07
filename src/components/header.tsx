import { useState } from 'react';
import inwardL from '../assets/inwardL.png'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router'

export default function Header(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    {label:'Inicio', id:'inicio', to:'#'},
    {label:'Servicios', id:'servicios', to:'#'},
    {label:'Nosotros', id:'nosotros', to:'#'},
    {label:'Contacto', id:'contacto', to:'#'},
  ];

  return(
    <>
      <div className='flex items-center bg-gray-100/50 justify-between border-b-1 border-gray-200 shadow-md backdrop-blur-md sticky top-0 z-50 p-3'>
        <div className='flex-shrink-0 ml-1'>
          <img src={inwardL} alt="Logo" className='h-8 lg:h-10 w-auto'/>
        </div>
        {/* Desktop Nav */}
        <div className='mr-7 hidden md:block'>
          <ul className='flex list-none space-x-8 items-center'>
            {navItems.map((item) => (
              <Link key={item.id} to={item.to} className='text-gray-700 cursor-pointer hover:text-[#D10046] transition-colors'>{item.label}</Link>
            ))}
          </ul>
        </div>

        <div className='mr-3 hidden md:block'>
          <button className='bg-[#D10046] hover:bg-[#D10046]/90 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer'>
            Agendar Diagnóstico
          </button>
        </div>

        {/* Mobile nav */}
        <div className='md:hidden flex items-center mr-2'>
          <button 
            className='cursor-pointer'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='fixed top-14 left-0 w-full bg-white z-50 shadow-md md:hidden border-t border-gray-200'>
          <div className='flex flex-col space-y-4 pb-3'>
            {navItems.map((item) => (
              <button key={item.id} className='text-left px-6 py-2 text-gray-700 hover:text-inward-blue transition-colors duration-200 font-medium cursor-pointer'>
                {item.label}
              </button>
            ))}
            <div className='px-4'>
              <button className='bg-[#D10046] hover:bg-[#D10046]/90 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer w-full'>
                Agendar Diagnóstico
              </button>
            </div>
          </div>
        </div>
      )}
      
      
    </>
  )
}