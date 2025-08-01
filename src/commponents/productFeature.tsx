import Image from "next/image";

const ProductFeature = () => {
  return (
    <>
      <Image
        src='/image/Flavor-from-illam.png'
        alt='GreenTea garden'
        className='object-cover'
        width={1439}
        height={369}
      />
    </>
  );
};

export default ProductFeature;
