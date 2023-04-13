/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

export default function ExprienceCard({
  imgSrc,
  imgSrc2,
  imgSrc3,
  Postname,
  companyName,
  compImg,
}) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[400px] md:w-[300px] xl:w-[500px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 hover:scale-105 ease-in-out cursor-pointer transition-opacity duration-300 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={compImg}
        alt="elon"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{Postname}</h4>
        <p className="font-bold text-xl mt-1">{companyName}</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 md:h-5 md:w-5 object-cover rounded-full"
            src={imgSrc}
            alt=""
          />
          <img
            className="h-10 w-10 md:h-5 md:w-5 object-cover rounded-full"
            src={imgSrc2}
            alt=""
          />
          <img
            className="h-10 w-10 md:h-5 md:w-5 object-cover rounded-full"
            src={imgSrc3}
            alt=""
          />
        </div>
        <p className="uppercase py-1">Started work... - Ended...</p>

        <ul className="list-disc space-y-2 ml-5 text-base">
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
    </article>
  );
}
