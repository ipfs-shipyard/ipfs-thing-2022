import '../styles/global.css'
import Layout from '../components/layout'

export default function DEvent({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout> )

  return getLayout(<Component {...pageProps} />)
}
