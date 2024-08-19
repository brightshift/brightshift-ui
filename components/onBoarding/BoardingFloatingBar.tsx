import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface Props extends React.ComponentProps<"div"> {
  stepNum: number
  totalSteps: number
  setStepNum: React.Dispatch<React.SetStateAction<number>>
}

export const BoardingFloatingBar = ({
  className,
  stepNum,
  setStepNum,
  totalSteps,
  ...props
}: Props) => {
  const increment = () => {
    if (stepNum === totalSteps - 1) return
    setStepNum((pre) => pre + 1)
  }

  const decrement = () => {
    if (stepNum === 0) return
    setStepNum((pre) => pre - 1)
  }

  return (
    <div
      {...props}
      className="container fixed bottom-1  left-1/2  mx-auto flex w-full -translate-x-1/2 items-center justify-center lg:bottom-2 2xl:bottom-3"
    >
      <div className=" glassmorphism left-0 mx-auto flex min-h-10  w-11/12 items-center justify-between px-4  xl:py-4 ">
        <button
          onClick={decrement}
          className={cn({ "opacity-30": stepNum === 0 })}
        >
          <ChevronLeft className="2xl:size-10" />
        </button>
        <div className={`mx-auto flex h-full grow justify-center gap-x-4 px-1`}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <button
              onClick={() => setStepNum(index)}
              key={index}
              className={cn(
                "h-full min-h-2 w-7 rounded-md bg-zinc-800 transition-all sm:w-10",
                "xl:min-h-3 xl:w-10  2xl:min-h-4   2xl:w-20",
                { "bg-zinc-300": stepNum === index }
              )}
            />
          ))}
        </div>
        <button
          onClick={increment}
          className={cn({ "opacity-30": stepNum === totalSteps - 1 })}
        >
          <ChevronRight className="2xl:size-10" />
        </button>
      </div>
    </div>
  )
}
