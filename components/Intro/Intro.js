import React from 'react'
import TypeAnimation from 'react-type-animation'
import {
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  BrandTelegram,
  BrandTwitter,
} from '../Icons'
import Link from 'next/link'

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
          <Link href="https://github.com/yuesth">
            <a
              href="https://github.com/yuesth"
              target="_blank"
              rel="noreferrer"
            >
              <BrandGithub />
            </a>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="https://x.com/yuesth">
            <a href="https://x.com/yuesth" target="_blank" rel="noreferrer">
              <BrandTwitter />
            </a>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="https://instagram.com/yuesth">
            <a
              href="https://instagram.com/yuesth"
              target="_blank"
              rel="noreferrer"
            >
              <BrandInstagram />
            </a>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="https://t.me/tehayu">
            <a href="https://t.me/tehayu" target="_blank" rel="noreferrer">
              <BrandTelegram />
            </a>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="https://www.linkedin.com/in/yues-tadrik-hafiyan-0323a9135/">
            <a
              href="https://www.linkedin.com/in/yues-tadrik-hafiyan-0323a9135/"
              target="_blank"
              rel="noreferrer"
            >
              <BrandLinkedin />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Intro
