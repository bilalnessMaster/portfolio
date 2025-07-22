import Image from "next/image"




export const Profile = () => {
  return (
    <section className="w-full flex gap-x-4 items-center">
      <div className="size-16 relative rounded-full bg-primary ">
       
        <Image src={'/logos/me.jpg'} alt="profile picture" width={400} height={400} className="object-cover  grayscale size-16 rounded-full overflow-hidden " />
        <span className="rounded-full inline-flex size-2 bg-green-400 absolute bottom-0 right-3 z-30 "></span>
      </div>
      <div className="  -space-y-1">
        <h2 className="font-bricolage text-lg text-warning font-semibold capitalize ">bilal habib allah</h2>
        <h3 className="font-sans  text-secondary font-medium text-base ">Web developer </h3>
      </div>
    </section>
  )
}
