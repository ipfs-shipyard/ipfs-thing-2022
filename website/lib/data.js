import fs from 'fs'
import toml from 'toml'

const cache = {}

export async function loadEvents() {
  if (!cache.events) {
    const eventFilePath = '../events.toml'
    const eventFile = fs.readFileSync(eventFilePath)
    cache.events = tomlParse(eventFile)
  }
  return cache.events
}

export async function loadConfig() {
  if (!cache.config) {
    const fp = '../devent.toml'
    const file = fs.readFileSync(fp)
    cache.config = tomlParse(file)
  }
  return cache.config
}

function tomlParse(s) {
  try {
    return toml.parse(s)
  } catch (e) {
    console.error("Parsing error on line " + e.line + ", column " + e.column +": " + e.message)
    throw e
  }
}
