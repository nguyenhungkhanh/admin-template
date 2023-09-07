import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BREADCRUMB_BY_PATH } from '../../routes'

import styles from './index.module.scss'

export default function PageHeader() {
  const location = useLocation()

  const path: any = location.pathname

  const breadcrumbs: any = BREADCRUMB_BY_PATH[path.toString()]

  return (
    <div className={styles.wrapper}>
      <nav>
        <ol>
          {breadcrumbs?.map((breadcrumb: any, index: number) => {
            const isLatest = index === breadcrumbs.length - 1

            return (
              <li key={breadcrumb.path}>
                {isLatest ? (
                  <span>{breadcrumb.title}</span>
                ) : (
                  <Link to={breadcrumb.path}>{breadcrumb.title}</Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
