import AboutUs from "./home/(sections)/About";
import Banner from "./home/(sections)/Banner";
import GallerySection from "./home/(sections)/GallerySection";
import Product from "./home/(sections)/Product";
import ProductFeature from "./home/(sections)/productFeature";
import ShowHideContent from "./home/(sections)/ShowHideProduct";
import StorySection from "./home/(sections)/StorySection";

export default function Home() {
  return (
    <>
      <Banner />
      <div className='container mx-auto'>
        <AboutUs />
        <Product />
        <ShowHideContent />
        <ProductFeature />

        <StorySection />
        <GallerySection />
      </div>
    </>
  );
}
