import Header from '../components/header'
import HeroSection from '../components/home/heroSection'
import Cultura from '../components/home/cultureSection'
import HistorySection from '../components/home/historySection'
import ServicesSection from '../components/home/servicesSection'
import ContactInfo from '../components/home/contactoInfo'
import Footer from '../components/footer'
export default function Home(){
  return(
    <>
      <div className='bg-[#161617] min-h-screen'>
        <Header/>
        <HeroSection/>
        <Cultura/>
        <HistorySection/>
        <ServicesSection/>
        <ContactInfo/>
        <Footer/>
      </div>
      
    </>
  )
}