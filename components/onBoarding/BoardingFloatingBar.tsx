import { ChevronLeft } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

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
      className="onboarding-common  fixed inset-x-0  bottom-2 z-50  mx-auto flex  items-center justify-between  rounded-xl border-2 border-[#17191b]/40 bg-[#F0F2F1]  py-1 pl-4 pr-1 dark:bg-[#17191b] xl:w-full"
    >
      <div className="flex items-center gap-x-4">
        {/* <button onClick={decrement}>
          <ChevronLeft className="size-4 2xl:size-6" />
        </button> */}

        <div className={`flex h-full grow gap-x-1 `}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <button
              // onClick={() => setStepNum(index)}
              key={index}
              className={cn(
                "h-full min-h-1 w-[1.1rem]  rounded-md bg-zinc-700 transition-all duration-700  ", 
                {
                  "bg-red-500 w-12 glow-effect": stepNum === index,
                }
              )}
            />
          ))}
        </div>
      </div>
      <Button className="!py-1  " variant={"ry"} onClick={increment}>
        Start Setup
      </Button>
    </div>
  )
}
