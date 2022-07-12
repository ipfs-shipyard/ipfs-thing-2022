import dayjs from 'dayjs'

import dayOffset from './dayOffset'

export default function annotateEvents(events, config) {
  const startDate = dayjs(config.devent.dateStart)
  const endDate = dayjs(config.devent.dateEnd)
  const numDays = Number(dayOffset(startDate, endDate) + 1)
  const eventWithinRange = (e) => (e.startDay >= 0 && e.startDay < numDays)
  const uniqEventHashes = new Set()

  return Object.keys(events).map((fileName, i) => {
    const event = {
        ...events[fileName],
        fileName,
    }
    // event.fileName = fileName
    event.startDay = dayOffset(startDate, event.date)
    event.isWithinRange = eventWithinRange(event)
    event.hash = `#${encodeURIComponent(event.name)}`

    // To ensure our event modal hashes are unique we keep a Set of all the hashes
    if (uniqEventHashes.has(event.hash)) {
        // Filename's are always unique
        event.hash = `#${encodeURIComponent(event.fileName)}`
    }

    uniqEventHashes.add(event.hash)

    return event
  })
}
