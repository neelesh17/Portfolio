import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale:1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 
          min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText }>Inroduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am an accomplished R&D Software Engineer specializing in automation and optimization. 
        With a strong foundation in Computer Science Engineering, I excel in automating and patching 
        activities using Python, Groovy, and shell scripts. My experience at VMware by Broadcom has 
        sharpened my skills in monitoring, triaging, and remediation, resulting in substantial efficiency 
        gains. Additionally, I have interned at VMware and Moogle CC, where I honed my expertise in data analytics, 
        software development, and project optimization. Proficient in a variety of programming languages, frameworks, 
        and tools, I am adept at tackling diverse challenges and delivering innovative solutions. My portfolio 
        showcases a range of personal projects, highlighting my creativity and proficiency in software development. 
        Recognized for my achievements by AMCAT and HackerRank, I am driven to continue pushing boundaries and 
        delivering excellence in every endeavor.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        { services.map((service, index) => (
          <ServiceCard key={`${service.title}-${index}`} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");