import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-cyan-700/70 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-cyan-700/70 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill
          directionLeft
          imgSrc={'/firebase-removebg-preview.png'}
          text={'90%'}
        />
        <Skill directionLeft imgSrc={'/js.png'} text={'92%'} />
        <Skill
          directionLeft
          imgSrc={'/Tailwind_CSS_Logo.svg.png'}
          text={'70%'}
        />
        <Skill
          directionLeft
          imgSrc={'/css-3d-icon-removebg-preview.png'}
          text={'59%'}
        />
        <Skill directionLeft imgSrc={'/react js_logo.png'} text={'80%'} />
        <Skill directionLeft imgSrc={'/html5.png'} text={'89%'} />
        <Skill directionLeft imgSrc={'/mongodb.png'} text={'78%'} />
        <Skill directionLeft imgSrc={'/kali-logo.png'} text={'100%'} />
        <Skill imgSrc={'/metasploit-removebg-preview.png'} text={'97%'} />
        <Skill imgSrc={'/node-js.png'} text={'75%'} />
        <Skill imgSrc={'/nextjs.png'} text={'100%'} />
        <Skill imgSrc={'/sanity.png'} text={'81%'} />
        <Skill imgSrc={'/ts.png'} text={'68%'} />
      </div>
    </motion.div>
  );
}

export default Skills;
