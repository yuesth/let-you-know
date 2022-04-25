import React from 'react'

const About = () => {
  return (
    <div className="mt-12 max-w-3xl mx-auto px-4 md:px-0">
      <p className="text-3xl font-semibold">#About</p>
      <div className="mt-4 text-sm md:text-base font-thin text-justify border border-dashed rounded-md p-2 md:p-3">
        <p>
          Hello, My name is{' '}
          <span className="font-semibold text-tertiary">
            Yues Tadrik Hafiyan
          </span>
          , and you can called me{' '}
          <span className="font-semibold text-primary">Yues</span>. I have been
          pasionated to develop software products for 4 years.
        </p>
        <br />
        <p>
          Currently, I concern to build develop Web 3.0 within{' '}
          <span className="font-semibold text-white">
            Near blockchain environment
          </span>
          , integrate front-end side using <span className='font-semibold text-quaternary'>React JS framework</span>. Strong
          experienced in javascript and typescript.
        </p>
        <br />
        <p>
          In order to build fullstack environment, I usually implement <span className='font-semibold text-secondary'>Node JS</span>{` `}
          for back-end side engine. Also experienced deploying and staging on
          many server platform, such as docker or cloud services.
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col p-3 rounded-md text-white bg-grayry2 hover:bg-opacity-40 transition-all cursor-pointer">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full mr-3">
              <img
                src="/paras.jpg"
                className="object-contain w-full h-full rounded-full"
                alt="paras logo"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Paras Digital</h3>
              <p className='text-xs'>Jan 2022 - present</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-3 rounded-md text-white bg-grayry2 hover:bg-opacity-40 transition-all cursor-pointer">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full mr-3">
              <img
                src="/mig.png"
                className="object-contain w-full h-full rounded-full"
                alt="paras logo"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Mitramas Infosys Global</h3>
              <p className='text-xs'>Oct 2020 - Jan 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
