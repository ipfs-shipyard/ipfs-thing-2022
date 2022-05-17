import fs from 'fs'
import toml from 'toml'

const cache = {}

export async function loadEvents() {
  if (!cache.events) {
    const events = {}
    const fp = '../events/'
    const dir = fs.readdirSync(fp)
    dir.map((f) => {
      if (f[0] == '_') return // skip _

      const e = f.replace('.toml', '')
      events[e] = parseTomlFile(fp + f)
    })
    cache.events = events
  }
  return cache.events
}

export async function loadConfig() {
  if (!cache.config) {
    cache.config = parseTomlFile('../devent.toml')
  }
  return cache.config
}

function parseTomlFile(fp) {
  const f = fs.readFileSync(fp)
  return parseToml(f)
}

function parseToml(s) {
  try {
    return toml.parse(s)
  } catch (e) {
    console.error("Parsing error on line " + e.line + ", column " + e.column +": " + e.message)
    throw e
  }
}
