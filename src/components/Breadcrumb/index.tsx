import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './index.module.scss'

export default function Breadcrumb({ breadcrumbItems, children }: any) {
  const location = useLocation()

  useEffect(() => {
    console.log(location)
  }, [location])

  return (
    <div className={styles.wrapper}>
      <nav>
        <ol>
          {breadcrumbItems?.map((breadcrumb: any, index: number) => {
            return (
              <li key={index}>
                {breadcrumb.path ? (
                  <Link to={breadcrumb.path}>{breadcrumb.title}</Link>
                ) : (
                  <span>{breadcrumb.title}</span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      {children}
    </div>
  )
}
