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

  <div className="w-full sm:p-8 lg:p-5 lg:min-h-[80vh]">
    <div className="mx-auto min-h-full lg:ml-0 flex flex-col gap-y-3 justify-center">

      <div className='lg:mt-10'>
        <div className='w-72 h-72 mx-auto mt-4 lg:w-xs lg:h-xs lg:float-left lg:mr-3'>
          <img src={config.devent.logo} />
        </div>
        <div className='text-center basis-full lg:basis-2/3 lg:text-left lg:pt-8'>
          <div className="mt-4 font-bold text-white pt-8 pb-2 text-6xl">
            {config.devent.name}
          </div>
          <div className="text-md italic text-white lg:mt-2 my-3 prose leading-7">
            {config.devent.tagline}
          </div>
        </div>
      </div>

      <div className='basis-1/3 pl-3 mx-2 mt-5 mb-14 lg:my-5'>
        <div className="text-2xl text-white font-bold pb-5">
          {dateRangeStr(config.devent.dateStart, config.devent.dateEnd)}{config.devent.location && ` • ${config.devent.location}`}
        </div>

        <div className="text-lg text-white prose leading-7">
          <ReactMarkdown remarkPlugins={[gfm]}>{config.devent.description}</ReactMarkdown>
        </div>

        {config.devent.rsvpLink && 
        <div className="space-x-5 mb-10">
          <a
            href={config.devent.rsvpLink}
            type="button"
            className="inline-block px-5 py-3 mt-8 text-lg font-medium text-white bg-orange-500 hover:bg-orange-400 px-8 py-3 rounded-lg rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
