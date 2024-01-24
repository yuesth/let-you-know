import React from 'react'
import { ExternalLink } from '../Icons'
import {
  AMB_PROJECT,
  AQL_PROJECT,
  ARKANA_BRAND_PROJECT,
  ARKANA_MOBILE_PROJECT,
  ARKANA_PROJECT,
  MIGSYS_PROJECT,
  PARAS_MARKETPLACE_ASTAR_PROJECT,
  PARAS_PROJECT,
  PARAS_V1_PROJECT,
  PIPAPO_PROJECT,
  PIPAPO_TICKETING_PROJECT,
} from '../../constant/variable'

const projectData = [
  {
    name: 'Arkana GG Mobile App',
    img: ARKANA_MOBILE_PROJECT,
    link: 'https://play.google.com/store/apps/details?id=com.arkanamobileapp',
    link2: 'https://apps.apple.com/us/app/arkana-gg/id6474111194',
    description:
      '- Arkana mobile based app on Play Store and App Store that allows users to get membership, collect points, claim missions, and redeem for giveaway.\n - Used React Native for development framework and develop within face pace iteration which from initialize until publish spent around 1 month',
  },
  {
    name: 'Arkana GG Web App',
    img: ARKANA_PROJECT,
    link: 'https://arkana.gg',
    description:
      '- Platform that allow users to collect point, claim missions, get membership from various brands, and join the giveaway.\n - Provide business entity to engage their marketing startegy through partnership with Arkana\n - Developed using Next JS both CSR and SSR, Tailwind CSS, and integrated with some on-chain smart contract for send the actions using Near Meta Tx.',
  },
  {
    name: 'Arkana Brand Dashboard',
    img: ARKANA_BRAND_PROJECT,
    link: 'https://brand.arkana.gg',
    description:
      '- Dashboard for admin of brands that have partnership with Arkana, provide stat data in charts, and numeric tables, and admin also can managing their missions, raffles, and submissions.\n - Develop using Next JS rapidly, Recharts for built chart API, and styling using Tailwind CSS.',
  },
  {
    name: 'Paras Near Marketplace',
    img: PARAS_PROJECT,
    link: 'https://paras.id',
    description:
      '- NFT Marketplace including collecting, minting, offering, and listing.\n - Mostly had integrated with various Near NEP-101 smart contracts using RPC-based pattern.\n - Styling with Tailwind CSS and Next JS as all-in-one React framework both CSR and SSR, and also implemented RTL and Jest for unit testing.\n - Achieved almost 2 millions USD monthly averaging on Q1 2022.',
  },
  {
    name: 'Paras Astar Marketplace',
    img: PARAS_MARKETPLACE_ASTAR_PROJECT,
    link: 'https://astar.paras.id',
    description:
      '- NFT Marketplace on top of Astar (Substrate-based) Web3 on-chain.\n - Place of various Native Astar NFT collections that allow users to minting, listing, and trading.\n - Using Next JS, Tailwind CSS, and integration with various Substrate wallets. Call RPC based for on-chain transactions.',
  },
  {
    name: 'Pipapo Marketplace',
    img: PIPAPO_PROJECT,
    link: 'https://archway.pipapo.io',
    description:
      '- NFT Marketplace on top of on-chain Archway ecosystem that provides launches their collections, listing, and trading their NFT and get rewards from gas rebates.\n - This platform achieved 125K ARCH for first-place winner on Online Blockchain Hackathon provided by Archway Foundation.\n - Initilized from prototyping using Figma, built using Next JS 13, Tailwind CSS as styling tools, and integrated with CW-721R smart contract',
  },
  {
    name: 'Pipapo NFT Ticketing',
    img: PIPAPO_TICKETING_PROJECT,
    link: 'https://app.pipapo.io',
    description:
      '- Allow users to grab the ticket from any events as NFT, and get the utility such as after event rewards, cashback, or discounts.\n - Integrating with NEP-101 smart contract for on-chaining NFT Ticket, and implemented Proof of Attedance Protocol using scanning their owned QR NFT.\n - Built by Next JS and Tailwind CSS for front-end development.',
  },
  {
    name: 'AQL peduli',
    img: AQL_PROJECT,
    link: 'https://aqlpeduli.or.id/',
    description:
      'The SPA contains information about charity, news, khazanah include how we donate for the victim who fall on disaster. Using vanilla ReactJS, Bootstrap, Strapi as CMS, and PostgreSQL as database.\n - Deployed on cloud private server, and embedded PM 2 as CD platform.',
  },
  {
    name: 'Migsys',
    img: MIGSYS_PROJECT,
    link: 'https://migsys.herokuapp.com',
    description:
      'MIGsys Web App had integrated many company division and handle of a hundread assets, inventories, customer ticketing, and the other features. Using Next JS as front-side framework, Tailwind CSS, and Ant Design as UI component. Backend built based on PHP Laravel and MySQL database.\n - Deployed on cloud private server, and embedded PM 2 as CD platform.',
  },
  {
    name: 'Alifindo Mitra Bersama (AMB)',
    img: AMB_PROJECT,
    link: 'http://alifindo.co.id',
    description:
      'Profile company SPA website that include profil company, list of products, and CMS admin panel. Built on top of NextJS SSR with its serverless function so that provide backend API, and used TailwindCSS for build any UI components.',
  },
]

const Projects = () => {
  return (
    <div className="max-w-3xl mt-12 mx-auto px-4 py-6 md:px-0">
      <p className="text-3xl font-semibold">#Projects</p>
      <p className="text-lg text-white">
        Here is my numerous projects that I had initialized or obtained.{' '}
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectData.map((doc, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col bg-grayry2 w-full rounded-md cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              <div className="max-h-52 rounded-md cursor-pointer mb-2">
                <img
                  src={`https://paras-ipfs.paras.id/${doc.img}`}
                  className="object-contain rounded-md h-full w-full"
                  alt=""
                />
              </div>
              <div className="p-3">
                <div className="flex items-center">
                  <p className="font-semibold mr-2">{doc.name}</p>
                  <div className="rounded p-1 bg-gray-900 cursor-pointer hover:bg-opacity-30 transition-all">
                    <a href={doc.link} target={`_blank`}>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  {doc.name.includes('Mobile') && (
                    <div className="rounded p-1 bg-gray-900 cursor-pointer hover:bg-opacity-30 transition-all">
                      <a href={doc.link2} target={`_blank`}>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>
                <p className="font-thin text-sm whitespace-pre-wrap">
                  {doc.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
