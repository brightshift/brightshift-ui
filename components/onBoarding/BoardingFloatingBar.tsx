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
      className="fixed bottom-1 flex w-full items-center justify-center"
    >
      <div className="glassmorphism left-0 mx-auto flex min-h-10 w-11/12 items-center justify-between px-4">
        <button
          onClick={decrement}
          className={cn({ "opacity-30": stepNum === 0 })}
        >
          <ChevronLeft />
        </button>
        <div className={`mx-auto flex h-full grow justify-center gap-x-4 px-1`}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <button
              onClick={() => setStepNum(index)}
              key={index}
              className={cn(
                "h-full min-h-2 w-7 rounded-md bg-zinc-800 transition-all sm:w-10",
                { "bg-zinc-300": stepNum === index }
              )}
            />
          ))}
        </div>
        <button
          onClick={increment}
          className={cn({ "opacity-30": stepNum === totalSteps - 1 })}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
