// hover:ml-1 hover:-mr-1 hover:mt-1 hover:-mb-1
export function EventCard({ event }) {
  return (
    <div className={`eventcard col-span-${event.days} p-1 shadow-md rounded-lg min-w-[200px]
      bg-gray-400 hover:bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500
      whitespace-normal
      `}>
      <a className="block p-2 bg-white sm:p-3 h-full rounded-md" href="">
        <div className="">
          <h5 className="text-lg font-bold text-gray-900">
            {event.name}
          </h5>

          <div className="mt-2 text-sm text-gray-500">
            <div className="event-times">
              {event.times}
            </div>
            <div className="event-org">
              {event.org}
            </div>
            <div className="event-attendees">
              {event.attendees} {event.difficulty}
            </div>
            <div className="event-tags">
              {event.tags.map((tag, i) => (
                <span className="event-tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default EventCard
