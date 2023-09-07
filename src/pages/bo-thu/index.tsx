import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

import Card from '../../components/Card'
import ModalWord from './components/ModalWord'
import ListBoThu from './components/ListBoThu/index'

import BoThuService from '../../services/bo_thu.service'

export default function BoThuPage() {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [data, setData] = useState<any>(null)
  const [word, setSelectWord] = useState<any>({})

  async function onSubmit(id: any, values: any, onSuccess: Function) {
    try {
      let response: any

      if (id) {
        response = await BoThuService.updateById(id, values)
      } else {
        response = await BoThuService.create(values)
      }

      if (response.status === 200) {
        if (id) {
          setData(
            (data || []).map((item: any) => {
              return item._id === id ? { ...item, ...values } : item
            })
          )
        } else {
          setData((data || []).concat(response.data.data))
        }
        onSuccess()
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchData() {
    let _data = []

    try {
      const response = await BoThuService.getAll()
      if (response.status === 200) {
        _data = response?.data?.data || []
      }
    } catch (error) {
      console.log(error)
    }

    setData(_data)
  }

  function onSelect(_word: any) {
    setSelectWord({ ..._word })
    setVisibleModal(true)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Card>
        <div className="flex justify-end mb-4 top-[117px]">
          <Button type="primary" onClick={() => setVisibleModal(true)}>
            Thêm mới
          </Button>
        </div>
        <ListBoThu onSelect={onSelect} data={data} />
      </Card>
      {visibleModal && (
        <ModalWord
          visible={visibleModal}
          onCancel={() => {
            setVisibleModal(false)
            setSelectWord({})
          }}
          onSubmit={onSubmit}
          word={word}
        />
      )}
    </div>
  )
}
