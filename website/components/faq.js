
import { Section } from './layout.js'
import { Accordion } from 'flowbite-react'

export default function FAQ() {
  return (
<>

    <Section title="About">
        <div className="container max-w-8xl mx-auto">
            <p>
                FIL Austin is a week-long gathering of the Filecoin community with many independent events.
                There will be talks, workshops, panels, networking, and more –
                all dedicated to expanding the Filecoin network and growing the Web3 ecosystem.
            </p>
            <p>
                Join us IRL and in the Metaverse!
            </p>
        </div>
    </Section>

    <Section title="FAQ">
      <div className="container max-w-8xl mx-auto">
        <Accordion>
          <Accordion.Panel open={true}>
            <Accordion.Title arrowIcon={undefined}>
              What is FIL Austin?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                FIL Austin is an epic decentralized event organized by the community, for the community.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel open={true}>
            <Accordion.Title arrowIcon={undefined}>
              So, a decentralized event is a set of events?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                That's correct! Instead of organizing a single event, FIL Austin follows a decentralied event format,
                which enables lots of groups to organize their own events surrounding FIL Austin.
              </p>
              <p>
                We were inspired by <a href="https://devconnect.org">DevConnect</a>.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel open={true}>
            <Accordion.Title arrowIcon={undefined}>
              How do I contact the organizers?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400" id="contact">
                You can reach out to us at _____@fil.org.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </Section>
</>
  )
}
