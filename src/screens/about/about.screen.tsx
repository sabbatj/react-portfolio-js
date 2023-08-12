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
                Experienced software developer with a passion for exceptional user experiences and effective solutions. notable track record in delivering impactful projects, driven by a user-centric vision. thrives in teamwork and constantly enhances skills through continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;



