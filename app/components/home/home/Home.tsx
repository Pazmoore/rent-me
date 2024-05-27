import React from 'react'
import Faqs from '../faqs/Faqs'
import Hero from '../hero/Hero'
import About from '../about/About'
import Header from '../header/Header'
import Search from '../search/Search'
import Footer from '../footer/Footer'
import Services from '../services/Services'
import Workspace from '../workspace/Workspace'
import Properties from '../properties/Properties'
import RideSharing from '../rideSharing/RideSharing'
import Accommodation from '../accommodation/Accommodation'
import ScrollToTop from '../../utilities/scroll-to-top/ScrollToTop'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Search/>
      <Properties/>
      {/* <About/> */}
      <Accommodation/>
      <Workspace/>
      <RideSharing/>
      <Services/>
      <Faqs/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default Home