import { motion } from "framer-motion";
import me from "../../assets/images/home/me.png";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, marginTop: 0 }, // Updated marginTop property
    visible: { opacity: 1, marginTop: 50, transition: { duration: 0.5, delay: 0.4 } }, // Adjusted marginTop value
  };

  return (
    <div data-name="home" className="h-screen w-full bg-[#0a192f]">
      <motion.div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-start h-full px-4 md:flex-row md:justify-center md:items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center md:text-left">
          <motion.h2 className="text-4xl pt-20 pb-5 sm:text-7xl font-bold text-white" variants={textVariants}>
            A FULL STACK DEVELOPER
          </motion.h2>
          <motion.p className="text-gray-500 py-2 px-2 max-w-md" variants={textVariants}>
            Versatile full-stack developer, combining technical prowess and creativity to deliver impactful solutions and elevate user experiences.
          </motion.p>
        </div>
        <motion.div variants={imageVariants} className="mt-10 md:mt-0"> {/* Adjusted margin-top value */}
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

