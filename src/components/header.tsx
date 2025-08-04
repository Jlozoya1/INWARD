import inwardLogo from '../assets/inwardLogo.svg'

export default function Header(){
  return(
    <>
      <div className='flex items-center bg-gray-400 justify-between'>
        <div className='flex items-center text-sm'>
          <img src={inwardLogo} alt="Logo" className='w-12  flex'/>
          <p className=''>Inward <br /> Consultoria Fiscal y Patrimonial</p>
        </div>
        <div className='space-x-1 mr-7'>
          <a href="">Inicio</a>
          <a href="">About Us</a>
          <a href="" className='hover:text-white'>Faq's</a>
          <a href="">Inicio</a>
        </div>
      </div>
      
      
    </>
  )
}