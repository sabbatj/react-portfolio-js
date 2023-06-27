const About = () => {
  return (
    <div data-name="about" id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-5/6 md:w-3/6">
          <div className="max-w-[400px] w-full grid sm:grid-cols-1 gap-8 mb-4">
            <div className="text-center pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">About</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-3xl">
               Greetings! I'm Juandre Sabbat, and it's a pleasure to connect with you. As a highly skilled full-stack developer, I possess the expertise to craft sophisticated solutions that not only enhance user experiences but also propel business expansion. With my extensive background in this field, I am proficient in the art of creating elegant designs and implementing them seamlessly. By leveraging my talents, I aim to contribute significantly to your organization's success.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;


