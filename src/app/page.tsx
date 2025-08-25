import AboutUs from "./home/(sections)/About";
import Banner from "./home/(sections)/Banner";
import StorySection from "./home/(sections)/Ceostory";

import Product from "./home/(sections)/Product";
import ProductFeature from "./home/(sections)/ProductBanner";
import ShowHideContent from "./home/(sections)/ShowHideProduct";
import SliderGallery from "./home/(sections)/SliderGallery";
import TopSearchedSpots from "./home/(sections)/TeaDestination";


export default function Home() {
  return (
    <>
      
        <Banner />
        <AboutUs />
        <Product />
        <ShowHideContent />
        <ProductFeature />
        <StorySection />
        <SliderGallery />
      <TopSearchedSpots/>
    </>
  );
}

