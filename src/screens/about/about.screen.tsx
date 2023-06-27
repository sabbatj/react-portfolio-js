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
               I'm Juandre Sabbat, a dedicated full-stack developer skilled in creating exceptional digital experiences. Here's what I offer:
                Efficient End-to-End Development: I handle full-stack projects effectively, delivering cohesive solutions.
                Problem-Solving Expertise: I analyze complex problems and implement innovative solutions.
                User-Centric Mindset: I prioritize intuitive and engaging experiences that meet user needs.
                Continuous Learning: I stay updated with industry trends and technologies for cutting-edge solutions.
                Collaboration and Communication: I excel in collaborative environments, working well with cross-functional teams.
                Results-Driven Approach: I'm committed to driving business growth and achieving tangible results.
                Let's discuss how I can contribute to your company's success. Feel free to reach out for further discussions or to schedule an interview.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


