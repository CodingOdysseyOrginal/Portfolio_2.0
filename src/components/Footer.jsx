import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black border-t-4 border-white py-5 px-8 shadow-lg flex flex-col items-center fixed bottom-0 left-0 w-full z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.p
        className="text-white text-lg font-medium mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Made by <span className="text-gray-300 font-bold">Christopher O&apos;Connor</span>
      </motion.p>

      <div className="flex space-x-6">
        <motion.a
          href="https://github.com/CodingOdysseyOrginal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition duration-500"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <FaGithub size={40} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/christopher-o%E2%80%99connor-859b68184/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition duration-500"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <FaLinkedin size={40} />
        </motion.a>
      </div>
    </motion.footer>
  );
}
