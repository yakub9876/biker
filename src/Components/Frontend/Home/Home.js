import React from "react";
import BannnerSection from "../BannerSection/BannnerSection";
import OfferSection from "../OfferSection/OfferSection";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Footer from "../Shared/Footer/Footer";
import Navication from "../Shared/Navication/Navication";
import SubscribeSection from "../SubscribeSection/SubscribeSection";

const Home = () => {
  return (
    <>
      <Navication />
      <BannnerSection />
      <Services />
      <OfferSection />
      <Reviews />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default Home;
