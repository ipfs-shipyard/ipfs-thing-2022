import { Accordion } from 'flowbite-react'
import Markdown from './markdown'


function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function FAQ({ config }) {
  const faq = (config.faq) || {}
  const title = "Frequently Asked Questions"

  return (
    <div className={`w-full px-20 pb-40 pt-56 min-h-[10vh] bg-gradient-to-br from-blue-600 to-teal-500`} id={ slugify(title) }>
      <div className='bg-white rounded-lg lg:p-16'>
        <div className="container max-w-8xl mx-auto pb-16">
          <h1 className="text-3xl text-center font-bold">{title}</h1>
        </div>
        <div className="w-full">
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
        </div>
      </div>
    </div>
  )
}
