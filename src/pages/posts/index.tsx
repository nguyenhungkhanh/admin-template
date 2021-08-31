import React from 'react'
import { Button, Table } from 'antd'
import Card from '../../components/Card'
import { useHistory } from 'react-router-dom'

export default function Posts() {
  const history = useHistory()
  
  return (
    <div>
      <div className="page-header">
        <div></div>
        <Button type="primary" onClick={() => history.push("/posts/create")}>Thêm mới</Button>
      </div>
      <Card>
        <h4>Danh sách bài viết</h4>
        <Table />
      </Card>
    </div>
  )
}