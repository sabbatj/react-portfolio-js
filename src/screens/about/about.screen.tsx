const About = () => {
  return (
    <div data-name="about" id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col pt-10 pb-10 justify-center items-center w-full h-full">
        <div className="py-10 pt-[-10px] rounded-md bg-cyan-800 flex flex-col justify-center items-center w-5/6 md:w-3/6 transition-all duration-500 hover:scale-95">
          <div className="max-w-[400px] pt-10 pb-10 px-4 w-full grid sm:grid-cols-1 gap-8 mb-4">
            <div className="text-center pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">ABOUT</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-3xl">
                Experienced software developer committed to exceptional user experiences. Proven track record in impactful projects driven by a user-centric approach. Thrives in collaborative teams, continuously enhancing skills through learning. Let's create innovative solutions together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;



