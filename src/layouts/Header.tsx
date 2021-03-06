import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

interface TypeProps {
  isCollapsed: boolean
  setIsCollapsed: Function
}

export default function Header({ isCollapsed, setIsCollapsed }: TypeProps) {
  return (
    <header>
      <div className="header-left flex">
        <div className="pointer collapsed-icon" onClick={() => setIsCollapsed(!isCollapsed)}>
          {
            isCollapsed
            ? <MenuFoldOutlined />
            : <MenuUnfoldOutlined />
          }
        </div>
        <b className="title-logo">NHK's Blog</b>
      </div>
      <div className="header-right">
      </div>
    </header>
  )
}