// Wraps all of our sections for aligning them

import { motion } from "framer-motion";

import { styles } from "../styles"; 
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => 
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()} // animates the section
                intital="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.25}}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // move away from corner
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper