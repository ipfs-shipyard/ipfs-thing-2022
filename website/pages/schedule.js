// index.js
import Head from 'next/head'
import ScrollContainer from 'react-indiana-drag-scroll'

import Header from '../components/header'
import Footer from '../components/footer.js'
import {Section, BaseScript} from '../components/layout.js'
import ScheduleSection from "../components/scheduleSection.js"
import {AddEventModal} from "../components/event.js"
import {loadEvents, loadConfig} from "../lib/data.js"

export default function Schedule({ events, config }) {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header config={config} />

      <Head>
        <title>{config.devent.name} | Schedule</title>
        <BaseScript />
      </Head>

      <ScheduleSection config={config} events={events} />

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

