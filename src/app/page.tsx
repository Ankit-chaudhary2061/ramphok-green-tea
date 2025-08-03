import AboutUs from "@/commponents/About";
import Banner from "@/commponents/Banner";
import GallerySection from "@/commponents/GallerySection";
import Product from "@/commponents/Product";
import ProductFeature from "@/commponents/productFeature";
import StorySection from "@/commponents/StorySection";
import ShowHideContent from "@/commponents/Vissible";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Product />
      <ShowHideContent />
      <ProductFeature />
      <StorySection />
      <GallerySection />
    </>
  );
};

export default Home;
