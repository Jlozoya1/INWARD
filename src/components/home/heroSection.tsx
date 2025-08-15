import edificiosIMG from '../../assets/edificios.jpg'

export default function HeroSection(){
  return(
    <>
      <section id="hero" className='max-h-160 md:max-h-140 relative overflow-hidden'>
        <div>
          <img src={edificiosIMG} alt="Img Principal" />
          <div className='absolute inset-0 bg-black/50'></div>
        </div>
      </section>
    </>
  )
}