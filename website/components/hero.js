import dayjs from 'dayjs'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export default function Hero({config}) {
  return (
<div className="overflow-hidden lg:flex
  bg-center bg-no-repeat bg-cover bg-color"
  style={{backgroundImage: `url(${config.devent.bgimg})`}} >
<div className="relative overflow-hidden text-gray-300 lg:flex w-full">
<div className="container lg:flex max-w-8xl mx-auto">

  <div className="w-full sm:p-16 lg:p-5 lg:min-h-[80vh]">
    <div className="mx-auto min-h-full lg:ml-0 flex flex-col gap-y-3 justify-center">

      <div className="flex lg:w-1/2">
        <div className='basis-full w-full lg:basis-1/3 lg:mr-3 my-3'>
          <img src={config.devent.logo} />
        </div>
        <div className='basis-full lg:basis-2/3'>
          <div className="mt-4 font-bold text-white py-4 text-6xl sm:text-5xl">
            {config.devent.name}
          </div>
          <div className="text-xl text-white font-medium">
            {dateRangeStr(config.devent.dateStart, config.devent.dateEnd)}
          </div>
        </div>
      </div>

      <div className='basis-1/3 pl-3'>
        <div className="text-md italic text-white lg:mt-2 my-5 prose leading-7">
          {config.devent.tagline}
        </div>
        <div className="text-lg text-white lg:mt-2 my-5 prose leading-7">
          <ReactMarkdown remarkPlugins={[gfm]}>{config.devent.description}</ReactMarkdown>
        </div>

        {config.devent.rsvpLink && 
        <div className="space-x-5 mb-10">
          <a
            href={config.devent.rsvpLink}
            className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-400"
          >
            RSVP
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
