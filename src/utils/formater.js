import dayjs from 'dayjs'
import Big from 'big.js'

// 格式化时间
export function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(format)
}

// 格式化金额
export function formatAmount(amount, decimal = 2) {
  if (isNaN(amount)) {
    return '--'
  }
  return Big(amount)
    .toFixed(decimal, 0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

// enum 转 select options
export function enum2Options(enumObj) {
  return Object.entries(enumObj).map(([value, label]) => ({
    value: isNumber(value) ? Number(value) : value,
    label
  }))
}
