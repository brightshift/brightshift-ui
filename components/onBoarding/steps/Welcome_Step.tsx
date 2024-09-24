import React from "react"
import { motion } from "framer-motion"

import { RoundedMesh } from "@/components/Neon"

interface Props extends React.ComponentProps<"div"> {}

export const Welcome_Step = ({ ...props }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="onboarding-common   flex min-h-screen flex-col items-center justify-center text-center"
    >
      <h1
        className={`dark:silver-text    w-full   py-5 text-5xl font-medium  capitalize tracking-normal text-zinc-900   md:text-7xl 2xl:text-8xl`}
      >
        Welcome to Brightshift
      </h1>
      <p className=" max-w-2xl  md:text-xl  xl:text-2xl 2xl:max-w-4xl 2xl:text-4xl">
        {`Let's`} Find your dream job and start your journey.
      </p>
      <RoundedMesh
        fill="rgba(109, 35, 182)"
        className="pointer-events-none absolute left-0  top-0 z-10  size-full opacity-20"
      />
    </motion.div>
  )
}
