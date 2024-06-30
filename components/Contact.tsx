// // import React from 'react'
// // import { FaLocationArrow } from "react-icons/fa6";
// // import { MagicButton } from './ui/MagicButton';
// // import { VscRocket } from 'react-icons/vsc';


// "use client";
// import React from "react";
// import reactElementToJSXString from "react-element-to-jsx-string";
// import { ButtonsCard } from "./ui/tailwindcss-buttons";




// // title="Let us connect by email!"
// // icon={<VscRocket fill='cyan'/>}
// // position="right"

// export const Contact = () => {
//   return (
//     <section id="contact" className='pb-20'>

//       <div className="flex flex-col items-center">
//         <h1 className="heading lg:max-w-[45vw] text-purple">
//           Contact
//         </h1>
//         <a href="mailto:mohamad_alkhani@hotmail.com">
//           <ButtonsCard
//           />
//         </a>
//       </div>
//     </section>
//   )
// }

// import React from "react";
// import { ButtonsCard } from "./ui/tailwindcss-buttons";

// export const Contact = () => {
//   return (
//     <section id="contact" className="pb-20">
//       <div className="flex flex-col items-center">
//         <h1 className="heading lg:max-w-[45vw] text-purple pb-10">Contact</h1>
//         {/* <a href="mailto:mohamad_alkhani@hotmail.com"> */}
//           <ButtonsCard className="py-10">
//             Let us connect by email!
//           </ButtonsCard>
//         {/* </a> */}
//       </div>
//     </section>
//   );
// };

// export default Contact;
// "use client";
import React from "react";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

export const Contact = () => {
  return (
    <section id="contact" className="pb-20">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-purple pb-10">Contact</h1>
        <ButtonsCard>
          {/* mohamad_alkhani@hotmail.com */}
        </ButtonsCard>
      </div>
    </section>
  );
};

export default Contact;
