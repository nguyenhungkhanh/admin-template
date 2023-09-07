import React from 'react'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import styles from './index.module.scss'

function groupByType(data) {
  let _objectData = {}

  for (const item of data) {
    _objectData[item.type] = (_objectData[item.type] || []).concat(item)
  }

  return Object.values(_objectData)
}

export default function ListBoThu({ onSelect, data }) {
  if (!data) {
    return <>...Loading</>
  }

  return (
    <div className={styles.wrapper}>
      <table>
        <thead>
          <th>STT</th>
          <th>Số nét</th>
          <th>Bộ thủ</th>
          <th>Hán việt</th>
          <th>Pinyin</th>
          <th>Ý nghĩa</th>
          <th>Hành động</th>
        </thead>
        <tbody>
          {groupByType(data).map((items) =>
            items
              .sort((a, b) => a.stt - b.stt)
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.stt}</td>
                  {index === 0 ? (
                    <td rowSpan={items.length} className="text-center">
                      {item.type}
                    </td>
                  ) : null}
                  <td>{item.word}</td>
                  <td>{item.name}</td>
                  <td>{item.pinyin}</td>
                  <td>{item.meaning}</td>
                  <td className="text-center" onClick={() => onSelect(item)}>
                    <Button size="small">
                      Sửa <EditOutlined />
                    </Button>
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  )
}
