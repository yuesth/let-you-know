import React from 'react'

const BrandGithub = ({ size = 23, color = '#a9a9b2' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-github"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  )
}

const BrandTwitter = ({ size = 23, color = '#a9a9b2' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-twitter"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
    </svg>
  )
}

const BrandInstagram = ({ size = 23, color = '#a9a9b2' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-instagram"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x={4} y={4} width={16} height={16} rx={4} />
      <circle cx={12} cy={12} r={3} />
      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </svg>
  )
}

const BrandTelegram = ({ size = 23, color = '#a9a9b2' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-telegram"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
    </svg>
  )
}
const BrandLinkedin = ({ size = 23, color = '#a9a9b2' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-linkedin"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x={4} y={4} width={16} height={16} rx={2} />
      <line x1={8} y1={11} x2={8} y2={16} />
      <line x1={8} y1={8} x2={8} y2="8.01" />
      <line x1={12} y1={16} x2={12} y2={11} />
      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </svg>
  )
}

const ExternalLink = ({ size = 23, color = '#a9a9b2' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-external-link"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
      <line x1={10} y1={14} x2={20} y2={4} />
      <polyline points="15 4 20 4 20 9" />
    </svg>
  )
}

export {
  BrandGithub,
  BrandTwitter,
  BrandInstagram,
  BrandTelegram,
  BrandLinkedin,
  ExternalLink
}
