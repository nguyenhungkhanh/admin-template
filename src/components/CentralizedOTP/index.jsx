import { useEffect } from 'react'
import axios from 'axios'

let x = 0

function CentralizedOTP() {
  useEffect(() => {
    function resInterceptor(response: any) {
      console.log('resInterceptor', response)

      return response
    }

    async function errInterceptor(error: any) {
      console.log('errInterceptor', error)

      const originalRequest = error.config

      if (error) {
        if (x === 0) {
          x = 1

          return new Promise((resolve, reject) => {
            console.log('originalRequest', originalRequest)

            axios
              .request({
                ...originalRequest,
                headers: {
                  Accept: 'application/json, text/plain, */*',
                  'Content-Type': 'application/json;charset=UTF-8',
                },
              })
              .then((response) => {
                resolve(true)
                console.log('axios response', response)
                // setModalCentralized(null)
                // resolve(response)
              })
              .catch((error) => {
                console.error('1111111111', error)
                reject(false)
              })
              .finally(() => {
                x = 0
              })
          })
        } else {
          return error?.response
        }

        // if (x === 0) {
        //   x = 1

        // }
      }
    }

    axios.interceptors.response.use(resInterceptor, errInterceptor)
  }, [])

  return <div></div>
}

export default CentralizedOTP
