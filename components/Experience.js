import React from 'react';
import { motion } from 'framer-motion';
import ExprienceCard from './ExprienceCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Experience() {
  const sliderLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-cyan-700/70 text-2xl">
        Experience
      </h3>
      <MdChevronLeft
        className="hidden md:flex md:opacity-50 md:cursor-pointer md:hover:opacity-100"
        onClick={sliderLeft}
        size={40}
      />
      <div
        id="slider"
        className="w-full flex space-x-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth py-10 snap-x snap-mandatory scrollbar-hide"
      >
        <ExprienceCard />
        <ExprienceCard />
        <ExprienceCard />
        <ExprienceCard />
        <ExprienceCard />
      </div>
      <MdChevronRight
        className="hidden md:flex md:opacity-50 md:cursor-pointer md:hover:opacity-100"
        onClick={sliderRight}
        size={40}
      />
    </motion.div>
  );
}

export default Experience;
