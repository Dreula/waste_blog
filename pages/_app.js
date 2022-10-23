import '../styles/globals.scss'
import React, {useEffect, useState} from 'react'
import { Layout } from '../components'
import { QueryClientProvider, QueryClient} from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>

  )
}

export default MyApp
