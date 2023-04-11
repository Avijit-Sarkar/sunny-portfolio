import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto scroll-smooth items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-700/70 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        src="/elon.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-72 md:ml-8 md:h-80 xl:w-[350px] xl:h-[400px]"
      />
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]">little</span>{' '}
          background
        </h4>
        <p className="text-sm md:text-xl mx-2">
          I chose to specialize in cybersecurity by passion, and also after
          being hacked once in social media ( Thanks to the hacker ). Except
          college studies, I spend most of the time in practice of logic
          building in several languages, learning about linux and pen testing. I
          am a self and fast learner. My goal is to be a Red-Teamer. Outside of
          my proffessional life, I love gaming, table tennis, body building,
          watching cartoons ( specially Ben 10 ), photography and EDM. Also I
          paint sometimes.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
