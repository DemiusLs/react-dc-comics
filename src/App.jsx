
import Header from './components/headerComponents/header.jsx'
import HeroBanner from './components/headerComponents/herobanner.jsx'
import AppMain from './components/mainComponents/Appmain.jsx'
import BlueBanner from './components/mainComponents/bluebanner.jsx'
import Footer from './components/footerComponents/footer.jsx'
import FooterBanner from './components/footerComponents/footerbanner.jsx'
import comics from "./data/comics";





function App() {


  return (
    <>
      <Header />
      <HeroBanner />
      <AppMain comics={comics} />
      <BlueBanner />
      <Footer />
      <FooterBanner />


    </>
  )
}

export default App
