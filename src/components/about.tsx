import { paragraphs } from "@/lib/constants"
import { Header } from "./Header"
import Link from "next/link"
import { ArrowUpRight, GithubIcon, Linkedin, Mail } from "lucide-react"
export const contacts = [
  {
    icon: <Mail className="size-6" />,
    address: "gmail.com",
    name: "bilal.habib.allah.pro@gmail.com",
  },
  {
    icon: <Linkedin className="size-6" />,
    address: "Linkedin.com/profile/bilal habib allah",
    name: "bilal habib allah",
  },
  {
    icon: <GithubIcon className="size-6" />,
    address: "https://github.com/bilalnessMaster",
    name: "bilalnessMaster",
  },

]
export const About = () => {
  return (
    <section className="w-full space-y-6">
      <Header href={"/logos/profile.svg"} section={"about me"} />
      <Text />
    </section>
  )
}



const Text = () => {
  return (
    <div className="font- space-y-4 text-secondary font-sans text-lg">
      {
        paragraphs.map((para: string, index: number) => (
          <p
            key={index}
          >
            {para}
          </p>
        ))
      }
    </div>
  )
}


export const Contact = () => {


  return (
    <div className="flex  items-start mt-4">
      <div className="flex items-center gap-x-5 ">
        <h1 className="font-bricolage font-medium text-base  text-primary">Contact</h1>
        <span className="w-16 h-0.5 inline-flex bg-primary"></span>
      </div>
      <div className="space-y-4 pl-5">
        {
          contacts.map((contact) => (
            <Link className="font-bricolage flex items-center gap-x-2 text-secondary group text-base underline underline-offset-4 duration-500 transition-all hover:text-warning" key={contact.name} href={contact.address}>
              {contact.icon}
              <span className="">{contact.name}</span>
              <ArrowUpRight className="size-5 group-hover:rotate-45 transiton0all duration-100" />

            </Link>
          ))
        }
      </div>
    </div>
  )
}
