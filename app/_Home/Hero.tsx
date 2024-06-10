import { Inter_Tight } from "next/font/google"

interface Props extends React.ComponentProps<"div"> {}

const inter_tight = Inter_Tight({ subsets: ["latin"], variable: "--font-sans" })

export const Hero = ({ ...props }: Props) => {
  return (
    <div {...props} className="h-full max-h-screen min-h-full ">
      <h1
        className={`silver-text mx-auto my-10 w-2/3  pb-2  text-center text-[80px]  font-medium capitalize leading-[80px] tracking-normal${inter_tight.className} `}
      >
        find the best job for you.
      </h1>
      <p className="mx-auto my-4  max-w-2xl     text-center md:text-xl ">
        Finding the best job involves aligning your skills, passions, and values
        with opportunities. Consider roles that leverage your strengths, ignite
        your enthusiasm, and offer growth potential, such as data scientist, UX
        designer, or sustainability consultant.
      </p>
      <div className="hero_main  hero_animation"></div>
    </div>
  )
}
