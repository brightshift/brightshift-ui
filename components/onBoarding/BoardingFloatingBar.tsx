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
      className="fixed inset-x-0  bottom-1 z-50  mx-auto flex w-11/12 max-w-[1204px] items-center  justify-between rounded-2xl border-2 border-[#17191b]/40  bg-[#F0F2F1] px-4  py-1 dark:bg-[#17191b] "
    >
      <div className={`flex h-full grow gap-x-1 `}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <button
            onClick={() => setStepNum(index)}
            key={index}
            className={cn(
              "h-full min-h-1  w-6 rounded-md bg-zinc-700 transition-all  duration-700",
              {
                "bg-red-500 w-10 glow-effect": stepNum === index,
              }
            )}
          />
        ))}
      </div>
      <Button className="!py-1  dark:bg-[#292b2d]   dark:text-primary ">
        Start Setup{" "}
      </Button>
    </div>
  )
}
