

const Service = () => {
  return (
    <div className='min-h-screen bg-white px-4 py-16'>
      <div className='max-w-6xl mx-auto text-center'>
        <h1 className='text-4xl font-bold text-[#326E3B] mb-8'>Our Services</h1>
        <p className='text-lg text-gray-700 mb-12'>
          We offer premium green tea products with a focus on purity, wellness,
          and sustainability.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {/* Service 1 */}
          <div className='border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-[#326E3B] mb-2'>
              Custom Tea Blends
            </h3>
            <p className='text-gray-600'>
              Personalized tea recipes and blends tailored to your taste and
              health goals.
            </p>
          </div>

          {/* Service 2 */}
          <div className='border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-[#326E3B] mb-2'>
              Wholesale Supply
            </h3>
            <p className='text-gray-600'>
              Supplying high-quality green tea for cafés, hotels, and retail
              businesses.
            </p>
          </div>

          {/* Service 3 */}
          <div className='border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-[#326E3B] mb-2'>
              Tea Education & Tasting
            </h3>
            <p className='text-gray-600'>
              Hosting tea tasting sessions and educational workshops about green
              tea culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
