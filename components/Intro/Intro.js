import React from 'react'
import TypeAnimation from 'react-type-animation'
import {
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  BrandTelegram,
  BrandTwitter,
} from '../Icons'

const Intro = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div className="flex rounded-full w-24 h-24">
        <img
          src="/avatar.png"
          className="object-contain w-full h-full rounded-full"
          alt=""
        />
      </div>
      <div>
        <TypeAnimation
          cursor={true}
          sequence={['Software Engineer', 3000, 'Deliver software elegantly']}
          wrapper="h2"
          className={`text-lg mt-5`}
        />
      </div>
      <div className="mt-2 flex items-center justify-center space-x-2">
        <div className="cursor-pointer">
          <BrandGithub />
        </div>
        <div className="cursor-pointer">
          <BrandTwitter />
        </div>
        <div className="cursor-pointer">
          <BrandInstagram />
        </div>
        <div className="cursor-pointer">
          <BrandTelegram />
        </div>
        <div className="cursor-pointer">
          <BrandLinkedin />
        </div>
      </div>
      {/* <h1 className="font-bold text-4xl">My Journey</h1> */}
    </div>
  )
}

export default Intro
