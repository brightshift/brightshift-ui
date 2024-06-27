import { useEffect, useState } from "react"

export const useDebounce = (currentValue: unknown, time: number = 500) => {
  const [value, setValue] = useState(currentValue)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(currentValue)
    }, time)

    return () => {
      clearTimeout(timer)
    }
  }, [currentValue, time])

  return value
}
