import { useEffect } from 'react'
import anime from 'animejs'
import dayjs from 'dayjs'

export default function Hero({config}) {
  useEffect(() => {
    const logoAnimation = anime({
        targets: '.logo-stagger img',
        scale: [
          {value: 1, duration: 2000},
          {value: .1, easing: 'easeOutSine', duration: 500},
          {value: 1, easing: 'easeInOutQuad', duration: 1200},
          {value: 1, duration: 4000},
        ],
        delay: anime.stagger(200, {grid: [6, 4], from: 'center'}),
        loop: true,
    })
  }, []);

  const logoArr = Array(24).fill(config.devent.logo)

  return (

<div className="overflow-hidden lg:flex
  bg-center bg-no-repeat bg-cover bg-color"
  style={{backgroundImage: `url(${config.devent.bgimg})`}} >
<div className="relative overflow-hidden text-gray-300 lg:flex w-full
  bg-black/75
  ">
<div className="container lg:flex max-w-8xl mx-auto">

  <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-5 lg:text-left lg:min-h-[80vh]
    ">
    <div className="max-w-xl mx-auto min-h-full lg:ml-0 flex flex-col gap-y-3 justify-center
      ">

      <div className="mt-2 text-6xl font-bold text-white sm:text-8xl">
        {config.devent.name}
      </div>

      <div className="text-4xl text-white font-medium">
         {dateRangeStr(config.devent.dateStart, config.devent.dateEnd)}
      </div>


      <div className="hidden text-xl text-white lg:mt-2 lg:block my-5">
         {config.devent.tagline}
      </div>

      <div className="space-x-5">
        <a
          href=""
          className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Host an event
        </a>
        <a
          href=""
          className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-blue-600"
        >
          Schedule
        </a>
      </div>

    </div>
  </div>

  <div className="container self-center flex place-content-center">

    <div className="grid grid-cols-6 gap-4 place-content-center logo-stagger">
      {logoArr.map(s => (
        <img src={s} className="w-[64px] m-0" />
      ))}
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
