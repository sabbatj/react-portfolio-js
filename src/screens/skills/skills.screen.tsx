import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div data-name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col mb-7 mt-12'>
          <motion.p
            className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center mt-[-5px]'
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            SKILLS
          </motion.p>
          <motion.p
            className='py-5 text-2xl text-center'
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            PROFICIENT IN A DIVERSE RANGE OF TECHNOLOGIES FOR DELIVERING INNOVATIVE SOLUTIONS. HERE ARE SOME OF THE TECHNOLOGIES I HAVE EXPERIENCE WITH:
          </motion.p>
        </div>
        <motion.div
          className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>HTML CSS</p>
          </motion.div>
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>TAILWINDCSS</p>
          </motion.div>
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>JAVASCRIPT</p>
          </motion.div>
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>REACT</p>
          </motion.div>
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>GITHUB</p>
          </motion.div>
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>NODE JS</p>
          </motion.div>
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>MONGO DB</p>
          </motion.div>
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>GITLAB</p>
          </motion.div>
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>RUBY ON RAILS</p>
          </motion.div>
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>POSTGRE-SQL</p>
          </motion.div>
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>TYPESCRIPT</p>
          </motion.div>
          <motion.div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' variants={skillVariants}>
            <p className='my-4'>CSHARP</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default Skills;
