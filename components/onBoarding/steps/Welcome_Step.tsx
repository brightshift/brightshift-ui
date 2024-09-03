import React from "react"
import { motion } from "framer-motion"

interface Props extends React.ComponentProps<"div"> {}

export const Welcome_Step = ({ ...props }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex   min-h-screen flex-col items-center justify-center gap-y-4 *:text-center"
    >
      <h1
        className={`dark:silver-text    w-full   text-5xl font-medium capitalize leading-[80px] tracking-normal text-zinc-900 md:text-7xl   2xl:text-8xl`}
      >
        Welcome to Brightshift
      </h1>
      <p className=" max-w-2xl  md:text-xl  xl:text-2xl 2xl:max-w-4xl 2xl:text-4xl">
        {`Let's`} Find your dream job and start your journey.
      </p>
    </motion.div>
  )
}
