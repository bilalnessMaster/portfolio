'use client'
import { Header } from "./Header"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import * as motion from "motion/react-client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/constants"



export const Projects = () => {

  return (
    <section className="w-full space-y-6 ">
      <Header href={"/logos/scroll.svg"} section={"My Works"} />
      <List />
    </section>
  )
}




const List = () => {
  return (
    <div className="font-medium space-y-4 text-secondary font-sans ">
      {
        projects.map((project: typeof projects[0], index: number) => (
          <Project {...project} key={index} />
        ))
      }
    </div>
  )
}

interface Props {
  images: string[];
  description: string[];
  technologies: string[];
  name: string;
  live?: string | null;
}
const item = {
  hidden: {
    opacity: 0,
    blur: "4px",
    y: 20
  },
  show: () => ({
    opacity: 1,
    blur: "0px",
    y: 0,
    transition: {
      duration: 0.5,
    }
  })


}


const Project = ({ images, technologies, live, description, name }: Props) => {
  const image = images[0]
  return (
    <Drawer  >
      <motion.div
        variants={item}
        initial="hidden"
        whileInView={'show'}
        className="w-full"
        viewport={{
          once: true
        }}
      >
        <DrawerTrigger className="overflow-hidden flex flex-col cursor-pointer justify-between p-4 min-h-64 relative rounded-md w-full border border-secondary group    transition-all duration-300 hover:outline-warning  bg-white/5 backdrop-blur-sm ">
          <div className="flex flex-col items-start z-10">
            <h1 className="text-primary font-bricolage text-lg first-letter:capitalize">{name}</h1>
            <p className="text-start max-w-xs text-base ">{description[0]}</p>
          </div>
          <ul className="flex justify-start gap-x-2 z-10">
            {
              technologies.map((tech: string, index: number) => (
                <Tech tech={tech} key={index} index={index + 1} />
              ))
            }
          </ul>
          <div className="absolute rounded-t-sm -bottom-24 right-0 md:-bottom-3 group-hover:bottom-0 transiton-all duration-700 md:-right-24  p-5 md:p-0">

            <Image
              src={image}
              width={400}
              height={720}
              alt="main image"
              className="objet-cover shadow-[0px_0px_40px_10px_rgba(0,0,0,1)] shadow-primary/45 grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
        </DrawerTrigger >

      </motion.div>
      <DrawerContent className=" pb-32">

        <DrawerHeader className="hidden">
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className="space-y-7 mt-5">
          <div className="w-full lg:w-[60%] flex justify-center mx-auto">
            <ImageGalery images={images} />
          </div>
          <div className="max-w-xl mx-auto w-full px-3">
            <div className="font- space-y-4 text-secondary font-sans text-lg">
              {
                description.map((para: string, index: number) => (
                  <p
                    key={index}
                  >
                    {para}
                  </p>
                ))
              }
            </div>
            <div className="mt-5">
              {
                live && (
                  <Link href={live} className="group text-waring underline   underline-offset-2">
                    <Button variant={'ghost'} className="text-primary cursor-pointer">
                      <span>Checkout Live demo</span>
                      <ArrowUpRight className="size-5 group-hover:rotate-45 transiton0all duration-100" />
                    </Button>
                  </Link>
                )
              }
            </div>
          </div>

        </div>
        <DrawerFooter>
          <DrawerClose className="bg-primary font-semibold text-secondary px-5 py-1 max-w-xl w-full rounded mx-auto cursor-pointer">
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const Tech = ({ tech, index }: { tech: string, index: number }) => {
  return (
    <li
      style={{
        transitionDelay: `${index * 100}ms`
      }}
      className={cn("cursor-pointer hover:border-warning transition-all duration-500 text-primary border border-secondary rounded-full items-center  text-sm font-mono  inline-flex px-4 py-1 capitalize font-medium bg-white/10 backdrop-blur-sm translate-y-12 group-hover:translate-y-0")}>
      {tech}
    </li>
  )
}



const ImageGalery = ({ images }: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0)
  return (
    <div className="w-fit flex-col  flex md:flex-row gap-x-3 min-h-80 h-80  justify-center ">
      <div className="h-full">
        <Image
          src={images[imageIndex]}
          width={720}
          height={720}
          alt="main image"
          className="objet-cover h-full border-secondary border"
        />
      </div>
      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="hidden md:block w-[200px]"
          orientation="vertical"
        >

          <CarouselContent className="h-84" >
            {
              images.map((image: string, index) => (
                <CarouselItem className="pl-1 cursor-pointer md:basis-1/2 lg:basis-1/3 " onClick={() => setImageIndex(index)} key={index}>
                  <Image
                    src={image}
                    width={200}
                    height={200}
                    alt="main image"
                    className="objet-cover border border-secondary"

                  />
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="block md:hidden w-[200px]"
          orientation="horizontal"
        >

          <CarouselContent className=" h-84" >
            {
              images.map((image: string, index) => (
                <CarouselItem className="pl-1 cursor-pointer md:basis-1/2 lg:basis-1/3 " onClick={() => setImageIndex(index)} key={index}>
                  <Image
                    src={image}
                    width={200}
                    height={200}
                    alt="main image"
                    className="objet-cover border border-secondary"

                  />
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>

      </div>
    </div>
  )
}
