import AboutUs from "@/commponents/About";
import Banner from "@/commponents/Banner";
import GallerySection from "@/commponents/GallerySection";
import Product from "@/commponents/Product";
import ProductFeature from "@/commponents/productFeature";
import StorySection from "@/commponents/StorySection";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Product />
      <ProductFeature />
      <StorySection />
      <GallerySection />
    </>
  );
};

export default Home;
