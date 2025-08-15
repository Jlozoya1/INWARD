import inwardL from '../assets/inwardL.png'

export default function Header(){
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