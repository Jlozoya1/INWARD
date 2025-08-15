import Header from '../components/header'
import HeroSection from '../components/home/heroSection'
import Cultura from '../components/home/cultureSection'
import HistorySection from '../components/home/historySection'
import ContactInfo from '../components/home/contactoInfo'
import Footer from '../components/footer'
export default function Home(){
  return(
    <>
      <div className='bg-[#1c1c1e] min-h-screen'>
        <Header/>
        <HeroSection/>
        <Cultura/>
        <HistorySection/>
        <ContactInfo/>
        <Footer/>
      </div>
      
    </>
  )
}