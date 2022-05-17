// index.js
import Head from 'next/head'
import Link from "next/link";
import Hero from "../components/hero.js"
import {Layout, Section} from "../components/layout.js"
import {ScheduleTable} from "../components/scheduletable.js"
import ScrollContainer from 'react-indiana-drag-scroll'
import FAQ from "../components/faq.js"
import {loadEvents, loadConfig} from "../lib/data.js"

export default function Index({ events, config }) {
  return (
    <Layout config={config}>
      <Hero config={config} />

      <Section title="Schedule">
        <div className="-mt-10 mr-20 text-gray-400 text-sm float-right">
          Scroll right for more ->
        </div>

          <div className="overflow-x-scroll p-6 w-full min-h-[40vh]">
            <ScrollContainer className="scroll-container">
              <ScheduleTable events={events} config={config} numDays='10' />
            </ScrollContainer>

          <div className="mt-10 mr-14 text-gray-400 text-sm float-right">
            Click and drag to scroll ^
          </div>
        </div>

      </Section>

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

