import React from "react"
import Image from "next/image"
import facebookLogo from "@/assets/facebook-logo.svg"
import githubLogo from "@/assets/github-logo.svg"
import youtubeLogo from "@/assets/youtube-logo.svg"
import { Mail } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Spotlight } from "@/components/aceternity"

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
    <div
      className="container  mb-20 flex animate-fade-in flex-col items-center justify-center gap-y-6 px-4  py-10 lg:flex-row  xl:mb-32"
      {...props}
    >
      <div className="onboarding-left  flex flex-col items-start justify-center   ">
        <h1 className="text-2xl font-bold xl:text-4xl  2xl:mt-5 2xl:text-5xl">
          Stay in touch
        </h1>
        <p className="max-w-2xl font-serif text-xl font-medium xl:text-2xl 2xl:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="ml-10  flex size-full flex-col   justify-between   gap-y-2 rounded-lg pr-5 md:w-2/3">
        <div>
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="rgba(109, 35, 182)"
          />
          <div className="flex flex-col items-start justify-center py-2  md:items-center md:py-4 md:text-center">
            <Mail className="size-14 2xl:size-20" />
            <h2 className="my-4 text-xl font-bold  xl:text-2xl 2xl:text-3xl">
              Sing up fo your newsletter
            </h2>
            <p className="xl:text-xl  2xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptas reprehenderit neque ut nesciunt! Ipsum minima optio quis
              odio quia.
            </p>
            <div className="my-2 flex w-full items-start gap-x-2 md:w-2/3 md:items-center ">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-lg py-2 placeholder:px-4 "
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between "
            >
              <div className="flex items-center gap-x-2 ">
                <Image
                  src={item.image}
                  alt=""
                  className="size-8   xl:size-12 2xl:size-16"
                />
                <div>
                  <h3 className="text-sm font-bold xl:text-lg  2xl:text-xl ">
                    {item.title}
                  </h3>
                  <p className="text-sm  xl:text-base">{item.subtitle}</p>
                </div>
              </div>

              <a
                href={item.link}
                className={buttonVariants({
                  className: "xl:text-lg xl:px-8 xl:py-6",
                })}
                target="_blank"
              >
                {item.cta_text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
