"use client"

import React, { useState } from "react"

import { BoardingFloatingBar } from "./BoardingFloatingBar"
import { Onboarding_Step2, Onboarding_Step3, Welcome_Step } from "./steps"

interface Props extends React.ComponentProps<"div"> {}
const Arrangement = [Welcome_Step, Onboarding_Step2, Onboarding_Step3]

export const OnBoarding = ({ ...props }: Props) => {
  const [stepNum, setStepNum] = useState(0)

  return (
    <div {...props} className="min-h-screen">
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
