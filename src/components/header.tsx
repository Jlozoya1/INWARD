import inwardL from '../assets/inwardL.png'
import inwardOnly from '../assets/inwardLogo.svg'

export default function Header(){
  return(
    <>
      <header id='header' className='flex items-center px-20 min-h-20 md:justify-start justify-center max-h-12'>
        <div className='py-4 flex items-center'>
          <img src={inwardOnly} alt="InwardLogo" className="h-10 lg:h-15 w-auto "/>
          <h1 className='text-white font-semibold text-2xl'>INWARD</h1>
        </div>
      </header>
    </>
  )
}