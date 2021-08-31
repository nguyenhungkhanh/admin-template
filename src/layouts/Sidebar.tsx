import React from 'react'
import { HomeOutlined, ReadOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

export default function Sidebar() {
  const history = useHistory()

  return (
    <aside className="sidebar">
      <div className="menu">
        <div className="pointer menu-item is-active">
          <HomeOutlined /> <span className="title">Trang chủ</span>
        </div>
        <div className="pointer menu-item" onClick={() => history.push("/posts")}>
          <ReadOutlined /> <span className="title">Bài viết</span>
        </div>
      </div>
    </aside>
  )
}