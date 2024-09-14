import React from "react"
import { motion } from "framer-motion"

interface Props extends React.ComponentProps<"div"> {}

export const Onboarding_Step2 = ({ ...props }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="onboarding-container onboarding-common gap-5"
    >
      <div className="onboarding-left ">
        <h1>One</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div
        className="onboarding-right  glow-effect"
        style={{ boxShadow: `0px 0px 20rem 10px #3b0f1c ` }}
      ></div>
      <div
        className="onboarding-right  glow-effect"
        style={{ boxShadow: `0px 0px 20rem 10px #3b0f1c ` }}
      ></div>
    </motion.div>
  )
}
