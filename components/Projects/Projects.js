import React from 'react'
import { ExternalLink } from '../Icons'

const Projects = () => {
  return (
    <div className="max-w-3xl mt-12 mx-auto px-4 py-6 md:px-0">
      <p className="text-3xl font-semibold">#Projects</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col bg-grayry2 w-full rounded-md cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <div className="max-h-52 rounded-md cursor-pointer mb-2">
            <img
              src="/paras-landing.png"
              className="object-contain rounded-md h-full w-full"
              alt=""
            />
          </div>
          <div className="p-3">
            <div className="flex items-center">
              <p className="font-semibold mr-2">Paras Website</p>
              <div className="rounded p-1 bg-gray-900 cursor-pointer hover:bg-opacity-30 transition-all">
                <a href="https://paras.id/" target={`_blank`}>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <p className="font-thin text-sm">
              All-in-one create, trade, and collect NFT Card marketplace. Build on top of Near blockchain ecosystem
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-grayry2 w-full rounded-md cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <div className="max-h-52 rounded-md cursor-pointer mb-2">
            <img
              src="/aql.png"
              className="object-contain rounded-md h-full w-full"
              alt=""
            />
          </div>
          <div className="p-3">
            <div className="flex items-center">
              <p className="font-semibold mr-2">AQL Peduli</p>
              <div className="rounded p-1 bg-gray-900 cursor-pointer hover:bg-opacity-30 transition-all">
                <a href="https://aqlpeduli.or.id/" target={`_blank`}>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <p className="font-thin text-sm">
              The Website contains information about charity, news, khazanah
              include how we donate for the victim who fall on disaster. Using
              ReactJS, Bootstrap, Strapi as CMS, and PostgreSQL as database.{' '}
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-grayry2 w-full rounded-md cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <div className="max-h-52 rounded-md cursor-pointer mb-2">
            <img
              src="/migsys.png"
              className="object-contain rounded-md h-full w-full"
              alt=""
            />
          </div>
          <div className="p-3">
            <div className="flex items-center">
              <p className="font-semibold mr-2">Migsys</p>
              <div className="rounded p-1 bg-gray-900 cursor-pointer hover:bg-opacity-30 transition-all">
                <a href="https://migsys.herokuapp.com" target={`_blank`}>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <p className="font-thin text-sm">
              MIGsys Web App integrate many division and handle of a hundread
              assets, inventories, customer ticketing, and the other modules,
              which is still in the developing phase. Using Next JS as
              front-side framework, Tailwind CSS, and Ant Design as UI
              component. Backend build based on PHP Laravel and MySQL database.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-grayry2 w-full rounded-md cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <div className="max-h-52 rounded-md cursor-pointer mb-2">
            <img
              src="/amb.png"
              className="object-contain rounded-md h-full w-full"
              alt=""
            />
          </div>
          <div className="p-3">
            <div className="flex items-center">
              <p className="font-semibold mr-2">Alifindo Mitra Bersama</p>
              <div className="rounded p-1 bg-gray-900 cursor-pointer hover:bg-opacity-30 transition-all">
                <a href="https://alifindo.co.id" target={`_blank`}>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <p className="font-thin text-sm">
              Applications based on web that include profil company, list of
              products, and CMS admin panel. Builded top of NextJS SSR with its
              serverless function so that provide backend API, and used
              TailwindCSS for build any UI components.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
