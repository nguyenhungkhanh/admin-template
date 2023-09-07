import React, { useEffect } from 'react'
import Card from '../../components/Card'
import http from '../../utils/http'

export default function Home() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await http.get(
          'https://external-sit.vpbanks.com.vn/invest/api/v2/getCompanyProfit?symbol=PVS&fromYear=2023&toYear=2023&fromQuarter=3&toQuarter=2'
        )
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  async function handleClick() {
    try {
      const response = await http.get(
        'https://external-sit.vpbanks.com.vn/invest/api/v2/getCompanyProfit11?symbol=PVS&fromYear=2023&toYear=2023&fromQuarter=3&toQuarter=2'
      )
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  async function handleClick2() {
    try {
      const response = await http.get(
        'https://external-sit.vpbanks.com.vn/invest/api/v2/getCompanyProfit?symbol=PVS&fromYear=2023&toYear=2023&fromQuarter=3&toQuarter=2'
      )
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Card>
        <h1>Home</h1>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClick2}>Click me 1</button>
      </Card>
    </div>
  )
}
