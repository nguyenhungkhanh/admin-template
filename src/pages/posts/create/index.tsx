import React from 'react'
import Card from '../../../components/Card'
import Breadcrumb from '../../../components/Breadcrumb'

const breadcrumbItems = [
  { path: '/posts', title: 'Bài viết' },
  { title: 'Thêm bài viết' }
]

export default function CreatePost() {  
  return (
    <div>
      <div className="page-header">
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
      </div>
      <Card>
      </Card>
    </div>
  )
}