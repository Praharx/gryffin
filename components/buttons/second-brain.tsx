"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

const SecondBrain = ({text} : {text: string}) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="h-full center">
      <motion.button
        whileHover={{
          scale: 1.3,
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="bg-gradient-to-r from-[#4455cc] to-[#5566dd] text-white z-0 relative outline-none border-none text-primary-foreground px-16 py-4 font-medium rounded-xl overflow-hidden hover:shadow-[0_0_12px] hover:shadow-indigo-400"
      >
        <span className="flex gap-2 items-center z-10 tracking-tight">
          <span>
            <Sparkles className="h-5 w-5" fill="white" />
          </span>
          <span className="tracking-widest text-lg flex">{text}  </span>
        </span>

        <span className="absolute inset-0 top-0 left-0 -translate-x-0 -translate-y-0 shadow-[0_0_12px_inset] -z-10 shadow-indigo-300 rounded-xl"></span>

        <span
          className={cn(
            "absolute w-10 h-[220%] bg-indigo-100/10 -top-1/2 -left-5 -z-[20] rotate-12 transition-all duration-300",
            hovering && "left-[90%]"
          )}
        />
      </motion.button>
    </div>
  );
};

export default SecondBrain;
