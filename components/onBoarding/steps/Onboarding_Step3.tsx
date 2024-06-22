import React from "react"

interface Props extends React.ComponentProps<"div"> {}

export const Onboarding_Step3 = ({ ...props }: Props) => {
  return (
    <div {...props} className="onboarding-container">
      <div className="onboarding-left ">
        <h1>Two</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div
        className="onboarding-right "
        style={{ boxShadow: `0px 0px 10rem 2rem rgba(109, 35, 182, 0.3)` }}
      ></div>
    </div>
  )
}
