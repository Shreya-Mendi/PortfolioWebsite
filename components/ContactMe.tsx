import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mendishreya@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=Hi, my name is ${encodeURIComponent(formData.name)}.%0A%0A${encodeURIComponent(formData.message)}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 w-full max-w-lg mt-16">
        <h4 className="text-xl md:text-3xl font-semibold text-center">
          I&apos;ve got just what you need.{" "}
          <span className="decoration-dukeBlue/50 underline">Let&apos;s talk.</span>
        </h4>

        {/* Contact info */}
        <div className="space-y-2 md:space-y-3">
          <a href="tel:+19196080547" className="flex items-center space-x-4 justify-center group cursor-pointer">
            <PhoneIcon className="text-dukeBlue h-6 w-6 animate-pulse" />
            <p className="text-base md:text-xl group-hover:text-dukeBlue transition-colors">+1 (919) 608-0547</p>
          </a>
          <a href="mailto:mendishreya@gmail.com" className="flex items-center space-x-4 justify-center group cursor-pointer">
            <EnvelopeIcon className="text-dukeBlue h-6 w-6 animate-pulse" />
            <p className="text-base md:text-xl group-hover:text-dukeBlue transition-colors">mendishreya@gmail.com</p>
          </a>
          <div className="flex items-center space-x-4 justify-center">
            <MapPinIcon className="text-dukeBlue h-6 w-6 animate-pulse" />
            <p className="text-base md:text-xl">Durham, NC</p>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2.5 w-full"
        >
          <div className="flex flex-col md:flex-row gap-2.5">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput resize-none"
            rows={4}
          />
          <button
            type="submit"
            className="bg-dukeBlue py-3 px-10 rounded-lg text-white font-bold text-base hover:bg-dukeNavy transition-colors duration-200 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
