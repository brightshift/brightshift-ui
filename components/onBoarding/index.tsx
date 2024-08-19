"use client"

import React, { useState } from "react"

import { BoardingFloatingBar } from "./BoardingFloatingBar"
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
    <div {...props} className=" p-2 text-zinc-900 dark:text-white">
      {Arrangement.map((Item, index) => (
        <React.Fragment key={index}>
          {index === stepNum && <Item />}
        </React.Fragment>
      ))}

      <BoardingFloatingBar
        stepNum={stepNum}
        setStepNum={setStepNum}
        totalSteps={Arrangement?.length}
      />
    </div>
  )
}
