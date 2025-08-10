import Header from './components/header'
import HeroSection from './components/home/heroSection'
import Services from './components/home/servicesSection'
import HistorySection from './components/home/historySection'
import ContactInfo from './components/home/contactoInfo'
import Footer from './components/footer'
export default function Home(){
  return(
    <>
      <Header/>
      <HeroSection/>
      <Services/>
      <HistorySection/>
      <ContactInfo/>
      <Footer/>
    </>
  )
}