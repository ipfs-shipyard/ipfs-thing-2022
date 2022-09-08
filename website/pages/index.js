import {loadEvents, loadConfig} from "../lib/data.js"
import FAQ from "../components/faq.js"
import Countdown from "../components/countdown"
import Hero from "../components/hero.js"
import Layout from "../components/layout.js"
import Teams from "../components/teams.js"
import ScheduleSection from '../components/scheduleSection.js';

export default function Index({ events, config }) {
  return (
    <Layout config={config}>
      <Hero config={config} />
        <div className="container max-w-8xl mx-auto -mt-3 mb-3">
          <span className="font-medium">Tickets:</span> IPFS Camp events are independent and do their own ticketing.
          Check their websites for information on ticketing.
        </div>
      <ScheduleSection config={config} events={events} />
      <Teams config={config} />
      <Countdown targetDate="2022/10/20 01:00" />
      <FAQ config={config} />
    </Layout>
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

