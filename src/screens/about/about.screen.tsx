const About = () => {
  return (
    <div data-name="about" id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col  pt-10  pb-10 justify-center items-center w-full h-full">
        <div className="py-16 pt -10 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-5/6 md:w-3/6 transition-all duration-500 hover:scale-95">
          <div className="max-w-[400px] pt-10 pb-10 w-full grid sm:grid-cols-1 gap-8 mb-4">
            <div className="text-center pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">About</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-3xl">
                I'm Juandre Sabbat, a seasoned full-stack developer with a strong track record of delivering exceptional user experiences and driving business growth. Let's connect and discuss how I can contribute to your company's success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


