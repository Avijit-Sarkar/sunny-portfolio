import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ imgsrc, title }) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        src={imgsrc}
        alt="hello"
        className="h-60"
      />
      <div className="space-y-5 px-0 md:px-10 max-w-6xl">
        <h4 className="text-2xl font-semibold text-center">{title}</h4>
        <p className="text-lg text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit
          natus temporibus facere, provident laudantium mollitia itaque neque
          accusamus, obcaecati similique nostrum quibusdam. Doloremque sunt
          similique exercitationem sequi quis excepturi, nesciunt nam?
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
