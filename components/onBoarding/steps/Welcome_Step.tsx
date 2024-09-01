import React from "react"

interface Props extends React.ComponentProps<"div"> {}

export const Welcome_Step = ({ ...props }: Props) => {
  return (
    <div
      {...props}
      className="flex max-h-screen min-h-[50vh] flex-col items-center justify-center"
    >
      <h1
        className={`dark:silver-text  mx-auto my-10 w-full pb-2 text-center text-5xl font-medium capitalize leading-[80px] tracking-normal text-zinc-900 md:text-7xl   2xl:text-8xl`}
      >
        Welcome to Brightshift
      </h1>
      <p className="mx-auto my-4 max-w-2xl text-center md:text-xl  xl:text-2xl 2xl:max-w-4xl 2xl:text-4xl">
        {`Let's`} Find your dream job and start your journey.
      </p>
    </div>
  )
}
