import '@/styles/globals.css'
import Layout from '../../components/Layouts'
import "../styles/slick-theme.css"
import "../styles/slick.css"

export default function App({ Component, pageProps }) {
return <Layout>
  <Component {...pageProps} />
</Layout>
}
