const Home = () => {
  return (
    <>
      <div>
        <img
          src='/image/tea-garden-banner.jpg'
          alt='tea-garden'
          className='w-[1440px] h-[483px]'
        />
      </div>

      <div className='px-[200px] py-[100px] flex'>
        <div>
          <h1 className='text-[32px] font-bold leading-snug'>
            Discover <br />
            Ramfok Green <br />
            Tea
          </h1>
          <p className='py-{32px}'>
            Ramphok Green Tea, based in Phikkal,
            <br /> Ilam, produces high-quality green <br />
            and orthodox teas with strict quality control.
            <br /> Our specialty — Pearl Green Tea — <br />
            leads with 70% of our total output.
          </p>
          <button>
            <p className='text-[16px] font-bold px-[32px] py-[16px]'>
              Learn More
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
