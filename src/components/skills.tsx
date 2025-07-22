'use client'
import { skills } from "@/lib/constants"
import { Header } from "./Header"
import * as motion from "motion/react-client"
export const Skills = () => {
  return (
    <section className="w-full space-y-6">
      <Header href={"/logos/skills.svg"} section={"Skills"} />
      <MySkills />
    </section>
  )
}

const item = {
  hidden: {
    opacity: 0,
    blur: "4px",
    y: 20
  },
  show: (index: number) => ({
    opacity: 1,
    blur: "0px",
    y: 0,
    transition: {
      duration: 0.2,
      delay: 0.05 * index,
    }
  })


}


const MySkills = () => {
  return (
    <motion.ul className="flex flex-wrap gap-y-2 gap-x-2 text-secondary font-sans text-lg">
      {
        skills.map((skill: string, index: number) => (
          <Skill key={index} skill={skill} index={index} />
        ))
      }
    </motion.ul>
  )
}

const Skill = ({ skill, index }: { skill: string, index: number }) => {
  return (
    <motion.li
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
      custom={index}
      className="cursor-pointer hover:border-warning transiton-color duration-200 text-primary border border-secondary rounded-full items-center  text-sm font-mono  inline-flex px-4 py-1 capitalize font-medium bg-white/10 backdrop-blur-sm">
      {skill}
    </motion.li>
  )
}
