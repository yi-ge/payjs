const crypto = require('crypto')
const axios = require('axios')

/* eslint-disable camelcase */

const key = ''

const toQueryString = (obj) => Object.keys(obj)
  .filter(key => key !== 'sign' && obj[key] !== undefined && obj[key] !== '')
  .sort()
  .map(key => {
    if (/^http(s)?:\/\//.test(obj[key])) { return key + '=' + encodeURI(obj[key]) } else { return key + '=' + obj[key] }
  })
  .join('&')

const md5 = (str, encoding = 'utf8') => crypto.createHash('md5').update(str, encoding).digest('hex')

let params = {
  'body': '合同:小黄人测试',
  'attach': '合同:小黄人测试',
  'total_fee': 1,
  'out_trade_no': 'FF6F8FB0114D4FAFA3B562BD89B897E8',
  'openid': 'o7LFAwaFdmKH217MddWDDyYuv7Ms',
  'mchid': '1519390541'
}

params = toQueryString(params)
console.log(params)
let url = 'https://payjs.cn/api/jsapi?' + params
params += '&key=' + key

const sign = md5(params).toUpperCase()
url += '&sign=' + sign
console.log(url)
axios.get(encodeURI(url)).then(r => console.log(r.data)).catch(err => console.log(err))
