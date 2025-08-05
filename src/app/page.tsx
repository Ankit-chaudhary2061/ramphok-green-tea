import AboutUs from "./home/(components)/About";
import Banner from "./home/(components)/Banner";
import Product from "./home/(components)/Product";
import ProductFeature from "./home/(components)/productFeature";
import SliderGallery from "./home/(components)/SliderGallery";
import StorySection from "./home/(components)/StorySection";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <AboutUs />
        <Product />
        <ProductFeature />
        <StorySection />
        <SliderGallery/>
      </div>
    </>
  );
}
