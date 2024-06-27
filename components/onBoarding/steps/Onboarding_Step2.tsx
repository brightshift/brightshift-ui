import React from "react"

interface Props extends React.ComponentProps<"div"> {}

export const Onboarding_Step2 = ({ ...props }: Props) => {
  return (
    <div {...props} className="onboarding-container ">
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
    </div>
  )
}
