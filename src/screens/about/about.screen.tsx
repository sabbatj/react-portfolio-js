const About = () => {
  return (
    <div data-name="about" id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col pt-10 pb-10 justify-center items-center w-full h-full">
        <div className="py-16 pt-[-10px] rounded-md bg-cyan-800 flex flex-col justify-center items-center w-5/6 md:w-3/6 transition-all duration-500 hover:scale-95">
          <div className="max-w-[400px] pt-10 pb-10 px-4 w-full grid sm:grid-cols-1 gap-8 mb-4">
            <div className="text-center pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">About</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-3xl">
                I'm Juandre Sabbat, an experienced full-stack developer with a passion for crafting exceptional user experiences. My journey in the world of development has been filled with exciting challenges and countless opportunities to learn and excel.
                With a solid background in creating innovative solutions and a keen eye for detail, I take pride in delivering top-notch results that not only meet but exceed expectations. I firmly believe that technology can be a powerful catalyst for success, and I am driven to harness its potential to achieve thriving outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;




