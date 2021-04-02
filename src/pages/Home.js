import React from 'react';
import AppBanner from "../components/core/AppBanner";
import Featured from "./home/Featured";
import CategoryInfo from "./home/CategoryInfo";
import SiteReviewSlider from "./home/SiteReviewSlider";

const Home = () => {
       return (
           <>
              <AppBanner />
              <Featured />
              <CategoryInfo />
              <SiteReviewSlider />

           </>
       )
}

export default Home;