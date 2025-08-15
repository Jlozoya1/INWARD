import { useState, useEffect } from 'react';
import inwardL from '../assets/inwardL.png'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router'

export default function Header(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const navItems = [
    {label:'Nosotros', id:'nosotros', to:'/nosotros'},
    {label:'Servicios', id:'servicios', to:'/servicios'},
    {label:'Contacto', id:'contacto', to:'/contacto'},
  ];

  return(
    <>
      <header id='header' className='bg-[#1c1c1e] flex items-center px-20 min-h-20 md:justify-start justify-center'>
        <div className='py-4'>
          <img src={inwardL} alt="InwardLogo" className="h-10 lg:h-12 w-auto filter brightness-0 invert"/>
        </div>
      </header>
    </>
  )
}