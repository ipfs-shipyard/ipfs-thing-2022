import dayjs from 'dayjs'

export default function genDates(start, numDays) {
  const days = []
  const d = dayjs(start)
  for (var i = 0; i < numDays; i++) {
    days.push(d.add(i, 'day'))
  }
  return days
}
