import { cn } from "@/lib/utils";
import Image from 'next/image'
interface Props {
  href: string;
  className?: string;
  section: string;
}

export const Header = ({ section, href, className }: Props) => {


  return (
    <section className={cn("capitalize gap-x-2 font-bricolage font-semibold text-base text-primary w-full flex items-center  ", className)}>
      <Image src={href} width={40} height={40} alt={href} />
      <div className="w-fit">
        <h1>{section}</h1>
      </div>
    </section>
  )
}

