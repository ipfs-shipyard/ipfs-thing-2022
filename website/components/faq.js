import { Accordion } from 'flowbite-react'
import { Section } from './layout.js'
import Markdown from './markdown'

export default function FAQ({ config }) {
  const faq = (config.faq) || {}

  return (
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
  )
}
