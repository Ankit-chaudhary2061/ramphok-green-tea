import AboutUs from "@/commponents/About";
import Banner from "@/commponents/Banner";
import GallerySlider from "@/commponents/GallerySlider";
import Product from "@/commponents/Product";
import ProductFeature from "@/commponents/productFeature";
import ShowHideContent from "@/commponents/ShowHideContent ";
import StorySection from "@/commponents/StorySection";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Product />
      <ShowHideContent/>
      <ProductFeature />
      <StorySection />
      <GallerySlider />
    </>
  );
};

export default Home;
