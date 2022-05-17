
import ReactMarkdown from 'react-markdown'
import { Section } from './layout.js'
import { Accordion } from 'flowbite-react'

export default function FAQ({ config }) {
  const faq = (config.faq) || {}
  return (
<>

    <Section title="About">
        <div className="container max-w-8xl mx-auto">
            <ReactMarkdown>{ config.devent.about }</ReactMarkdown>
        </div>
    </Section>

    <Section title="FAQ">
      <div className="container max-w-8xl mx-auto">
        <Accordion>
        {Object.keys(faq).map((q) => (
          <Accordion.Panel open={true}>
            <Accordion.Title arrowIcon={undefined}>
              <ReactMarkdown children={q} />
            </Accordion.Title>
            <Accordion.Content>
              <div className="mb-2 text-gray-500 dark:text-gray-400">
                <ReactMarkdown children={faq[q]} />
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
