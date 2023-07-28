import Code from '../../assets/images/work/code2.png';

const Work = () => {
  return (
    <div data-name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col mb-4 mt-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            PROJECTS
          </p>
          <p className='py-5 text-2xl md:py-0 text-center'>INNOVATIVE PROJECTS SHOWCASING SEAMLESS USER EXPERIENCES AND CUTTING-EDGE TECHNOLOGY IMPLEMENTATION</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='aspect-w-1 aspect-h-1 grid-item'>
            <div
              style={{ backgroundImage: `url(${Code})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div p-4 h-full' // Add 'h-full' class here
            >
              <div className='flex justify-center items-center flex-col'>
                <span className='text-lg font-bold text-white tracking-wider'>
                  DJ FLAVA WEB APPLICATION
                </span>
                <p className='text-center'>
                  A web application built with REACT, TYPSCRIPT, TAILWINDCSS, JAVASCRIPT.
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
          {/* Add 'grid-item' class to the following grid items */}
          <div className='aspect-w-1 aspect-h-1 grid-item'>
            {/* Rest of the code remains the same */}
          </div>
          <div className='aspect-w-1 aspect-h-1 grid-item'>
            {/* Rest of the code remains the same */}
          </div>
          <div className='aspect-w-1 aspect-h-1 grid-item'>
            {/* Rest of the code remains the same */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

