import React from 'react'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-grayry1 text-gray-400 w-full">
      {children}
    </div>
  )
}

export default Layout
