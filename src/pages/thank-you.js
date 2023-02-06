import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You Reached Out - Samuel Brooksworth</title>
        <meta name="description" content="Thanks for contacting me." />
      </Head>
      <SimpleLayout
        title="Thanks for reaching out."
        intro="I’ll  get back to you as soon as I can."
      />
    </>
  )
}
