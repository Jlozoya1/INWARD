// import edificiosIMG from '../../assets/edificios.jpg'
// import video from '../../assets/0816.mp4'
import heroVideo from '../../assets/fileFinal.mp4'
import { useState } from 'react';

export default function HeroSection(){
  return(
    
    <>
      {/* <section id="hero" className='max-h-160 md:max-h-140 relative overflow-hidden pt-15'>
        <div>
          <img src={edificiosIMG} alt="Img Principal" />
          <div className='absolute inset-0 bg-black/50'></div>
        </div>
        <div className='min-h-220 p-8 '>

          <div className='grid grid-cols-1 md:grid-cols-2 space-x-3 bg-[#39393b] rounded-lg'>
            <div className='text-5xl text-white md:w-3/5 font-semibold p-12 pr-6'>
              <h1>Estrategia</h1>
              <span className='text-[#D10046]'>Crecimiento</span>
              <h1>Valor</h1>
              <p className='text-lg pt-5 font-normal'>
                Transformamos tu visión en resultados concretos: Consultoría fiscal, 
                gestión de activos y soluciones estratégicas para un crecimiento sólido y seguro.
              </p>
            </div>
            <div className='hidden md:flex md:w-3/5 items-center justify-center'>
              <div className='flex items-center'>
                <img src={edificiosIMG} alt="" height={450} width={450}/>
              </div>
              
            </div>
          </div>
        </div>
      </section> */}
      {/* <section id='hero' className='relative max-h-150 overflow-hidden'>
        <video id='myVideo' className='w-full  object-cover md:object-[center_-80px]' src={heroVideo} autoPlay muted loop playsInline />
        <div className='top-25 p-20 text-white z-10 text-5xl font-semibold w-3/8 h-2/5 absolute'>
          <h1>Estrategia</h1>
          <span className='text-[#D10046]'>Crecimiento</span>
          <h1>Valor</h1>
          <p className='text-lg pt-5 font-normal'>
            Transformamos tu visión en resultados concretos: <br />
            Consultoría fiscal, gestión de activos y soluciones estratégicas para un crecimiento sólido y seguro.
          </p>
        </div>
        <div className='absolute inset-0 bg-black/50'></div>
      </section> */}
      <section
        id="hero"
        className="relative grid md:grid-cols-2  place-items-center text-white h-[40vh] md:h-[60vh] lg:h-[80vh] overflow-hidden"
      >
        {/* Video background que se escala con la sección */}
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay opcional para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenido encima */}
        <div className="relative z-10 px-4 text-5xl font-semibold font-sans md:-top-20 w-4/5">
          {/* <h1>Estrategia</h1>
          <span className='text-[#D10046]'>Crecimiento</span>
          <h1>Valor</h1>
          <p className='text-lg pt-5 font-normal'>
            Transformamos tu visión en resultados concretos: <br />
            Consultoría fiscal, gestión de activos y soluciones estratégicas para un crecimiento sólido y seguro.
          </p> */}
          <h1>
            Unimos estrategia y experiencia
            
            
          </h1>
          <span>para que puedas </span>
          <span>crecer, proteger y liderar</span>
        </div>
      </section>

    </>
  )
}