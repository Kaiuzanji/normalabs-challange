import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DarkModeProvider from '../contexts/darkTheme/Provider'
import { SessionProvider } from 'next-auth/react'
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </SessionProvider>
  )
}

export default MyApp
