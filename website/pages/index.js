// index.js
import Head from 'next/head'
import Link from "next/link";
import Hero from "../components/hero.js"
import {Schedule, loadEvents} from "../components/schedule.js"


export default function Index({ events }) {
  return (
    <div>
      <Hero />
      <Schedule events={events} />
    </div>
  )
}


// This also gets called at build time
export async function getStaticProps() {
  var events = await loadEvents()
  return { props: { events: events } }
}
