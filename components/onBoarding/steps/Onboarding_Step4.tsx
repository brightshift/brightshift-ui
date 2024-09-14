import React from "react"
import Image from "next/image"
import facebookLogo from "@/assets/facebook-logo.svg"
import githubLogo from "@/assets/github-logo.svg"
import youtubeLogo from "@/assets/youtube-logo.svg"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Spotlight, SpotlightSimplified } from "@/components/aceternity"

const items = [
  {
    title: "Follow us on Facebook",
    subtitle: "Stay in touch, get updates from us",
    cta_text: "Follow",
    image: facebookLogo,
    link: "",
  },
  {
    title: "Follow us on Github",
    subtitle: "It's open source and free",
    cta_text: "Follow",
    image: githubLogo,
    link: "",
  },
  {
    title: "Follow us on Youtube",
    subtitle: "Explore and learn more about it ",
    cta_text: "Follow",
    image: youtubeLogo,
    link: "",
  },
]

interface Props extends React.ComponentProps<"div"> {}

export const Onboarding_Step4 = ({ ...props }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="onboarding-common relative left-0 top-0   flex min-h-screen  flex-col items-center justify-center gap-y-6 px-4  lg:flex-row lg:px-0"
    >
      <div className="onboarding-left  flex flex-col items-start justify-center md:w-3/5 md:items-center md:text-center lg:items-start lg:text-start">
        <h1 className="text-2xl font-bold md:text-3xl xl:text-2xl  2xl:mt-5 2xl:text-5xl">
          Stay in touch
        </h1>
        <p className="font-serif text-lg font-medium text-gray-200 xl:text-base 2xl:text-3xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className=" relative   left-0 top-0 flex size-full flex-col justify-between   gap-y-2   rounded-lg pr-5 md:w-2/3 lg:ml-10 lg:w-full">
        <div>
          <SpotlightSimplified
            fill="rgba(109, 35, 182)"
            className="absolute left-0 top-0"
          />

          <div className="flex flex-col items-start justify-center py-2  md:items-center md:py-4 md:text-center">
            <Mail
              className=" size-14 2xl:size-20"
              style={{ filter: "drop-shadow(0 0 8px rgb(239 68 68))" }}
            />
            <h2 className="my-4 text-xl font-bold  text-gray-100 xl:text-xl 2xl:text-3xl">
              Sign up fo your newsletter
            </h2>
            <p className="text-gray-200  xl:text-lg 2xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptas reprehenderit neque ut nesciunt! Ipsum minima optio quis
              odio quia.
            </p>
            <div className="my-2 flex w-full items-start gap-x-2 md:w-2/3 md:items-center ">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-lg border-none  p-2 caret-[#6d23b6] outline-none focus:outline-none"
              />
              <Button variant={"ry"}>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-5 ">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between border-t border-[#292b2d]/20 py-3"
            >
              <div className="flex items-center gap-x-2 ">
                <Image
                  src={item.image}
                  alt={item.title}
                  aria-label="social icons"
                  className="size-7   2xl:size-10"
                />

                <div>
                  <h3 className="text-sm font-semibold xl:text-base  2xl:text-lg  ">
                    {item.title}
                  </h3>
                  <p className="text-sm  ">{item.subtitle}</p>
                </div>
              </div>

              <a
                href={item.link}
                className={buttonVariants({
                  // className: "xl:text-lg xl:px-8 xl:py-6",
                  variant: "ry",
                })}
                target="_blank"
              >
                {item.cta_text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
