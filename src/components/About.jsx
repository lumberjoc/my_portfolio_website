import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';



const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          {/* Create card skeleton */}
          <div
            // tilt options for card
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","",0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >   
       I'm an avid cloud enthusiast, reveling in the art of crafting scalable solutions on platforms like AWS while also diving into the world of container orchestration. As a React developer, I bring interfaces to life with a focus on user-centric design. Passionate about collaborative innovation, I thrive in Agile environments, driving sprints, and championing adaptability within dynamic teams. Join me on this journey of cloud architecture, React wizardry, and agile camaraderie – where tech meets creativity.
        {/* <br />
        Projects are my bread and butter. I enjoy ruminating on a problem, creating a rough solution, and chiseling away to refine the code. If you have a project, feel free to navigate to the <a href="#contact" className="text-blue-500 hover:underline">contact</a> section and send it my way!   */}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")