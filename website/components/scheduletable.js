import dayjs from 'dayjs'

import { EventCard, BlankCard } from './event.js'

export function ScheduleTable({ events, numDays }) {
  numDays = Number(numDays)
  const arr = Object.values(events)
  const days = genDates(numDays)
  return (
    <>
      <div className={`schedule-days mx-auto no-flex grid grid-cols-${numDays} gap-4 w-[${numDays * 250}px]`}>
        {days.map((d, i) => (
          <div className="flex text-center p-3 bg-gray-200 text-xl shrink-0">
            <p className="flex-1 mx-2 text-left">{d.format('ddd')}</p>
            <p className="flex-1 mx-2 text-right">{d.format('MMM DD')}</p>
          </div>
        ))}
        {arr.map((e, i) => (
          <div className={`col-span-${e.days} shrink-0 h-full`}>
            <EventCard event={e} key={i} />
          </div>
        ))}
        <BlankCard />
        <BlankCard />
        <BlankCard />
      </div>

      <div className="invisible">
        <div className="grid grid-cols-1 w-[250px]"><div className="col-span-1"></div></div>
        <div className="grid grid-cols-2 w-[500px]"><div className="col-span-2"></div></div>
        <div className="grid grid-cols-3 w-[750px]"><div className="col-span-3"></div></div>
        <div className="grid grid-cols-4 w-[1000px]"><div className="col-span-4"></div></div>
        <div className="grid grid-cols-5 w-[1250px]"><div className="col-span-5"></div></div>
        <div className="grid grid-cols-6 w-[1500px]"><div className="col-span-6"></div></div>
        <div className="grid grid-cols-7 w-[1750px]"><div className="col-span-7"></div></div>
        <div className="grid grid-cols-8 w-[2000px]"><div className="col-span-8"></div></div>
        <div className="grid grid-cols-9 w-[2250px]"><div className="col-span-9"></div></div>
        <div className="grid grid-cols-10 w-[2500px]"><div className="col-span-10"></div></div>
      </div>
    </>
  )
}


function genDates(num) {
  const days = []
  const d = dayjs()
  for (var i = 0; i < num; i++) {
    days.push(d.add(i, 'day'))
  }
  return days
}

export default ScheduleTable
