/**
 * time ago
 * @param {*} time
 */
export function timeAgo(time) {
  const currentTime = new Date().getTime()
  const between = currentTime - time
  const days = Math.floor(between / (24 * 3600 * 1000))
  if (days === 0) {
    const leave1 = between % (24 * 3600 * 1000)
    const hours = Math.floor(leave1 / (3600 * 1000))
    if (hours === 0) {
      const leave2 = leave1 % (3600 * 1000)
      const minutes = Math.floor(leave2 / (60 * 1000))
      if (minutes === 0) {
        const leave3 = leave2 % (60 * 1000)
        const seconds = Math.round(leave3 / 1000)
        return seconds + ' 秒前'
      }
      return minutes + ' 分钟前'
    }
    return hours + ' 小时前'
  }
  if (days < 0) return '刚刚'
  if (days < 1) {
    return days + ' 天前'
  } else {
    return formatDate(time, 'yyyy/MM/dd hh:mm')
  }
}

function formatDate(date, fmt) {
  date = new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

// From <https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php>
export function isUrl(str) {
  let regexp =
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::(?:(?!:)\S)*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/
  return regexp.test(str)
}

export function isEmail(email) {
  const regexp = /^[A-Za-z1-9]+([-_.][A-Za-z1-9]+)*@([A-Za-z1-9]+[-.])+[A-Za-z]{2,8}$/
  return regexp.test(email)
}

export function isEmpty(content) {
  return content === null || content === undefined || content === ''
}

export function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object
}
