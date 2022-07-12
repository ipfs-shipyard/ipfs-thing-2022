import dayjs from 'dayjs'

export default function dayOffset(start, date) {
  return dayjs(date).diff(dayjs(start), 'days')
}
