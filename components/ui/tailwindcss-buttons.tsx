// "use client";
// import React from "react";
// import { IconClipboard } from "@tabler/icons-react";
// import { cn } from "@/utils/cn";

// export const ButtonsCard = ({
//   children,
//   className,
//   onClick,
// }: {
//   children?: React.ReactNode;
//   className?: string;
//   onClick?: () => void;
// }) => {
//   return (
//     <div>
//       {/* <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" /> */}
//       <IconClipboard className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
//       <div className="relative z-40">
//         {/* Add your shimmer button */}
//         <button
//           className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 animate-shimmer"
//         >
//           {children}
//         </button>
//       </div>
//     </div>
//   );
// };
"use client";
import React, { useState } from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/utils/cn";

export const ButtonsCard = () => {
  const [buttonLabel, setButtonLabel] = useState("Let us connect by email!");

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText("mohamad_alkhani@hotmail.com");
      setButtonLabel("Email Copied!");
      setTimeout(() => setButtonLabel("Let us connect by email!"), 2000); // Reset label after 2 seconds
    } catch (error) {
      console.error("Failed to copy:", error);
      alert("Failed to copy email to clipboard!");
    }
  };

  return (
    <div>
      <IconClipboard className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
      <div className="relative z-40">
        <button
          className={cn(
            "inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 animate-shimmer",
          )}
          onClick={handleClick}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};


