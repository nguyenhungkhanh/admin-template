import React from 'react'

import styles from './index.module.scss'

export default function Card({ children }: JSX.ElementChildrenAttribute) {
  return <div className={styles.wrapper}>{children}</div>
}
