import React from "react"
import { motion } from "framer-motion"

interface Props extends React.ComponentProps<"div"> {}

export const Onboarding_Step3 = ({ ...props }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="onboarding-container onboarding-common gap-5 py-16"
    >
      <div className="onboarding-left">
        <h1>Two</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div
        className="onboarding-right "
        style={{ boxShadow: `0px 0px 20rem 2rem rgba(109, 35, 182, 0.2)` }}
      ></div>
      <div
        className="onboarding-right "
        style={{ boxShadow: `0px 0px 20rem 2rem rgba(109, 35, 182, 0.2)` }}
      ></div>
    </motion.div>
  )
}
