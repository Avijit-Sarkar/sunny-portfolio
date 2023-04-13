/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-cyan-700/70 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <ProjectCard
          imgsrc={'/projectspng.png'}
          title={'Case Study 1 of 4: Netflix clone'}
        />
        <ProjectCard
          imgsrc={'/responsive.png'}
          title={'Case Study 2 of 4: UPS clone'}
        />
        <ProjectCard
          imgsrc={'/responsive2.png'}
          title={'Case Study 3 of 4: Shoppers clone'}
        />
        <ProjectCard
          imgsrc={'/responsive3.png'}
          title={'Case Study 4 of 4: Social clone'}
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#15f6e4]/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
