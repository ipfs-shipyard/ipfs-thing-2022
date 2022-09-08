import { Navbar, DarkThemeToggle } from 'flowbite-react'
import Link from 'next/link'
import Button from './button'

export default function Header({config}) {
  //<DarkThemeToggle />
  return (
    <div className="header justify-self-start sticky top-0 z-40 w-full backdrop-blur
      flex-none lg:z-50 lg:border-b
      lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/80
      supports-backdrop-blur:bg-white/80 dark:bg-transparent">
      <div className="container h-16 max-w-8xl mx-auto">
        <Navbar className="bg-transparent dark:bg-transparent"
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand href='/'>
            <img
              src={config.devent.logo}
              className="mr-3 h-6 sm:h-9"
              alt={config.devent.name}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              {config.devent.name}
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button href='/resources' target="_blank">Resources</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/schedule">
              Schedule
            </Navbar.Link>
            <Navbar.Link href="/#faq">
              FAQ
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}
