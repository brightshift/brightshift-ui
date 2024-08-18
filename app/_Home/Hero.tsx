import { Inter_Tight } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

interface Props extends React.ComponentProps<"div"> {}

const inter_tight = Inter_Tight({ subsets: ["latin"] })

export const Hero = ({ ...props }: Props) => {
  return (
    <div {...props} className="h-full max-h-screen min-h-full">
      <h1
        className={`lightSilver-text dark:silver-text mx-auto my-10 w-2/3 pb-2 text-center text-[80px] font-medium capitalize leading-[80px] tracking-normal${inter_tight.className} `}
      >
        find the best job for you.
      </h1>
      <p className="mx-auto my-4 max-w-2xl text-center text-black dark:text-white md:text-xl">
        Finding the best job involves aligning your skills, passions, and values
        with opportunities. Consider roles that leverage your strengths, ignite
        your enthusiasm, and offer growth potential, such as data scientist, UX
        designer, or sustainability consultant.
      </p>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="text-md inline-flex items-center justify-between rounded-lg bg-black px-5 py-3 text-center font-medium text-white shadow-2xl transition-all duration-200 hover:scale-105 hover:shadow-black hover:duration-1000 dark:bg-white dark:text-black dark:hover:shadow-white"
        >
          <svg
            className="-ml-1 mr-2 size-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign up with Google
        </button>
      </div>
      <div className="relative z-20 flex items-center justify-center py-10">
        <Image
          className="rounded-lg border-2 border-black shadow-2xl shadow-background dark:border-white"
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzA3dnRoM2I1eDZqMjd5ZG5wZ3BtbGIyZWF6ZDdjbGQ1dDN2b2lhZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JdTkHW1KZPdvdS0/giphy.gif"
          width={1024}
          height={500}
          alt="Picture of the author"
        />
      </div>
      {/* <div className="hero_main  half-circle-gradient"></div> */}
      <div className="lightHalf-circle-gradient dark:half-circle-gradient absolute -right-0 left-0 top-3/4 z-10 min-h-72 flex-none shadow-[0_-110px_132px_#ffffff26] "></div>
    </div>
  )
}
