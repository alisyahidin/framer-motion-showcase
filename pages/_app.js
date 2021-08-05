import 'styles/globals.css'
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }) {
  return pageProps?.statusCode !== 404
    ? <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    : <Component {...pageProps} />
}
export default MyApp
