

const About = () => { 
  return (
    <div
      data-name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[700px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Juandre Sabbat, nice to meet you.
              </p>
            </div>
            <div>
              <p>
                {" "}
              With a strong background in full-stack development, I excel in designing and implementing elegant solutions that deliver optimal user experiences and drive business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

