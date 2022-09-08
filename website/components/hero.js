import dayjs from 'dayjs'
import Markdown from './markdown'

export default function Hero({ config }) {
  return (
    <div className="overflow-hidden lg:flex bg-left bg-no-repeat bg-cover bg-color object-fit" >
      <div className="relative overflow-hidden text-gray-300 lg:flex w-full">
        <div className="container lg:flex max-w-8xl mx-auto">
          <div className="absolute inset-0 overflow-hidden">
            <img className="absolute bottom-0 left-1/2 transform -translate-x-1/4" src={config.devent.bgimg} style={{ minWidth: "1600px" }} />
          </div>
          <div className="relative w-full sm:p-8 lg:pt-20 lg:pb-40">
            <div className="relative z-1 mx-auto min-h-full lg:ml-0 flex flex-col gap-y-3">
              <div className='flex ml-6'>
                <div className='flex-none w-24 h-24 mt-4'>
                  <img src={config.devent.logo} width="1600" />
                </div>
                <div className='flex-grow text-left ml-6'>
                  <div className="mt-4 font-bold text-black mb-2 text-6xl">
                    {config.devent.name}
                  </div>
                  <div className="text-lg text-black lg:mt-2 font-bold">
                    {config.devent.tagline}
                  </div>
                </div>
              </div>

              <div className='basis-1/3 pl-3 mx-2 my-5'>
                <div className="text-2xl text-black">
                  {dateRangeStr(config.devent.dateStart, config.devent.dateEnd)}{config.devent.location && ` • ${config.devent.location}`}
                </div>

                <div className="text-md text-black prose leading-7">
                  <Markdown >{config.devent.description}</Markdown>
                </div>

                {config.devent.rsvpLink &&
                  <div className="space-x-5 mb-10">
                    <a
                      href={config.devent.rsvpLink}
                      type="button"
                      className="inline-block px-5 py-3 mt-8 text-lg font-medium text-white bg-blue-500 hover:bg-blue-400 px-8 py-3 rounded-lg rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    >
                      RSVP
                    </a>
                  </div>}
                {config.devent.recapLink &&
                  <div className="space-x-5 mb-10">
                    <a
                      href={config.devent.recapLink}
                      type="button"
                      className="inline-block px-5 py-3 mt-8 text-lg font-medium text-white bg-primary hover:bg-blue-400 px-8 py-3 rounded-lg rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    >
                      Recap and Videos
                    </a>
                  </div>}
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function dateRangeStr(startDate, endDate) {
  const start = dayjs(startDate)
  const end = dayjs(endDate)
  if (dayjs(start).year() != dayjs(end).year()) {
    return start.format('YYYY MMMM D - ') + end.format('YYYY MMMM D')
  } else if (dayjs(start).month() != dayjs(end).month()) {
    return start.format('YYYY MMMM D - ') + end.format('MMMM D')
  } else {
    return start.format('YYYY MMMM D - ') + end.format('D')
  }
}
