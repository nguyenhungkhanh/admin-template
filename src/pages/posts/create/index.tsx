import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import Card from '../../../components/Card'
import { useForm } from 'antd/lib/form/Form'
import { Button, Form, Input } from 'antd'

export default function CreatePost() {
  const [form] = useForm()

  function onFinish(values: any) {
    console.log(values)
  }

  return (
    <div>
      <Card>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item name="title" label="Tiêu đề">
            <Input />
          </Form.Item>
          <Form.Item name="tags" label="Tags">
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Nội dung">
            <MDEditor height={500} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  )
}
