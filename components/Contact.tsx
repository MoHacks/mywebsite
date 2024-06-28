import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { MagicButton } from './ui/MagicButton';
import { VscRocket } from 'react-icons/vsc';

export const Contact = () => {
  return (
    <section id="contact" className='pb-20'>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-purple">
          Contact
        </h1>
        <a href="mailto:mohamad_alkhani@hotmail.com">
          <MagicButton
            title="Let us connect by email!"
            icon={<VscRocket fill='cyan'/>}
            position="right"
          />
        </a>
      </div>
    </section>
  )
}

export default Contact;

