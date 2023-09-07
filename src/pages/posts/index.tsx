import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Table } from 'antd'

import Card from '../../components/Card'
import { ROUTER_NAME } from '../../routes'

export default function Posts() {
  const history = useHistory()

  return (
    <div>
      <Card>
        <div className="flex justify-end mb-4 top-[117px]">
          <Button
            type="primary"
            onClick={() => history.push(ROUTER_NAME.POSTS_CREATE)}
          >
            Thêm mới
          </Button>
        </div>
        <Table />
      </Card>
    </div>
  )
}
