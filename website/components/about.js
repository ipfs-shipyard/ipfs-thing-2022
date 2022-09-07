import { Accordion } from 'flowbite-react'

import { Section } from './layout.js'
import Markdown from './markdown'

export default function About({ config }) {
  const faq = (config.faq) || {}


  const teams = (config.devent.teams) || []
  var teamsEl = (
    <Section title="Participating Teams">
      <div className="container max-w-8xl mx-auto flex flex-wrap gap-20 justify-center items-center align-middle">
        {teams.map((s, i) => (
          <a href={s[1]} target="_blank" alt={s[0]} className="basis-52 h-[100px] inline-block align-middle" key={i}>
            <img src={s[2]} className="object-contain object-center h-full"/>
          </a>
        ))}
      </div>
    </Section>
  )
  if (!(teams.length > 0)) teamsEl = ""

  return (
<>

    {/* <Section title="About">
        <div className="container max-w-8xl mx-auto">
            <Markdown>{ config.devent.about }</Markdown>
        </div>
    </Section> */}

    {teamsEl}

    <Section title="FAQ">
      <div className="container max-w-8xl mx-auto">
        <Accordion>
        {Object.keys(faq).map((q, i) => (
          <Accordion.Panel open={true} key={i}>
            <Accordion.Title arrowIcon={undefined}>
              <Markdown children={q} />
            </Accordion.Title>
            <Accordion.Content>
              <div className="mb-2 text-gray-500 dark:text-gray-400">
                <Markdown children={faq[q]} />
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
        </Accordion>
      </div>
    </Section>
</>
  )
}
