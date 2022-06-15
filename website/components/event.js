import Link from "next/link";
import { useState, useEffect } from 'react'
import { Modal, Button } from 'flowbite-react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import dayjs from 'dayjs'

export function Card({ children, color, onClick }) {

  var borderColor = 'bg-gray-400'
  var bgColor = 'bg-white'

  if (color) {
    borderColor = 'bg-' + color + '-400'
    bgColor = 'bg-' + color + '-100'
  }

  return (
    <div className={`eventcard p-0.5 shadow-md h-full whitespace-normal
      ${borderColor} hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-green-500
      `} onClick={onClick}>
      <div className={`block p-3 sm:px-3 sm:py-2 h-full
        ${bgColor} hover:bg-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-cyan-500/10 hover:to-green-500/10
        `}>
        <div className="text-xs text-gray-600">
          { children }
        </div>
      </div>
    </div>
  )
}

// hover:ml-1 hover:-mr-1 hover:mt-1 hover:-mb-1
export function EventCard({ event }) {
  return (
    <EventModal event={event}>
      <div className={event.tags?.some((el) => el.toLowerCase() === "wip") && 'opacity-50'}>
        {event.timeslots
          ? <TrackCard event={event} />
          : <BlockCard event={event} />
        }
      </div>
    </EventModal>
  )
}

function BlockCard({ event }) {
  return (
    <Card color={event.color}>
      <h5 className="text-lg font-bold text-gray-900">
        {event.name}
      </h5>
      <div>
        {event.times}
      </div>
      <div>
        👤 {event.attendees} - {event.difficulty}
      </div>
      <div className="text-gray-900 text-sm mt-3">
        {event.dri}
      </div>

      <div className="event-tags">
        {event.tags.map((tag, i) => (
          <Tag>{tag}</Tag>
        ))}
      </div>
    </Card>
  )
}

function TrackCard({ event }) {
  return (
    <Card color={event.color}>
      <h5 className="text-lg font-bold text-gray-900">
        {event.name}
      </h5>
      <div>
        {event.times}
      </div>
      <div>
        👤 {event.attendees} - {event.difficulty}
      </div>
      <div className="text-gray-900 text-sm mt-3">
        {event.dri}
      </div>

      <div className="event-tags">
        {event.tags.map((tag, i) => (
          <Tag>{tag}</Tag>
        ))}
      </div>
    </Card>
  )
}

export function BlankCard() {
  return (
    <Card onClick={() => window && window.showAddEventModal()}>
      <div className="place-content-center w-full m-0 py-5 text-center text-gray-300 hover:text-gray-500">
        <div className="text-6xl">
          +
        </div>
        <div className="text-xl font-bold">
          Add your event
        </div>
      </div>
    </Card>
  )
}

export function EventModal({ children, event }) {
  const [openModal, setOpenModal] = useState(false);
  const open = () => setOpenModal(true)
  const close = () => setOpenModal(false)
  const isOpen = () => openModal === true

  bindKey('Escape', close)

  return (
    <>
      <div className="h-full w-full" onClick={open}>
        {children}
      </div>
      <Modal show={isOpen()} onClose={close} size="3xl">
        <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 p-1">
          <div className="bg-white dark:bg-gray-400">
            <Modal.Header>
              {event.name}
            </Modal.Header>
            <Modal.Body className="space-y-6 overflow-y-scroll max-h-[70vh]">
              <ul className="list-disc ml-4">
                <li><b>Date</b>: {dateStr(event.date, event.days)}</li>
                <li><b>Times</b>: {event.times}</li>
                <li><b>Track Chair(s)</b>: {event.dri}</li>
                <li><b>Attendees</b>: {event.attendees} ({event.difficulty})</li>
              </ul>
              <div className="event-tags">
                {event.tags.map((tag, i) => (
                  <Tag>{tag}</Tag>
                ))}
              </div>
              <p className="text-base leading-relaxed prose">
                <ReactMarkdown remarkPlugins={[gfm]}>{event.description}</ReactMarkdown>
              </p>
              {event.timeslots && <TimeslotTable timeslots={event.timeslots} />}
            </Modal.Body>
            <Modal.Footer>
              {event.website &&
                <Link href={event.website} prefetch={false} target="_blank">
                  <a target="_blank" rel="noreferrer">
                    <Button>
                      Website
                    </Button>
                  </a>
                </Link>
              }
              <Button
                color="alternative"
                onClick={close}
              >
                Close
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  )
}

function TimeslotTable({ timeslots }) {
  return (
    <div>
      <h4 className="py-3 text-sm text-gray-900">Schedule</h4>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th  scope="col" className="px-6 py-3">time</th>
            <th scope="col" className="px-6 py-3">speaker</th>
            <th scope="col" className="px-6 py-3">info</th>
          </tr>
        </thead>
        <tbody>
          {timeslots.map((timeslot, i) => (
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 align-top dark:text-white whitespace-nowrap">{timeslot.startTime}</th>
              <td className="px-6 py-4 align-top">{timeslot.speakers && timeslot.speakers.join(", ")}</td>
              <td className="px-6 py-4">
                <span className="font-bold">{timeslot.title}</span>
                <br/>
                <p>{timeslot.description}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function AddEventModal({ config }) {
  const [openModal, setOpenModal] = useState(false);
  const open = () => setOpenModal(true)
  const close = () => setOpenModal(false)
  const isOpen = () => openModal === true

  // add opener to window.
  if (typeof window !== 'undefined') {
    window.showAddEventModal = open
  }

  bindKey('Escape', close)

  return (
    <>
      <Modal show={isOpen()} onClose={close}>
        <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 p-1">
          <div className="bg-white dark:bg-gray-400">
            <Modal.Header>
              Add your event
            </Modal.Header>
            <Modal.Body className="space-y-6">
              The event listings in this website are coordinated through GitHub.

              Steps to list your event:
              <ol className="list-decimal ml-4 mt-3">
                <li><b>Step 1</b>: Read & file a pull-request in this repo: <br />
                  <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                     href={config.devent.repo} target="_blank">{config.devent.repo}</a></li>
                <li><b>Step 2</b>: Address any comments until your PR is merged.</li>
                <li><b>Step 3</b>: Profit! ⭐️💙</li>
              </ol>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={close}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  )
}

export function Tag({ children }) {
  return (
    <button className="px-1.5 py-0.5 mr-1 my-1 border border-gray-400 text-gray-400 rounded-full text-xs cursor-default">
      {children}
    </button>
  )
}

function bindKey(bindKey, handler) {
  const kHandler = ({key}) => {
    if (key === bindKey) handler()
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', kHandler);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', kHandler);
      }
    }
  }, []);
}

function dateStr(date, days) {
  const d1 = dayjs(date)
  const d2 = dayjs(date).add(days, 'day')
  return d1.format("MMM DD") +' - '+ d2.format("MMM DD")
}

export default EventCard
