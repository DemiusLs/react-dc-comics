import { useState } from 'react'
import './Index.css'
import Header from './components/header.jsx'
import HeroBanner from './components/herobanner.jsx'
import Main from './components/main.jsx'
import BlueBanner from './components/bluebanner.jsx'
import Footer from './components/footer.jsx'
import FooterBanner from './components/footerbanner.jsx'


function App() {


  return (
    <>
      <Header />
      <HeroBanner/>
      <Main />
      <BlueBanner />
      <Footer />
      <FooterBanner />

    </>
  )
}

export default App
