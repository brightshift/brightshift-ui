import React from "react"

interface Props extends React.ComponentProps<"div"> {}

export const Welcome_Step = ({ ...props }: Props) => {
  return (
    <div
      {...props}
      className="flex max-h-screen  min-h-[50vh]   flex-col items-center justify-center  "
    >
      <h1
        className={`silver-text mx-auto my-10  w-full   pb-2  text-center text-5xl  font-medium capitalize leading-[80px] tracking-normal md:text-7xl `}
      >
        Welcome to brightshift
      </h1>
      <p className="mx-auto my-4  max-w-2xl     text-center md:text-xl ">
        {`Let's`} find your dram job and start your journey.
      </p>
    </div>
  )
}
