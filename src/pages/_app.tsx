import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/global.scss'

// This component wraps all pages
// if there is something to repeat in all pages, it stays here
// every time the screen changes, the _app.tsx is re-executed (http calls, states, all re-created)
/*
 if there's a external font to be loaded (and this should be done only once, so it can't be done by _app)
 in that case we create _document.tsx
*/
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>

  ) 
}

export default MyApp
