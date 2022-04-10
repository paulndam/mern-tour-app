import React from "react";
import {
  Header,
  Features,
  Content,
  Banner,
  Footer,
  Maincontent,
  SocialMediaBanner,
  TourCard,
} from "../../allcomponents/AllComponents";

const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <Content />
      <Banner />
      <Maincontent />

      <SocialMediaBanner />
      <Footer />
    </div>
  );
};

export default Home;
