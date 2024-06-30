// import React from 'react'

// export const MagicButton = ({title, icon, position, handleClick} : { 
//   title: string,
//   icon: React.ReactNode,
//   position: string,
//   handleClick?: () => void
  
//   }) => {
  
//   return (
//     <div>
//       <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg 
//       p-[1px] focus:outline-none md:w-60 md:mt-10">
//       <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//       <span className="inline-flex h-full w-full cursor-pointer items-center justify-center 
//       rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
//         {position == 'left' && icon}
//         {title}
//         {position == 'right' && icon}
//       </span>
//     </button>
//     </div>
    
//   )
// }

import React from 'react';

export const MagicButton = ({
  title,
  icon,
  position,
  handleClick
}: {
  title: string,
  icon: React.ReactNode,
  position: string,
  handleClick?: () => void
}) => {
  return (
    <div>
      <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
        {/* Spinning edge using Tailwind CSS */}
        <span className="absolute inset-[-1000%] animate-spin-10s-linear-infinite bg-conic-gradient"></span>

        {/* Foreground content */}
        <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </span>
      </button>
    </div>
  );
};
