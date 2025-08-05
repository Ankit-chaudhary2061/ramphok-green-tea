"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";

interface ProductData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const PRODUCTS: ProductData[] = [
  {
    id: "orthodox-black",
    title: "Orthodox Black Tea",
    description:
      "Bold, rich, and handcrafted, our Orthodox Black Tea is fully oxidized for a deep flavor and smooth finish. Made from premium Camellia sinensis leaves, it is rich in unique antioxidants that support heart health, digestion, and overall wellness — a perfect energizing brew for tea lovers seeking both strength and benefits.",
    imageSrc: "/image/rampokh-about-us.jpg",
    imageAlt: "Orthodox Black Tea",
  },
  {
    id: "pearl-green",
    title: "Pearl Green Tea",
    description:
      "Crafted from tender, hand-picked second-flush leaves, our Pearl Green Tea is delicately rolled for a smooth, refreshing taste with natural sweetness. Rich in antioxidants and nutrients, it supports overall wellness while offering exceptional flavor — a perfect balance of health and taste.",
    imageSrc: "/image/rampokh-about-us.jpg",
    imageAlt: "Pearl Green Tea",
  },
];

const ProductCard: React.FC<{ product: ProductData; index: number }> = ({
  product,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-cols-12 gap-6 items-start w-full mb-8">
      {isEven ? (
        <>
          <div className="col-span-12 md:col-span-5">
            <div className="h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-[#326E3B] mb-8 leading-tight">
                {product.title}
              </h3>
              <p className="text-base leading-7 text-gray-700">
                {product.description}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="relative h-[300px] md:h-[419px] w-full  overflow-hidden">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-span-12 md:col-span-7">
            <div className="relative h-[300px] md:h-[419px] w-full overflow-hidden">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-[#326E3B] mb-8 leading-tight">
                {product.title}
              </h3>
              <p className="text-base leading-7 text-gray-700">
                {product.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ShowHideProduct: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleShowMore = useCallback(() => {
    if (containerRef.current) {
      setScrollPosition(window.scrollY);
    }
    setIsVisible(true);
  }, []);

  const handleShowLess = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }, 600);
  }, [scrollPosition]);

  return (
    <div className="container mx-auto px-4" ref={containerRef}>
      {!isVisible && (
        <div className="flex justify-center mb-16">
          <button
            onClick={handleShowMore}
            className="bg-[#326E3B] hover:bg-[#2a5a32] text-white px-8 py-4 font-medium text-base transition-colors duration-200 flex items-center gap-2"
            aria-label="View all product components"
          >
            View All Components
          </button>
        </div>
      )}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="mb-8">
              {PRODUCTS.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            <div className="flex justify-center mb-16">
              <button
                onClick={handleShowLess}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4  font-medium text-base transition-colors duration-200 flex items-center gap-2"
                aria-label="Show less product components"
              >
                Show Less
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShowHideProduct;
