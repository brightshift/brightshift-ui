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
      {...props}
      className="flex min-h-[80vh] w-full animate-fade-in flex-col items-center justify-center gap-y-10 px-4 py-10"
    >
      <div className="w-full items-start justify-start md:text-center">
        <h1 className="text-2xl font-bold">Stay in touch</h1>
        <p className="font-serif text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="rounded-lg; size-full h-full min-h-80 pr-5 md:w-2/3">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="rgba(109, 35, 182)"
          // style={{ boxShadow: `0px 0px 20rem 2rem rgba(109, 35, 182, 0.2)` }}
        />
        <div className="flex flex-col items-start justify-center py-5  md:items-center md:p-5 md:text-center">
          <Mail className="size-14" />
          <h2 className="my-4 text-xl font-bold">Sing up fo your newsletter</h2>
          <p>
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
        <div className="mt-5 space-y-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between "
            >
              <div className="flex items-center gap-x-2 ">
                <Image src={item.image} alt="" className="size-8 " />
                <div>
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              </div>

              <a href={item.link} className={buttonVariants()} target="_blank">
                {item.cta_text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
