import React from 'react'

const Nav = () => {
  return (
    <>
      <div className="block sticky w-full top-0 right-0 left-0 z-10 px-4 md:px-10 py-3 bg-grayry2">
        <div className="w-full flex items-center justify-between">
          <div>
            <h1 className="font-bold text-2xl">Yuesth</h1>
          </div>
          <div className="flex items-center text-lg font-normal">
            <div className="mx-2 md:mx-4 text-gray-400 hover:text-gray-200 transition-all cursor-pointer">
              <h2>About</h2>
            </div>
            <div className="mx-2 md:mx-4 text-gray-400 hover:text-gray-200 transition-all cursor-pointer">
              <h2>Projects</h2>
            </div>
            <div className="mx-2 md:mx-4 text-gray-400 hover:text-gray-200 transition-all cursor-pointer">
              <h2>Blog</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
