// events.json.js
import {loadEvents} from "../lib/data.js"

export default function EventsJSON({ events, config, res}) {

  return null
}

export const getServerSideProps = async ({ res }) => {
    const events = await loadEvents()
  if (res) {
    res.write(JSON.stringify(events, null, 2))
    res.end()
  }
  return {
    props: {}
  }
}

