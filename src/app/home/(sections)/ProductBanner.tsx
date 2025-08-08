import Image from "next/image";

const ProductFeature = () => {
  return (
    <>
      
        <div className='w-full'>
          <Image
            src='/image/Flavor-from-illam.png'
            alt='GreenTea garden'
            width={1439}
            height={369}
            className='w-full h-auto'
          />
        </div>
      
    </>
  );
};

export default ProductFeature;
