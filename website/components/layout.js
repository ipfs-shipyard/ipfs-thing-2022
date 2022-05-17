import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
        <Head>
          <title>dEvent</title>
        </Head>

        <Header />

        <div className="flex-none items-center min-h-full w-full">
          <main className="content">
              {children}
          </main>
        </div>

        <Footer />
      </div>
    </>
  )
}
