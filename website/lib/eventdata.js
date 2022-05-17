import fs from 'fs'
import toml from 'toml'

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
