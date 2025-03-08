import { useState, useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import Picture from "../assets/me.jpg";

export default function Hero() {
  const texts = ["Junior Software Developer", "Muay Thai Fighter", "Traveler", "Reader"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  
  // Ref for tracking section visibility
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < texts[index].length) {
        setDisplayText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCharIndex(0);
          setDisplayText("");
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, index]);

  const scrollToSection = () => {
    const section = document.getElementById("skillsSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="bg-black text-white min-h-[90vh] flex flex-col justify-start items-center px-8 pt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl w-full">
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-gray-300">Christopher O'Connor</span>
          </h1>
          <p className="text-2xl font-semibold text-gray-300 mb-6">
            I am a{" "}
            <motion.span key={index} className="text-white">
              {displayText}
            </motion.span>
          </p>
          <p className="text-xl mb-4 leading-relaxed">
            I'm a passionate software developer with experience in full-stack web development. I specialize in building robust, scalable applications using technologies like JavaScript, Node.js, and React.
          </p>
          <p className="text-xl mb-4 leading-relaxed">
            With a background in problem-solving and a focus on clean, efficient code, I'm eager to contribute to meaningful projects that push the boundaries of web development.
          </p>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
          animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img 
            src={Picture} 
            alt="Christopher O'Connor" 
            className="rounded-full w-80 h-80 object-cover border-4 border-white shadow-xl"
          />
        </motion.div>
      </div>

      <div className="mt-8 relative">
        <motion.button
          onClick={scrollToSection}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="text-white cursor-pointer transition duration-300 relative z-10"
          whileHover={{ scale: 1.1 }}
        >
          <FaArrowDown size={50} />
        </motion.button>

        {hovered && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-15 h-15 border-2 border-white rounded-full absolute"></div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
