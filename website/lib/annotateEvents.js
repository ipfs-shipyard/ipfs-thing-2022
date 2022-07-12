import dayjs from 'dayjs'

import dayOffset from './dayOffset'

/**
 * Make a url and human friendly string to use for event hashes.
 * @param {string} eventName
 * @returns
 */
function readableHash(eventName) {
  return eventName.replace(/þ/g, 'th').replace(/[^a-zA-Z0-9þ]/g, ' ').replace(/\s+/g, '-')
}

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
    event.startDay = dayOffset(startDate, event.date)
    event.isWithinRange = eventWithinRange(event)
    event.hash = `#${readableHash(event.name)}`

    // To ensure our event modal hashes are unique we keep a Set of all the hashes
    if (uniqEventHashes.has(event.hash)) {
        // Filename's are always unique
        event.hash = `#${readableHash(event.fileName)}`
    }

    uniqEventHashes.add(event.hash)

    return event
  })
}
