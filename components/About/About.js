import React from 'react'

const About = () => {
  return (
    <div className="mt-12 py-6 max-w-3xl mx-auto px-4 md:px-0">
      <p className="text-3xl font-semibold">#About</p>
      <div className="mt-4 text-sm md:text-base font-thin text-justify border border-dashed rounded-md p-2 md:p-3">
        <p>
          Hello, My name is{' '}
          <span className="font-semibold text-tertiary">
            Yues Tadrik Hafiyan
          </span>
          , and you can called me{' '}
          <span className="font-semibold text-primary">Yues</span>. Have been
          pasionated to develop software products especially front-end side
          since 5 years ago.
        </p>
        <br />
        <p>
          Currently, I concern to build develop Web 3.0 within{' '}
          <span className="font-semibold text-white">
            Near blockchain environment.
          </span>
          {` `}
          Also integrating with any L0 and L1 smart contract such as {` `}
          <span className="font-semibold text-white">Cosmos</span>
          {` `}and{` `}
          <span className="font-semibold text-white">Substrate-based.</span>
          {` `}
          Used to build product using any React JS-based framework and Vue JS,
          and experienced on React Native mobile-based app for 3 years. Mostly,
          experienced in <span className="text-yellow-300">
            Javascript
          </span> and <span className="text-blue-300">Typescript</span>{' '}
          language.
        </p>
        <br />
        <p>
          In order to build fullstack environment, I usually implement{' '}
          <span className="font-semibold text-secondary">Node JS</span>
          {` `}
          for back-end side engine. Also experienced deploying and staging on
          many server platform, such as{' '}
          <span className="font-semibold text-primary">docker</span> or{' '}
          <span className="font-semibold text-quaternary">cloud services</span>
          {` `} like AWS and GCP.
        </p>
        <br />
        <p>
          Had built a pre-learned model using CNN method for Image
          Classification using{' '}
          <span className="text-orange-500">Python, Keras and Tensorflow</span>
          {` `}
          that published on IJCIC international journal.
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col p-3 rounded-md text-white bg-grayry2 hover:bg-opacity-30 transition-all cursor-pointer">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full mr-3">
              <img
                src="/paras.jpg"
                className="object-contain w-full h-full rounded-full"
                alt="paras logo"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Front Engineer</h1>
              <h3 className="text-base">Paras Digital</h3>
              <p className="text-xs">Jan 2022 - present</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-3 rounded-md text-white bg-grayry2 hover:bg-opacity-30 transition-all cursor-pointer">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full mr-3">
              <img
                src="/mig.png"
                className="object-contain w-full h-full rounded-full"
                alt="paras logo"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-secondary">
                Software Engineer
              </h1>
              <h3 className="text-base">Mitramas Infosys Global</h3>
              <p className="text-xs">Oct 2020 - Jan 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
