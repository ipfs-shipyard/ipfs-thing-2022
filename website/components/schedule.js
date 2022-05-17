import fs from 'fs'
import toml from 'toml'
import dayjs from 'dayjs'

import EventCard from './event.js'

export function Schedule({ events }) {
  const arr = Object.values(events)
  const days = genDates(10)
  const gridRows = "grid-cols-" + days.length
  return (
    <div className="mx-auto p-6 w-full overflow-x-scroll">
      <div className="w-100%">
        <h1 className="my-10 text-4xl font-bold">Schedule</h1>
        <div className={`schedule-days mx-auto w-full grid grid-cols-${days.length} gap-4 my-5`}>
          {days.map((d, i) => (
            <div className="w-full text-center p-3 bg-gray-200 rounded-md text-xl flex flex-stretch min-w-[200px]">
              <p className="flex-1 mx-2 text-left">{d.format('ddd')}</p>
              <p className="flex-1 mx-2 text-right">{d.format('MMM DD')}</p>
            </div>
          ))}
          {arr.map((e, i) => (
            <EventCard event={e} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function loadEvents() {
  const eventFilePath = '../events.toml'
  const eventFile = fs.readFileSync(eventFilePath)
  var parsedEvents = {}

  try {
    parsedEvents = toml.parse(eventFile)
  } catch (e) {
    console.error("Parsing error on line " + e.line + ", column " + e.column +": " + e.message)
    throw e
  }

  return parsedEvents
}


function genDates(num) {
  const days = []
  const d = dayjs()
  for (var i = 0; i < num; i++) {
    days.push(d.add(i, 'day'))
  }
  return days
}

export default Schedule
