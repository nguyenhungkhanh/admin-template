import React, { useEffect } from 'react'
import { Button, Form, Input, Modal } from 'antd'
import { useForm } from 'antd/lib/form/Form'

export default function ModalWord({ word, visible, onCancel, onSubmit }: any) {
  const isEdit = word?._id

  const [form] = useForm()

  function onFinish(values: any) {
    onSubmit(
      isEdit ? word._id : null,
      {
        ...values,
        type: Number(values.type),
        stt: Number(values.stt),
      },
      () => {
        if (isEdit) {
          onCancel()
        } else {
          form.resetFields()
          form.setFieldsValue({
            type: values.type,
            stt: Number(values.stt) + 1,
          })
        }
      }
    )
  }

  return (
    <Modal
      title={isEdit ? 'Sửa bộ thủ' : 'Thêm bộ thủ'}
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      {
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
          initialValues={word}
        >
          <Form.Item name="stt" label="STT">
            <Input />
          </Form.Item>
          <Form.Item name="word" label="Bộ thủ">
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Tên bộ">
            <Input />
          </Form.Item>
          <Form.Item name="pinyin" label="Pinyin">
            <Input />
          </Form.Item>
          <Form.Item name="meaning" label="Ý nghĩa">
            <Input />
          </Form.Item>
          <Form.Item name="type" label="Số nét">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Xác nhận
          </Button>
        </Form>
      }
    </Modal>
  )
}
