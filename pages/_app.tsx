import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Dashboard from '../components/admin/dashboard'


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Dashboard /> */}
      <Component {...pageProps} />
    </div>
  )
}
