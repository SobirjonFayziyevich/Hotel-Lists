import React from "react";
import Header from "../components/Header";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Guests from "../components/Guests";
import NewsLetter from "../components/NewsLetter";

const HomePage = () => {
   return(
      <div>
       <Header />
       <FeaturedDestination />
       <ExclusiveOffers/>
       <Guests/>
       <NewsLetter/>

       </div>
   )
}
export default HomePage; 