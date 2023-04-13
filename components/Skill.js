import React from 'react';
import { motion } from 'framer-motion';

function Skill({ directionLeft, imgSrc, text }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={imgSrc}
        className="rounded-full object-cover w-10 h-10 xl:w-16 xl:h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-cyan-400/70 backdrop-blur-sm w-10 h-10 xl:w-16 xl:h-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm lg:text-xl font-bold text-black opacity-100">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
