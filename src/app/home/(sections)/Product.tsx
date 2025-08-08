import Image from "next/image";

const Product = () => {
  return (
    <div className="bg-gray-300 container mx-auto">
      <div className="grid grid-cols-12 gap-6 items-start w-full">
        <div className="col-span-12">
          <h2 className="text-[32px] leading-[32px] font-bold">We Serve</h2>
          <div className="py-[54px] grid grid-cols-12 gap-6 items-center w-full">
            {/* Image section */}
            <div className="col-span-6 mb-[32px] relative h-[350px]">
              <Image
                src="/image/rampokh-about-us.jpg"
                alt="Green Tea"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Text content */}
            <div className="col-start-8 col-span-5 mb-[32px]">
              <h3 className="text-[32px] leading-[32px] font-bold text-[#326E3B] mb-[32px]">
                Roasted Green Tea
              </h3>
              <p className="text-[16px] leading-[28px] text-gray-700">
                Expertly crafted from freshly picked leaves, our roasted green
                tea offers a smooth, rich flavor with a distinctive aroma.
                Carefully roasted and dried to preserve its natural qualities,
                it is rich in antioxidants and known for promoting brain
                function, supporting metabolism, and enhancing overall
                well-being.
              </p>
            </div>

            {/* Text content */}
            <div className=" col-span-5 mb-[32px]">
              <h3 className="text-[32px] leading-[32px] font-bold text-[#326E3B] mb-[32px]">
                Orthodox Black Tea
              </h3>
              <p className="text-[16px] leading-[28px] text-gray-700">
                Bold, rich, and handcrafted, our Orthodox Black Tea is fully
                oxidized for a deep flavor and smooth finish. Made from premium
                Camellia sinensis leaves, it&apos;s rich in unique antioxidants
                that support heart health, digestion, and overall wellness — a
                perfect energizing brew for tea lovers seeking both strength and
                benefits.
              </p>
            </div>
            {/* Image section */}
            <div className="col-start-7 col-span-6 mb-[32px] relative h-[350px]">
              <Image
                src="/image/rampokh-about-us.jpg"
                alt="Green Tea"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Image section */}
            <div className="col-span-6 mb-[32px] relative h-[350px]">
              <Image
                src="/image/rampokh-about-us.jpg"
                alt="Green Tea"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Text content */}
            <div className="col-start-8 col-span-5 mb-[32px]">
              <h3 className="text-[32px] leading-[32px] font-bold text-[#326E3B] mb-[32px]">
                Pearl Green Tea
              </h3>
              <p className="text-[16px] leading-[28px] text-gray-700">
                Crafted from tender, hand-picked second-flush leaves, our Pearl
                Green Tea is delicately rolled for a smooth, refreshing taste
                with natural sweetness. Rich in antioxidants and nutrients, it
                supports overall wellness while offering exceptional flavor — a
                perfect balance of health and taste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
