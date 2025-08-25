import { Target, Eye, Box } from 'lucide-react';

const services = [
  {
    title: 'Our Mission',
    description:
      'To provide premium quality, organic, and sustainable tea that enhances the health and happiness of our customers worldwide.',
    icon: Target,
    delay: 0,
  },
  {
    title: 'Our Vision',
    description:
      'To be recognized as a global leader in sustainable tea production, nurturing communities and promoting eco-friendly practices.',
    icon: Eye,
    delay: 100,
  },
  {
    title: 'Our Services',
    description:
      'We offer tea cultivation, organic processing, wholesale distribution, private labeling, and educational workshops on tea cultivation.',
    icon: Box,
    delay: 200,
  },
];

const Services = () => {
  return (
    <section className='container mx-auto'>
      <div className='pb-[50px] px-[27px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className='bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition transform text-center'
                data-aos='fade-up'
                data-aos-delay={service.delay}
              >
                <div className='flex items-center justify-center mb-4'>
                  <Icon className='w-10 h-10 text-blue-600' />
                </div>
                <h4 className='text-xl font-semibold text-gray-800 mb-2'>
                  {service.title}
                </h4>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
