import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            className="bg-black border-b-4 border-white py-5 px-8 shadow-lg flex justify-between items-center sticky top-0 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* Animate Name */}
            <motion.h1
                className="text-white text-4xl font-extrabold tracking-wide cursor-pointer"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, rotate: [0, 5, -5, 0] }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 15px rgba(255,255,255,1)",
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5, yoyo: Infinity },
                }}
            >
                Christopher O&apos;Connor
            </motion.h1>

            {/* Navigation Links */}
            <motion.ul
                className="flex space-x-8 text-white text-xl font-semibold"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 },
                    },
                }}
            >
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                    <motion.li
                        key={item}
                        variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="relative hover:text-gray-300 transition duration-300 after:block after:h-1 after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:scale-110"
                        >
                            {item}
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.nav>
    );
}
