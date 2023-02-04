import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Samuel Brooksworth</title>
        <meta
          name="description"
          content="Thanks for subscribing to me."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing."
        intro="I’ll send you an email any time I release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
