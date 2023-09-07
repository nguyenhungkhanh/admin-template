import axios, { AxiosHeaders } from 'axios'

const version = (function () {
  const ua = navigator.userAgent
  let tem
  let M =
    ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
    []
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || []
    return 'IE ' + (tem[1] || '')
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/)
    if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera')
  }
  M = M[2] ? [M[2]] : [navigator.appName, navigator.appVersion, '-?']
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1])
  return M.join(' ')
})()

const devicetype = (function () {
  const ua = navigator.userAgent
  let tem
  let M =
    ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
    []
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || []
    return 'IE ' + (tem[1] || '')
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/)
    if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera')
  }
  M = M[1] ? [M[1]] : [navigator.appName, navigator.appVersion, '-?']
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1])
  return M.join(' ')
})()

const instanceRequest = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60000,
})

instanceRequest.defaults.headers.common['Accept'] =
  'application/json,text/plain,*/*'
instanceRequest.defaults.headers.common['Content-Type'] = 'application/json'
instanceRequest.defaults.headers.common['x-device'] = version
instanceRequest.defaults.headers.common['x-devicetype'] = devicetype
instanceRequest.defaults.headers.common['x-via'] = 'Z'
instanceRequest.defaults.headers.common['x-lang'] = 'vi'

export default instanceRequest
