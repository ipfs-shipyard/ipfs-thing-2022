
import { Section } from './layout.js'
import { Accordion } from 'flowbite-react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export default function About({ config }) {
  const faq = (config.faq) || {}


  const sponsors = (config.devent.sponsors) || []
  var sponsorsEl = (
    <Section title="Sponsors">
      <div className="container max-w-8xl mx-auto flex flex-wrap gap-20 justify-center items-center align-middle">
        {sponsors.map((s) => (
          <a href={s[1]} target="_blank" alt={s[0]} className="basis-52 h-[100px] inline-block align-middle">
            <img src={s[2]} className="object-contain object-center h-full"/>
          </a>
        ))}
      </div>
    </Section>
  )
  if (!(sponsors.length > 0)) sponsorsEl = ""

  return (
<>

    <Section title="About">
        <div className="container max-w-8xl mx-auto">
            <ReactMarkdown remarkPlugins={[gfm]}>{ config.devent.about }</ReactMarkdown>
        </div>
    </Section>

    {sponsorsEl}

    <Section title="FAQ">
      <div className="container max-w-8xl mx-auto">
        <Accordion>
        {Object.keys(faq).map((q) => (
          <Accordion.Panel open={true}>
            <Accordion.Title arrowIcon={undefined}>
              <ReactMarkdown remarkPlugins={[gfm]} children={q} />
            </Accordion.Title>
            <Accordion.Content>
              <div className="mb-2 text-gray-500 dark:text-gray-400">
                <ReactMarkdown remarkPlugins={[gfm]} children={faq[q]} />
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
