import { Navbar, Button, DarkThemeToggle } from 'flowbite-react'

export default function Header() {
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
          <Navbar.Brand>
            <img
              src="https://cryptologos.cc/logos/filecoin-fil-logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="FIL Austin"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              FIL Austin
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <DarkThemeToggle />
            <a href="/schedule">
              <Button>
                Schedule
              </Button>
            </a>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#about">
              About
            </Navbar.Link>
            <Navbar.Link href="#faq">
              FAQ
            </Navbar.Link>
            <Navbar.Link href="#contact">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}
