import { motion } from "framer-motion";
import me from "../../assets/images/home/me.png";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  return (
    <div data-name="home" className="h-screen w-full bg-[#0a192f]">
      <motion.div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col justify-center h-full" variants={textVariants}>
          <h2 className="text-4xl pt-10 sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <motion.p className="text-gray-500 py-4 max-w-md" variants={textVariants}>
            I have 2 years of experience in mobile and web development. Equipped with a diverse range of programming languages, frameworks, and tools, I am adept at seamlessly bridging the gap between user experience and server functionality.
          </motion.p>
        </motion.div>
        <motion.div variants={imageVariants}>
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
