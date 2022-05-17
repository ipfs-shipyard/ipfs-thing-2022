import '../styles/global.css'

export default function DEvent({ Component, pageProps }) {

  const defaultLayout = (page) => page

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || defaultLayout
  return getLayout(<Component {...pageProps} />)
}
