// index.js
import Head from 'next/head'
import Footer from '../components/footer.js'

import {ScheduleTable} from "../components/scheduletable.js"
import {loadEvents} from "../lib/eventdata.js"

export default function Schedule({ events }) {
  return (
    <div className="m-20">
      <ScheduleTable events={events} numDays='10' />
    </div>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  var events = await loadEvents()
  return { props: { events: events } }
}

Schedule.getLayout = function getLayout(page) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>FIL Austin | Schedule</title>
      </Head>

      <div className="flex-none items-center min-h-full w-full">
        <main className="content">
            {page}
        </main>
      </div>

      <Footer />
    </div>
  )
}