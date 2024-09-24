"use client"

import React, { useState } from "react"
import { AnimatePresence } from "framer-motion"

import { RoundedMesh } from "@/components/neon"

import { BoardingFloatingBar } from "./boarding_floating_bar"
import {
  Onboarding_Step2,
  Onboarding_Step3,
  Onboarding_Step4,
  Welcome_Step,
} from "./steps"

interface Props extends React.ComponentProps<"div"> {}
const Arrangement = [
  Welcome_Step,
  Onboarding_Step2,
  Onboarding_Step3,
  Onboarding_Step4,
]

export const OnBoarding = ({ ...props }: Props) => {
  const [stepNum, setStepNum] = useState(0)

  return (
    <div
      {...props}
      className="  min-h-screen   text-zinc-900  dark:text-white    "
      style={{ scrollbarGutter: "stable" }}
    >
      {Arrangement.map((Item, index) => (
        <AnimatePresence key={index}>
          {index === stepNum && <Item />}
        </AnimatePresence>
      ))}

      <BoardingFloatingBar
        stepNum={stepNum}
        setStepNum={setStepNum}
        totalSteps={Arrangement?.length}
      />
    </div>
  )
}
