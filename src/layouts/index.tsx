import React, { useState } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

import './index.scss'

export default function Layout({ children }: JSX.ElementChildrenAttribute) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={"app" + (isCollapsed ? " is-collapsed" : "")}>
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="main-wrapper">
        <Sidebar />
        <div className="page-content">
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}