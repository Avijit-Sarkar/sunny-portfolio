/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function ExprienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[200px] md:w-[300px] xl:w-[500px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="/Elon.jpg"
        alt="elon"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">CEO of Tesla</h4>
        <p className="font-bold text-xl mt-1">SPACE X</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 md:h-5 md:w-5 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
          />
          <img
            className="h-10 w-10 md:h-5 md:w-5 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
          />
          <img
            className="h-10 w-10 md:h-5 md:w-5 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
          />
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className="uppercase py-1">Started work... - Ended...</p>

        <ul className="list-disc space-y-1 ml-5 text-base">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
