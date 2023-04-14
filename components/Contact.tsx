import React from 'react';
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:example@example.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-cyan-700/70 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col lg:flex-row space-y-5 md:space-y-7">
        <div className="md:flex-col md:p-5 ">
          <h4 className="text-4xl font-semibold text-center">
            I have got just what you need.{' '}
            <span className="decoration-[#F7AB0A]/50 underline">
              Lets Talk.
            </span>
          </h4>
          <div className="space-y-5 md:py-5">
            <div className="flex items-center space-x-5 pt-2 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
              <p className="text-xl">+1234567890</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
              <p className="text-xl">elon.musk@gmail.com</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <MapIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
              <p className="text-xl">123 Devloper Lane</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              {...register('name')}
              placeholder="First Name"
              className="contactInput"
              type="name"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="subject"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
