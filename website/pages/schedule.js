// index.js
import Head from 'next/head'
import Footer from '../components/footer.js'

import {Section} from '../components/layout.js'
import {ScheduleTable} from "../components/scheduletable.js"
import {AddEventModal} from "../components/event.js"
import {loadEvents, loadConfig} from "../lib/data.js"

export default function Schedule({ events, config }) {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>{config.devent.name} | Schedule</title>
      </Head>

      <Section title={`${config.devent.name} - Schedule`}>
        <div className="flex-none items-center min-h-full w-full">
          <main className="content">
            <div className="m-20">
              <ScheduleTable events={events} config={config} />
            </div>
          </main>
        </div>
      </Section>


      <AddEventModal config={config} />
      <Footer config={config} />
    </div>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  return {
    props: {
      events: await loadEvents(),
      config: await loadConfig(),
    }
  }
}

