// components/Hero.tsx
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm Jesse
      </motion.h1>
      <motion.h2
        className="text-xl mt-2 text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Web Developer & Designer
      </motion.h2>
    </div>
  );
};

export default Hero;
