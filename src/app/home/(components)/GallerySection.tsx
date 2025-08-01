import Image from "next/image";

const GallerySection = () => {
  return (
    <>
      <div className="py-[109px] pl-[200px]">
        <div className="grid grid-cols-12 gap-6 items-start w-full">
          <div className="col-span-4 relative">
            <Image
              src="/image/rampokh-about-us.jpg"
              alt="Green Tea"
              className="object-cover "
              width={419}
              height={419}
            />
          </div>

          <div className="col-span-4 relative">
            <Image
              src="/image/tea-1.png"
              alt="Green Tea"
              className="object-cover "
              width={419}
              height={419}
            />
          </div>

          <div className="col-span-4 relative">
            <Image
              src="/image/tea.png"
              alt="Green Tea"
              className="object-cover  "
              width={419}
              height={419}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySection;
