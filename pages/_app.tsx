import type { AppProps } from 'next/app'

import globalStyles from "../assets/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
