import React from 'react';

type Props = {};

function Experience({}: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-700/70 text-2xl">
        Experience
      </h3>
    </div>
  );
}

export default Experience;
