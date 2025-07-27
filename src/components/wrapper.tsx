'use client'
interface Props {
  children: React.ReactNode;
}
import { ReactLenis, useLenis } from 'lenis/react'





export const Wrapper = ({ children }: Props) => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    //    console.log(lenis)
  })

  return (
    <>
      <ReactLenis root />
      <div className='px-3'>
        <div className=" h-[45vh]  w-full">

        </div>

        <div className="w-full max-w-2xl mx-auto  space-y-16">
          {children}
        </div>
      </div>
    </>
  )
}
