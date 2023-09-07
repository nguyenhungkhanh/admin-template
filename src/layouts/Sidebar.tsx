import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { ROUTER_BY_PATH, ROUTER_NAME } from '../routes'

const menus = [
  ROUTER_BY_PATH[ROUTER_NAME.HOME],
  {
    ...ROUTER_BY_PATH[ROUTER_NAME.POSTS],
    menuPaths: [ROUTER_NAME.POSTS_CREATE, ROUTER_NAME.POSTS_EDIT],
  },
  ROUTER_BY_PATH[ROUTER_NAME.BO_THU],
]

export default function Sidebar() {
  const history = useHistory()
  const location = useLocation()

  return (
    <aside className="sidebar">
      <div className="menu">
        {menus
          .filter((menu: any) => menu.menuIcon)
          .map((menu: any) => {
            const isActive = [menu.path, ...(menu.menuPaths || [])].includes(
              location.pathname
            )

            return (
              <div
                key={menu.path}
                className={`cursor-pointer menu-item ${
                  isActive ? 'is-active' : ''
                }`}
                onClick={() => history.push(menu.path)}
              >
                <menu.menuIcon /> <span className="title">{menu.title}</span>
              </div>
            )
          })}
      </div>
    </aside>
  )
}
