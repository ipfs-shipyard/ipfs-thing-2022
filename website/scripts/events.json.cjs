const fs = require('fs')
const toml = require('toml');

function parseToml(s) {
  try {
    return toml.parse(s)
  } catch (e) {
    console.error("Parsing error on line " + e.line + ", column " + e.column +": " + e.message)
    throw e
  }
}

function parseTomlFile(fp) {
  const f = fs.readFileSync(fp)
  return parseToml(f)
}

(async () => {
  const events = {}
  const fp = '../events/'
  const dir = fs.readdirSync(fp)
  dir.map((f) => {
    if (f[0] == '_') return // skip _

    const e = f.replace('.toml', '')
    events[e] = parseTomlFile(fp + f)
  })

  console.log(JSON.stringify(events, null, 2))
})()
