import '../styles/global.css'
import Layout from '../components/layout'

export default function DEvent({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
