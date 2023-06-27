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
<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
<div className="sm:text-right text-4xl font-bold">
<p>
Hi. I'm Juandre Sabbat, a highly skilled and dedicated software developer with a passion for crafting exceptional applications. With a proven track record of building responsive and scalable web and mobile apps, I am constantly seeking new challenges and opportunities to showcase my expertise and push the boundaries of what's possible in software development.
</p>
</div>
<div>
<p>
With a strong background in full-stack development, I excel in designing and implementing elegant solutions that deliver optimal user experiences and drive business growth. I am proficient in a wide range of programming languages, frameworks, and technologies, including JavaScript, React, Node.js, and SQL, to name just a few.
</p>
</div>
</div>
</div>
</div>
</div>
);
};
export default About;

