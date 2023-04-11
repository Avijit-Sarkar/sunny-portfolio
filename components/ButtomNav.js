import Link from 'next/link';
import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase } from 'react-icons/bs';
import ButtomNavIcons from './ButtomNavIcons';
import { motion } from 'framer-motion';

function ButtomNav() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <motion.div
        initial={{
          y: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="container mx-auto"
      >
        {/* nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            href="#hero"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-125 transition-all duration-150 rounded-full ease-out md:hover:bg-cyan-400/50"
          >
            {/* <BiHomeAlt /> */}
            <ButtomNavIcons Icon={BiHomeAlt} />
          </Link>
          <Link
            href="#about"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-125 transition-all duration-150 rounded-full ease-out md:hover:bg-cyan-400/50"
          >
            {/* <BiUser /> */}
            <ButtomNavIcons Icon={BiUser} />
          </Link>
          <Link
            href="#experience"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-125 transition-all duration-150 rounded-full ease-out md:hover:bg-cyan-400/50"
          >
            {/* <BsClipboardData /> */}
            <ButtomNavIcons Icon={BsClipboardData} />
          </Link>
          <Link
            href="#skills"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-125 transition-all duration-150 rounded-full ease-out md:hover:bg-cyan-400/50"
          >
            {/* <BsBriefcase /> */}
            <ButtomNavIcons Icon={BsBriefcase} />
          </Link>
          <Link
            href="#projects"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-125 transition-all duration-150 rounded-full ease-out md:hover:bg-cyan-400/50"
          >
            {/* <BsBriefcase /> */}
            <ButtomNavIcons Icon={BsBriefcase} />
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}

export default ButtomNav;
