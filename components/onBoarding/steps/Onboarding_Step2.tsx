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
      <div className="onboarding-right   "></div>
    </div>
  )
}
