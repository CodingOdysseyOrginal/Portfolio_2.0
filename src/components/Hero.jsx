import { useState, useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Picture from "../assets/me.jpg";

export default function Hero() {
  const texts = ["Junior Software Developer", "Muay Thai Fighter", "Traveler", "Reader"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Ref for tracking section visibility
  const sectionRef = useRef(null);

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
    const section = document.getElementById("skills");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-black text-white min-h-[90vh] flex flex-col justify-start items-center px-8 pt-16"
      style={{ backgroundColor: "black" }} 
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl w-full">
        <div className="text-center md:text-left">
          <motion.h1 
            className="text-6xl font-extrabold mb-4 leading-tight"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I&apos;m <span className="text-gray-300">Christopher O&apos;Connor</span>
          </motion.h1>
          
          <p className="text-2xl font-semibold text-gray-300 mb-6">
            I am a{" "}
            <motion.span 
              key={index} 
              className="text-white"
              initial={{ x: -50, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              {displayText}
            </motion.span>
          </p>

          <motion.p 
            className="text-xl mb-4 leading-relaxed"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            I&apos;m a passionate software developer with experience in full-stack web development. I specialize in building robust, scalable applications using technologies like JavaScript, Node.js, and React.
          </motion.p>

          <motion.p 
            className="text-xl mb-4 leading-relaxed"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            With a background in problem-solving and a focus on clean, efficient code, I&apos;m eager to contribute to meaningful projects that push the boundaries of web development.
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src={Picture} 
            alt="Christopher O'Connor" 
            className="rounded-full w-80 h-80 object-cover border-4 border-white shadow-xl"
          />
        </motion.div>
      </div>

      <div className="mt-8 relative flex justify-center items-center">
        <button
          onClick={scrollToSection}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="text-white cursor-pointer transition duration-300 relative z-10"
        >
          <FaArrowDown size={50} />
        </button>

        {hovered && (
          <motion.div
          className="absolute w-20 h-20 border-2 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        )}
      </div>
    </section>
  );
}