import Code from '../../assets/images/work/code2.png';

const Work = () => {
  return (
    <div data-name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col mb-4 mt-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='hidden md:block' /> {/* Spacer element */}
          <div className='aspect-w-1 aspect-h-1'>
            <div
              style={{ backgroundImage: `url(${Code})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='flex justify-center items-center flex-col'>
                <span className='text-lg font-bold text-white tracking-wider'>
                  DJ FLAVA WEB APPLICATION
                </span>
                <p className='text-center'>
                  A web application built with REACT, TYPSCRIPT, NODE.JS, TAILWINDCSS, JAVASCRIPT.
                </p>
                <div className='pt-8 text-center'>
                  <a href='https://www.djflava.org/home' target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='aspect-w-1 aspect-h-1'>
            <div
              style={{ backgroundImage: `url(${Code})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='flex justify-center items-center flex-col'>
                <span className='text-lg font-bold text-white tracking-wider'>
                  PORTFOLIO WEB APPLICATION
                </span>
                <p className='text-center'>
                  A web application built with JAVASCRIPT, HTML, CSS.
                </p>
                <div className='pt-8 text-center'>
                  <a href='https://juandresabbatportfolio.vercel.app/' target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='aspect-w-1 aspect-h-1'>
            <div
              style={{ backgroundImage: `url(${Code})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='flex justify-center items-center flex-col'>
                <span className='text-lg font-bold text-white tracking-wider'>
                  TINDOG WEB APPLICATION
                </span>
                <p className='text-center'>
                  A web application built with JAVASCRIPT, HTML, CSS, BOOTSRAP.
                </p>
                <div className='pt-8 text-center'>
                  <a href='https://bootstrap-tindog-website-5zsc3md03-juandresabbat92-gmailcom.vercel.app/' target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='aspect-w-1 aspect-h-1'>
            <div
              style={{ backgroundImage: `url(${Code})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='flex justify-center items-center flex-col'>
                <span className='text-lg font-bold text-white tracking-wider'>
                  NGOS WEB APPLICATION
                </span>
                <p className='text-center'>
                  A web application built with HTML, CSS.
                </p>
                <div className='pt-8 text-center'>
                  <a href='https://ngos.co.za/' target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
