// @flow strict

import { personalData } from '@/utils/data/personal-data'
import Image from 'next/image'
import AnimationLottie from '../../helper/animation-lottie'
import lottieFile from '/public/lottie/js.json'

function AboutSection() {
  return (
    <div
      id="about"
      className="pb-16  lg:py-28 h-full relative"
    >
      <Image
        src="/grid.svg"
        alt="Hero"
        width={1572}
        height={1895}
        className="absolute rotate-180  object-cover inset-0 opacity-20 md:opacity-10 -z-10"
      />

      <Image
        src="/blur-23.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute lg:hidden bottom-0  -z-10"
      />

      <div className="hidden lg:flex flex-col items-center  absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who am I?
          </p>
          <p className="text-gray-200 leading-[1.3rem] md:leading-[2rem] text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
