import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'

export function Layout({ children, config }) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
        <Head>
          <title>{config.devent.name}</title>
        </Head>

        <Header config={config} />

        <div className="flex-none items-center min-h-full w-full">
          <main className="content">
              {children}
          </main>
        </div>

        <Footer config={config} />
      </div>
    </>
  )
}

export function Section({ title, className, children }) {
  className = className || ""
  return (
    <div className={`w-full py-20 min-h-[10vh] ${className}`} id={ slugify(title) }>
      <div className="container max-w-8xl mx-auto pb-10">
        <h1 className="text-4xl font-bold">
          {title}
        </h1>
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default Layout
