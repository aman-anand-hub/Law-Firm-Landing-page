import React from 'react';
import Header from "../components/Header/Header.jsx";
import Introduction from '../components/Introduction/Introduction.jsx';
import ChooseUs from '../components/ChooseUs/ChooseUs.jsx';
import Intrest from '../components/Intrest/Intrest.jsx';
import SwiperComponent from '../components/SwiperComponent/SwiperComponent.jsx';
import Team from "../components/Team/Team.jsx";
import Faq from "../components/Faq/Faq.jsx";
import Subscribe from '../components/Subscribe/Subscribe.jsx';
import Footer from '../components/Footer/Footer.jsx';

function LandingPage() {
  return (
    <div>
      <Header />
      <Introduction />
      <ChooseUs />
      <Intrest />
      <SwiperComponent />
      <Team />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default LandingPage