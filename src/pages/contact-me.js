import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import Head from 'next/head'

export default function ArticlesIndex() {
  return (
    <>
      <Head>
        <title>Contact Me - Samuel Brooksworth</title>
        <meta
          name="description"
          content="Get in touch with me to discuss your project."
        />
      </Head>
      <SimpleLayout
        title="Get in touch"
        intro="Get in touch with me if you have a project you would like to discuss."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex flex-col max-w-3xl space-y-16">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-100"
                >
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md shadow-sm border-zinc-500 focus:border-zinc-300 focus:ring-zinc-500 dark:bg-zinc-800/40 dark:text-zinc-100 sm:text-sm"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-100"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md shadow-sm border-zinc-500 focus:border-zinc-300 focus:ring-zinc-500 dark:bg-zinc-800/40 dark:text-zinc-100 sm:text-sm"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-100"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md shadow-sm border-zinc-500 focus:border-zinc-300 focus:ring-zinc-500 dark:bg-zinc-800/40 dark:text-zinc-100 sm:text-sm"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md shadow-sm border-zinc-500 focus:border-zinc-300 focus:ring-zinc-500 dark:bg-zinc-800/40 dark:text-zinc-100 sm:text-sm"
                  defaultValue={''}
                />
              </div>
              <div className="flex justify-end mt-6">
                <Button
                  href={'/thank-you'}
                  className="inline-flex justify-center px-6 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
