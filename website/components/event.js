
export function EventCard({ event }) {
  return (
    <div className="eventcard p-1 shadow-xl rounded-2xl bg-gray-400
      hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <a className="block p-6 bg-white sm:p-8 rounded-xl" href="">
        <div className="mt-16 sm:pr-8">
          <h5 className="text-xl font-bold text-gray-900">
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
                <span className="event-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default EventCard
